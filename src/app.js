// importar express
import express from "express"
const app = express()

// importar datos de array products productManager
import {exportProducts} from './productManager.js'
const data = exportProducts()

// traer productos (todos)
app.get('/products/getAll', (req, res) => {
    res.send(data)
})

// traer solo los indicados
app.get('/products/getOnly/:num', (req, res) => {
    let num = parseInt(req.params.num)

    let selectedArray = []

    for (let i = 0; i < num; i++) {
        const selected = data[i];    
        selectedArray.push(selected)
    }

    res.send(selectedArray)
})

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