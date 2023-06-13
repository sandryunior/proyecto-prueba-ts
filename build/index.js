import figlet from "figlet";
import MenuPrincipal from "./controllers/menuController";
// import chalk from "chalk"
// console.log("Hola Mundo desde el proyecto final de Typescript")
//Primero - Vamos a crear una pantalla de menú principal
//1 - Saludo -> figlet
//2 - Opciones -> inquirer
figlet("Proyecto final", (error, res) => {
    if (error)
        return console.error(error);
    //console.log(res)
});
MenuPrincipal();
//# sourceMappingURL=index.js.map