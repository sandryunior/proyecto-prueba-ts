interface Coche {
    readonly marca:string
    modelo:string
    kilometros?:number
}

const micoche : Coche=  {
    marca:"Mercedes",
    modelo:"CLA"
}

micoche.kilometros = 10000
micoche.modelo = "Clase C"

const modificaModelo = (coche:Coche): Coche => {
    return{
        marca:coche.marca,
        modelo:"Mi modelo",
        kilometros: coche.kilometros
    }
}

const miOtroCoche = modificaModelo(micoche)

// console.log({micoche})
// console.log({miOtroCoche})

//Objetos y Arrays se pasan por referencia
//Tipos primitivos se pasan por valor
const modificarKilometraje = (coche:Coche) : Coche => {
    // const nuevoCoche = coche
    // const nuevoCoche = {... coche} //copia superficial
    // const nuevoCoche = JSON.parse(JSON.stringify(coche)) //Copia profunda
    const nuevoCoche = structuredClone(coche)
    nuevoCoche.kilometros = 20
    return nuevoCoche
}

const nuevoCoche = modificarKilometraje(micoche)

console.log({nuevoCoche})
console.log({micoche})