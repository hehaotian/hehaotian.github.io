#!/bin/sh
# Makes small copies of every Plates / Reads / Gigs cover in assets/thumbs/ (same file names), so the grids don't load the full photos.
# Run from anywhere after adding covers:  sh tools/make_thumbs.sh   (skips thumbs that are already up to date; needs macOS sips + node)
cd "$(dirname "$0")/.." || exit 1
node -e '
global.window = {};
require("./data/plates.js"); require("./data/reads.js"); require("./data/gigs.js");
const out = [];
(window.PLATES || []).forEach(p => p.cover && out.push([p.cover, 640]));
(window.GIGS || []).forEach(g => g.cover && out.push([g.cover, 640]));
(window.READS || []).forEach(n => n.book && n.book.cover && out.push([n.book.cover, 440]));
console.log(out.map(([f, w]) => f + " " + w).join("\n"));
' | while read -r f w; do
  src="assets/photos/$f"; dst="assets/thumbs/$f"
  [ -f "$src" ] || { echo "missing: $src"; continue; }
  [ "$dst" -nt "$src" ] && continue
  sips -Z "$w" -s formatOptions 78 "$src" --out "$dst" >/dev/null && echo "thumb: $f"
done
