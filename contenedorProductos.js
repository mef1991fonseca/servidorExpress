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

    //getById(Number): Object - Recibe un id y devuelve el objeto con ese id, o null si no está.
    /*getById = async(id) =>{
       try {
            if(fs.existsSync(this.nombreArchivo)){
                const contenido = await fs.promises.readFile(this.nombreArchivo, "utf-8")
                if (contenido){
                    const arrayProductos = JSON.parse(contenido)
                    const producto = arrayProductos.find(item=>item.id === id)
                    if(producto){
                        return producto
                    }
                    else{
                        return "Producto no encontrado"
                    }
                }else{
                    return "El archivo está vacio"
                }
            }
       } catch (error) {
        
       }
    }*/
    getById = async(id) =>{
        const contenido = await fs.promises.readFile(this.nombreArchivo, "utf-8")
        const arrayProductos = JSON.parse(contenido)
        const producto = arrayProductos.find(item=>item.id === id)
        
        return producto

    }

}

module.exports = Contenedor;