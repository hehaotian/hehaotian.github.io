// A plain H that follows the pointer. Over links it grows and tilts; on click it squashes and the crossbar spins.
// Desktop only: touch devices keep their normal behaviour. Loaded by the site pages only; the Steps map keeps the default cursor.
(() => {
  if (!matchMedia("(pointer: fine)").matches || matchMedia("(prefers-reduced-motion: reduce)").matches) return;

  const style = document.createElement("style");
  style.textContent = `
    html.h-in, html.h-in * { cursor: none !important; }   /* only while the pointer is inside the content zone */
    html.h-in #reader .text, html.h-in #reader .text * { cursor: text !important; }   /* reading: the normal text cursor */
    #h-cursor { position: fixed; left: 0; top: 0; z-index: 2147483647; pointer-events: none; opacity: 0; transition: opacity .15s; }
    #h-cursor svg { width: 32px; height: 32px; margin: -16px 0 0 -16px; display: block; overflow: visible;
      stroke: #111; stroke-width: 3.2; stroke-linecap: round; fill: none;
      filter: drop-shadow(0 0 1px #fff) drop-shadow(0 0 1px #fff);
      transition: transform .18s cubic-bezier(.3,1.6,.5,1); }
    #h-cursor .bar { stroke-width: 2.2; transition: stroke .18s; transform-box: fill-box; transform-origin: center; }
    #h-cursor.link svg { transform: scale(1.35) rotate(-8deg); }
    #h-cursor.link .bar { stroke: #7b2cbf; }
    #h-cursor.down svg { transform: scale(.75); }
    #h-cursor.spin .bar { animation: h-spin .45s ease-out; }
    @keyframes h-spin { to { transform: rotate(360deg); } }`;
  document.head.append(style);

  const el = document.createElement("div");
  el.id = "h-cursor";
  el.innerHTML = '<svg viewBox="0 0 32 32"><path d="M9 6v20M23 6v20"/><path class="bar" d="M9 16h14"/></svg>';
  document.body.append(el);
  const root = document.documentElement;

  // The H only lives in the centre of the page: inside the open pop-up, or else inside the content column without its side padding
  // (and away from the top and bottom edges). Everywhere else, including the margins you grab to resize the window, is the normal cursor.
  const EDGE = 24;
  const inZone = e => {
    if (e.clientY < EDGE || e.clientY > innerHeight - EDGE) return false;
    const sheet = document.querySelector("#reader:not([hidden]) .sheet");
    if (sheet) { const r = sheet.getBoundingClientRect(); return e.clientX >= r.left && e.clientX <= r.right; }
    const col = document.querySelector("main .tab:not([hidden]) .col");
    if (!col) return false;
    const r = col.getBoundingClientRect(), cs = getComputedStyle(col);
    return e.clientX >= r.left + parseFloat(cs.paddingLeft) && e.clientX <= r.right - parseFloat(cs.paddingRight);
  };

  const LINK = "a, button, summary, select, [role=button], .leaflet-interactive";
  document.addEventListener("pointermove", e => {
    const zone = inZone(e);
    root.classList.toggle("h-in", zone);
    if (!zone) { el.style.opacity = 0; return; }
    el.style.transform = `translate(${e.clientX}px,${e.clientY}px)`;
    el.style.opacity = e.target.tagName === "IFRAME" || e.target.closest("#reader .text") ? 0 : 1;      // over the Steps frame, show the normal cursor
    el.classList.toggle("link", !!e.target.closest(LINK));
  });
  document.addEventListener("pointerdown", () => el.classList.add("down"));
  document.addEventListener("pointerup", () => {
    el.classList.remove("down", "spin");
    void el.offsetWidth;                                          // restart the animation
    el.classList.add("spin");
  });
  // hide the moment the pointer leaves the page or crosses into the Steps frame (a fast move skips the last pointermove)
  document.addEventListener("mouseout", e => { if (!e.relatedTarget || e.relatedTarget.tagName === "IFRAME") { el.style.opacity = 0; root.classList.remove("h-in"); } });
})();
