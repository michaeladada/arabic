# arabic
Learn arabic

Open `index.html` in a browser to play.

## Files

- `index.html` – page layout
- `style.css` – styles
- `app.js` – letters, words and game logic

## Cache busting

`index.html` loads `style.css?v=…` and `app.js?v=…`, where the version is a short
hash of the file's contents. When a file changes, its link changes too, so browsers
fetch the new version instead of using a cached copy.

The stamps are updated automatically by a git pre-commit hook. Enable it once per clone:

```sh
git config core.hooksPath .githooks
```

To update the stamps by hand, run `tools/update-versions.sh`.
