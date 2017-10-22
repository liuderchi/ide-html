# ide-html

[![apm-download-count][apm-download-count]][apm-download-link]
[![travis-status][travis-status]][travis-project]
[![dependency-status][david-status]][david-project]

[Atom-IDE][atom-ide] for HTML, Go Template, Mustache and other Templates.

![demo-outline-1][demo-outline-1]

![demo-outline-2][demo-outline-2]

## Features

  - HTML Outline in *Outline View*
      - Quick navigation by clicking
      - Quick tag selection by double clicking
      - Searching by entering tag name or class name


## Requirements

Please install following requirements before installing [`ide-html`][apm-download-link]:

  - [Latest Atom editor][atom] or version higher than *1.21.0-beta0*.
  - Atom package [`atom-ide-ui`][atom-ide-ui]


## FAQ

> Why I could not download this Atom package?

Please make sure you have installed all softwares in [*Requirements*](#requirements) section.

---

> I've installed ide-html. Why there is still nothing shown in Outline View when html opened?

Please check the file exists in the *Project Tree View* so that it can be handled by [`ide-html`][apm-download-link].

In addition, to show outline view, use Atom command `Outline View: Toggle`.

---

> How can I customize this package?

Please read [CONTRIBUTING.md][CONTRIBUTING.md] for more details.

---

  - :confused: Still feeling confused? Please [provide feedbacks via issues][create-issue] to make ide-html better. :pray:


## Notes and References
  - [`ide-html`][apm-download-link] acts as a *client* of language server basing on [`atom-languageclient`][atom-languageclient]
  - [`vscode-html-languageserver-bin`][vscode-html-languageserver-bin] acts as a *language server* and analyze your HTML in separate process
  - language servers and clients are talking with [Language Server Protocol (LSP)][lsp]


## License

[MIT License][mit-license]


[apm-download-count]: https://img.shields.io/apm/dm/ide-html.svg "apm-download-count"
[apm-download-link]: https://atom.io/packages/ide-html "apm-download-link"
[travis-status]: https://travis-ci.org/liuderchi/ide-html.svg?branch=master "travis-status"
[travis-project]: https://travis-ci.org/liuderchi/ide-html "travis-project"
[david-status]: https://david-dm.org/liuderchi/ide-html.svg "david-status"
[david-project]: https://david-dm.org/liuderchi/ide-html "david-project"
[atom-ide]: https://ide.atom.io/ "atom-ide"
[demo-outline-1]: https://user-images.githubusercontent.com/4994705/30626662-eb286e4e-9dfd-11e7-9bf6-24d4f5816e79.png "demo-outline-1"
[demo-outline-2]: https://user-images.githubusercontent.com/4994705/30628148-1475ae8e-9e07-11e7-90f3-32231efb93b4.png "demo-outline-2"

[atom]: https://atom.io/ "atom"
[atom-ide-ui]: https://atom.io/packages/atom-ide-ui "atom-ide-ui"
[CONTRIBUTING.md]: https://github.com/liuderchi/ide-html/blob/master/CONTRIBUTING.md "CONTRIBUTING.md"
[create-issue]: https://github.com/liuderchi/ide-html/issues/new "create-issue"

[atom-languageclient]: https://github.com/atom/atom-languageclient "atom-languageclient"
[vscode-html-languageserver-bin]: https://github.com/vscode-langservers/vscode-html-languageserver-bin "vscode-html-languageserver-bin"
[lsp]: http://langserver.org/ "lsp"

[mit-license]: https://liuderchi.mit-license.org/ "mit-license"
