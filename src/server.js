import express from "express"
import Productos from "../api/productos.js"
const app = express(); 

let productos = new Productos()
 
app.use(express.static('public'))

const router = express.Router()
app.use('/api', router)

router.use(express.json())
router.use(express.urlencoded({extended: true}))


router.get('/products/getproducts', (req, res) => {
    res.json(productos.listAll())
})

router.get('/products/getby/:id', (req, res) => {
    let {id} = req.params
    res.json(productos.list(id))
})

router.post('/products/add', (req, res) => {
    let producto = req.body
    productos.add(producto)
    res.json(producto)
    res.json(producto)
})

router.put('/products/update/:id', (req, res) => {
    let {id} = req.params
    let producto = req.body
    productos.update(producto, id)
})

router.delete('/products/delete/:id', (req, res) => {
    let {id} = req.params
    let producto = productos.delete(id)
    res.json(producto)
})

// routerProductos.post('/addproduct', (req, res) => {
//     productos.push(req.body)
//     res.json(req.body)
// })



// configurar servidor
const PORT = 8080
const server = app.listen(PORT, () => {
    console.log('Servidor ejecutandose en el puerto', PORT)
})
server.on('error', error => console.log('Error en el servidor', error))