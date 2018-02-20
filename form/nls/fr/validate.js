(function (factory) {
    'use strict';
    var req = require,
        isAmd = typeof (define) === 'function' && define.amd;
    if (isAmd) {
        define([], factory);
    }
    else if (typeof(exports) === 'object') {
        module.exports = factory();
    }
})(function () {
	return (
({
	invalidMessage: "La valeur indiquée n'est pas correcte.",
	missingMessage: "Cette valeur est requise.",
	rangeMessage: "Cette valeur n'est pas comprise dans la plage autorisée."
})
);
});
