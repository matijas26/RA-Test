# RA-Test Question Bank v2

`questions.js` is the runtime production question bank loaded by the app through `index.html`.

The canonical source files for the current v2.0.1 bank are:

- `A_tehnika_final_codex.json`
- `B_postupci_final_codex.json`
- `C_propisi_final_codex.json`
- `A-tehnika-racunski-varijante.json`

`A-tehnika-racunski-varijante.json` was reconstructed from the production `questions.js` entries with IDs `A399` through `A458`. It contains the 60 calculated A-section variants added after the final full source files.

Current production version:

- `window.QUESTION_SET_VERSION = "2.0.1";`

Current production counts:

- A: 458
- B: 186
- C: 126
- Total: 770

Do not edit `questions.js` manually unless absolutely necessary. Future updates should be made in the JSON source files first, then regenerated into `questions.js` after validation.

The `archive/` folder contains older partial/placeholding v2 files that are not needed to regenerate the current production bank.
