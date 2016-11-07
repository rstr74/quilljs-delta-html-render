"use strict";
const Formatter = require('./Formatter');

class BlockStyleFormatter extends Formatter {}
BlockStyleFormatter.type = "block_styles";

module.exports = BlockStyleFormatter;
