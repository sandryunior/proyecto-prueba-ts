"use strict";
//Funciones flecha
function suma(a, b) {
    return a + b;
}
const multiplica = (a, b) => a * b;
const obtenRectangulo = (base, altura) => ({
    base,
    altura,
    superficie: base * altura
});
const miRectangulo = obtenRectangulo(10, 20);
console.log(miRectangulo.superficie);
//# sourceMappingURL=funciones.js.map