class Cliente{
    id:number
    nombre:string
    email:string
    activo:boolean
    static tipo = "cliente"

    constructor(id:number, n:string, e:string){
        this.id = id
        this.nombre = n
        this.email = e
        this.activo = true
    }

    desactivaCliente(){
        this.activo = false
    }

    static definicion(){
        console.log("Un cliente es un activo valioso para las empresas")
    }
}


export {Cliente}