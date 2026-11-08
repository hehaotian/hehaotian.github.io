// ---- tab routing: #home #steps #plates #goods #gigs #notes (the old #travels link still works)
const TABS = ["home", "steps", "plates", "goods", "gigs", "notes"];
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
  document.title = name === "home" ? "Haotian" : `${name[0].toUpperCase() + name.slice(1)} · Haotian`;
  if (name !== currentTab) window.scrollTo(0, 0);   // opening a pop-up on the same tab keeps the page where it is
  currentTab = name;
}
window.addEventListener("hashchange", () => show(location.hash.slice(1)));
show(location.hash.slice(1));

// ---- shared pop-up page: "#tab/slug" opens an entry from Notes, Plates, Goods or Gigs over the current tab
const esc = s => String(s ?? "").replace(/[&<>"]/g, c => ({ "&": "&amp;", "<": "&lt;", ">": "&gt;", '"': "&quot;" }[c]));
const fmtDate = d => new Date(d + "T00:00:00").toLocaleDateString("en-US", { year: "numeric", month: "short", day: "numeric" });
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
  reader.innerHTML = `<div class="sheet"><div class="bar"><a class="close" href="#${openTab}">Close</a></div><article>${html}</article></div>`;
  reader.hidden = false; reader.scrollTop = 0;
  document.body.classList.add("reading");
}
reader.addEventListener("click", e => { if (e.target === reader) location.hash = "#" + openTab; });   // click outside the page to close
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
function detailPage({ kind, title, meta, item }) {
  const photo = f => /^(https?:)?\/|\//.test(f) ? f : "assets/photos/" + f;
  const img = f => `<img class="pimg" src="${esc(photo(f))}" alt="">`;
  // body items are paragraphs, or { photo: "file.jpg" } to put a photo at that spot; `photos` are added after the text
  const text = (item.body || []).map(p => p.photo ? img(p.photo) : `<p>${esc(p)}</p>`).join("") || `<p class="soon">More to come.</p>`;
  const pics = (item.photos || []).map(img).join("");
  return `${kind ? `<p class="kind">${kind}</p>` : ""}<h1>${esc(title)}</h1>${meta ? `<p class="when">${meta}</p>` : ""}<hr>
    <div class="text">${text}${pics}</div>
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

// ---- notes: a quiet list; each note opens as a page over the list (#notes/the-title)
(function notes() {
  const list = (window.NOTES || []).slice().sort((a, b) => (a.date < b.date ? 1 : -1));
  const ids = slugs(list, n => n.title);
  const longDate = d => new Date(d + "T00:00:00").toLocaleDateString("en-US", { year: "numeric", month: "long", day: "numeric" });
  const listEl = document.getElementById("notes-list"), tagsEl = document.getElementById("notes-tags");
  const cats = [...new Set(list.map(n => n.category).filter(Boolean))];
  let active = "";
  const renderList = () => {
    const shown = list.filter(n => !active || n.category === active);
    listEl.innerHTML = shown.length ? shown.map(n => `
    <a class="note" href="#notes/${ids[list.indexOf(n)]}"><span class="d">${fmtDate(n.date)}</span><span class="t">${esc(n.title)}</span>
    ${n.category ? `<span class="cat">${esc(n.category)}</span>` : ""}</a>`).join("")
      : `<p class="empty">Nothing yet.</p>`;
    tagsEl.innerHTML = cats.length > 1 ? ["", ...cats].map(c =>
      `<button type="button" class="tag${c === active ? " on" : ""}" data-cat="${esc(c)}">${c ? esc(c) : "All"}</button>`).join("") : "";
  };
  tagsEl.addEventListener("click", e => {
    const b = e.target.closest("button[data-cat]");
    if (b) { active = b.dataset.cat; renderList(); }
  });
  renderList();
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
    : n.stanzas ? n.stanzas.map(st => `<p class="stanza">${st.map(esc).join("<br>")}</p>`).join("")
    : n.prose ? n.prose.map(([a, b]) => `<div class="prose"><p>${esc(a)}</p><p class="en">${esc(b).replace(/\*(.+?)\*/g, "<em>$1</em>")}</p></div>`).join("")
    : (n.body || []).map(p => `<p>${esc(p)}</p>`).join("");
  popups.notes = slug => {
    const n = list[ids.indexOf(slug)];
    return n && `${n.category ? `<p class="kind">${esc(n.category)}</p>` : ""}
      <h1>${esc(n.poem ? n.poem.heading : n.title)}</h1>
      <p class="by">by Haotian He</p><p class="when">${longDate(n.date)}</p><hr>
      <div class="text">${body(n)}</div>
      ${n.place ? `<p class="place">${esc(n.place)}</p>` : ""}
      ${refsHtml(n)}
      <p class="end">© ${n.date.slice(0, 4)} Haotian He. All rights reserved.</p>`;
  };
  // copyright line on the list page: the years the notes were written
  const ys = list.map(n => +n.date.slice(0, 4));
  if (ys.length) {
    const lo = Math.min(...ys), hi = Math.max(...ys);
    document.getElementById("notes-copy").textContent = `© ${lo === hi ? lo : lo + "–" + hi} Haotian He. All rights reserved.`;
  }
})();

// ---- plates: a collector's grid, write-ups first, then bare entries; each part grouped by distinction (3 stars first), newest first inside each group
(function plates() {
  const list = (window.PLATES || []).slice();
  const rank = p => p.stars || (p.bib ? 0.5 : p.recommended ? 0.25 : 0);   // stars > Bib > recommended > none
  const sortKey = p => (p.keepOrder ? "" : p.date) || "";   // keepOrder: show the date but keep the old place in the grid
  const hasText = p => (p.body && p.body.length ? 1 : 0);   // places with a write-up come first, bare ones sink to the bottom; each half keeps the star order
  list.sort((a, b) => hasText(b) - hasText(a) || rank(b) - rank(a) || (sortKey(a) < sortKey(b) ? 1 : -1));
  const ids = slugs(list, p => p.name);
  // The real Michelin icons: assets/michelin-star.webp (and assets/michelin-bib.svg when you have it);
  // if a file is missing the page falls back to a plain star / the word Bib.
  const starImg = '<img class="mstar" src="assets/michelin-star.webp" alt="star" onerror="this.replaceWith(\'★\')">';
  const bibImg = '<img class="mbib" src="assets/michelin-bib.svg" alt="Bib Gourmand" onerror="this.replaceWith(\'Bib\')">';
  const recImg = '<img class="mrec" src="assets/michelin-recommended.svg" alt="Michelin recommended" title="Michelin recommended" onerror="this.replaceWith(\'Rec.\')">';
  // date may be "YYYY-MM-DD", "YYYY-MM" or "YYYY"; show as much of it as is given
  const when = (d, mo) => { d = String(d); const [y, m, day] = d.split("-"); return !m ? y : new Date(`${y}-${m}-${day || "01"}T00:00:00`).toLocaleDateString("en-US", { year: "numeric", month: mo, ...(day && { day: "numeric" }) }); };
  const mark = p => p.stars ? starImg.repeat(p.stars) : p.bib ? bibImg : p.recommended ? recImg : "";
  const card = (p, i) => `<a class="plate" href="#plates/${ids[i]}">${p.cover ? `<img class="cov" src="assets/photos/${esc(p.cover)}" alt="" loading="lazy">` : ""}<span class="st">${mark(p)}</span><span class="nm">${esc(p.name)}</span>
      <span class="ct">${esc(p.city)}</span>${p.date ? `<span class="yr">${esc(when(p.date, "short"))}</span>` : ""}</a>`;
  const count = k => list.filter(p => rank(p) === k).length;
  const tally = [[3, "★★★"], [2, "★★"], [1, "★"], [0.5, "Bib"], [0.25, "REC"], [0, "Other"]].filter(([k]) => count(k)).map(([k, s]) => `${s} ${count(k)}`).join("  ·  ");
  document.getElementById("plates-tally").innerHTML = tally.replace(/★/g, starImg).replace(/Bib/g, bibImg).replace(/REC/g, recImg);
  // filters: distinction (category) and country, combinable; country comes from the end of "City, ST" / "City, Country"
  const CA = ["AB", "BC", "MB", "NB", "NL", "NS", "NT", "NU", "ON", "PE", "QC", "SK", "YT"];
  const US = "AL AK AZ AR CA CO CT DE FL GA HI ID IL IN IA KS KY LA ME MD MA MI MN MS MO MT NE NV NH NJ NM NY NC ND OH OK OR PA RI SC SD TN TX UT VT VA WA WV WI WY DC PR".split(" ");   // so "London, UK" is not read as a state
  const countryOf = p => { const t = (p.city || "").split(",").pop().trim(); return CA.includes(t) ? "Canada" : US.includes(t) ? "United States" : t; };
  const catOf = [[3, "★★★"], [2, "★★"], [1, "★"], [0.5, "Bib"], [0.25, "REC"], [0, "Other"]].filter(([k]) => count(k));
  const countries = [...new Set(list.map(countryOf).filter(Boolean))].sort((a, b) => list.filter(p => countryOf(p) === b).length - list.filter(p => countryOf(p) === a).length || (a < b ? -1 : 1));
  const on = { cat: "", country: "" };
  const catsEl = document.getElementById("plates-cats"), countriesEl = document.getElementById("plates-countries"), listEl = document.getElementById("plates-list");
  const label = s => s.replace(/★/g, starImg).replace(/^Bib$/, bibImg).replace(/^REC$/, recImg);
  const FLAGS = { "United States": "🇺🇸", "Canada": "🇨🇦", "United Kingdom": "🇬🇧", "Korea": "🇰🇷", "South Korea": "🇰🇷", "Japan": "🇯🇵", "China": "🇨🇳", "Taiwan": "🇹🇼", "Hong Kong": "🇭🇰", "Singapore": "🇸🇬", "Thailand": "🇹🇭", "France": "🇫🇷", "Italy": "🇮🇹", "Spain": "🇪🇸", "Germany": "🇩🇪", "Netherlands": "🇳🇱", "Belgium": "🇧🇪", "Switzerland": "🇨🇭", "Austria": "🇦🇹", "Denmark": "🇩🇰", "Sweden": "🇸🇪", "Norway": "🇳🇴", "Portugal": "🇵🇹", "Mexico": "🇲🇽" };   // unknown countries fall back to their name
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
  renderPlates();
  popups.plates = slug => {
    const p = list[ids.indexOf(slug)];
    return p && detailPage({ kind: p.stars || p.bib || p.recommended ? mark(p) : "", title: p.name, meta: esc([p.city, p.date && when(p.date, "long")].filter(Boolean).join(" · ")), item: p });
  };
})();

// ---- goods
(function goods() {
  const list = (window.GOODS || []).slice().sort((a, b) => (a.date < b.date ? 1 : -1));
  const ids = slugs(list, g => g.what);
  const month = d => new Date(d + "-01T00:00:00").toLocaleDateString("en-US", { year: "numeric", month: "short" });
  const row = (g, i) => `<a class="gig" href="#goods/${ids[i]}"><div class="when">${month(g.date)}</div><div>
    <p>${esc(g.what)}${g.amount ? ` <span class="where">· $${Number(g.amount).toLocaleString()}</span>` : ""}</p>
    ${g.story ? `<p class="where">${esc(g.story)}</p>` : ""}</div></a>`;
  document.getElementById("goods-list").innerHTML = list.map(row).join("");
  const sum = list.reduce((t, g) => t + (Number(g.amount) || 0), 0);
  if (sum) document.getElementById("goods-total").textContent = `So far: $${sum.toLocaleString()} in ${list.length} ${list.length === 1 ? "gift" : "gifts"}.`;
  popups.goods = slug => {
    const g = list[ids.indexOf(slug)];
    return g && detailPage({ title: g.what, meta: esc([month(g.date), g.amount && "$" + Number(g.amount).toLocaleString()].filter(Boolean).join(" · ")), item: { ...g, body: g.body || (g.story ? [g.story] : []) } });
  };
})();

syncReader();                            // open a pop-up straight from a shared link
