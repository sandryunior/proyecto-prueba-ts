const misNumeros = [1,2,3,4,5,6]

const elDoble = misNumeros.map((numero) => numero*2)

console.log(elDoble)

const devuelveElDobleDelNumero = (numero:number) => 2*numero

const otroDoble = misNumeros.map(devuelveElDobleDelNumero)

console.log(otroDoble)

//Sobrecarga
// const sumar = (a:number,b:number) => a+b

const sumar = (...params:number[]) => {
    console.log(params)
    const nuevoValor = params.reduce((valorAnterior,valorActual) => valorAnterior + valorActual,0)
    console.log(nuevoValor)
    return nuevoValor
}

