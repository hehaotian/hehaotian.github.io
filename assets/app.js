// ---- tab routing: #home #notes #reads #plates #goods #steps #gigs (the old #travels link still works)
const TABS = ["home", "notes", "reads", "plates", "goods", "steps", "gigs"];
const frame = document.getElementById("steps-frame");
let currentTab = "";

function show(name) {
  name = name.split("/")[0];                                         // "#notes/delivery" is the Notes tab with a note open
  if (name === "travels") name = "steps";
  if (!TABS.includes(name)) name = "home";
  TABS.forEach(t => {
    document.getElementById(t).hidden = t !== name;
    const link = document.querySelector(`[data-tab="${t}"]`);          // Home has no nav link; the name in the header is it
    if (link) link.classList.toggle("active", t === name);
  });
  // the heavy map page loads only the first time you open Steps
  if (name === "steps" && !frame.src) frame.src = frame.dataset.src;
  document.body.dataset.tab = name;                                  // lets the CSS match the top bar to this page's column width
  document.title = name === "home" ? "Haotian" : `${name[0].toUpperCase() + name.slice(1)} · Haotian`;
  if (name !== currentTab) window.scrollTo(0, 0);   // opening a pop-up on the same tab keeps the page where it is
  currentTab = name;
}
window.addEventListener("hashchange", () => show(location.hash.slice(1)));
show(location.hash.slice(1));

// ---- menu button: opens the section links under the top bar; closes on a link, Escape, a click elsewhere, or a page change
const topBar = document.getElementById("top"), menuBtn = document.getElementById("menu");
function setMenu(open) { topBar.classList.toggle("open", open); menuBtn.setAttribute("aria-expanded", open); }
menuBtn.addEventListener("click", () => setMenu(!topBar.classList.contains("open")));
document.addEventListener("click", e => { if (!topBar.contains(e.target)) setMenu(false); });
document.addEventListener("keydown", e => { if (e.key === "Escape") setMenu(false); });
window.addEventListener("hashchange", () => setMenu(false));

