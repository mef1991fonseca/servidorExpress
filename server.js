const { request, response } = require("express");
const express = require("express");
const contenedor = require("./contenedorProductos");

//Crear el servidor
const app = express()

//Instancio
const listaproducto = new contenedor("productos.txt")

app.get("/", async(req,res)=>{
    res.send("Usted accedió al puerto 8080")
})

//configuracion ruta productos
//Ruta get '/productos' que devuelva un array con todos los productos disponibles en el servido
app.get("/productos", async(req, res)=>{
    const prod = await listaproducto.getAll()
    res.send(prod)
})

//Configuracion ruta productosRandom
//Ruta get '/productoRandom' que devuelva un producto elegido al azar entre todos los productos disponibles
app.get("/productosRandom", async(req, res)=>{
    const aleatorio = parseInt(Math.random()*3 + 1)
    const prod = await listaproducto.getById(aleatorio)
    res.send(prod)
})

//Levantar el servidor
app.listen(8080, async()=>{
    console.log("Server listining on port 8080")
})