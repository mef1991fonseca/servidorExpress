const fs = require("fs")

class Contenedor{
    constructor(nombreArchivo){
        this.nombreArchivo = nombreArchivo
    }

     //getAll(): Object[] - Devuelve un array con los objetos presentes en el archivo.
     getAll = async() =>{
        const contenido = await fs.promises.readFile(this.nombreArchivo, "utf-8")
        const arrayProductos = JSON.parse(contenido)
        return arrayProductos
    }

    getById = async(id) =>{
        const contenido = await fs.promises.readFile(this.nombreArchivo, "utf-8")
        const arrayProductos = JSON.parse(contenido)
        const producto = arrayProductos.find(item=>item.id === id)
        
        return producto

    }

}

module.exports = Contenedor;