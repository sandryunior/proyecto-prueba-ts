"use strict";
const lanzaErrorSiMenorqQueCinco = (valor) => {
    if (valor < 5) {
        //Lanza error
        throw new Error("El valor introducido es menor que 5");
    }
    return true;
};
try {
    lanzaErrorSiMenorqQueCinco(3);
}
catch (err) {
    console.log("Ha habido un error", err);
}
//# sourceMappingURL=errores.js.map