"use strict";
const Formatter = require('./Formatter');

class InlineStyleFormatter extends Formatter {}
InlineStyleFormatter.type = "inline_styles";

module.exports = InlineStyleFormatter;
