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
	invalidMessage: "El valor especificado no es válido.",
	missingMessage: "Este valor es necesario.",
	rangeMessage: "Este valor está fuera del intervalo."
})
);
});
