import express from "express";

app.get('/api/getFrase', (req, res) => {
    res.send(frase)
})




// configurar servidor
const PORT = 8080
const server = app.listen(PORT, () => {
    console.log('Servidor ejecutandose en el puerto', PORT)
})
server.on('error', error => console.log('Error en el servidor', error))