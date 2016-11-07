var quillRender = require('../index');
var tests = require('./delta/data');

describe('Test Formatters', function() {
	tests.forEach(function(test) {
		it(test.name, function() {
			quillRender.options.debug = true;
			expect(quillRender.renderDelta(test.ops)).toEqual(test.expect);
		});
	});
});
