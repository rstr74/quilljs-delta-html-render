"use strict";
const Formatter = require('./Formatter');

class EmbedFormatter extends Formatter {}
EmbedFormatter.type = "embed";

module.exports = EmbedFormatter;
