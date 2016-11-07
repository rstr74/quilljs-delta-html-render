#### Render [Quilljs](http://quilljs.com/) Delta's to HTML on the server with node.js

- Document insert-only deltas
- Uses [cheerio](https://github.com/cheeriojs/cheerio) for dom manupulation
- Quill v.1.1 Delta format
- Not for production (yet)

### Install:
    npm install rstr74/quilljs-delta-html-render
    npm i (in node_modules/quilljs-delta-html-render)

### Test:
    npm test

### Usage:
    var quillRender = require('quilljs-delta-html-render');
    quillRender.renderDelta([{
            name: "strong and color",
            ops: [{
                insert: 'Gandalf',
                attributes: {
                    bold: true
                }
            }, {
                insert: " the "
            }, {
                insert: 'Grey\n',
                attributes: {
                    color: '#cccccc',
                }
            }]);

    ==> '<p><b>Gandalf</b> the <span style="color: rgb(204, 204, 204);">Grey</span></p>'


- Inspired by [casetext/quill-render](https://github.com/casetext/quill-render)

