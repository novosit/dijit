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
	buttonOk: "Aceptar",
	buttonCancel: "Cancelar",
	buttonSave: "Guardar",
	itemClose: "Cerrar"
})
);
});
