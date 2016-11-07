module.exports = function() {
    return [{
            type: "block",
            name: "blockquote",
            ops: [{
                "insert": "BLOCKQUOTE"
            }, {
                "attributes": {
                    "blockquote": true
                },
                "insert": "\n"
            }],
            expect: '<blockquote>BLOCKQUOTE</blockquote>'
        }, {
            type: "block",
            name: "header1",
            ops: [{
                "insert": "HEADER1"
            }, {
                "attributes": {
                    "header": 1
                },
                "insert": "\n"
            }],
            expect: '<h1>HEADER1</h1>'
        }, {
            type: "block",
            name: "header2",
            ops: [{
                "insert": "HEADER2"
            }, {
                "attributes": {
                    "header": 2
                },
                "insert": "\n"
            }],
            expect: '<h2>HEADER2</h2>'
        }, {
            type: "block",
            name: "header3",
            ops: [{
                "insert": "HEADER3"
            }, {
                "attributes": {
                    "header": 3
                },
                "insert": "\n"
            }],
            expect: '<h3>HEADER3</h3>'
        }, {
            type: "block",
            name: "header4",
            ops: [{
                "insert": "HEADER4"
            }, {
                "attributes": {
                    "header": 4
                },
                "insert": "\n"
            }],
            expect: '<h4>HEADER4</h4>'
        }, {
            type: "block",
            name: "list bullet",
            ops: [{
                "insert": "BOTER"
            }, {
                "attributes": {
                    "list": "bullet"
                },
                "insert": "\n"
            }, {
                "insert": "KAAS"
            }, {
                "attributes": {
                    "list": "bullet"
                },
                "insert": "\n"
            }, {
                "insert": "EIEREN"
            }, {
                "attributes": {
                    "list": "bullet"
                },
                "insert": "\n"
            }],
            expect: "<ul><li>BOTER</li><li>KAAS</li><li>EIEREN</li></ul>"
        }, {
            type: "block",
            name: "list ordered",
            ops: [{
                "insert": "BOTER"
            }, {
                "attributes": {
                    "list": "ordered"
                },
                "insert": "\n"
            }, {
                "insert": "KAAS"
            }, {
                "attributes": {
                    "list": "ordered"
                },
                "insert": "\n"
            }, {
                "insert": "EIEREN"
            }, {
                "attributes": {
                    "list": "ordered"
                },
                "insert": "\n"
            }],
            expect: "<ol><li>BOTER</li><li>KAAS</li><li>EIEREN</li></ol>"
        }, {
            type: "block",
            name: "paragraph",
            ops: [{
                "insert": "just some test"
            }],
            expect: '<p>just some test</p>'
        }, {
            type: "embed",
            name: "footnote",
            ops: [{
                "attributes": {
                    "data-uuid": "someuuid",
                    "data-count": "[1]",
                },
                "insert": {
                    footnote: "my footnote"
                }
            }, {
                "insert": "\n"
            }],
            expect: '<p><a id="fn-orig-someuuid" href="#fn-someuuid">[1]</a></p>'
        }, {
            type: "embed",
            name: "formula",
            ops: [],
            expect: ''
        }, {
            type: "embed",
            name: "image",
            ops: [{
                insert: {
                    image: 'https://quilljs.com/assets/images/icon.png'
                }
            }, {
                insert: "\n"
            }],
            expect: '<p><img src="https://quilljs.com/assets/images/icon.png"></p>'
        }, {
            type: "embed",
            name: "video",
            ops: [],
            expect: ''
        }, {
            type: "inline",
            name: "bold",
            ops: [{
                "attributes": {
                    "bold": true
                },
                "insert": "BOLD TEXT"
            }, {
                "insert": "\n"
            }],
            expect: '<p><b>BOLD TEXT</b></p>'
        }, {
            type: "inline",
            name: "italic",
            ops: [{
                "attributes": {
                    "italic": true
                },
                "insert": "ITALIC TEXT"
            }, {
                "insert": "\n"
            }],
            expect: '<p><em>ITALIC TEXT</em></p>'
        }, {
            type: "inline",
            name: "underline",
            ops: [{
                "attributes": {
                    "underline": true
                },
                "insert": "UNDERLINE TEXT"
            }, {
                "insert": "\n"
            }],
            expect: '<p><u>UNDERLINE TEXT</u></p>'
        }, {
            type: "inline",
            name: "span",
            ops: [{
                "attributes": {
                    "color": "#555555",
                },
                "insert": "Etiam rhoncus"
            }, {
                "insert": "\n"
            }],
            expect: '<p><span style="color: rgb(85, 85, 85);">Etiam rhoncus</span></p>'
        }, {
            type: "inline",
            name: "strike",
            ops: [{
                "attributes": {
                    "strike": true
                },
                "insert": "STRIKETHROUGH"
            }, {
                "insert": "\n"
            }],
            expect: '<p><s>STRIKETHROUGH</s></p>'
        }, {
            type: "inline",
            name: "link",
            ops: [{
                insert: "LINK",
                attributes: {
                    link: 'https://quilljs.com'
                }
            }, {
                insert: "\n"
            }],
            expect: '<p><a href="https://quilljs.com" target="_blank">LINK</a></p>'
        }, {
            type: "inline",
            name: "ebooklink",
            ops: [{
                insert: "LINK",
                attributes: {
                    ebooklink: {
                        href: 'https://quilljs.com'
                    }
                }
            }, {
                insert: "\n"
            }],
            expect: '<p><a href="https://quilljs.com">LINK</a></p>'
        }, {
            type: "blockstyle",
            name: "align",
            ops: [],
            expect: ''
        }, {
            type: "blockstyle",
            name: "indent",
            ops: [],
            expect: ''
        }, {
            type: "inlinestyle",
            name: "background",
            ops: [{
                "attributes": {
                    "background": "#555555"
                },
                "insert": "Etiam rhoncus"
            }, {
                "insert": "\n"
            }],
            expect: '<p><span style="background-color: rgb(85, 85, 85);">Etiam rhoncus</span></p>'
        }, {
            type: "inlinestyle",
            name: "color",
            ops: [{
                "attributes": {
                    "color": "#555555"
                },
                "insert": "Etiam rhoncus"
            }, {
                "insert": "\n"
            }],
            expect: '<p><span style="color: rgb(85, 85, 85);">Etiam rhoncus</span></p>'
        }, {
            type: "inlinestyle",
            name: "indent",
            ops: [],
            expect: ''
        }, {
            name: "Strikethrough",
            ops: [{
                "attributes": {
                    "strike": true
                },
                "insert": "STRIKETHROUGH"
            }, {
                "insert": "\n"
            }],
            expect: '<p><s>STRIKETHROUGH</s></p>'
        }, {
            name: "Underline",
            ops: [{
                "attributes": {
                    "underline": true
                },
                "insert": "UNDERLINE"
            }, {
                "insert": "\n"
            }],
            expect: '<p><u>UNDERLINE</u></p>'
        }, {
            name: "A blockquote",
            ops: [{
                "insert": "APPELS"
            }, {
                "attributes": {
                    "blockquote": true
                },
                "insert": "\n"
            }],
            expect: '<blockquote>APPELS</blockquote>'
        }, {
            name: "A part is bold",
            ops: [{
                "attributes": {
                    "underline": true,
                    "italic": true,
                    "bold": true
                },
                "insert": "Wasmachine"
            }, {
                "insert": "\n"
            }],
            expect: '<p><b><em><u>Wasmachine</u></em></b></p>'
        }, {
            name: "Header aligned indent and color",
            ops: [{
                "attributes": {
                    "color": "#555555",
                    "background": "#ffffff"
                },
                "insert": "Etiam rhoncus"
            }, {
                "attributes": {
                    "header": 1,
                    align: "right",
                    indent: 4
                },
                "insert": "\n"
            }],
            expect: '<h1 class="ql-align-right ql-indent-4"><span style="color: rgb(85, 85, 85);background-color: rgb(255, 255, 255);">Etiam rhoncus</span></h1>'
        }, {
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
            }],
            expect: '<p><b>Gandalf</b> the <span style="color: rgb(204, 204, 204);">Grey</span></p>'
        }, {
            name: "List, first header bold",
            ops: [{
                "attributes": {
                    "bold": true,
                },
                "insert": "BOTER"
            }, {
                "attributes": {
                    "list": "bullet"
                },
                "insert": "\n"
            }, {
                "insert": "KAAS"
            }, {
                "attributes": {
                    "list": "bullet"
                },
                "insert": "\n"
            }, {
                "insert": "EIEREN"
            }, {
                "attributes": {
                    "list": "bullet"
                },
                "insert": "\n"
            }],
            expect: "<ul><li><b>BOTER</b></li><li>KAAS</li><li>EIEREN</li></ul>"
        }, {
            name: "image with link",
            ops: [{
                insert: {
                    image: 'https://quilljs.com/assets/images/icon.png'
                },
                attributes: {
                    link: 'https://quilljs.com'
                }
            }, {
                insert: "\n"
            }],
            expect: '<p><a href="https://quilljs.com" target="_blank"><img src="https://quilljs.com/assets/images/icon.png"></a></p>'
        }

    ]
}()
