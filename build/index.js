"use strict";
const miForma = {
    nombre: "cuadarado",
    color: "Rojo",
    base: 5,
    altura: 5
};
function obtenerArea(forma) {
    // const base = forma.base
    // const altura = forma.altura
    const { base, altura } = forma;
    return base ** altura;
}
console.log(obtenerArea(miForma));
//# sourceMappingURL=index.js.map