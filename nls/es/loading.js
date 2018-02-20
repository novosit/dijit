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
	loadingState: "Cargando...",
	errorState: "Lo siento, se ha producido un error"
})
);
});
