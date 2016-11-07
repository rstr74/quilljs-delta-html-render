var Delta = require("quill-delta");
var cheerio = require('cheerio');
var escapeHtml = require('escape-html');

module.exports = function() {

	var QuillRender = function() {

	};
	QuillRender.prototype.register = function(Formatter) {
		QuillRender.format[Formatter.type][Formatter.formatter] = Formatter;
		return QuillRender.format[Formatter.type];
	}

	QuillRender.prototype.format = function() {
		return QuillRender.format;
	}

	QuillRender.prototype.options = function() {
		return this.options;
	}

	QuillRender.prototype.renderDelta = function(delta, options) {

		options = options || {};

		this.options = {
			defaultLineBlock: options.defaultLineBlock || "paragraph",
			defaultInline: options.defaultInline ||  "span",
			defaultInlineStyleAttr: options.defaultInlineStyleAttr || "style",
			defaultInlineStyleAttrSeparator: options.defaultInlineStyleAttrSeparator || ";",
			defaultBlockStyleAttr: options.defaultBlockStyleAttr || "class",
			defaultBlockStyleAttrSeparator: options.defaultBlockStyleAttrSeparator || " ",
			debug: options.debug || false,
			debug_levels: [
				"INFO",
				"INSERT_IS_STRING",
				"INSERT_IS_OBJECT",
				"LINE_PROCESSING",
				"LINE_TYPE",
				"LINE_INDEX",
				"LINE_OPS",
				"LINE_ATTRIBUTES",
				"LINE_CONTENTS",
				"LINE_BLOCK_RESULT"
			]
		}


		var delta = new Delta(delta);

		var _this = this;
		var config = {
			consumeNextNewline: false,
			nestingLevel: 0
		}

		var $ = cheerio.load('')
		var html = $.root();

		var lines = [];
		var nestLevel = 0;
		var group;
		var currentType = null;
		var index = 0;

		delta.eachLine(function(line, attributes) {
			index++
			_this.DEBUG("LINE_INDEX", index);
			lines.push({
				ops: line.ops,
				attributes: attributes
			})

			var lineContents = line.ops.map(function(op) {
				_this.DEBUG("LINE_OPS", op.insert || "none");
				_this.DEBUG("LINE_ATTRIBUTES", op.attributes || "none");
				var contents = _this.applyInlineTagsAndAttributes(op);
				return contents || "";
			});

			_this.DEBUG("LINE_CONTENTS", lineContents)

			/* FIND FORMATTER */
			var formatter = _this.applyLineBlock(attributes).formatter;

			var blockStyleFormatters = [];
			for (attr in attributes) {
				var blockStyleFormatter = QuillRender.format.block_styles[attr];
				if (blockStyleFormatter) {
					blockStyleFormatters.push(blockStyleFormatter);
				}
			}

			var blockStyles = [];
			/* RENDER LINEBLOCK STYLES */
			for (var j = 0; j < blockStyleFormatters.length; j++) {
				blockStyles.push(blockStyleFormatters[j].format({
					attributes: attributes
				}));
			}

			if (formatter) {
				if (currentType !== formatter) {
					nestLevel = 0;
					currentType = formatter;
				}
				_this.DEBUG("LINE_TYPE", formatter);

				/* TO-DO: port this logic into the registered Block Class somehow */
				switch (formatter) {
					case "list":
						if (nestLevel === 0) {
							nestLevel++;
							group = $(_this.applyLineBlock(attributes).group({
								attributes: attributes
							}));
							html.append(group);
							group.append(_this.applyLineBlock(attributes).line({
								insert: lineContents.join('')
							}))
						} else if (nestLevel === 1) {
							var element = $(_this.applyLineBlock(attributes).line({
								insert: lineContents.join('')
							}));
							if (blockStyles.length > 0)
								element.attr(_this.options.defaultBlockStyleAttr, blockStyles.join(_this.options.defaultBlockStyleAttrSeparator));
							group.append(element)
						}
						break;
					case "header":
						nestLevel = 0;
						var element = $(_this.applyLineBlock(attributes).format({
							attributes: attributes,
							insert: lineContents.join('')
						}));
						if (blockStyles.length > 0)
							element.attr(_this.options.defaultBlockStyleAttr, blockStyles.join(_this.options.defaultBlockStyleAttrSeparator));
						html.append(element);
						break;
					default:
						nestLevel = 0;
						var __attributes = {};
						attributes[_this.options.defaultLineBlock] = true;
						var element = $(_this.applyLineBlock(attributes).format({
							attributes: __attributes,
							insert: lineContents.join('')
						}))
						if (blockStyles.length > 0)
							element.attr(_this.options.defaultBlockStyleAttr, blockStyles.join(_this.options.defaultBlockStyleAttrSeparator));
						html.append(element);
						break;
				}

			} else {
				nestLevel = 0;
				var __attributes = {};
				attributes[_this.options.defaultLineBlock] = true;
				var element = $(_this.applyLineBlock(attributes).format({
					attributes: __attributes,
					insert: lineContents.join('')
				}));
				if (blockStyles.length > 0)
					element.attr('class', blockStyles.join(_this.options.defaultBlockStyleAttrSeparator));
				html.append(element);
			}
		});



		var result = $.html()
		this.DEBUG("LINE_BLOCK_RESULT", result);

		return result;
	}

	QuillRender.prototype.DEBUG = function(type, object) {
		if (this.options.debug)
			this.options.debug_levels.forEach(function(level) {
				var indent = "";
				if (level !== "LINE_INDEX") {
					indent += "...";
				}
				if (level === type)
					console.log(indent + type + ":" + JSON.stringify(object))
			});
	};
	QuillRender.prototype.applyInlineTagsAndAttributes = function(op) {
		var _this = this;

		var format = QuillRender.format;

		var $ = cheerio.load('');
		var html = $.root();
		var content = null;
		var isEmbedded = false;

		if (typeof op.insert === "object") {
			var attr = Object.keys(op.insert)[0];
			var sformatters = [];

			if (format.embed[attr]) {
				var embedFormatter = format.embed[attr];

				if (embedFormatter) {
					isEmbedded = true;
					content = embedFormatter.format(op);
					op.insert="";
				} else {
					isEmbedded = false;
					content = op.insert;
				}
			}
			this.DEBUG("INSERT_IS_OBJECT", {
				isobject: true,
				isEmbedded: isEmbedded
			});
		} else if (typeof op.insert === "string") {
			this.DEBUG("INSERT_IS_STRING", true);
			content = op.insert;
			this.DEBUG("INSERT_IS_STRING", content);
		} else if (typeof op.insert === "undefined") {
			this.DEBUG("INSERT_IS_STRING", false);
			content = "";
		}

		if (op.attributes) {

			var tagformatters = [];
			var styleformatters = [];
			for (attr in op.attributes) {
				var tagFormatter = QuillRender.format.inline[attr];
				if (tagFormatter) {
					tagformatters.push(tagFormatter);
				}
				tagformatters.sort();

				var styleFormatter = QuillRender.format.inline_styles[attr];

				if (styleFormatter) {
					styleformatters.push(styleFormatter);
				}
			}

			var tags = [];
			for (var i = 0; i < tagformatters.length; i++) {
				tags[i] = $(tagformatters[i].format(op));
				if(i>0) tags[i - 1].append(tags[i]);
			}
			this.DEBUG("LINE_PROCESSING", {
				attributes: op.attributes,
				insert: op.insert
			});

			if (tags[tags.length - 1]) {

				/* TAG HAS STYLING ?*/

				var styles = [];

				for (var j = 0; j < styleformatters.length; j++) {
					styles.push(styleformatters[j].format(op));
				}
				this.DEBUG("INFO", styles.join(_this.options.defaultInlineStyleAttrSeparator));

				if (styles.length > 0)
					tags[0].attr(_this.options.defaultInlineStyleAttr, styles.join(';'))

				tags[tags.length-1].append(content)
				html.append(tags[0]);

			} else {

				/* NO TAGS!*/
				var styles = [];

				for (var j = 0; j < styleformatters.length; j++) {

					styles.push(styleformatters[j].format(op));
				}
				this.DEBUG("INFO", styles.join(_this.options.defaultInlineStyleAttrSeparator));

				var altTag = $(format.inline[_this.options.defaultInline].format())
				if (styles.length > 0) {
					altTag.attr(_this.options.defaultInlineStyleAttr, styles.join(_this.options.defaultInlineStyleAttrSeparator) + _this.options.defaultInlineStyleAttrSeparator)
					html.append(altTag.append(content));
					
				} else {
					html.append(content);
				}

			}


		} else if (typeof op.attributes === "undefined") {
			html.append(content);
			this.DEBUG("INFO", {
				attributes: "undefined",
				insert: op.insert,
				content: typeof content
			});
		} else {
			return op.insert;
		}


		return $.html();


		
	}

	QuillRender.prototype.applyLineBlock = function(attributes, config) {
		var format = QuillRender.format;
		for (var type in attributes) {
			if (format.block[type]) {
				if (format.block[type]) {
					return format.block[type];
				}
			}
		}
		return false;
	}
	QuillRender.format = {
		block: {},
		inline_styles: {},
		block_styles: {},
		embed: {},
		inline: {}
	}

	return function(delta) {
		return new QuillRender();
	}

}()
