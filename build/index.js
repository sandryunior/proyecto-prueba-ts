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
const alumnos = [{
        nombre: "Gorka",
        edad: 25
    }, {
        nombre: "Aitor",
        edad: 22
    }, {
        nombre: "Alvar",
        edad: 25
    }];
console.log(alumnos);
console.table(alumnos);
console.error("Esto es un error");
console.time("timer");
for (let i = 0; i < 123456; i++) {
    let a = 0;
}
console.timeEnd("timer");
//# sourceMappingURL=index.js.map