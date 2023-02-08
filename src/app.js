// importar express
import express from "express"
const app = express()

// importar datos de array products productManager
import {exportProducts} from './productManager.js'
const data = exportProducts()

// filtrar productos por ID
app.get('/products/getpbi/:num', (req, res) => {
    let num = parseInt(req.params.num)
    
    if(!isNaN(num)){
        if (num >= 1 && num <= data.length){
            res.send(data[num-1])
        } else {
            res.send({error: "El parametro está fuera de rango"})
        }
    }else{
        res.send({error: "El parametro ingresado no es un numero"})       
    }
})
    
    





app.get('/products/getFrase', (req, res) => {
    res.send(data)
})



// configurar servidor
const PORT = 8080
const server = app.listen(PORT, () => {
    console.log('Servidor ejecutandose en el puerto', PORT)
})
server.on('error', error => console.log('Error en el servidor', error))