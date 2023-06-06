const coche = {
    marca: "Ford",
    modelo: "Fiesta",
    kilometraje: 16000,
    ids: [1, 2, "3"]
}

export type Coche = {
    marca: string,
    modelo: string,
    kilometraje: number,
    ids: (string | number)[],
}

export type Moto = {
    marca: string,
    modelo: string,
    estaALaVenta: boolean
}

const miCoche: Coche = {
    marca: "Mini",
    modelo: "Cooper",
    kilometraje: 10000,
    ids: []
}

// export { Coche }