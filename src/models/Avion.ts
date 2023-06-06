type Aerolinea = {
    pais: string,
    nombre: string,
    fecha: Date
}

type Verdadero = true

type Color = "Rojo" | "Azul" | "Blanco" | "Negro"

enum Colores {
    Rojo = 2,
    Azul = "Azul",
    Blanco = "Blanco",
    Negro = "Negro"
}

Colores.Azul

// type Avion = {
//     marca: string,
//     numPasajeros: number,
//     aerolinea: Aerolinea,
//     color: Color
// }

interface Avion {
    marca: string
    numPasajeros: number
    aerolinea: Aerolinea
    color: Color
}

export { Color, Aerolinea } // Exportaciones adicionales

export default Avion // Exportación principal