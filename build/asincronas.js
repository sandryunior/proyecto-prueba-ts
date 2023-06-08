"use strict";
function obtenSaludo() {
    console.log("Hola mundo");
    return "Hola mundo";
}
async function recogeLaHabitacion() {
    return true;
}
const variable = 12;
const misaludo = obtenSaludo();
console.log(misaludo);
// const resultado = recogeLaHabitacion()
// console.log(resultado)
recogeLaHabitacion()
    .then((respuesta) => console.log("La respuesta es ", respuesta))
    .catch((error) => console.log(error))
    .finally(() => console.log("He sido ejecutado"));
console.log("Seguimos");
const obtenMiRespuesta = async () => {
    console.log("ejecutando mi respuesta");
    const miRespuesta = await recogeLaHabitacion();
    console.log(miRespuesta);
};
obtenMiRespuesta();
// const miRespuesta = await recogeLaHabitacion();
// console.log(miRespuesta);
// const resuelveFlecha = (respuesta:unknown) => console.log(respuesta)
// const resuelveFlecha2 = (respuesta:unknown) => {
//     return console.log(respuesta)
// }
//# sourceMappingURL=asincronas.js.map