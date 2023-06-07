type Color = "Rojo" | "Azul" | "Amarillo" | "Verde"
interface Forma {
    color:Color
    nombre:string
    base:number
    altura:number
}

const miForma : Forma = {
    nombre: "cuadarado",
    color: "Rojo",
    base : 5,
    altura:5
}

function obtenerArea(forma:Forma) : number{
    // const base = forma.base
    // const altura = forma.altura
    const {base,altura} = forma

    return base ** altura
}

console.log(obtenerArea(miForma))
