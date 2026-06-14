# RA-Test Cleanup Report

Generated before cleanup for GitHub Pages publishing.

## Keep

- `.nojekyll`
- `index.html`
- `style.css`
- `app.js`
- `questions.js`
- `README.md`
- `questions-backup-before-v2.0.1.js`
- `docs/question-bank-v2/A-tehnika-v2.json`
- `docs/question-bank-v2/B-procedure-v2.json`
- `docs/question-bank-v2/C-propisi-v2.json`
- `docs/question-bank-v2/A-tehnika-racunski-varijante.json`

## Delete

- `questions-backup-1.1.1.js`
- `questions-backup-before-v2.js`
- `docs/question-bank/`

## Manual Review

- `docs/question-bank-v2/A-tehnika-v2.json`, `B-procedure-v2.json`, and `C-propisi-v2.json` are kept as v2 source placeholders/current source files, but they do not by themselves regenerate the current production `questions.js`.
- The final full v2.0.0 source files used to generate most of `questions.js` were supplied from `C:\Users\neman\Downloads` and are not currently stored inside this project folder.

## Reference Check

- `index.html` references `style.css`, `questions.js`, and `app.js`.
- No runtime file references the old `docs/question-bank/` folder or older backup files.
