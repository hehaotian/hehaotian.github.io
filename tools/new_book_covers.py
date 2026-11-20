#!/usr/bin/env python3
"""List cover images in ~/Downloads/<year>/ folders that have not been added to Reads yet.
Each year folder holds covers of books read that year (no review post: "noPost": true in data/reads.js).
tools/imported_covers.json records what has been imported ("<year>/<file>" -> cover file in assets/photos/).
Run:  python3 tools/new_book_covers.py          (list the new files)
      python3 tools/new_book_covers.py --done 2013/a.jpg=cover_a.jpg ...   (record files once added)"""
import json, os, sys, unicodedata
root = os.path.expanduser("~/Downloads")
log = os.path.join(os.path.dirname(os.path.abspath(__file__)), "imported_covers.json")
nfc = lambda t: unicodedata.normalize("NFC", t)
done = {nfc(k): v for k, v in (json.load(open(log)) if os.path.exists(log) else {}).items()}
if "--done" in sys.argv:
    for a in sys.argv[sys.argv.index("--done") + 1:]:
        k, c = a.split("=", 1); done[nfc(k)] = {"cover": c}
    json.dump(done, open(log, "w"), ensure_ascii=False, indent=1, sort_keys=True); print("recorded", len(done)); sys.exit()
new = []
for y in sorted(d for d in os.listdir(root) if d.isdigit() and len(d) == 4 and os.path.isdir(os.path.join(root, d))):
    for f in sorted(os.listdir(os.path.join(root, y))):
        if not f.startswith(".") and nfc(f"{y}/{f}") not in done and os.path.isfile(os.path.join(root, y, f)): new.append(f"{y}/{f}")
print("\n".join(new) if new else "nothing new")