// ---- shared pop-up page: "#tab/slug" opens an entry from Notes, Plates, Goods or Gigs over the current tab
const esc = s => String(s ?? "").replace(/[&<>"]/g, c => ({ "&": "&amp;", "<": "&lt;", ">": "&gt;", '"': "&quot;" }[c]));
const fmtDate = d => new Date(d + "T00:00:00").toLocaleDateString("en-US", { year: "numeric", month: "short", day: "numeric" });
// country flags for the filter buttons (Notes and Plates); unknown countries fall back to their name
const FLAGS = { "Peru": "🇵🇪", "United States": "🇺🇸", "Canada": "🇨🇦", "United Kingdom": "🇬🇧", "Korea": "🇰🇷", "South Korea": "🇰🇷", "Japan": "🇯🇵", "China": "🇨🇳", "Taiwan": "🇹🇼", "Hong Kong": "🇭🇰", "Singapore": "🇸🇬", "Thailand": "🇹🇭", "France": "🇫🇷", "Italy": "🇮🇹", "Spain": "🇪🇸", "Germany": "🇩🇪", "Netherlands": "🇳🇱", "Belgium": "🇧🇪", "Switzerland": "🇨🇭", "Austria": "🇦🇹", "Denmark": "🇩🇰", "Sweden": "🇸🇪", "Norway": "🇳🇴", "Portugal": "🇵🇹", "Mexico": "🇲🇽", "Egypt": "🇪🇬" };
const slugify = s => String(s).toLowerCase().replace(/[^a-z0-9]+/g, "-").replace(/^-|-$/g, "");
const reader = document.createElement("div");
reader.id = "reader"; reader.hidden = true;
document.body.append(reader);
const popups = {};                       // tab -> slug -> html of the page body
let openTab = "";
function syncReader() {
  const m = location.hash.match(/^#(\w+)\/(.+)$/);
  const html = m && popups[m[1]] && popups[m[1]](decodeURIComponent(m[2]));
  if (!html) { reader.hidden = true; document.body.classList.remove("reading"); return; }
  openTab = m[1];
  reader.innerHTML = `<div class="sheet"><div class="bar"><button type="button" class="save" title="Save as image" aria-label="Save as image">↓</button><a class="close" href="#${openTab}" title="Close" aria-label="Close">✕</a></div><article>${html}</article></div>`;
  reader.hidden = false; reader.scrollTop = 0;
  document.body.classList.add("reading");
}
reader.addEventListener("click", e => {
  if (e.target === reader) location.hash = "#" + openTab;   // click outside the page to close
  if (e.target.closest(".save")) saveImage(e.target.closest(".save"));
  const lb = e.target.closest(".langsw button");   // E / 中 switch on a Plates page
  if (lb) { try { localStorage.setItem("plateLang", lb.dataset.lang); } catch (_) {} const y = reader.scrollTop; syncReader(); reader.scrollTop = y; }
});

// "Save image": the whole open page (not just the part in view) as a PNG. Done without a library: the article is cloned with its
// computed styles inlined, wrapped in an SVG <foreignObject>, and drawn onto a canvas.
async function saveImage(btn) {
  const art = reader.querySelector("article");
  if (!art) return;
  const label = btn.textContent;
  btn.disabled = true; btn.textContent = "…";
  try {
    const w = art.offsetWidth, pad = 44;
    const clone = art.cloneNode(true);
    const src = [art, ...art.querySelectorAll("*")], dst = [clone, ...clone.querySelectorAll("*")];
    src.forEach((el, i) => {
      const cs = getComputedStyle(el);
      dst[i].setAttribute("style", Array.from(cs).map(p => `${p}:${cs.getPropertyValue(p)}`).join(";"));
    });
    // images are embedded as data URLs, since an SVG drawn as an image cannot fetch anything
    await Promise.all(src.filter(el => el.tagName === "IMG").map(async el => {
      await el.decode().catch(() => {});
      const c = document.createElement("canvas");
      c.width = el.naturalWidth; c.height = el.naturalHeight;
      c.getContext("2d").drawImage(el, 0, 0);
      dst[src.indexOf(el)].setAttribute("src", c.toDataURL("image/png"));
    }));
    // a video cannot be drawn into the picture, so it becomes its current frame
    src.filter(el => el.tagName === "VIDEO" && el.videoWidth).forEach(el => {
      const c = document.createElement("canvas");
      c.width = el.videoWidth; c.height = el.videoHeight;
      c.getContext("2d").drawImage(el, 0, 0);
      const im = document.createElement("img");
      im.setAttribute("src", c.toDataURL("image/jpeg", .9));
      im.setAttribute("style", dst[src.indexOf(el)].getAttribute("style"));
      dst[src.indexOf(el)].replaceWith(im);
    });
    const wrap = document.createElement("div");
    wrap.setAttribute("xmlns", "http://www.w3.org/1999/xhtml");
    wrap.setAttribute("style", `width:${w}px;padding:${pad}px 0 0;background:#fbf9f4;color:#111;font-family:${getComputedStyle(art).fontFamily}`);
    wrap.append(clone);
    document.body.append(wrap);
    const h = wrap.offsetHeight;
    wrap.remove();
    const svg = `<svg xmlns="http://www.w3.org/2000/svg" width="${w}" height="${h}"><foreignObject width="100%" height="100%">${new XMLSerializer().serializeToString(wrap)}</foreignObject></svg>`;
    const img = new Image();
    img.src = "data:image/svg+xml;charset=utf-8," + encodeURIComponent(svg);
    await img.decode();
    const scale = 2, canvas = document.createElement("canvas");
    canvas.width = w * scale; canvas.height = h * scale;
    const ctx = canvas.getContext("2d");
    ctx.scale(scale, scale); ctx.drawImage(img, 0, 0);
    const blob = await new Promise((ok, no) => canvas.toBlob(b => b ? ok(b) : no(new Error("empty")), "image/png"));
    const a = document.createElement("a");
    a.href = URL.createObjectURL(blob);
    a.download = (location.hash.split("/")[1] || "page") + ".png";
    a.click();
    setTimeout(() => URL.revokeObjectURL(a.href), 1000);
  } catch (err) {
    console.error(err);
    alert("Sorry, this browser could not make the image.");
  } finally {
    btn.disabled = false; btn.textContent = label;
  }
}
window.addEventListener("hashchange", syncReader);
document.addEventListener("keydown", e => { if (e.key === "Escape" && !reader.hidden) location.hash = "#" + openTab; });

// Unique, readable link names for a list of entries
function slugs(list, base) {
  const seen = new Map();
  return list.map((x, i) => {
    let s = x.slug || slugify(base(x)) || "item-" + (i + 1);
    const n = (seen.get(s) || 0) + 1; seen.set(s, n);
    return n > 1 ? `${s}-${n}` : s;
  });
}
// Body of a pop-up for Plates / Goods / Gigs. Entries may carry: body: ["paragraph", ...], photos: ["file.jpg", ...] (in assets/photos/), link.
function detailPage({ kind, title, meta, item, tools, lang }) {
  const photo = f => /^(https?:)?\/|\//.test(f) ? f : "assets/photos/" + f;
  const img = f => `<img class="pimg" src="${esc(photo(f))}" alt="">`;
  // body items are paragraphs, or { photo: "file.jpg" } to put a photo at that spot; `photos` are added after the text
  const text = (item.body || []).map(p => p.photo ? img(p.photo) : `<p>${esc(p)}</p>`).join("") || `<p class="soon">More to come.</p>`;
  const pics = (item.photos || []).map(img).join("");
  return `${kind ? `<p class="kind">${kind}</p>` : ""}<h1>${esc(title)}</h1>${meta ? `<p class="when">${meta}</p>` : ""}${tools || ""}<hr>
    <div class="text"${lang && lang !== "en" ? ` lang="${lang}"` : ""}>${text}${pics}</div>
    ${item.link ? `<p class="place"><a href="${esc(item.link)}" target="_blank" rel="noopener">Visit website</a></p>` : ""}`;
}

// ---- gigs
(function gigs() {
  const today = new Date().toISOString().slice(0, 10);
  const all = (window.GIGS || []).slice().sort((a, b) => (a.date < b.date ? -1 : 1));
  const ids = slugs(all, g => g.title);
  const row = (g) => `<a class="gig" href="#gigs/${ids[all.indexOf(g)]}"><div class="when">${fmtDate(g.date)}</div><div>
    <p>${esc(g.title)}</p>
    <p class="where">${esc([g.venue, g.location].filter(Boolean).join(", "))}${g.note ? " · " + esc(g.note) : ""}</p></div></a>`;
  // an empty section shows nothing at all, not even its heading
  const fill = (id, list) => {
    const el = document.getElementById(id);
    el.innerHTML = list.map(row).join("");
    el.previousElementSibling.hidden = !list.length;
  };
  fill("gigs-upcoming", all.filter(g => g.date >= today));
  fill("gigs-past", all.filter(g => g.date < today).reverse());
  popups.gigs = slug => {
    const g = all[ids.indexOf(slug)];
    return g && detailPage({ title: g.title, meta: esc([fmtDate(g.date), g.venue, g.location].filter(Boolean).join(" · ")), item: g });
  };
})();

const LANG_FLAGS = { Chinese: "🇨🇳", English: "🇺🇸", Japanese: "🇯🇵", Korean: "🇰🇷", French: "🇫🇷" };   // a flag stands for the language; unknown languages fall back to their name

// ---- one page layout for a note or a read: the text, the book card, photo, place and copyright
const hasLang = (n, l) => (n.languages || []).includes(l);
const notePage = (() => {
  const longDate = d => new Date(d + "T00:00:00").toLocaleDateString("en-US", { year: "numeric", month: "long", day: "numeric" });
  const rich = t => esc(t).replace(/\*\*(.+?)\*\*/g, "<strong>$1</strong>").replace(/\*(.+?)\*/g, "<em>$1</em>");   // **bold** and *italic* in prose
  const ital = t => esc(t).replace(/\*(.+?)\*/g, "<em>$1</em>");
  // long bilingual pieces: blocks of paragraphs, numbered section headings, sub-headings, an epigraph, and a reference list
  const blocks = n => n.blocks.map(([type, zh, en, num]) => {
    const pair = (cls) => `${zh ? `<p>${esc(zh)}</p>` : ""}<p class="en">${ital(en)}</p>`;
    if (type === "epi") return `<blockquote class="epi">${pair()}</blockquote>`;
    if (type === "h") return `<h2 class="sec"><span class="n">${esc(num || "")}</span>${esc(zh)}<span class="en">${ital(en)}</span></h2>`;
    if (type === "sub") return `<h3 class="subhead">${zh ? esc(zh) + " " : ""}<span class="en">${ital(en)}</span></h3>`;
    return `<div class="prose">${pair()}</div>`;
  }).join("");
  const refsHtml = n => (n.refs ? `<section class="refs"><h2 class="refs-h">References</h2>${n.refs.map(r =>
    `<p class="ref">${ital(r.t)}${r.u ? ` <a href="${esc(r.u)}" target="_blank" rel="noopener">${esc(r.u.replace(/^https?:\/\/(www\.)?/, ""))}</a>` : ""}</p>`).join("")}</section>` : "");
  const body = n => n.blocks ? blocks(n) : n.poem
    ? n.poem.pairs.map(([a, b]) => `<p class="pair">${esc(a)}<em>${esc(b)}</em></p>`).join("")
    : n.pairStanzas ? n.pairStanzas.map(st => `<div class="pstanza">${st.map(([a, b]) => `<p class="pair">${esc(a)}<em>${esc(b)}</em></p>`).join("")}</div>`).join("")
    : n.stanzas ? n.stanzas.map(st => `<p class="stanza">${st.map(esc).join("<br>")}</p>`).join("")
    : n.prose ? n.prose.map(([a, b]) => `<div class="prose"><p>${rich(a)}</p><p class="en">${rich(b)}</p></div>`).join("")
    : (n.body || []).map(p => `<p>${esc(p)}</p>`).join("");
  // book intro for Book: book: { cover: "file.jpg" (in assets/photos/), title, author, lines: ["detail", ...] }
  const bookHtml = b => !b ? "" : `<div class="book">${b.cover ? `<img class="bcover" src="assets/photos/${esc(b.cover)}" alt="">` : ""}
    <div class="binfo"><p class="bt">${esc(b.title)}</p>${b.author ? `<p class="ba">${esc(b.author)}</p>` : ""}${(b.lines || []).map(l => `<p class="bl">${esc(l)}</p>`).join("")}</div></div>`;
  // font for Japanese / Korean writing: Japanese-only notes are set in the Japanese face, notes with Korean get the Korean face on the Korean lines
  const nl = n => hasLang(n, "Korean") ? "ko" : hasLang(n, "Japanese") && !hasLang(n, "Chinese") ? "ja" : "";
  return n => `<div class="nl nl-${nl(n) || "x"}">${n.category ? `<p class="kind">${esc(n.category)}</p>` : ""}
      <h1>${esc(n.poem ? n.poem.heading : n.title)}</h1>
      <p class="by">by Haotian He</p><p class="when">${longDate(n.date)}</p>${bookHtml(n.book)}<hr>
      <div class="text">${body(n)}</div>
      ${n.video ? `<video class="pimg pvid" src="assets/video/${esc(n.video.file)}"${n.video.poster ? ` poster="assets/video/${esc(n.video.poster)}"` : ""} autoplay muted loop playsinline preload="metadata" aria-label="${esc(n.video.alt || "")}"></video>` : ""}
      ${n.photo ? `<img class="pimg" src="assets/photos/${esc(n.photo.file)}" alt="${esc(n.photo.alt)}" loading="lazy">` : ""}
      ${n.place ? `<p class="place">${esc(n.place).replace(/\n/g, "<br>")}</p>` : ""}
      ${refsHtml(n)}
      <p class="end">© ${n.date.slice(0, 4)} Haotian He · hehaotian.com. All rights reserved.</p></div>`;
})();

// ---- notes: a quiet list; each note opens as a page over the list (#notes/the-title)
(function notes() {
  const list = (window.NOTES || []).slice().sort((a, b) => (a.date < b.date ? 1 : -1));
  const ids = slugs(list, n => n.title);
  const listEl = document.getElementById("notes-list"), tagsEl = document.getElementById("notes-tags");
  const cats = [...new Set(list.map(n => n.category).filter(Boolean))];
  const langs = [...new Set(list.flatMap(n => n.languages || []))].sort((a, b) => list.filter(n => hasLang(n, b)).length - list.filter(n => hasLang(n, a)).length || (a < b ? -1 : 1));
  const langsEl = document.getElementById("notes-langs");
  const on = { cat: "", lang: "" };
  const row = (items, key) => items.length > 1 ? ["", ...items].map(v =>
    `<button type="button" class="tag${v === on[key] ? " on" : ""}" data-key="${key}" data-v="${esc(v)}"${key === "lang" && LANG_FLAGS[v] ? ` title="${esc(v)}" aria-label="${esc(v)}"` : ""}>${v ? (key === "lang" && LANG_FLAGS[v]) || esc(v) : "All"}</button>`).join("") : "";
  // grouped by year, newest year open; older years fold away (a filter opens every year that has a match)
  const years = [...new Set(list.map(n => n.date.slice(0, 4)))];
  const openYears = new Set(years.slice(0, 1));
  const shortDate = d => new Date(d + "T00:00:00").toLocaleDateString("en-US", { month: "short", day: "numeric" });
  const renderList = () => {
    const filtered = !!(on.cat || on.lang);
    const shown = list.filter(n => (!on.cat || n.category === on.cat) && (!on.lang || hasLang(n, on.lang)));
    const byYear = years.map(y => [y, shown.filter(n => n.date.startsWith(y))]).filter(([, ns]) => ns.length);
    listEl.innerHTML = byYear.length ? byYear.map(([y, ns]) => {
      const open = filtered || openYears.has(y);
      return `<section class="ny${open ? " open" : ""}"><button type="button" class="yh" data-year="${y}" aria-expanded="${open}"${filtered ? " tabindex=\"-1\"" : ""}><span class="yr">${y}</span><span class="yc">${ns.length}</span></button>
      <div class="yl"${open ? "" : " hidden"}>${ns.map(n => `<a class="note" href="#notes/${ids[list.indexOf(n)]}"><span class="d">${shortDate(n.date)}</span><span class="t">${esc(n.title)}</span>${n.category ? `<span class="cat">${esc(n.category)}</span>` : ""}</a>`).join("")}</div></section>`;
    }).join("") : `<p class="empty">Nothing yet.</p>`;
    tagsEl.innerHTML = row(cats, "cat");
    langsEl.innerHTML = row(langs, "lang");
  };
  document.getElementById("notes").addEventListener("click", e => {
    const h = e.target.closest(".yh");   // opening a year folds the others
    if (h) { if (!on.cat && !on.lang) { const y = h.dataset.year; const was = openYears.has(y); openYears.clear(); if (!was) openYears.add(y); renderList(); } return; }
    const b = e.target.closest("button[data-key]");
    if (b) { on[b.dataset.key] = b.dataset.v; renderList(); }
  });
  renderList();
  popups.notes = slug => { const n = list[ids.indexOf(slug)]; return n && notePage(n); };
  // copyright line on the list page: the years the notes were written
  const ys = list.map(n => +n.date.slice(0, 4));
  if (ys.length) {
    const lo = Math.min(...ys), hi = Math.max(...ys);
    document.getElementById("notes-copy").textContent = `© ${lo === hi ? lo : lo + "–" + hi} Haotian He · hehaotian.com. All rights reserved.`;
  }
})();

// ---- reads: a wall of book covers; each opens the reader response as a page over the wall (#reads/the-title)
(function reads() {
  const list = (window.READS || []).slice().sort((a, b) => (a.date < b.date ? 1 : -1));
  const ids = slugs(list, n => n.title);
  // on the wall a book goes by its own name: "棉花帝国 (Empire of Cotton)" shows as 棉花帝国, "林奕含 Lin Yi-han" as 林奕含 (the page keeps both)
  const nonLatin = t => /[^\u0000-\u024f\u2000-\u206f]/.test(t);
  const ownTitle = t => { const m = String(t).match(/^(.*?)\s*\([^)]*\)\s*$/); return m && nonLatin(m[1]) ? m[1] : t; };
  const ownAuthor = a => { const m = String(a).match(/^(.*?)\s+[A-Za-z][A-Za-z\s.'’-]*$/); return m && nonLatin(m[1]) ? m[1] : a; };
  const card = (n, i) => { const b = n.book || {};
    return `<a class="read" href="#reads/${ids[i]}">${b.cover ? `<img class="rcov" src="assets/photos/${esc(b.cover)}" alt="" loading="lazy">` : `<span class="rcov none"></span>`}
      <span class="rt">${esc(ownTitle(b.title || n.title))}</span>${b.author ? `<span class="ra">${esc(ownAuthor(b.author))}</span>` : ""}</a>`; };
  // filter by the language the book was read in (book.language), most-read language first; no filter row when there is only one
  const bookLang = n => (n.book || {}).language;
  const langs = [...new Set(list.map(bookLang).filter(Boolean))].sort((a, b) => list.filter(n => bookLang(n) === b).length - list.filter(n => bookLang(n) === a).length || (a < b ? -1 : 1));
  const langsEl = document.getElementById("reads-langs"), listEl = document.getElementById("reads-list");
  let lang = "";
  const render = () => {
    const shown = list.map((n, i) => [n, i]).filter(([n]) => !lang || bookLang(n) === lang);
    listEl.innerHTML = shown.length ? shown.map(([n, i]) => card(n, i)).join("") : `<p class="empty">Nothing yet.</p>`;
    langsEl.innerHTML = langs.length > 1 ? ["", ...langs].map(v => `<button type="button" class="tag${v === lang ? " on" : ""}" data-v="${esc(v)}"${v && LANG_FLAGS[v] ? ` title="${esc(v)}" aria-label="${esc(v)}"` : ""}>${v ? LANG_FLAGS[v] || esc(v) : "All"}</button>`).join("") : "";
  };
  langsEl.addEventListener("click", e => { const b = e.target.closest("button[data-v]"); if (b) { lang = b.dataset.v; render(); } });
  render();
  popups.reads = slug => { const n = list[ids.indexOf(slug)]; return n && notePage(n); };
  const ys = list.map(n => +n.date.slice(0, 4));
  if (ys.length) { const lo = Math.min(...ys), hi = Math.max(...ys); document.getElementById("reads-copy").textContent = `© ${lo === hi ? lo : lo + "–" + hi} Haotian He · hehaotian.com. All rights reserved.`; }
})();

// old links: book notes used to live under #notes/, so a link there that names a read goes to Reads
function legacyReads() {
  const m = location.hash.match(/^#notes\/(.+)$/), slug = m && decodeURIComponent(m[1]);
  if (slug && !popups.notes(slug) && popups.reads(slug)) { history.replaceState(null, "", "#reads/" + m[1]); show("reads"); syncReader(); }
}
window.addEventListener("hashchange", legacyReads);
legacyReads();

// ---- plates: a collector's grid, write-ups first, then bare entries; each part grouped by distinction (3 stars first), newest first inside each group
(function plates() {
  const list = (window.PLATES || []).slice();
  const rank = p => p.stars || (p.bib ? 0.5 : p.recommended ? 0.25 : p.apple ? 0.2 : 0.22);   // stars > Bib > Michelin recommended > Haotian Recommend (everything else) > Apple
  const sortKey = p => (p.keepOrder ? "" : p.date) || "";   // keepOrder: show the date but keep the old place in the grid
  const hasText = p => (p.body && p.body.length ? 1 : 0);   // places with a write-up come first, bare ones sink to the bottom; each half keeps the star order
  list.sort((a, b) => hasText(b) - hasText(a) || rank(b) - rank(a) || (sortKey(a) < sortKey(b) ? 1 : -1));
  const ids = slugs(list, p => p.name);
  // The real Michelin icons: assets/michelin-star.webp (and assets/michelin-bib.svg when you have it);
  // if a file is missing the page falls back to a plain star / the word Bib.
  const starImg = '<img class="mstar" src="assets/michelin-star.webp" alt="star" onerror="this.replaceWith(\'★\')">';
  const bibImg = '<img class="mbib" src="assets/michelin-bib.svg" alt="Bib Gourmand" onerror="this.replaceWith(\'Bib\')">';
  const aplImg = '<img class="mapl" src="assets/apple-logo.webp" alt="Apple Caffè" title="Apple Caffè" onerror="this.replaceWith(\'Apple\')">';
  const recImg = '<img class="mrec" src="assets/michelin-recommended.svg" alt="Michelin recommended" title="Michelin recommended" onerror="this.replaceWith(\'Rec.\')">';
  const hrImg = '<img class="mhr" src="assets/haotian-recommend.svg" alt="Haotian Recommend" title="Haotian Recommend" onerror="this.replaceWith(\'H\')">';   // every place without a Michelin or Apple mark
  // date may be "YYYY-MM-DD", "YYYY-MM" or "YYYY"; show as much of it as is given
  const when = (d, mo) => { d = String(d); const [y, m, day] = d.split("-"); return !m ? y : new Date(`${y}-${m}-${day || "01"}T00:00:00`).toLocaleDateString("en-US", { year: "numeric", month: mo, ...(day && { day: "numeric" }) }); };
  const mark = p => p.stars ? starImg.repeat(p.stars) : p.bib ? bibImg : p.recommended ? recImg : p.apple ? aplImg : hrImg;
  const card = (p, i) => `<a class="plate" href="#plates/${ids[i]}">${p.cover ? `<img class="cov" src="assets/photos/${esc(p.cover)}" alt="" loading="lazy">` : ""}<span class="st">${mark(p)}</span><span class="nm">${esc(p.name)}</span>
      <span class="ct">${esc(p.city)}</span>${p.date ? `<span class="yr">${esc(when(p.date, "short"))}</span>` : ""}</a>`;
  const count = k => list.filter(p => rank(p) === k).length;
  const tally = [[3, "★★★"], [2, "★★"], [1, "★"], [0.5, "Bib"], [0.25, "REC"], [0.22, "HAO"], [0.2, "APL"]].filter(([k]) => count(k)).map(([k, s]) => `${s} ${count(k)}`).join("  ·  ");
  document.getElementById("plates-tally").innerHTML = tally.replace(/★/g, starImg).replace(/Bib/g, bibImg).replace(/REC/g, recImg).replace(/APL/g, aplImg).replace(/HAO/g, hrImg);
  // filters: distinction (category) and country, combinable; country comes from the end of "City, ST" / "City, Country"
  const CA = ["AB", "BC", "MB", "NB", "NL", "NS", "NT", "NU", "ON", "PE", "QC", "SK", "YT"];
  const US = "AL AK AZ AR CA CO CT DE FL GA HI ID IL IN IA KS KY LA ME MD MA MI MN MS MO MT NE NV NH NJ NM NY NC ND OH OK OR PA RI SC SD TN TX UT VT VA WA WV WI WY DC PR".split(" ");   // so "London, UK" is not read as a state
  const countryOf = p => { const t = (p.city || "").split(",").pop().trim(); return CA.includes(t) ? "Canada" : US.includes(t) ? "United States" : t; };
  const catOf = [[3, "★★★"], [2, "★★"], [1, "★"], [0.5, "Bib"], [0.25, "REC"], [0.22, "HAO"], [0.2, "APL"]].filter(([k]) => count(k));
  const countries = [...new Set(list.map(countryOf).filter(Boolean))].sort((a, b) => list.filter(p => countryOf(p) === b).length - list.filter(p => countryOf(p) === a).length || (a < b ? -1 : 1));
  const on = { cat: "", country: "" };
  const catsEl = document.getElementById("plates-cats"), countriesEl = document.getElementById("plates-countries"), listEl = document.getElementById("plates-list");
  const label = s => s.replace(/★/g, starImg).replace(/^Bib$/, bibImg).replace(/^REC$/, recImg).replace(/^APL$/, aplImg).replace(/^HAO$/, hrImg);
  const row = (items, key) => items.length > 1 ? [["", "All"], ...items].map(([v, l]) =>
    `<button type="button" class="tag${String(v) === on[key] ? " on" : ""}" data-key="${key}" data-v="${esc(String(v))}"${key === "country" && FLAGS[l] ? ` title="${esc(l)}" aria-label="${esc(l)}"` : ""}>${key === "cat" ? label(l) : FLAGS[l] || esc(l)}</button>`).join("") : "";
  const renderPlates = () => {
    const shown = list.map((p, i) => [p, i]).filter(([p]) => (on.cat === "" || rank(p) === +on.cat) && (!on.country || countryOf(p) === on.country));
    listEl.innerHTML = shown.length ? shown.map(([p, i]) => card(p, i)).join("") : `<p class="empty">${list.length ? "No plates match." : "Nothing yet."}</p>`;
    catsEl.innerHTML = row(catOf, "cat");
    countriesEl.innerHTML = row(countries.map(c => [c, c]), "country");
  };
  document.getElementById("plates").addEventListener("click", e => {
    const b = e.target.closest("button[data-key]");
    if (b) { on[b.dataset.key] = b.dataset.v; renderPlates(); }
  });
  // copyright line on the list page: the years of the reviews
  const pys = list.map(p => +String(p.date || "").slice(0, 4)).filter(Boolean);
  if (pys.length) { const lo = Math.min(...pys), hi = Math.max(...pys); document.getElementById("plates-copy").textContent = `© ${lo === hi ? lo : lo + "–" + hi} Haotian He · hehaotian.com. All rights reserved.`; }
  renderPlates();
  popups.plates = slug => {
    const p = list[ids.indexOf(slug)];
    if (!p) return p;
    // a review with other-language versions (body_zh, body_ja, body_ko) gets a switch: H (English), 何, か, 하; languages it lacks are not shown, and with none there is no switch
    const has = c => c === "en" || !!(p["body_" + c] && p["body_" + c].length);
    const opts = [["en", "H"], ["zh", "何"], ["ja", "か"], ["ko", "하"]].filter(([c]) => has(c));
    let lang = "en"; try { lang = localStorage.getItem("plateLang") || "en"; } catch (_) {}
    if (!has(lang)) lang = "en";
    const tools = opts.length > 1 ? `<p class="langsw">${opts.map(([c, l]) => `<button type="button" data-lang="${c}" class="${c === lang ? "on" : ""}">${l}</button>`).join("")}</p>` : "";
    return detailPage({ kind: mark(p), title: p.name, meta: esc([p.city, p.date && when(p.date, "long")].filter(Boolean).join(" · ")), item: lang === "en" ? p : { ...p, body: p["body_" + lang] }, tools, lang }) + `<p class="end">© ${esc(String(p.date || new Date().getFullYear()).slice(0, 4))} Haotian He · hehaotian.com. All rights reserved.</p>`;
  };
})();

// ---- goods: a dashboard. KPI tiles, charts by year and by cause, then one expandable card per recipient.
(function goods() {
  const list = (window.GOODS || []).slice().sort((a, b) => (a.date < b.date ? 1 : -1));
  const $ = id => document.getElementById(id);
  const month = d => new Date(d + "-01T00:00:00").toLocaleDateString("en-US", { year: "numeric", month: "short" });
  const money = n => "$" + n.toLocaleString();
  const pc = f => f > 0 && f < .005 ? "<1%" : Math.round(f * 100) + "%";   // never show a real gift as 0%
  const gifts = n => `${n} ${n === 1 ? "gift" : "gifts"}`;
  const amt = g => Number(g.amount) || 0;
  const cz = g => g.cause || "Other";   // the cause belongs to each gift: one recipient can be given to for several causes
  const places = window.GOOD_PLACES || {};
  // a cause keeps its colour for good: slots go in order of first gift, never by rank; past five (and "Other") it is grey
  const order = []; list.slice().reverse().forEach(g => { if (g.cause && !order.includes(g.cause)) order.push(g.cause); });
  const slot = c => { const i = order.indexOf(c); return i > -1 && i < 5 ? i + 1 : 0; };
  const paint = c => `var(--c${slot(c)})`;
  const sum = list.reduce((t, g) => t + amt(g), 0);
  if (!sum) return;

  const byCause = {};
  list.forEach(g => { const t = byCause[cz(g)] || (byCause[cz(g)] = { sum: 0, n: 0 }); t.sum += amt(g); t.n++; });
  const causes = Object.entries(byCause).sort((x, y) => y[1].sum - x[1].sum);

  // 1. KPI tiles
  const yearOf = g => +g.date.slice(0, 4), first = Math.min(...list.map(yearOf)), last = Math.max(...list.map(yearOf));
  const big = list.reduce((a, g) => (amt(g) > amt(a) ? g : a));
  const kpis = [
    { dark: 1, label: "Total given", value: money(sum), sub: `since ${first}` },
    { label: "Gifts", value: list.length, sub: `over ${last - first + 1} ${last - first ? "years" : "year"}` },
    { label: "Recipients", value: new Set(list.map(g => g.what)).size, sub: `${causes.length} ${causes.length === 1 ? "cause" : "causes"}` },
    { label: "Largest gift", value: money(amt(big)), sub: `${esc(big.what)} · ${month(big.date)}` },
  ];
  $("goods-kpis").innerHTML = kpis.map(k => `<div class="kpi${k.dark ? " dark" : ""}"><p class="kl">${k.label}</p><p class="kv">${k.value}</p><p class="ks">${k.sub}</p></div>`).join("");

  // 2. by cause: every track is the whole total, so every bar is the same width and its fill is the share
  $("goods-causes").innerHTML = causes.map(([c, t]) => { const pct = pc(t.sum / sum);
    return `<div class="cbar" tabindex="0" data-tip="${esc(c)} · ${money(t.sum)} · ${gifts(t.n)} · ${pct}">
      <div class="chead"><span><i class="sw" style="background:${paint(c)}"></i>${esc(c)}</span><span class="where">${money(t.sum)} · ${pct}</span></div>
      <div class="ctrack"><div class="cfill" style="width:${t.sum / sum * 100}%;background:${paint(c)}"></div></div></div>`; }).join("");

  // 3. by year, 2020 to now: each column is that year's giving, 100% tall, split by cause (share, not dollars: the years differ by orders of magnitude)
  const years = Array.from({ length: Math.max(new Date().getFullYear(), last) - 2019 }, (_, i) => String(2020 + i));
  const bySlot = causes.map(([c]) => c).sort((x, y) => (slot(x) || 6) - (slot(y) || 6));   // slot 1 first = bottom of every column, grey last = top
  const cols = years.map(y => {
    const gs = list.filter(g => g.date.startsWith(y)), tot = gs.reduce((t, g) => t + amt(g), 0);
    const parts = bySlot.map(c => [c, gs.filter(g => cz(g) === c).reduce((t, g) => t + amt(g), 0)]).filter(p => p[1] > 0).reverse();
    const detail = parts.slice().reverse().map(([c, v]) => `${c} ${pc(v / tot)} (${money(v)})`).join(", ");
    return `<div class="ycol" tabindex="0" data-tip="${esc(`${y} · ${tot ? `${money(tot)} · ${gifts(gs.length)} · ${detail}` : "no gifts"}`)}">
      <div class="stack${tot ? "" : " none"}">${parts.map(([c, v]) => `<i class="s${slot(c)}" style="flex:${v};background:${paint(c)}">${v / tot >= .12 ? pc(v / tot) : ""}</i>`).join("")}</div></div>`;
  }).join("");
  $("goods-years").innerHTML = `<div class="legend">${bySlot.map(c => `<span><i class="sw" style="background:${paint(c)}"></i>${esc(c)}</span>`).join("")}</div>
    <div class="cols pct">${cols}</div><div class="mlabels">${years.map(y => `<span>${y}</span>`).join("")}</div>`;

  // 4. recipients: one card each, most recently given to first. Closed: name, place, total, causes and a bar split into its gifts; open: every gift.
  const groups = [];
  list.forEach(g => { let r = groups.find(x => x.what === g.what); if (!r) groups.push(r = { what: g.what, gifts: [], sum: 0 }); r.gifts.push(g); r.sum += amt(g); });
  groups.forEach(r => { r.latest = r.gifts[0].date; });   // gifts are already newest first
  groups.sort((x, y) => (x.latest < y.latest ? 1 : x.latest > y.latest ? -1 : y.sum - x.sum));   // most recent activity first; same month: larger total first
  $("goods-list").innerHTML = groups.map(r => {
    const top = Math.max(...r.gifts.map(amt)) || 1, cs = [...new Set(r.gifts.slice().reverse().map(cz))];
    const yrs = r.gifts.map(yearOf), span = Math.min(...yrs) === Math.max(...yrs) ? yrs[0] : `${Math.min(...yrs)}–${Math.max(...yrs)}`;
    const segs = r.gifts.slice().reverse().map(g => `<i style="flex:${amt(g) || 1};background:${paint(cz(g))}" title="${esc(cz(g))} · ${month(g.date)} · ${money(amt(g))}"></i>`).join("");
    const rows = r.gifts.map(g => `<div class="rg"><span class="when">${month(g.date)}</span><span class="rc"><i class="sw" style="background:${paint(cz(g))}"></i>${esc(cz(g))}</span><span class="gamt">${money(amt(g))}</span>
        <span class="rbar"><i style="width:${amt(g) / top * 100}%;background:${paint(cz(g))}"></i></span></div>`).join("");
    return `<details class="rcp"><summary>
        <div class="rtop"><span class="rname">${esc(r.what)}</span><span class="gamt">${money(r.sum)}</span></div>
        ${places[r.what] ? `<div class="rplace">${esc(places[r.what])}</div>` : ""}
        <div class="rmeta">${cs.map(c => `<i class="sw" style="background:${paint(c)}"></i>`).join("")}${cs.map(esc).join(" & ")} · ${gifts(r.gifts.length)} · ${span}<span class="chev" aria-hidden="true"></span></div>
        <div class="seg">${segs}</div></summary><div class="rlist">${rows}</div></details>`;
  }).join("");

  // one shared tooltip for every mark
  const tip = document.body.appendChild(Object.assign(document.createElement("div"), { id: "gtip", hidden: true }));
  const show = (t, x, y) => { tip.textContent = t.dataset.tip; tip.hidden = false; tip.style.left = Math.max(8, Math.min(x + 12, innerWidth - tip.offsetWidth - 8)) + "px"; tip.style.top = y + 16 + "px"; };
  const dash = $("goods");
  dash.addEventListener("mousemove", e => { const t = e.target.closest("[data-tip]"); t ? show(t, e.clientX, e.clientY) : (tip.hidden = true); });
  dash.addEventListener("mouseleave", () => { tip.hidden = true; });
  dash.addEventListener("focusin", e => { const t = e.target.closest("[data-tip]"); if (t) { const r = t.getBoundingClientRect(); show(t, r.left, r.top - 40); } });
  dash.addEventListener("focusout", () => { tip.hidden = true; });
})();

syncReader();                            // open a pop-up straight from a shared link
