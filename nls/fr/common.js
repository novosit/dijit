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
	buttonOk: "OK",
	buttonCancel: "Annuler",
	buttonSave: "Enregistrer",
	itemClose: "Fermer"
})
);
});
