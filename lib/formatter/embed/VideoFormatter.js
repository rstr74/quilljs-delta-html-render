"use strict";

const EmbedFormatter = require('../../type/EmbedFormatter');
class VideoFormatter extends EmbedFormatter {}

/* STATIC FUNCTION */
VideoFormatter.format = function(op) {
	return '<iframe class="ql-video " frameborder="0" allowfullscreen="true" src="'+op.insert.video+'"></iframe>';
}

VideoFormatter.style = function(element) {}

VideoFormatter.formatter = "video";

module.exports = VideoFormatter;
