Object.defineProperty(exports, '__esModule', { value: true });

var buncheeTest = require('bunchee-test');



Object.keys(buncheeTest).forEach(function (k) {
	if (k !== 'default' && !Object.prototype.hasOwnProperty.call(exports, k)) Object.defineProperty(exports, k, {
		enumerable: true,
		get: function () { return buncheeTest[k]; }
	});
});
