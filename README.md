# Haotian's site

Plain HTML/CSS/JS, no build step. Four tabs: Home, Steps, Gigs, Notes.

- `index.html` – the shell and the Home text (edit the intro sentence there)
- `data/gigs.js`, `data/notes.js` – content for the Gigs and Notes tabs
- `steps/` – the travel map (its own page, shown in the Steps tab)
  - `steps/places.js` – every stop; `steps/img/` + `steps/photos.js` – photos (run `python3 steps/make_photos.py` after adding photos)

Preview locally: `python3 -m http.server` in this folder, then open http://localhost:8000

Publish on GitHub Pages: push this folder to a GitHub repo, then Settings → Pages → deploy from the `main` branch, root folder.
