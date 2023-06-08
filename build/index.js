"use strict";
const buscarPersonaje = (id) => {
    console.log(`Buscando personaje ${id}`);
    const baseUrl = "http://swapi.dev/api/";
    const url = `${baseUrl}people/${id}`;
    console.log(`Url: ${url}`);
    fetch(url)
        .then(res => res.json())
        .then(data => {
        const { name } = data;
        const miSpan = document.querySelector("span#info");
        if (!miSpan)
            return;
        miSpan.innerText = name;
    })
        .catch(error => console.error(error));
};
// const miBoton = document.getElementById("boton-click") as HTMLButtonElement
const miBoton = document.querySelector("button#boton-click");
const miInput = document.querySelector("input[name=numPersonaje]");
console.log(miBoton);
miBoton === null || miBoton === void 0 ? void 0 : miBoton.addEventListener("click", (event) => {
    if (!miInput)
        return;
    if (!miInput.value)
        return;
    //Aqui gestionamos el evento
    console.log(miInput.value);
    //Hacer la llamada a la API
    buscarPersonaje(miInput.value);
});
if (miBoton) {
    miBoton.onclick = (event) => { };
    miBoton.onmouseover = (event) => {
        console.log("estoy haciendo over");
        miBoton.style.backgroundColor = "yellow";
    };
    miBoton.onmouseleave = (event) => {
        console.log("no estoy haciendo over");
        miBoton.style.backgroundColor = "transparent";
    };
}
miInput === null || miInput === void 0 ? void 0 : miInput.addEventListener("keydown", (event) => {
});
//# sourceMappingURL=index.js.map