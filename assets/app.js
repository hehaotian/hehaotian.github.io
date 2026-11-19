// ---- tab routing: #home #notes #reads #plates #goods #travels #gigs (the Steps map is its own page, steps/index.html, opened from Travels)
const TABS = ["home", "notes", "reads", "plates", "goods", "travels", "gigs"];
let currentTab = "";

function show(name) {
  const sub = name.split("/")[1];
  name = name.split("/")[0];                                         // "#notes/delivery" is the Notes tab with a note open
  if (name === "steps" || name === "travels" && sub && !sub.startsWith("city:")) { location.replace("steps/index.html" + (sub ? "#" + sub : "")); return; }   // old #steps links go to the map page
  if (!TABS.includes(name)) name = "home";
  TABS.forEach(t => {
    document.getElementById(t).hidden = t !== name;
    const link = document.querySelector(`#tabs [data-tab="${t}"]`);          // Home has no nav link; the name in the header is it
    if (link) link.classList.toggle("active", t === name);
  });
  document.body.dataset.tab = name;                                  // lets the CSS match the top bar to this page's column width
  document.title = name === "home" ? "Haotian" : `${{ notes: "Writings", goods: "Givings" }[name] || name[0].toUpperCase() + name.slice(1)} · Haotian`;   // #notes keeps its address, the page is called Writings
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
const FLAGS = { "Peru": "🇵🇪", "United States": "🇺🇸", "Canada": "🇨🇦", "United Kingdom": "🇬🇧", "Korea": "🇰🇷", "South Korea": "🇰🇷", "Japan": "🇯🇵", "China": "🇨🇳", "Taiwan": "🇹🇼", "Hong Kong": "🇭🇰", "Singapore": "🇸🇬", "Thailand": "🇹🇭", "France": "🇫🇷", "Italy": "🇮🇹", "Spain": "🇪🇸", "Germany": "🇩🇪", "Netherlands": "🇳🇱", "Belgium": "🇧🇪", "Switzerland": "🇨🇭", "Austria": "🇦🇹", "Denmark": "🇩🇰", "Sweden": "🇸🇪", "Norway": "🇳🇴", "Portugal": "🇵🇹", "Mexico": "🇲🇽", "Egypt": "🇪🇬", "Chile": "🇨🇱", "Greece": "🇬🇷", "India": "🇮🇳", "Argentina": "🇦🇷", "Uruguay": "🇺🇾", "Russia": "🇷🇺", "Israel": "🇮🇱", "Colombia": "🇨🇴", "Malaysia": "🇲🇾", "Belarus": "🇧🇾", "Nigeria": "🇳🇬", "Croatia": "🇭🇷", "Afghanistan": "🇦🇫", "South Africa": "🇿🇦", "Vietnam": "🇻🇳", "Cambodia": "🇰🇭", "New Zealand": "🇳🇿" };
const fullDate = d => { d = String(d || ""); return d.length === 4 ? d + "-01-01" : d.length === 7 ? d + "-01" : d; };   // "2026" / "2026-10" / "2026-10-10" compare correctly
const thumb = f => `src="assets/thumbs/${esc(f)}" onerror="this.onerror=null;this.src='assets/photos/${esc(f)}'"`;   // small copy for the grids (tools/make_thumbs.sh); falls back to the full photo
// dot-matrix world map (data/worldmap.js), shared by Reads and Plates: land is a grid of dots, each country in counts ({name: n}) gets a marker shaded by n (hover for the name and count, click to filter, click again to clear).
// A country with no position in COUNTRY_XY stays a flag button. Clicks are handled by the caller on [data-v]; mapTip(el) adds the hover label.
const worldMap = (counts, selected, label, rmax = 99, vs = 1, extra = {}) => {   // vs stretches the rows apart (dots stay round) for a taller map   // rmax caps a marker's radius (Travels has countries with hundreds of visits)
  const LAND = window.WORLD_LAND || [], XY = window.COUNTRY_XY || {}, cell = 5, W = 480, S = W / 72, H = LAND.length * S * vs;
  const names = Object.keys(counts), n = v => counts[v], mx = Math.max(1, ...names.map(n));
  const dots = []; LAND.forEach((rs, r) => { for (let c = 0; c < 72; c++) { const lon = -180 + cell * c + cell / 2; if (rs.some(([a, b]) => lon >= a && lon <= b)) dots.push(`<circle cx="${((c + .5) * S).toFixed(1)}" cy="${((r + .5) * S * vs).toFixed(1)}" r="1.9"/>`); } });
  const pins = names.filter(v => XY[v]).sort((a, b) => n(b) - n(a)).map(v => {   // big markers first, so small ones stay on top and clickable
    const [lat, lon] = XY[v], x = (lon + 180) / 360 * W, y = ((77.5 - lat) / cell * S + S / 2) * vs, k = n(v), r = Math.min(rmax, 4.5 + Math.sqrt(k) * 1.5), a = (.35 + .65 * k / mx).toFixed(2);
    return `<circle class="pin${v === selected ? " on" : ""}" data-name="${esc(v)}" data-v="${v === selected ? "" : esc(v)}" cx="${x.toFixed(1)}" cy="${y.toFixed(1)}" r="${r.toFixed(1)}" style="fill-opacity:${a}" tabindex="0" role="button" aria-pressed="${v === selected}" data-n="${k}"${extra[v] ? ` data-x="${esc(extra[v])}"` : ""} aria-label="${esc(v)}, ${k}${extra[v] ? ", " + esc(extra[v]) : ""}"></circle>`;
  }).join("");
  const rest = names.filter(v => !XY[v]).map(v => `<button type="button" class="tag${v === selected ? " on" : ""}" data-v="${v === selected ? "" : esc(v)}" title="${esc(v)}">${FLAGS[v] || esc(v)}</button>`).join("");
  return `<svg viewBox="0 0 ${W} ${H.toFixed(1)}" role="group" aria-label="${esc(label)}"><g class="land">${dots.join("")}</g>${pins}</svg>${rest ? `<div class="tags">${rest}</div>` : ""}`;
};
// hover / focus a map marker: a small label with the flag, the country name and its count; el's parent must be position: relative
const mapTip = (el, unit) => {
  const tip = document.createElement("div"); tip.className = "mtip"; tip.hidden = true; el.after(tip);
  const place = p => { const r = p.getBoundingClientRect(), box = el.parentNode.getBoundingClientRect(), k = p.dataset.n;
    tip.innerHTML = `<span class="mf">${FLAGS[p.dataset.name] || ""}</span><span><b>${esc(p.dataset.name)}</b><i>${k} ${unit}${k === "1" ? "" : "s"}${p.dataset.x ? ` · ${esc(p.dataset.x)}` : ""}</i></span>`; tip.hidden = false;
    tip.style.left = Math.max(0, Math.min(box.width - tip.offsetWidth, r.left - box.left + r.width / 2 - tip.offsetWidth / 2)) + "px";
    tip.style.top = (r.top - box.top - tip.offsetHeight - 8) + "px"; };
  el.addEventListener("pointerover", e => { const p = e.target.closest(".pin"); if (p) place(p); });
  el.addEventListener("pointerout", e => { if (e.target.closest(".pin")) tip.hidden = true; });
  el.addEventListener("focusin", e => { const p = e.target.closest(".pin"); if (p) place(p); });
  el.addEventListener("focusout", () => { tip.hidden = true; });
};
// line chart of estimated words per year, shared by Reads and Notes: words(n) is an entry's length, label(n) its name in the hover list, noun what an entry is called ("read" / "note").
// Hover / touch a year for its total and entries; click a year to show only that year (getYear / setYear keep the page's own filter; click again, or "Show all", to clear). Returns { sync() }, to call after every render.
const yearChart = (el, { list, words, label, noun, caption, getYear, setYear }) => {
    const yrs = list.map(n => +n.date.slice(0, 4));
    if (!yrs.length || !list.some(words)) return { sync() {} };
    const lo = Math.min(...yrs), hi = Math.max(...yrs), years = Array.from({ length: hi - lo + 1 }, (_, i) => lo + i);
    const tot = Object.fromEntries(years.map(y => [y, 0])), books = Object.fromEntries(years.map(y => [y, []]));
    list.forEach(n => { const y = +n.date.slice(0, 4); tot[y] += words(n); books[y].push(label(n)); });
    // the axis starts at 0, unless every year sits well above it (lowest year over 40% of the highest): then it starts at a round number just under the lowest year, so the line fills the chart instead of floating above an empty band
    const max = Math.max(...years.map(y => tot[y])), low = Math.min(...years.map(y => tot[y])), cut = low >= .4 * max && max > low, span = cut ? max - low : max, want = span / (cut ? 3 : 5) || 1;
    const step = ((raw, mag) => [1, 2, 5, 10].map(m => m * mag).find(v => v >= raw))(want, 10 ** Math.floor(Math.log10(want))), pad = cut ? .1 * span : 0;
    const base = cut ? Math.max(0, Math.floor((low - pad) / step) * step) : 0, top = Math.ceil((max + pad) / step) * step;
    const w = 480, h = 300, L = 42, R = 14, T = 14, B = 28, x = i => L + (years.length > 1 ? i * (w - L - R) / (years.length - 1) : 0), yv = v => T + (h - T - B) * (1 - (v - base) / (top - base));
    const k = v => v >= 1e6 ? v / 1e6 + "M" : v >= 10000 ? v / 1000 + "k" : v.toLocaleString("en-US"), fmt = v => v >= 1e6 ? (v / 1e6).toFixed(2).replace(/0$/, "") + "M" : v >= 10000 ? Math.round(v / 1000) + "k" : Math.round(v).toLocaleString("en-US");
    const grid = []; for (let v = base; v <= top; v += step) grid.push(`<line x1="${L}" x2="${w - R}" y1="${yv(v)}" y2="${yv(v)}"/><text x="${L - 6}" y="${yv(v) + 4}" text-anchor="end">${k(v)}</text>`);
    const pts = years.map((y, i) => `${x(i).toFixed(1)},${yv(tot[y]).toFixed(1)}`).join(" ");
    const every = years.length > 7 ? 2 : 1;   // the chart is drawn at its real size (480 wide), so labels are thinned to stay readable
    el.innerHTML = `<figcaption><span>${esc(caption)}</span><button type="button" class="rclear" hidden></button></figcaption>
      <svg viewBox="0 0 ${w} ${h}" role="img" aria-label="${esc(caption)}; click a year to show only its ${noun}s"><g class="g">${grid.join("")}</g>
      <line class="guide" y1="${T}" y2="${h - B}" style="display:none"/><polyline points="${pts}"/>
      ${years.map((y, i) => `<circle data-y="${y}" cx="${x(i).toFixed(1)}" cy="${yv(tot[y]).toFixed(1)}" r="3.5"/>${i % every === 0 ? `<text class="x" data-y="${y}" x="${x(i).toFixed(1)}" y="${h - 8}" text-anchor="middle">${y}</text>` : ""}`).join("")}
      <rect class="hit" x="0" y="0" width="${w}" height="${h}" fill="transparent"/></svg><div class="rtip" hidden></div>`;
    el.hidden = false;
    const svg = el.querySelector("svg"), guide = el.querySelector(".guide"), tip = el.querySelector(".rtip"), clear = el.querySelector(".rclear");
    const at = e => { const r = svg.getBoundingClientRect(), px = (e.clientX - r.left) / r.width * w; return Math.max(0, Math.min(years.length - 1, Math.round((px - L) / ((w - L - R) / Math.max(1, years.length - 1))))); };
    const show = i => {
      const y = years[i], n = books[y].length, shown = books[y].slice(0, 4);
      guide.setAttribute("x1", x(i)); guide.setAttribute("x2", x(i)); guide.style.display = "";
      el.querySelectorAll("circle").forEach(c => c.classList.toggle("hov", +c.dataset.y === y));
      tip.innerHTML = `<b>${y}</b> · about ${fmt(tot[y])} words · ${n} ${noun}${n === 1 ? "" : "s"}${n ? `<span>${shown.map(esc).join("<br>")}${n > 4 ? `<br>+${n - 4} more` : ""}</span>` : ""}`;
      tip.hidden = false;
      const r = svg.getBoundingClientRect(), f = el.getBoundingClientRect(), cx = r.left - f.left + x(i) / w * r.width;
      tip.style.left = Math.max(0, Math.min(f.width - tip.offsetWidth, cx - tip.offsetWidth / 2)) + "px";
      tip.style.top = Math.max(26, r.top - f.top + yv(tot[y]) / h * r.height - tip.offsetHeight - 12) + "px";
    };
    const hide = () => { guide.style.display = getYear() ? "" : "none"; tip.hidden = true; el.querySelectorAll("circle").forEach(c => c.classList.toggle("hov", false)); if (getYear()) guide.setAttribute("x1", x(years.indexOf(getYear()))), guide.setAttribute("x2", x(years.indexOf(getYear()))); };
    svg.addEventListener("pointermove", e => show(at(e)));
    svg.addEventListener("pointerdown", e => show(at(e)));
    svg.addEventListener("pointerleave", hide);
    svg.addEventListener("click", e => { const y = years[at(e)]; setYear(getYear() === y ? 0 : y); });
    clear.addEventListener("click", () => setYear(0));
    return { sync() {   // called by render(): mark the chosen year
      el.querySelectorAll("circle").forEach(c => c.classList.toggle("on", +c.dataset.y === getYear()));
      clear.hidden = !getYear(); clear.textContent = getYear() ? getYear() + " · Show all" : "";
      hide();
    } };
};
const orders = {};                       // tab -> [{slug, title}] newest first: the older / newer links at the foot of a page
const latest = [];                       // newest entry of each kind, for the line on Home
const slugify = s => String(s).toLowerCase().replace(/[^a-z0-9]+/g, "-").replace(/^-|-$/g, "");
const reader = document.createElement("div");
reader.id = "reader"; reader.hidden = true;
document.body.append(reader);
const popups = {};                       // tab -> slug -> html of the page body
// cross-references (data/related.js): every piece is known as "n:Title" (a Writing) or "r:Title" (a Read), so groups can point at each other
const xkeys = { notes: {}, reads: {} }, xinfo = {};
const xnorm = t => String(t).replace(/[’‘]/g, "'").trim();
function relatedHTML(tab, slug) {
  const key = tab === "notes" && slug.startsWith("book-") ? xkeys.reads[slug.slice(5)] : (xkeys[tab] || {})[slug];
  if (!key) return "";
  const out = [];
  for (const g of window.RELATED || []) {
    const ks = g.map(x => xnorm(x)), i = ks.indexOf(xnorm(key));
    if (i < 0) continue;
    for (const k of ks) if (k !== xnorm(key) && xinfo[k] && !out.includes(k)) out.push(k);
    if (out.length >= 5) break;
  }
  if (!out.length) return "";
  const fromWritings = tab === "notes";
  return `<nav class="rel" aria-label="Related"><small>Related</small>${out.slice(0, 5).map(k => { const x = xinfo[k]; return `<a href="${x.tag === "Book" && fromWritings ? x.hrefInNotes : x.href}"><em>${x.tag}</em><span class="rt">${esc(x.title)}</span>${x.sub ? `<span class="rs">${esc(x.sub)}</span>` : ""}</a>`; }).join("")}</nav>`;
}
let openTab = "";
let lastFocus = null, savedY = 0;   // savedY: where the page behind was scrolled when a pop-up opened
reader.setAttribute("role", "dialog"); reader.setAttribute("aria-modal", "true");
function pageNav(tab, slug) {
  const o = orders[tab], i = o ? o.findIndex(x => x.slug === slug) : -1;
  if (i < 0) return "";
  const link = (x, cls, label) => x ? `<a class="${cls}" href="#${tab}/${x.slug}"><small>${label}</small>${esc(x.title)}</a>` : "";
  const html = link(o[i - 1], "newer", "← Newer") + link(o[i + 1], "older", "Older →");
  return html ? `<nav class="pn" aria-label="More">${html}</nav>` : "";
}
function syncReader() {
  const m = location.hash.match(/^#(\w+)\/(.+)$/), was = !reader.hidden;
  const html = m && popups[m[1]] && popups[m[1]](decodeURIComponent(m[2]));
  const lock = on => { document.querySelector("main").inert = on; topBar.inert = on; };   // the page behind a pop-up can't be tabbed into
  if (!html) {
    reader.hidden = true; document.body.classList.remove("reading"); lock(false);
    if (was && lastFocus && document.contains(lastFocus)) lastFocus.focus({ preventScroll: true });
    if (was) { lastFocus = null; window.scrollTo(0, savedY); }   // closing returns to the same spot (the browser would jump to the top of the tab)
    return;
  }
  openTab = m[1];
  if (!was) { lastFocus = document.activeElement; savedY = window.scrollY; }
  reader.innerHTML = `<div class="sheet" tabindex="-1"><div class="bar"><button type="button" class="save" title="Save as image" aria-label="Save as image">↓</button><a class="close" href="#${openTab}" title="Close" aria-label="Close">✕</a></div><article>${html}</article>${relatedHTML(openTab, decodeURIComponent(m[2]))}${pageNav(openTab, m[2])}</div>`;
  const endEl = reader.querySelector("article .end"); if (endEl) reader.querySelector(".sheet").append(endEl);   // the copyright line closes the page, after Related and Older / Newer
  reader.setAttribute("aria-label", (reader.querySelector("h1") || {}).textContent || "Page");
  reader.hidden = false; reader.scrollTop = 0;
  document.body.classList.add("reading"); lock(true);
  reader.querySelector(".sheet").focus({ preventScroll: true });
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
    const endEl = reader.querySelector(".sheet > .end");   // the copyright line sits below the article on screen, but belongs in the picture
    if (endEl) { const c = endEl.cloneNode(true), cs = getComputedStyle(endEl); c.setAttribute("style", Array.from(cs).map(p => `${p}:${cs.getPropertyValue(p)}`).join(";")); c.style.padding = "0"; clone.append(c); }
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
// left / right arrows go to the newer / older page
document.addEventListener("keydown", e => {
  if (reader.hidden || e.altKey || e.ctrlKey || e.metaKey || e.shiftKey || (e.key !== "ArrowLeft" && e.key !== "ArrowRight")) return;
  const a = reader.querySelector(e.key === "ArrowLeft" ? ".pn .newer" : ".pn .older");
  if (a) { e.preventDefault(); location.hash = a.getAttribute("href"); }
});

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
  const mon = d => new Date(d + "T00:00:00").toLocaleDateString("en-US", { month: "short", year: "numeric" });
  // a project card: cover (or a quiet placeholder until there is one), place and date, title, summary, tags
  const row = (g) => `<a class="gcard" href="#gigs/${ids[all.indexOf(g)]}">${g.cover ? `<img class="gcov" ${thumb(g.cover)} alt="" loading="lazy" decoding="async">` : `<span class="gph">More to come</span>`}
    <span class="gm">${esc([g.venue, g.location, mon(g.date)].filter(Boolean).join(" · "))}</span><span class="gt">${esc(g.title)}</span>
    ${g.summary || g.note ? `<span class="gs">${esc(g.summary || g.note)}</span>` : ""}${(g.tags || []).length ? `<span class="gtags">${g.tags.map(t => `<span>${esc(t)}</span>`).join("")}</span>` : ""}</a>`;
  const up = all.filter(g => g.date >= today), past = all.filter(g => g.date < today).reverse();
  // an empty section shows nothing at all, not even its heading
  const fill = (id, list) => {
    const el = document.getElementById(id);
    el.innerHTML = list.length ? `<div class="gigs">${list.map(row).join("")}</div>` : "";
    el.previousElementSibling.hidden = !list.length || !(up.length && past.length);   // the Upcoming / Past labels only matter when there are both
  };
  const last = all.filter(g => g.date < today).pop() || all.find(g => g.date >= today);   // for Home: the newest past gig (the list is oldest first), else the nearest upcoming one
  if (last) latest.push({ date: last.date, kind: "gig", title: last.title + (last.location ? " in " + last.location.split(",")[0] : ""), href: "#gigs/" + ids[all.indexOf(last)] });
  fill("gigs-upcoming", up);
  fill("gigs-past", past);
  popups.gigs = slug => {
    const g = all[ids.indexOf(slug)];
    return g && detailPage({ title: g.title, meta: esc([mon(g.date), g.venue, g.location].filter(Boolean).join(" · ")), item: g });
  };
})();

const LANG_FLAGS = { Chinese: "🇨🇳", English: "🇺🇸", Japanese: "🇯🇵", Korean: "🇰🇷", French: "🇫🇷", "Traditional Chinese": "🇹🇼" };   // a flag stands for the language; unknown languages fall back to their name

// ---- one page layout for a note or a read: the text, the book card, photo, place and copyright
const hasLang = (n, l) => (n.languages || []).includes(l);
const notePage = (() => {
  const longDate = d => new Date(d + "T00:00:00").toLocaleDateString("en-US", { year: "numeric", month: "long", day: "numeric" });
  const rich = t => esc(t).replace(/\*\*(.+?)\*\*/g, "$1").replace(/\*(.+?)\*/g, "<em>$1</em>");   // *italic* in prose; text is never bold, so **x** just shows x
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
    : n.prose ? n.prose.map(([a, b, kind]) => `<div class="prose${kind === "h" ? " phead" : ""}"><p>${rich(a)}</p>${b ? `<p class="en">${rich(b)}</p>` : ""}</div>`).join("")
    : (n.body || []).map(p => `<p>${esc(p)}</p>`).join("");
  // book intro for Book: book: { cover: "file.jpg" (in assets/photos/), title, author, lines: ["detail", ...] }
  const bookHtml = b => !b ? "" : `<div class="book">${b.cover ? `<img class="bcover" src="assets/photos/${esc(b.cover)}" alt="">` : ""}
    <div class="binfo"><p class="bt">${esc(b.title)}</p>${b.author ? `<p class="ba">${esc(b.author)}</p>` : ""}${(b.lines || []).map(l => `<p class="bl">${esc(l)}</p>`).join("")}</div></div>`;
  // font for Japanese / Korean writing: Japanese-only notes are set in the Japanese face, notes with Korean get the Korean face on the Korean lines
  const nl = n => hasLang(n, "Korean") ? "ko" : hasLang(n, "Japanese") && !hasLang(n, "Chinese") && !hasLang(n, "Traditional Chinese") ? "ja" : "";
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
  // where each note was written: the country is the last part of the English line of its "place" ("Tokyo, Japan", "Livermore, CA"); a US state code or a Korean / Chinese line falls back to the United States
  const US_STATES = "AL AK AZ AR CA CO CT DE FL GA HI ID IL IN IA KS KY LA ME MD MA MI MN MS MO MT NE NV NH NJ NM NY NC ND OH OK OR PA RI SC SD TN TX UT VT VA WA WV WI WY DC".split(" ");
  const countryOf = n => { const ls = String(n.place || "").split("\n"), t = (ls[1] || "").split(",").pop().trim(); return US_STATES.includes(t) || /미국|美国/.test(ls.join(" ")) ? "United States" : t === "South Korea" ? "Korea" : /^[A-Za-z .'-]+$/.test(t) ? t : ""; };
  // the Chinese reviews in Reads are writing too, so they count toward the yearly total and the map (a read that shares another read's text, sameAs, is counted once)
  const chineseReads = (window.READS || []).filter(r => !r.sameAs && (r.languages || []).some(l => /Chinese/.test(l)));
  const everything = [...list, ...chineseReads];
  // the list shows these reads too, by their review title, each linking to its page in Reads (same link names as the Reads page gives them)
  const allReads = (window.READS || []).map(n => n.sameAs ? { ...window.READS.find(x => x.slug === n.sameAs), ...n } : n).sort((a, b) => (a.date < b.date ? 1 : -1));
  const readIds = slugs(allReads, n => n.title);
  const entries = [...list.map((n, i) => ({ n, href: "#notes/" + ids[i], cat: n.category })), ...allReads.map((n, i) => ({ n, href: "#notes/book-" + readIds[i], cat: "Book" })).filter(e => (e.n.languages || []).some(l => /Chinese/.test(l)))].sort((a, b) => (a.n.date < b.n.date ? 1 : -1));
  // on this page every read is simply a "Book" (its own genre stays on its pop-up); the category cards count notes and books together, most first
  const cats = [...new Set([...entries.map(e => e.cat).filter(Boolean), "Fiction"])].sort(   // Fiction: a placeholder card (0 for now) until the first piece of fiction goes in
    (a, b) => entries.filter(e => e.cat === b).length - entries.filter(e => e.cat === a).length);
  const countries = [...new Set(everything.map(countryOf).filter(Boolean))].sort((a, b) => everything.filter(n => countryOf(n) === b).length - everything.filter(n => countryOf(n) === a).length || (a < b ? -1 : 1));
  const countriesEl = document.getElementById("notes-countries");
  orders.notes = list.map((n, i) => ({ slug: ids[i], title: n.title }));
  list.forEach((n, i) => { const k = "n:" + xnorm(n.title); xkeys.notes[ids[i]] = k; xinfo[k] = { tag: "Writing", title: n.title, sub: n.category, href: "#notes/" + ids[i] }; });
  if (list[0]) latest.push({ date: list[0].date, kind: "note", title: list[0].title, href: "#notes/" + ids[0] });
  const on = { cat: "", country: "", year: 0 };
  // words written per year: the English side of each note (prose, blocks, poem and stanza pairs), counted as words
  const wc = t => (String(t || "").match(/[A-Za-z0-9\u00C0-\u024F]+(?:[’'-][A-Za-z0-9\u00C0-\u024F]+)*/g) || []).length;
  const wordsOf = n => (n.prose || []).reduce((t, p) => t + wc(p[1]), 0) + (n.blocks || []).reduce((t, b) => t + wc(b[2]), 0) + ((n.poem || {}).pairs || []).reduce((t, p) => t + wc(p[1]), 0) + (n.pairStanzas || []).flat().reduce((t, p) => t + wc(p[1]), 0) + (n.stanzas || []).flat().reduce((t, l) => t + wc(l), 0) + (n.body || []).reduce((t, p) => t + wc(p), 0);
  const chart = yearChart(document.getElementById("notes-chart"), { list: everything, words: wordsOf, label: n => n.title, noun: "writing", caption: "Words written per year", getYear: () => on.year, setYear: y => { on.year = y; renderList(); } });
  // left column: a card per category (like the Plates / Reads cards) and a world map of where the notes were written; a card or a country filters the list, click it again to clear
  const catCards = () => cats.length > 1 ? cats.map(v => `<button type="button" class="pcard${v === on.cat ? " on" : ""}" data-key="cat" data-v="${v === on.cat ? "" : esc(v)}" aria-pressed="${v === on.cat}"><span class="pn">${esc(v)}</span><b class="pc">${entries.filter(e => e.cat === v).length}</b></button>`).join("") : "";
  // grouped by year, newest year open; older years fold away (a filter opens every year that has a match)
  const years = [...new Set(entries.map(e => e.n.date.slice(0, 4)))];
  let sel = years.includes(String(new Date().getFullYear())) ? String(new Date().getFullYear()) : years[0];   // the year shown on the right: the current year, or the newest one that has pieces
  const shortDate = d => new Date(d + "T00:00:00").toLocaleDateString("en-US", { month: "short", day: "numeric" });
  // a year's books as one slow row of covers (like the flags in Travels): hover pauses it, a cover opens the book; a short row stays still
  const bookRow = books => {
    const cov = (e, dup) => `<a class="bc" href="${e.href}"${dup ? ' tabindex="-1"' : ""} title="${esc((e.n.book || {}).title || e.n.title)}">${(e.n.book || {}).cover ? `<img ${thumb(e.n.book.cover)} alt="" loading="lazy" decoding="async">` : `<span class="none"></span>`}</a>`;
    const moves = false;   // paintRows() below starts the drift once it knows how wide the covers are
    return `<div class="bkrow${moves ? " moves" : ""}"><div class="bkview"><div class="bk-track" style="--secs:${Math.max(20, books.length * 3)}s"><div class="bk-set">${books.map(e => cov(e)).join("")}</div>${moves ? `<div class="bk-set" aria-hidden="true">${books.map(e => cov(e, true)).join("")}</div>` : ""}</div></div></div>`;
  };
  const rows = es => es.map(({ n, href, cat }) => `<a class="note" href="${href}"><span class="d">${shortDate(n.date)}</span><span class="t">${esc(n.title)}</span>${cat ? `<span class="cat">${esc(cat)}</span>` : ""}</a>`).join("");
  // a year's cover row drifts whatever the number of books: the set is repeated until it is wider than the row, then drawn twice so the loop has no seam
  const paintRows = () => {
    listEl.querySelectorAll(".bkrow:not(.moves)").forEach(row => {
      const view = row.querySelector(".bkview"), track = row.querySelector(".bk-track"), set = track.querySelector(".bk-set");
      if (!set || set.children.length <= 4) return;   // four books or fewer stay still
      const one = set.innerHTML, w1 = set.offsetWidth;
      if (!w1 || !view.clientWidth) return;
      const reps = Math.max(1, Math.ceil(view.clientWidth / w1));
      set.innerHTML = one.repeat(reps);
      const dup = set.cloneNode(true); dup.setAttribute("aria-hidden", "true"); dup.querySelectorAll("a").forEach(a => a.tabIndex = -1);
      track.appendChild(dup);
      track.style.setProperty("--secs", Math.max(20, Math.round(w1 * reps / 40)) + "s");   // about 40px a second
      row.classList.add("moves");
    });
  };
  // the timeline is redrawn on every pick, so bring the chosen year back to the middle of it; while the page is hidden nothing can be measured, so it is tried again once the page shows
  let tlPending = false;
  const centerTl = () => {
    const tlEl = listEl.querySelector(".tl"), cur = tlEl && tlEl.querySelector("button.on");
    if (!cur) return;
    if (!tlEl.clientWidth) { tlPending = true; return; }
    tlPending = false;
    tlEl.scrollLeft = cur.offsetLeft - (tlEl.clientWidth - cur.offsetWidth) / 2;
  };
  const renderList = () => {
    const filtered = !!(on.cat || on.country || on.year);
    const shown = entries.filter(({ n, cat }) => (!on.cat || cat === on.cat) && (!on.country || countryOf(n) === on.country) && (!on.year || +n.date.slice(0, 4) === on.year));
    const byYear = years.map(y => [y, shown.filter(e => e.n.date.startsWith(y))]).filter(([, ns]) => ns.length);
    // the list shows one year at a time: the one picked on the timeline (the year filter picks it too); a year with no match falls back to the newest year that has one
    if (on.year) sel = String(on.year);
    if (!byYear.some(([y]) => y === sel)) sel = byYear.length ? byYear[0][0] : sel;
    const tl = `<div class="tl" role="group" aria-label="Timeline">${[...years].reverse().map(y => { const n = (byYear.find(b => b[0] === y) || [0, []])[1].length; return `<button type="button" data-tl="${y}" class="${n ? "" : "none"}${y === sel ? " on" : ""}" aria-pressed="${y === sel}" aria-label="${y}, ${n} ${n === 1 ? "writing" : "writings"}"><span class="dot"></span><span class="ty">${y}</span><span class="tc">${n}</span></button>`; }).join("")}</div>`;
    const cur1 = byYear.find(([y]) => y === sel);
    // with no filter, the year shows your own pieces and folds its books into one row of covers; any filter (Book card, a country) lists them all
    const body = cur1 ? (() => { const ns = cur1[1], notes = filtered ? ns : ns.filter(e => e.cat !== "Book"), books = filtered ? [] : ns.filter(e => e.cat === "Book"); return `<section class="ny open"><div class="yl">${rows(notes)}${books.length ? `<div class="bksec"><p class="sub">${books.length} ${books.length === 1 ? "book" : "books"} read in ${sel}</p>${bookRow(books)}</div>` : ""}</div></section>`; })() : `<p class="empty">Nothing yet.</p>`;
    listEl.innerHTML = tl + body;
    paintRows();
    // the timeline is redrawn on every pick, so bring the chosen year back to the middle of it
    centerTl();
    tagsEl.innerHTML = catCards();
    countriesEl.innerHTML = countries.length > 1 ? worldMap(Object.fromEntries(countries.map(c => [c, everything.filter(n => countryOf(n) === c).length])), on.country, "Where the notes were written") : "";
    chart.sync();
  };
  mapTip(countriesEl, "writing");
  countriesEl.addEventListener("click", e => { const b = e.target.closest("[data-v]"); if (b) { on.country = b.dataset.v; renderList(); } });
  new ResizeObserver(() => { paintRows(); if (tlPending) centerTl(); }).observe(listEl);   // the page starts hidden unless it is the one opened: start the covers drifting as soon as it has a width
  document.getElementById("notes").addEventListener("click", e => {
    const tb = e.target.closest("[data-tl]");   // a year on the timeline: show just that year
    if (tb) { sel = tb.dataset.tl; if (on.year) on.year = +sel; renderList(); return; }
    const b = e.target.closest("button[data-key]");
    if (b) { on[b.dataset.key] = b.dataset.v; renderList(); }
  });
  renderList();
  // a book opened from this page is #notes/book-<its Reads link name>: the page behind stays Writings, so closing it comes back here
  popups.notes = slug => { const n = list[ids.indexOf(slug)]; return n ? notePage(n) : slug.startsWith("book-") && popups.reads ? popups.reads(slug.slice(5)) : undefined; };
  // copyright line on the list page: the years the notes were written
  const ys = list.map(n => +n.date.slice(0, 4));
  if (ys.length) {
    const lo = Math.min(...ys), hi = Math.max(...ys);
    document.getElementById("notes-copy").textContent = `© ${lo === hi ? lo : lo + "–" + hi} Haotian He · hehaotian.com. All rights reserved.`;
  }
})();

// ---- reads: a wall of book covers; each opens the reader response as a page over the wall (#reads/the-title)
(function reads() {
  const raw = window.READS || [];
  const list = raw.map(n => n.sameAs ? { ...raw.find(x => x.slug === n.sameAs), ...n } : n).sort((a, b) => (a.date < b.date ? 1 : -1));   // sameAs: the text of another read
  const ids = slugs(list, n => n.title);
  // on the wall a book goes by its own name: "棉花帝国 (Empire of Cotton)" shows as 棉花帝国, "林奕含 Lin Yi-han" as 林奕含 (the page keeps both)
  const nonLatin = t => /[^\u0000-\u024f\u1e00-\u1eff\u2000-\u206f]/.test(t);
  const ownTitle = t => { const m = String(t).match(/^(.*?)\s*\([^)]*\)\s*$/); return m && nonLatin(m[1]) ? m[1] : t; };
  const ownAuthor = a => { const m = String(a).match(/^(.*?)\s+[\p{Script=Latin}][\p{Script=Latin}\s.'’-]*$/u); return m && nonLatin(m[1]) ? m[1] : a; };
  orders.reads = list.map((n, i) => ({ slug: ids[i], title: ownTitle((n.book || {}).title || n.title) }));
  list.forEach((n, i) => { if (n.sameAs) return; const k = "r:" + xnorm(n.title); xkeys.reads[ids[i]] = k; xinfo[k] = { tag: "Book", title: n.title, sub: ownTitle((n.book || {}).title || ""), href: "#reads/" + ids[i], hrefInNotes: "#notes/book-" + ids[i] }; });
  if (list[0]) latest.push({ date: list[0].date, kind: "read", title: orders.reads[0].title, href: "#reads/" + ids[0] });
  const card = (n, i) => { const b = n.book || {};
    return `<a class="read" href="#reads/${ids[i]}">${b.cover ? `<img class="rcov" ${thumb(b.cover)} alt="" loading="lazy" decoding="async">` : `<span class="rcov none"></span>`}
      <span class="rt">${esc(ownTitle(b.title || n.title))}</span>${b.author ? `<span class="ra">${esc(ownAuthor(b.author))}</span>` : ""}</a>`; };
  // filter by the country the book was first published in (book.country, a string or a list) as a flag, most common first; no filter row when there is only one
  const countriesOf = n => [].concat((n.book || {}).country || []);
  const countries = [...new Set(list.flatMap(countriesOf))].sort((a, b) => list.filter(n => countriesOf(n).includes(b)).length - list.filter(n => countriesOf(n).includes(a)).length || (a < b ? -1 : 1));
  const countriesEl = document.getElementById("reads-countries"), listEl = document.getElementById("reads-list");
  // genre cards (like the Plates collection cards): a card filters the wall by book.category / the note's category and combines with the country flags; "More" is every other category
  const GENRES = [["novel", "Novels", ["Novel", "Short stories"]], ["history", "History", ["History", "Oral history", "Ethnography"]], ["philosophy", "Philosophy", ["Philosophy", "Political thought"]], ["memoir", "Memoirs", ["Memoir"]], ["economics", "Economics", ["Economics"]]];
  const known = GENRES.flatMap(g => g[2]);
  const inGenre = (n, k) => { const c = n.category || (n.book || {}).category || ""; const g = GENRES.find(x => x[0] === k); return g ? g[2].includes(c) : !known.includes(c); };
  // line chart: words read per year (catalog word counts, with explicitly marked fallbacks where no edition-level count is published online). Combines with the genre cards and flags.
  const READ_W = window.READ_WORDS || {};
  const chart = yearChart(document.getElementById("reads-chart"), { list, words: n => (READ_W[(n.book || {}).cover] || {}).words || 0, label: n => ownTitle((n.book || {}).title || n.title), noun: "read", caption: "Words read per year", getYear: () => year, setYear: y => { year = y; render(); } });
  // country filter as a dot-matrix world map (data/worldmap.js): land is a grid of dots, each country with books gets a marker shaded by how many (hover for the name and count, click to filter, click again to clear).
  // Set MAP to false to go back to the row of flag buttons.
  const MAP = true;
  const wordsIn = v => list.filter(b => countriesOf(b).includes(v)).reduce((t, b) => t + ((READ_W[(b.book || {}).cover] || {}).words || 0), 0);
  const wordLabel = w => w ? (w >= 1e6 ? (w / 1e6).toFixed(2).replace(/0$/, "") + "M" : w >= 10000 ? Math.round(w / 1000) + "k" : w.toLocaleString("en-US")) + " words" : "";
  const mapHtml = () => worldMap(Object.fromEntries(countries.map(v => [v, list.filter(b => countriesOf(b).includes(v)).length])), country, "Where the books were first published", 99, 1, Object.fromEntries(countries.map(v => [v, wordLabel(wordsIn(v))])));
  const genreEl = document.getElementById("reads-genres");
  let genre = "", country = "", year = 0;
  const render = () => {
    const shown = list.map((n, i) => [n, i]).filter(([n]) => (!genre || inGenre(n, genre)) && (!country || countriesOf(n).includes(country)) && (!year || +n.date.slice(0, 4) === year));
    listEl.innerHTML = shown.length ? shown.map(([n, i]) => card(n, i)).join("") : `<p class="empty">Nothing yet.</p>`;
    genreEl.innerHTML = [...GENRES.map(g => [g[0], g[1]]), ["more", "More"]].filter(([k]) => list.some(n => inGenre(n, k))).map(([k, l]) =>
      `<button type="button" class="pcard${k === genre ? " on" : ""}" data-genre="${k === genre ? "" : k}" aria-pressed="${k === genre}"><span class="pn">${l}</span><b class="pc">${list.filter(n => inGenre(n, k)).length}</b></button>`).join("");
    countriesEl.innerHTML = countries.length > 1 ? (MAP ? mapHtml() : countries.map(v => `<button type="button" class="tag${v === country ? " on" : ""}" data-v="${v === country ? "" : esc(v)}" title="${esc(v)}" aria-label="${esc(v)}" aria-pressed="${v === country}">${FLAGS[v] || esc(v)}</button>`).join("")) : "";   // no "All": click the chosen one again to clear it
    chart.sync();
  };
  if (MAP) mapTip(countriesEl, "book");
  countriesEl.addEventListener("click", e => { const b = e.target.closest("[data-v]"); if (b) { country = b.dataset.v; render(); } });
  genreEl.addEventListener("click", e => { const b = e.target.closest("button[data-genre]"); if (b) { genre = b.dataset.genre; render(); } });
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
  // A place can carry a Michelin mark AND Blue Ribbons (blueRibbon: 1-3, Korea's own restaurant survey), so the two are kept apart:
  //   ribbons(p) = its Blue Ribbon level; mRank(p) = its Michelin-side category (null for a place that only has ribbons)
  const ribbons = p => Math.max(0, Math.min(3, +p.blueRibbon || 0));
  const mRank = p => p.stars || (p.bib ? 0.5 : p.recommended ? 0.25 : ribbons(p) || p.world50 ? null : 0.22);
  // grid order: stars > Bib > Michelin recommended > Blue Ribbon only (3, 2, 1) > Haotian Recommend (everything else); ribbons break ties inside a group
  const haos = p => (mRank(p) === 0.22 ? Math.max(1, Math.min(3, +p.haotian || 1)) : 0);
  const rank = p => (mRank(p) ?? 0.24) + ribbons(p) * 0.001 + (p.world50 ? 0.005 : 0) + haos(p) * 0.001;   // "world50: true" = on The World's 50 Best Restaurants list, a tie-breaker inside a group
  const sortKey = p => (p.keepOrder ? "" : p.date) || "";   // keepOrder: show the date but keep the old place in the grid
  const hasText = p => (p.body && p.body.length ? 1 : 0);   // places with a write-up come first, bare ones sink to the bottom; each half keeps the star order
  list.sort((a, b) => hasText(b) - hasText(a) || rank(b) - rank(a) || (sortKey(a) < sortKey(b) ? 1 : -1));
  const ids = slugs(list, p => p.name);
  // The real Michelin icons: assets/michelin-star.webp (and assets/michelin-bib.svg when you have it);
  // if a file is missing the page falls back to a plain star / the word Bib.
  const starImg = '<img class="mstar" src="assets/michelin-star.webp" alt="star" onerror="this.replaceWith(\'★\')">';
  // Blue Ribbon Survey (Korea's own restaurant guide): one ribbon per level on a card (blueRibbon: 1-3), a single ribbon in the tally and the filter
  const ribbon = '<img class="mbr" src="assets/blue-ribbon.png" alt="Blue Ribbon" data-tip="Blue Ribbon Survey" onerror="this.replaceWith(\'Blue Ribbon\')">';
  const bibImg = '<img class="mbib" src="assets/michelin-bib.svg" alt="Bib Gourmand" onerror="this.replaceWith(\'Bib\')">';
  // The World's 50 Best Restaurants (world50: true): its own category, shown after the Michelin mark and before any ribbons
  const w50Img = '<img class="mw50" src="assets/world-50-best.png" alt="The World’s 50 Best Restaurants" data-tip="The World’s 50 Best Restaurants" onerror="this.replaceWith(\'50 Best\')">';
  // world50 can be true, its place on the World's list (48), the name of another World's list ("Vineyards"), or {"list": "North America's 50 Best Restaurants", "rank": 32} for any list: the logo's hover text and screen-reader text say which; nothing is printed beside it
  const w50Of = p => { const w = p.world50, o = w && typeof w === "object" ? w : null; const list = o ? o.list : typeof w === "string" ? `The World’s 50 Best ${w}` : "The World’s 50 Best Restaurants"; const rank = o ? +o.rank : +w > 1 ? +w : 0; const t = list + (rank ? ", No. " + rank : ""); return w50Img.replace(/(alt|data-tip)="The World’s 50 Best Restaurants"/g, `$1="${t}"`); };
  const recImg = '<img class="mrec" src="assets/michelin-recommended.svg" alt="Michelin recommended" data-tip="Michelin recommended" onerror="this.replaceWith(\'Rec.\')">';
  const hrImg = '<img class="mhr" src="assets/haotian-recommend.svg" alt="Haotian Recommend" data-tip="Haotian Recommend" onerror="this.replaceWith(\'H\')">';   // every place without a Michelin or Apple mark
  // date may be "YYYY-MM-DD", "YYYY-MM" or "YYYY"; show as much of it as is given
  const when = (d, mo) => { d = String(d); const [y, m, day] = d.split("-"); return !m ? y : new Date(`${y}-${m}-${day || "01"}T00:00:00`).toLocaleDateString("en-US", { year: "numeric", month: mo, ...(day && { day: "numeric" }) }); };
  // the Michelin mark (or Haotian Recommend when there is nothing else), then the ribbons after a thin divider
  const mark = p => {
    const m = p.stars ? starImg.repeat(p.stars) : p.bib ? bibImg : p.recommended ? recImg : ribbons(p) || p.world50 ? "" : hrImg.repeat(haos(p));
    return [m, p.world50 ? w50Of(p) : "", ribbons(p) ? ribbon.repeat(ribbons(p)) : ""].filter(Boolean).join('<span class="msep"></span>');
  };
  const card = (p, i) => `<a class="plate" href="#plates/${ids[i]}">${p.cover ? `<img class="cov" ${thumb(p.cover)} alt="" loading="lazy" decoding="async">` : ""}<span class="st">${mark(p)}</span><span class="nm">${esc(p.name)}</span>
      <span class="ct">${esc(p.city)}</span>${p.date ? `<span class="yr">${esc(when(p.date, "short"))}</span>` : ""}</a>`;
  // categories: a place counts in its Michelin-side category AND in its ribbon level, so one with both (a star and 2 ribbons) is found under each
  const CATS = [["w50", "W50"], ["w50r", "W50R"], ["w50n", "W50N"], ["w50v", "W50V"], [3, "★★★"], [2, "★★"], [1, "★"], [0.5, "Bib"], [0.25, "REC"], ["br3", "BR3"], ["br2", "BR2"], ["br1", "BR1"], ["hao3", "HAO3"], ["hao2", "HAO2"], ["hao1", "HAO1"]];
  const w50List = p => { const w = p.world50, n = String(w && typeof w === "object" ? w.list : typeof w === "string" ? w : ""); return /vineyard/i.test(n) ? "w50v" : /north america/i.test(n) ? "w50n" : "w50r"; };   // which 50 Best list: restaurants, North America or vineyards
  const inCat = (p, k) => k === "w50" ? !!p.world50 : typeof k === "string" && k.startsWith("w50") ? !!p.world50 && w50List(p) === k : typeof k === "string" ? (k.startsWith("hao") ? haos(p) === +k.slice(3) : ribbons(p) === +k.slice(2)) : mRank(p) === k;
  const count = k => list.filter(p => inCat(p, k)).length;
  const label = s => s.replace(/★/g, starImg).replace(/^W50$/, w50Img).replace(/^W50R$/, "Worldwide").replace(/^W50N$/, "North America").replace(/^W50V$/, "Vineyards").replace(/^Bib$/, bibImg).replace(/^BR([123])$/, (m, n) => ribbon.repeat(+n)).replace(/^REC$/, recImg).replace(/^HAO([123])$/, (m, n) => hrImg.repeat(+n));
  // four collection cards (World's 50 Best, Michelin, Blue Ribbon, Haotian Recommends); a card filters the grid, and Michelin / Blue Ribbon list their levels
  const GROUPS = [
    { key: "w50", name: "The 50 Best", logo: w50Img, cats: ["w50r", "w50n", "w50v"] },
    { key: "mich", name: "Michelin", logo: starImg, cats: [3, 2, 1, 0.5, 0.25], lines: [[3], [2], [1, 0.5, 0.25]] },
    { key: "br", name: "Blue Ribbon", logo: ribbon, cats: ["br3", "br2", "br1"] },
    { key: "hao", name: "Haotian Haochi", logo: hrImg, cats: ["hao3", "hao2", "hao1"] }
  ];
  const inGroup = (p, g) => g.cats.some(k => inCat(p, k));
  const groupCount = g => list.filter(p => inGroup(p, g)).length;
  const catLabel = Object.fromEntries(CATS);
  // filters: distinction (category) and country, combinable; country comes from the end of "City, ST" / "City, Country"
  const CA = ["AB", "BC", "MB", "NB", "NL", "NS", "NT", "NU", "ON", "PE", "QC", "SK", "YT"];
  const US = "AL AK AZ AR CA CO CT DE FL GA HI ID IL IN IA KS KY LA ME MD MA MI MN MS MO MT NE NV NH NJ NM NY NC ND OH OK OR PA RI SC SD TN TX UT VT VA WA WV WI WY DC PR".split(" ");   // so "London, UK" is not read as a state
  const countryOf = p => { const t = (p.city || "").split(",").pop().trim(); return CA.includes(t) ? "Canada" : US.includes(t) ? "United States" : t; };
  const countries = [...new Set(list.map(countryOf).filter(Boolean))].sort((a, b) => list.filter(p => countryOf(p) === b).length - list.filter(p => countryOf(p) === a).length || (a < b ? -1 : 1));
  const on = { group: "", cat: "", country: "" };
  const newest = list.filter(p => p.date).sort((a, b) => (fullDate(a.date) < fullDate(b.date) ? 1 : -1))[0];
  if (newest) latest.push({ date: fullDate(newest.date), kind: "plate", title: newest.name, href: "#plates/" + ids[list.indexOf(newest)] });
  const tallyEl = document.getElementById("plates-tally"), catsEl = document.getElementById("plates-cats"), countriesEl = document.getElementById("plates-countries"), listEl = document.getElementById("plates-list");
  const row = (items, key) => items.length > 1 ? [["", "All"], ...items].map(([v, l]) =>
    `<button type="button" class="tag${String(v) === on[key] ? " on" : ""}" data-key="${key}" data-v="${esc(String(v))}"${key === "country" && FLAGS[l] ? ` title="${esc(l)}" aria-label="${esc(l)}"` : ""}>${key === "cat" ? label(l) : FLAGS[l] || esc(l)}</button>`).join("") : "";
  const renderPlates = () => {
    const g = GROUPS.find(x => x.key === on.group);
    const shown = list.map((p, i) => [p, i]).filter(([p]) => (!g || inGroup(p, g)) && (on.cat === "" || inCat(p, isNaN(+on.cat) ? on.cat : +on.cat)) && (!on.country || countryOf(p) === on.country));
    listEl.innerHTML = shown.length ? shown.map(([p, i]) => card(p, i)).join("") : `<p class="empty">${list.length ? "No plates match." : "Nothing yet."}</p>`;
    tallyEl.innerHTML = GROUPS.filter(x => groupCount(x)).map(x => {
      const sub = k => `<span class="ps">${label(catLabel[k])}<b>${count(k)}</b></span>`;   // x.lines puts several levels on one line (Michelin: 1 star, Bib and Recommended together)
      const subs = x.cats.length > 1 ? (x.lines || x.cats.map(k => [k])).map(ks => ks.filter(k => count(k)).map(sub).join("")).filter(Boolean).map(h => `<span class="pline">${h}</span>`).join("") : "";
      return `<button type="button" class="pcard${x.key === on.group ? " on" : ""}" data-key="group" data-v="${x.key === on.group ? "" : x.key}" aria-pressed="${x.key === on.group}"><span class="pl">${x.logo}</span><span class="pn">${x.name}</span><b class="pc">${groupCount(x)}</b>${subs ? `<span class="psub">${subs}</span>` : ""}</button>`;
    }).join("");
    catsEl.innerHTML = g && g.cats.length > 1 ? row(g.cats.filter(k => count(k)).map(k => [k, catLabel[k]]), "cat") : "";
    countriesEl.innerHTML = countries.length > 1 ? worldMap(Object.fromEntries(countries.map(c => [c, list.filter(p => countryOf(p) === c).length])), on.country, "Where the restaurants are") : "";   // click a marker to filter, again to clear
  };
  mapTip(countriesEl, "restaurant");
  countriesEl.addEventListener("click", e => { const b = e.target.closest("[data-v]"); if (b) { on.country = b.dataset.v; renderPlates(); } });
  document.getElementById("plates").addEventListener("click", e => {
    const b = e.target.closest("button[data-key]");
    if (b) { on[b.dataset.key] = b.dataset.v; if (b.dataset.key === "group") on.cat = ""; renderPlates(); }
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
    // the Chinese, Japanese and Korean versions are AI translations: they carry a ✦ tag under the switch and a disclaimer above the copyright line
    const AI = { zh: ["AI 翻译", "本页中文由 AI 翻译自英文原文，可能存在不准确之处，请以英文原文为准。"], ja: ["AI翻訳", "このページの日本語は英語の原文から AI が翻訳したもので、不正確な部分が含まれる可能性があります。英語の原文を正としてください。"], ko: ["AI 번역", "이 페이지의 한국어는 영어 원문을 AI가 번역한 것으로, 부정확한 부분이 있을 수 있습니다. 영어 원문을 기준으로 해 주세요."] }[lang];
    const tools = opts.length > 1 ? `<p class="langsw">${opts.map(([c, l]) => `<button type="button" data-lang="${c}" class="${c === lang ? "on" : ""}">${l}</button>`).join("")}</p>` + (AI ? `<p class="aitag" lang="${lang}"><span aria-hidden="true">✦</span> ${AI[0]}</p>` : "") : "";
    return detailPage({ kind: mark(p), title: p.name, meta: esc([p.city, p.date && when(p.date, "long")].filter(Boolean).join(" · ")), item: lang === "en" ? p : { ...p, body: p["body_" + lang] }, tools, lang }) + (AI ? `<p class="aidisc" lang="${lang}">${AI[1]}</p>` : "") + `<p class="end">© ${esc(String(p.date || new Date().getFullYear()).slice(0, 4))} Haotian He · hehaotian.com. All rights reserved.</p>`;
  };
})();

// ---- goods: a dashboard. KPI tiles, charts by year and by cause, then one expandable card per recipient.
(function goods() {
  const list = (window.GOODS || []).slice().sort((a, b) => (a.date < b.date ? 1 : -1));
  const $ = id => document.getElementById(id);
  const month = d => new Date(d + "-01T00:00:00").toLocaleDateString("en-US", { year: "numeric", month: "short" });
  const money = n => "$" + n.toLocaleString();
  const pc = f => f > 0 && f < .005 ? "<1%" : Math.round(f * 100) + "%";   // never show a real gift as 0%
  const gifts = n => `${n} ${n === 1 ? "giving" : "givings"}`;
  const amt = g => Number(g.amount) || 0;
  const cz = g => g.cause || "Other";   // the cause belongs to each gift: one recipient can be given to for several causes
  const places = window.GOOD_PLACES || {};
  // a cause keeps its colour for good: slots go in order of first gift, never by rank; past five (and "Other") it is grey
  const order = []; list.slice().reverse().forEach(g => { if (g.cause && !order.includes(g.cause)) order.push(g.cause); });
  const slot = c => { const i = order.indexOf(c); return i > -1 && i < 5 ? i + 1 : 0; };
  const paint = c => `var(--c${slot(c)})`;
  const sum = list.reduce((t, g) => t + amt(g), 0);
  if (list[0]) latest.push({ date: list[0].date, kind: "gift", title: list[0].what, href: "#goods" });   // newest first, so [0]
  if (!sum) return;

  const byCause = {};
  list.forEach(g => { const t = byCause[cz(g)] || (byCause[cz(g)] = { sum: 0, n: 0 }); t.sum += amt(g); t.n++; });
  const causes = Object.entries(byCause).sort((x, y) => y[1].sum - x[1].sum);

  // 1. KPI tiles
  const yearOf = g => +g.date.slice(0, 4), first = Math.min(...list.map(yearOf)), last = Math.max(...list.map(yearOf));
  const big = list.reduce((a, g) => (amt(g) > amt(a) ? g : a));
  const kpis = [
    { dark: 1, label: "Total given", value: money(sum), sub: `since ${first}` },
    { label: "Givings", value: list.length, sub: `over ${last - first + 1} ${last - first ? "years" : "year"}` },
    { label: "Recipients", value: new Set(list.map(g => g.what)).size, sub: `${causes.length} ${causes.length === 1 ? "cause" : "causes"}` },
    { label: "Largest giving", value: money(amt(big)), sub: `${esc(big.what)} · ${month(big.date)}` },
  ];
  $("goods-kpis").innerHTML = kpis.map(k => `<div class="kpi${k.dark ? " dark" : ""}"><p class="kl">${k.label}</p><p class="kv">${k.value}</p><p class="ks">${k.sub}</p></div>`).join("");

  // the AI assessment (text lives in data/goods.js); says so when gifts have been added since it was written
  const V = window.GOOD_VERDICT;
  if (V && V.headline) {
    const since = list.length - (V.gifts || list.length);
    const asOf = V.asOf ? new Date(V.asOf + "-01T00:00:00").toLocaleDateString("en-US", { month: "long", year: "numeric" }) : "";
    $("goods-verdict").innerHTML = `<p class="vk"><span aria-hidden="true">✦</span> AI assessment</p>
      <h3 class="vh">${esc(V.headline)}</h3>
      <div class="vp">${(V.points || []).map(([lead, text]) => `<p><strong>${esc(lead)}</strong> ${esc(text)}</p>`).join("")}</div>
      ${V.verdict ? `<p class="vv"><strong>Verdict.</strong> ${esc(V.verdict)}</p>` : ""}
      <p class="vf">Written by ${esc(V.by || "AI")} from ${V.gifts || list.length} givings${asOf ? ` through ${asOf}` : ""}. An opinion from the numbers, not financial or tax advice.${since > 0 ? ` <em>${since} ${since === 1 ? "giving has" : "givings have"} been added since, so this may be out of date.</em>` : ""}</p>`;
    $("goods-verdict").hidden = false;
  }

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
    return `<div class="ycol" tabindex="0" data-tip="${esc(`${y} · ${tot ? `${money(tot)} · ${gifts(gs.length)} · ${detail}` : "no givings"}`)}">
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

// Home: under its name and tagline, each page row shows its newest entry (Gigs has none)
function fillLatest() {
  document.querySelectorAll("[data-latest]").forEach(el => {
    const x = latest.find(l => l.kind === el.dataset.latest);
    if (!x) return;
    const when = new Date(fullDate(x.date) + "T00:00:00").toLocaleDateString("en-US", { month: "long", year: "numeric" });   // "November 2026"
    el.href = x.href; if (x.href.startsWith("steps/")) { el.target = "_blank"; el.rel = "noopener"; }   // the Steps map opens in a new window
    el.innerHTML = `<small>Latest</small><span class="lt">${esc(x.title)}</span><span class="ld">${when}</span>`; el.hidden = false;
  });
}
fillLatest();

// Steps: the last place visited away from home ("Los Angeles, CA"). The place list is big, so it loads quietly after the page is up; later stops (planned trips) are ignored.
(function () {
  const ST = { Alabama: "AL", Alaska: "AK", Arizona: "AZ", Arkansas: "AR", California: "CA", Colorado: "CO", Connecticut: "CT", Delaware: "DE", Florida: "FL", Georgia: "GA", Hawaii: "HI", Idaho: "ID", Illinois: "IL", Indiana: "IN", Iowa: "IA", Kansas: "KS", Kentucky: "KY", Louisiana: "LA", Maine: "ME", Maryland: "MD", Massachusetts: "MA", Michigan: "MI", Minnesota: "MN", Mississippi: "MS", Missouri: "MO", Montana: "MT", Nebraska: "NE", Nevada: "NV", "New Hampshire": "NH", "New Jersey": "NJ", "New Mexico": "NM", "New York": "NY", "North Carolina": "NC", "North Dakota": "ND", Ohio: "OH", Oklahoma: "OK", Oregon: "OR", Pennsylvania: "PA", "Rhode Island": "RI", "South Carolina": "SC", "South Dakota": "SD", Tennessee: "TN", Texas: "TX", Utah: "UT", Vermont: "VT", Virginia: "VA", Washington: "WA", "West Virginia": "WV", Wisconsin: "WI", Wyoming: "WY", "District of Columbia": "DC" };
  // home (the San Francisco Bay Area: anywhere within 75 km of San Francisco) does not count as a step: "latest" is the last place away from home
  const HOME = { lat: 37.7749, lng: -122.4194, km: 75 };
  const km = (a, b, c, d) => { const r = Math.PI / 180, h = Math.sin((c - a) * r / 2) ** 2 + Math.cos(a * r) * Math.cos(c * r) * Math.sin((d - b) * r / 2) ** 2; return 12742 * Math.asin(Math.sqrt(h)); };
  const atHome = p => km(HOME.lat, HOME.lng, p.lat, p.lng) <= HOME.km;
  const go = () => {
    const sc = document.createElement("script");
    sc.src = "steps/places.js";
    sc.onload = () => {
      if (window.travelsInit) window.travelsInit(window.PLACES || []);   // Travels uses the same place list
      // the stop list holds real dates, planned trips included: "latest" is the last stop away from home that has begun by today's date on the real calendar (local time), recomputed every time the page loads
      const today = new Date().toLocaleDateString("en-CA");   // YYYY-MM-DD
      const here = (window.PLACES || []).filter(p => p.from <= today && !atHome(p)).sort((a, b) => (a.from < b.from ? -1 : 1)).pop();
      if (!here) return;
      const [city, region, country] = here.name.split(",").map(t => t.trim());
      const where = country === "United States" && ST[region] ? `${city}, ${ST[region]}` : `${city}, ${country || region}`;
      latest.push({ date: here.from, kind: "step", title: where, href: "#travels/city:" + encodeURIComponent(here.name) });   // Travels opens that city's country with the city selected
      fillLatest();
    };
    document.head.append(sc);
  };
  (window.requestIdleCallback || (f => setTimeout(f, 300)))(go);
})();

// ---- travels: a flag for every country in the Steps place list; a flag (or a pin) switches the world map to that country's cities
(function travels() {
  const ISO = { "United States": "US", "China": "CN", "Canada": "CA", "Japan": "JP", "South Korea": "KR", "Taiwan": "TW", "France": "FR", "Italy": "IT", "United Kingdom": "GB", "Russia": "RU", "Mexico": "MX", "Vietnam": "VN", "Germany": "DE", "Spain": "ES", "Peru": "PE", "Denmark": "DK", "Portugal": "PT", "Belgium": "BE", "Switzerland": "CH", "Chile": "CL", "Iceland": "IS", "The Bahamas": "BS", "Cambodia": "KH", "Sweden": "SE", "Netherlands": "NL", "Philippines": "PH", "Indonesia": "ID", "Greece": "GR", "Türkiye": "TR", "Mongolia": "MN", "Singapore": "SG", "Greenland": "GL", "Morocco": "MA", "Panama": "PA", "Ireland": "IE", "Belize": "BZ", "Norway": "NO", "Andorra": "AD", "Egypt": "EG", "Monaco": "MC", "Sudan": "SD", "French Polynesia": "PF", "United Arab Emirates": "AE", "Thailand": "TH", "Austria": "AT", "Hong Kong": "HK", "India": "IN", "Australia": "AU", "New Zealand": "NZ", "Czechia": "CZ", "Hungary": "HU", "Poland": "PL", "Finland": "FI", "Croatia": "HR", "Malaysia": "MY", "Argentina": "AR", "Uruguay": "UY", "Brazil": "BR", "Colombia": "CO", "Cuba": "CU", "Costa Rica": "CR" };
  // what a country calls its first-level divisions (the second part of "City, Region, Country"); "" = a city-state with none. Anything not listed says "region".
  const DIV = { "United States": "state", "Canada": "province", "China": "province", "Japan": "prefecture", "South Korea": "province", "Taiwan": "city/county", "Mexico": "state", "Germany": "state", "Australia": "state/territory", "Russia": "region", "Vietnam": "province", "Cambodia": "province", "Mongolia": "province", "Sudan": "state", "Argentina": "province", "Uruguay": "department", "Netherlands": "province", "Switzerland": "canton", "Belgium": "region", "Italy": "region", "France": "region", "Spain": "community", "Denmark": "region", "Sweden": "county", "Norway": "county", "Ireland": "province", "United Kingdom": "nation", "Portugal": "district", "Peru": "region", "Chile": "region", "Greece": "region", "Egypt": "governorate", "Morocco": "region", "Türkiye": "province", "Panama": "province", "Belize": "district", "The Bahamas": "district", "Iceland": "region", "United Arab Emirates": "emirate", "Greenland": "municipality", "French Polynesia": "island group", "Philippines": "region", "Indonesia": "province", "Andorra": "parish", "Singapore": "", "Monaco": "" };
  const PLURAL = { "city/county": "cities/counties", "state/territory": "states/territories" };
  const divWord = (c, n) => { const w = c in DIV ? DIV[c] : "region"; return !w ? "city-state" : n === 1 ? w : PLURAL[w] || (/[^aeiou]y$/.test(w) ? w.slice(0, -1) + "ies" : w + "s"); };
  const flag = c => ISO[c] ? String.fromCodePoint(...[...ISO[c]].map(ch => 127397 + ch.charCodeAt(0))) : "";
  const flagsEl = document.getElementById("travels-flags"), mapEl = document.getElementById("travels-countries"), pane = document.getElementById("travels-country"), head = document.getElementById("travels-head");
  let byCountry = {}, order = [], current = "", lmap = null, layer = null, loading = null, markers = {}, sel = null;
  const loadLeaflet = () => loading || (loading = new Promise((ok, no) => {
    const css = document.createElement("link"); css.rel = "stylesheet"; css.href = "https://unpkg.com/leaflet@1.9.4/dist/leaflet.css"; document.head.append(css);
    const sc = document.createElement("script"); sc.src = "https://unpkg.com/leaflet@1.9.4/dist/leaflet.js"; sc.onload = ok; sc.onerror = () => { loading = null; no(); }; document.head.append(sc);
  }));
  // a city on the country map opens a pop-up next to its pin: local name first, English second, its visits and (when matched) its photos at their natural shape
  const MON = ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"];
  // the map is only as tall as it needs to be (540px at least); a pop-up taller than that stretches it, and it relaxes again on close
  const fitMap = m => {
    const box = document.getElementById("travels-leaflet"), pop = m.getPopup() && m.getPopup().getElement();
    if (!pop || !m.isPopupOpen()) return;
    const need = pop.querySelector(".leaflet-popup-content-wrapper").offsetHeight + 110;
    const want = need > 540 ? need + "px" : "";
    if (box.style.minHeight !== want) { box.style.minHeight = want; lmap.invalidateSize(); m.getPopup().update(); }
  };
  const paintSel = () => Object.entries(markers).forEach(([k, m]) => m.setStyle(k === sel ? { fillColor: "#fff", color: "#111", weight: 3, fillOpacity: 1 } : { fillColor: "#111", color: "#fff", weight: 1.5, fillOpacity: .8 }));
  const popupNode = c => {
    const box = document.createElement("div"); box.className = "tcc"; let idx = 0;
    const mon = d => new Date(d + "T00:00:00").toLocaleDateString("en-US", { month: "short", year: "numeric" }), ds = c.dates.slice().sort();
    // built once, so the arrow you click is never replaced under the pointer (Leaflet treats a click on a removed element as a click on the map and closes the pop-up)
    c.render = () => {
      const ph0 = c.photos[0];
      box.innerHTML = `<div class="tcc-top">${c.localCity ? `<b>${esc(c.localCity)}</b><span>${esc(c.city)}${c.region ? `, ${esc(c.region)}` : ""}</span>` : `<b>${esc(c.city)}</b>${c.region ? `<span>${esc(c.region)}</span>` : ""}`}</div>
        <p class="tcc-meta">${c.n} ${c.n === 1 ? "visit" : "visits"} · ${ds.length > 1 && mon(ds[0]) !== mon(ds[ds.length - 1]) ? `${mon(ds[0])} – ${mon(ds[ds.length - 1])}` : mon(ds[0])}</p>
        ${ph0 ? `<figure class="tcc-ph"><img alt=""><figcaption></figcaption>${c.photos.length > 1 ? `<button type="button" class="tcc-nav prev" aria-label="Previous photo">‹</button><button type="button" class="tcc-nav next" aria-label="Next photo">›</button>` : ""}</figure>` : ""}`;
      const fig = box.querySelector("figure"); if (!fig) return;
      const img = fig.querySelector("img"), cap = fig.querySelector("figcaption");
      const show = () => { const ph = c.photos[idx]; img.alt = `${c.city}, ${ph.cap}`; img.src = ph.src; cap.textContent = `${ph.cap}${c.photos.length > 1 ? ` · ${idx + 1} / ${c.photos.length}` : ""}`; };
      const go = d => { idx = (idx + d + c.photos.length) % c.photos.length; show(); };
      img.addEventListener("load", () => { const m = markers[c.key]; if (m && m.isPopupOpen()) { m.getPopup().update(); fitMap(m); } });   // the pop-up grows to the photo's own shape, and the map with it if needed
      fig.querySelectorAll(".tcc-nav").forEach(b => b.addEventListener("click", e => { e.stopPropagation(); e.preventDefault(); go(b.classList.contains("next") ? 1 : -1); }));
      // swipe (or drag) the photo sideways for the next / previous one
      let x0 = null;
      fig.addEventListener("pointerdown", e => { if (!e.target.closest(".tcc-nav")) x0 = e.clientX; });
      fig.addEventListener("pointerup", e => { if (x0 !== null && c.photos.length > 1 && Math.abs(e.clientX - x0) > 36) go(e.clientX < x0 ? 1 : -1); x0 = null; });
      fig.addEventListener("pointercancel", () => { x0 = null; });
      if (idx >= c.photos.length) idx = 0;
      show();
    };
    c.render(); return box;
  };
  // pick a city from "Most visited": fly to it, then open its pop-up
  const showCity = key => {
    const m = markers[key], c = byCountry[current] && byCountry[current].cities[key];
    if (!m || !c) return;
    let done = false; const open = () => { if (!done) { done = true; m.openPopup(); } };
    lmap.once("moveend", open); setTimeout(open, 1200);   // the map may already be there, and then no move ends
    lmap.flyTo([c.lat, c.lng], Math.max(lmap.getZoom(), 9), { duration: .8 });
  };
  // a link such as #travels/city:Los%20Angeles%2C%20California%2C%20United%20States: the country card and map with that city selected (a pending city waits for the map to be drawn)
  let pending = "";
  const openFromHash = () => {
    const m = location.hash.match(/^#travels\/city:(.+)$/); if (!m) return;
    const key = decodeURIComponent(m[1]), country = key.split(",").pop().trim();
    if (!byCountry[country] || !byCountry[country].cities[key]) return;
    if (current === country) { showCity(key); return; }
    pending = key; current = ""; select(country);
  };
  window.addEventListener("hashchange", openFromHash);
  const draw = () => {
    const g = byCountry[current]; if (!g) return;
    const cities = Object.values(g.cities);
    if (!lmap) { lmap = L.map("travels-leaflet", { worldCopyJump: true, scrollWheelZoom: false }); L.tileLayer("https://tile.openstreetmap.org/{z}/{x}/{y}.png", { maxZoom: 18, attribution: "&copy; OpenStreetMap contributors", referrerPolicy: "origin" }).addTo(lmap);
      if (window.ResizeObserver) new ResizeObserver(() => lmap.invalidateSize()).observe(document.getElementById("travels-leaflet")); }   // the map follows the card's height
    if (layer) layer.remove();
    markers = {};
    layer = L.layerGroup(cities.map(c => (markers[c.key] = L.circleMarker([c.lat, c.lng], { radius: 5 + Math.sqrt(c.n) * 2, color: "#fff", weight: 1.5, fillColor: "#111", fillOpacity: .8 }))
      .bindTooltip(`${c.local ? `<b>${esc(c.local)}</b><br>` : ""}${esc(c.name)}<br><span class="tt-n">${c.n} ${c.n === 1 ? "visit" : "visits"}${c.photos.length ? ` · ${c.photos.length} ${c.photos.length === 1 ? "photo" : "photos"}` : ""}</span>`, { direction: "top", offset: [0, -4] })
      .bindPopup(popupNode(c), { className: "tpop", minWidth: 340, maxWidth: 460, autoPanPadding: [24, 24], keepInView: true, offset: [0, -2] })
      .on("popupopen", () => { sel = c.key; paintSel(); fitMap(markers[c.key]); markers[c.key].closeTooltip(); head.querySelectorAll(".tc-row").forEach(r => r.classList.toggle("on", r.dataset.city === c.key)); })
      .on("popupclose", () => { if (sel === c.key) sel = null; paintSel(); if (!sel) document.getElementById("travels-leaflet").style.minHeight = ""; head.querySelectorAll(".tc-row").forEach(r => r.classList.remove("on")); }))).addTo(lmap);
    lmap.invalidateSize();
    lmap.fitBounds(L.latLngBounds(cities.map(c => [c.lat, c.lng])), { padding: [48, 48], maxZoom: 8 });
    if (pending) { const k = pending; pending = ""; setTimeout(() => showCity(k), 150); }
  };
  const select = c => {
    current = c === current ? "" : c; sel = null;
    flagsEl.querySelectorAll(".tag").forEach(b => { const on = b.dataset.c === current; b.classList.toggle("on", on); b.setAttribute("aria-pressed", on); });
    mapEl.parentNode.hidden = !!current; pane.hidden = !current;
    if (!current) { head.innerHTML = ""; return; }
    const g = byCountry[current];
    const cities = Object.values(g.cities).sort((a, b) => b.n - a.n || (a.label < b.label ? -1 : 1)), top = cities.slice(0, 5), mx = top[0].n;
    const yrs = [...g.years].sort(), mon = d => new Date(d + "T00:00:00").toLocaleDateString("en-US", { month: "short", year: "numeric" });
    const plural = (n, w) => `${n} ${w}${n === 1 ? "" : "s"}`;
    const tiles = [
      ["Visits", g.n, `since ${g.first.slice(0, 4)}`],
      ["Places", cities.length, (() => { const dc = current === "United States" && g.regions.has("District of Columbia"), n = g.regions.size - (dc ? 1 : 0); return DIV[current] === "" ? "city-state" : `${n} ${divWord(current, n)}${dc ? " + DC" : ""}`; })()],
      ["Years", yrs.length, yrs.length > 1 ? `${yrs[0]}–${yrs[yrs.length - 1]}` : yrs[0]],
      ["Latest", mon(g.last), `first: ${mon(g.first)}`]];
    head.innerHTML = `<div class="tc-top"><span class="tf">${flag(current)}</span><div><b>${esc(current)}</b><span>${plural(cities.length, "place")} · ${plural(g.n, "visit")}</span></div><button type="button" class="rclear">← World</button></div>
      <div class="tc-stats">${tiles.map(([k, v, sub]) => `<div><small>${k}</small><b>${v}</b><span>${sub}</span></div>`).join("")}</div>
      <div class="tc-places"><small>Most visited</small>${top.map(c => `<button type="button" class="tc-row" data-city="${esc(c.key)}"><span class="tc-n">${esc(c.city)}${c.region ? `<i>${esc(c.region)}</i>` : ""}</span><span class="tc-bar"><i style="width:${Math.max(4, Math.round(c.n / mx * 100))}%"></i></span><span class="tc-c">${c.n}</span></button>`).join("")}${cities.length > top.length ? `<p class="tc-more">+ ${cities.length - top.length} more on the map</p>` : ""}</div>`;
    loadLeaflet().then(draw, () => { head.insertAdjacentHTML("beforeend", `<p class="tc-more">Couldn’t load the map.</p>`); });
  };
  window.travelsInit = places => {
    const today = new Date().toLocaleDateString("en-CA");
    places.filter(p => p.from <= today).forEach(p => {
      const parts = p.name.split(",").map(t => t.trim()), country = parts[parts.length - 1], key = p.name;
      const g = byCountry[country] || (byCountry[country] = { n: 0, cities: {}, first: p.from, last: p.from, years: new Set(), regions: new Set() });
      g.n++; if (p.from < g.first) g.first = p.from; if (p.from > g.last) g.last = p.from; g.years.add(p.from.slice(0, 4)); if (parts.length > 2) g.regions.add(parts[1]);
      (g.cities[key] || (g.cities[key] = { key, name: p.name, local: p.local && p.local !== p.name ? p.local : "", localCity: p.localCity && p.localCity !== parts[0] ? p.localCity : "", dates: [], photos: [], lat: p.lat, lng: p.lng, n: 0, city: parts[0], region: parts.length > 2 && parts[1] !== parts[0] ? parts[1] : "", label: parts.slice(0, -1).filter((t, i, a) => i === 0 || t !== a[0]).join(", ") })).n++;
      byCountry[country].cities[key].dates.push(p.from);
    });
    order = Object.keys(byCountry).sort((a, b) => byCountry[b].n - byCountry[a].n || (a < b ? -1 : 1));
    // flags and pins for countries the world map has no position for yet
    const XY = window.COUNTRY_XY = window.COUNTRY_XY || {};
    order.forEach(c => { if (!XY[c]) { const cs = Object.values(byCountry[c].cities); XY[c] = [cs.reduce((t, x) => t + x.lat, 0) / cs.length, cs.reduce((t, x) => t + x.lng, 0) / cs.length]; } if (!FLAGS[c] && flag(c)) FLAGS[c] = flag(c); });
    mapEl.innerHTML = worldMap(Object.fromEntries(order.map(c => [c, byCountry[c].n])), "", "Countries I have been to", 13, 1.4);
    mapTip(mapEl, "visit");
    // one moving row of flags: the set is drawn twice and the track slides by exactly one set, so the loop has no seam; hover pauses it
    const btn = (c, dup) => `<button type="button" class="tag" data-c="${esc(c)}" aria-pressed="false"${dup ? ' tabindex="-1"' : ""} title="${esc(c)} · ${byCountry[c].n} ${byCountry[c].n === 1 ? "visit" : "visits"}">${flag(c) || esc(c)}</button>`;
    flagsEl.innerHTML = `<div class="fl-track" style="--secs:${Math.max(20, order.length * 1.8)}s"><div class="fl-set">${order.map(c => btn(c)).join("")}</div><div class="fl-set" aria-hidden="true">${order.map(c => btn(c, true)).join("")}</div></div>`;
    // photos: steps/photos.js lists steps/img/cityname_YYYYMM.ext; each goes to the stop of that city in the closest month, as on the Steps map
    const slugOf = t => t.normalize("NFD").replace(/[\u0300-\u036f]/g, "").toLowerCase().replace(/[^a-z]/g, "");
    const stopSlugs = p => { const city = p.name.split(",")[0], a = [slugOf(city), slugOf(city.split(" ")[0])]; if (a[0] === "saintlouis") a.push("stlouis"); if (a[0] === "koreandmz") a.push("dmz"); return a; };
    const monthIdx = d => +d.slice(0, 4) * 12 + (+d.slice(5, 7) - 1), stopsAll = places.slice().sort((x, y) => (x.from < y.from ? -1 : 1));
    const attachPhotos = () => {
      (window.PHOTOS || []).forEach(file => {
        const m = file.match(/^([A-Za-z]+)_(\d{4})(\d{2})(?:_(\d+))?\./); if (!m) return;
        const pm = +m[2] * 12 + (+m[3] - 1), visit = +(m[4] || 1); let bestD = 99, group = [];
        stopsAll.forEach(p => { if (!stopSlugs(p).includes(m[1].toLowerCase())) return; const d = Math.abs(monthIdx(p.from) - pm); if (d < bestD) { bestD = d; group = []; } if (d === bestD) group.push(p); });
        if (!group.length) return;
        const best = group[Math.min(visit, group.length) - 1], parts = best.name.split(",").map(t => t.trim()), g = byCountry[parts[parts.length - 1]], c = g && g.cities[best.name];
        if (c) c.photos.push({ src: "steps/img/" + file, cap: `${MON[+m[3] - 1]} ${m[2]}` });
      });
      Object.values(byCountry).forEach(g => Object.values(g.cities).forEach(c => c.photos.sort((a, b) => (a.src < b.src ? -1 : 1))));
      Object.values(byCountry).forEach(g => Object.values(g.cities).forEach(c => c.render && c.render()));   // photos arrived after a pop-up was built
    };
    if (window.PHOTOS) attachPhotos(); else { const sc = document.createElement("script"); sc.src = "steps/photos.js"; sc.onload = attachPhotos; document.head.append(sc); }
    // the headline figures: countries, cities and miles (great-circle legs between consecutive stops, the same sum the Steps map shows)
    const seen = places.filter(p => p.from <= today).sort((x, y) => (x.from < y.from ? -1 : 1));
    const rad = d => d * Math.PI / 180, mi = (x, y) => 2 * 3958.8 * Math.asin(Math.sqrt(Math.sin(rad(y.lat - x.lat) / 2) ** 2 + Math.cos(rad(x.lat)) * Math.cos(rad(y.lat)) * Math.sin(rad(y.lng - x.lng) / 2) ** 2));
    const miles = seen.reduce((t, p, i) => t + (i ? mi(seen[i - 1], p) : 0), 0), cityCount = new Set(seen.map(p => p.name)).size, num = n => Math.round(n).toLocaleString("en-US");
    openFromHash();
    document.getElementById("travels-count").innerHTML = [
      ["Countries", order.length, `since ${seen[0].from.slice(0, 4)}`, 1],
      ["Cities", num(cityCount), `${num(seen.length)} stops`],
      ["Miles", num(miles), `${num(miles * 1.609344)} km · ${(miles / 24901).toFixed(1)}× around the Earth`]
    ].map(([k, v, sub, dark]) => `<div class="kpi${dark ? " dark" : ""}"><p class="kl">${k}</p><p class="kv">${v}</p><p class="ks">${sub}</p></div>`).join("");
  };
  document.getElementById("travels").addEventListener("click", e => {
    const b = e.target.closest("[data-c]"), pin = e.target.closest(".pin"), back = e.target.closest(".rclear");
    const row = e.target.closest(".tc-row");
    if (row) showCity(row.dataset.city);
    else if (b) select(b.dataset.c); else if (pin && pin.dataset.name) select(pin.dataset.name); else if (back) select(current);
  });
})();

syncReader();                            // open a pop-up straight from a shared link

// Plates: hover text on the marks (50 Best list and rank, Blue Ribbon...). The browser's own title tooltip is slow and unreliable on small marks inside a link, so the shared #gtip is used here; Goods has its own handler
(function () {
  const tip = document.getElementById("gtip");
  if (!tip) return;
  const over = e => {
    const t = e.target.closest ? e.target.closest("[data-tip]") : null;
    if (!t || t.closest("#goods")) return;
    tip.textContent = t.dataset.tip; tip.hidden = false;
    tip.style.left = Math.max(8, Math.min(e.clientX + 12, innerWidth - tip.offsetWidth - 8)) + "px"; tip.style.top = e.clientY + 16 + "px";
  };
  document.addEventListener("mousemove", e => { if (e.target.closest && e.target.closest("[data-tip]")) over(e); else if (!e.target.closest("#goods")) tip.hidden = true; });
  document.addEventListener("mouseleave", () => { tip.hidden = true; });
})();
