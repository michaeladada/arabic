# arabic
Learn arabic

Open `index.html` in a browser to play.

## Files

- `index.html` – page layout
- `style.css` – styles
- `app.js` – letters, words and game logic
- `vocab/words-1.js`, `words-2.js`, … – Vocabulary, 500 words per file, most common first.
  The word-set slider picks the N most common words (in steps of 50), shared by all
  vocabulary games. `app.js` loads only the files needed for that set, and only when a
  vocabulary game starts. When adding a file, raise `VOCAB_PART_COUNT` in `app.js`.

## Cache busting

`index.html` loads `style.css?v=…` and `app.js?v=…`, where the version is a short
hash of the file's contents. When a file changes, its link changes too, so browsers
fetch the new version instead of using a cached copy.

The stamps are updated automatically by a git pre-commit hook. Enable it once per clone:

```sh
git config core.hooksPath .githooks
```

The vocabulary files share one stamp, kept in `<html data-vocab="…">` and added to their URLs by `app.js`.

To update the stamps by hand, run `tools/update-versions.sh`.
