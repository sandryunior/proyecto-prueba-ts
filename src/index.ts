import Avion, { Color } from "./models/Avion"
import { Coche, Moto } from "./models/tipos"

const miAvion: Avion = {
    marca: "Boeing",
    numPasajeros: 140,
    aerolinea: {
        nombre: "Iberia",
        pais: "España",
        fecha: new Date()
    },
    color: "Azul"
}

type Bicicleta = {
    tamaño: number,
    color: Color
}