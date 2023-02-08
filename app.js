import express from "express"
const app = express()

import fs from "fs"

const read = fs.readFileSync('./data.json', 'utf-8')
console.log(read)






// configurar servidor
const PORT = 8080
const server = app.listen(PORT, () => {
    console.log('Servidor ejecutandose en el puerto', PORT)
})
server.on('error', error => console.log('Error en el servidor', error))