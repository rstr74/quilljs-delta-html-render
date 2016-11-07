"use strict";
const Formatter = require('./Formatter');

class BlockFormatter extends Formatter {}
BlockFormatter.type = "block";

module.exports = BlockFormatter;
