import express from "express";

import prueba from './productManager.js'

console.log(prueba)














// configurar servidor
const PORT = 8080
const server = app.listen(PORT, () => {
    console.log('Servidor ejecutandose en el puerto', PORT)
})
server.on('error', error => console.log('Error en el servidor', error))