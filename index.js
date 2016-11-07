var QuillRender = require('./lib/QuillRender');

/* EMBED */
var ImageFormatter = require("./lib/formatter/embed/ImageFormatter");
var FootnoteFormatter = require("./lib/formatter/embed/FootnoteFormatter");

/* INLINE */
var SpanFormatter = require("./lib/formatter/inline/SpanFormatter");
var BoldFormatter = require("./lib/formatter/inline/BoldFormatter");
var StrikeFormatter = require("./lib/formatter/inline/StrikeFormatter");
var ItalicFormatter = require("./lib/formatter/inline/ItalicFormatter");
var UnderlineFormatter = require("./lib/formatter/inline/UnderlineFormatter");
var EBookLinkFormatter = require("./lib/formatter/inline/EBookLinkFormatter");
var LinkFormatter = require("./lib/formatter/inline/LinkFormatter");

/* BLOCK */
var ParagraphFormatter = require("./lib/formatter/block/ParagraphFormatter");
var HeaderFormatter = require("./lib/formatter/block/HeaderFormatter");
var ListFormatter = require("./lib/formatter/block/ListFormatter");
var BlockquoteFormatter = require("./lib/formatter/block/BlockquoteFormatter");

/* INLINE-STYLE */
var BackgroundFormatter = require("./lib/formatter/styles/inline/BackgroundFormatter");
var ColorFormatter = require("./lib/formatter/styles/inline/ColorFormatter");

/* BLOCK-STYLE */
var AlignFormatter = require("./lib/formatter/styles/block/AlignFormatter");
var IndentFormatter = require("./lib/formatter/styles/block/IndentFormatter");


var quillRender = new QuillRender({
	debug: true
});

quillRender.register(ParagraphFormatter);

quillRender.register(ImageFormatter);
quillRender.register(FootnoteFormatter);

quillRender.register(SpanFormatter);
quillRender.register(BoldFormatter);
quillRender.register(StrikeFormatter);
quillRender.register(ItalicFormatter);
quillRender.register(UnderlineFormatter);
quillRender.register(EBookLinkFormatter);
quillRender.register(LinkFormatter);

quillRender.register(HeaderFormatter);
quillRender.register(ListFormatter);
quillRender.register(BlockquoteFormatter);

quillRender.register(BackgroundFormatter);
quillRender.register(ColorFormatter);

quillRender.register(AlignFormatter);
quillRender.register(IndentFormatter);

module.exports = quillRender;
