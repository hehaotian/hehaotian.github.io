# Haotian's site

Plain HTML/CSS/JS, no build step. Seven pages: Home, then six tabs: Notes, Reads, Plates, Goods, Steps, Gigs.

- `index.html` – the shell and the Home text (edit the intro sentence and the tab taglines there)
- `assets/app.js`, `assets/style.css` – all the behaviour and styling
- `data/` – the content, one file per tab (each file's top comment lists its fields):
  - `notes.js` – Notes: my own writing (Journal, Reflection, Poem, Lines). Newest entries are added at the end; the page sorts by date
  - `reads.js` – Reads: responses to books
  - `plates.js` – Plates: restaurants (Michelin, Blue Ribbon, World's 50 Best, Apple Caffè, Haotian Recommend); each has English, Chinese, Japanese and Korean text
  - `goods.js` – Goods: giving, with the dashboard and the AI assessment at the top
  - `gigs.js` – Gigs: projects and work
- `steps/` – the travel map (its own page, shown in the Steps tab)
  - `steps/places.js` – every stop; `steps/img/` + `steps/photos.js` – photos (run `python3 steps/make_photos.py` after adding photos)
- `assets/photos/` – full-size photos and covers; `assets/thumbs/` – small copies made by `sh tools/make_thumbs.sh` (run it after adding a cover)

Slugs (the short link names) are made from the title unless a `slug` is set; set one when the title isn't plain English letters.

Notes categories: **Journal** (what happened, in prose), **Reflection** (an argument or a thought worked through), **Poem** (a titled, crafted poem), **Lines** (a short fragment or jotting).

Preview locally: `python3 -m http.server` in this folder, then open http://localhost:8000

Publish on GitHub Pages: push this folder to a GitHub repo, then Settings → Pages → deploy from the `main` branch, root folder.
