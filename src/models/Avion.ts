type Aerolinea = {
    pais: string,
    nombre: string,
    fecha: Date
}

type Color = "Rojo" | "Azul" | "Blanco" | "Negro"

type Verdadero = true

type Avion = {
    marca: string,
    numPasajeros: number,
    aerolinea: Aerolinea,
    color: Color
}

// interface Avion {

// }

export { Color, Aerolinea } // Exportaciones adicionales

export default Avion // Exportación principal