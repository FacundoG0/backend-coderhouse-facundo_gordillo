const fs = require('fs')

class ProductManager {
    constructor(){
        this.products = [];
    }


    // FUNCIONA
    addProduct(product){


        // DESDE ACÁ FUNCIONA
        if (product.title == "" || product.description == "" || product.price == "" || product.thumbnail == "" || product.code == "" || product.stock == "" ){
            
            
            console.log("Todos los campos son requeridos");
        }

        let length = this.products.length
        product.id = length + 1
        
        this.products.push(product)

        fs.writeFileSync("data.json", JSON.stringify(this.products))
    }


    // FUNCIONA
    getProduct(code){
        const buscar_producto = this.products.find(element => element.code === code);

        if (buscar_producto) {
            console.log(buscar_producto)
        }

        else console.log("No se encontraron coincidencias")
    };


    // FUNCIONA
    getProductById(id){
        const buscar_producto = this.products.find(element => element.id === id);

        if (buscar_producto) {
            console.log(buscar_producto)
        }

        else console.log("No se encontraron coincidencias")
    };


    // FUNCIONA
    getAllProducts(){
        return console.log(this.products);
    }    
}

const product = new ProductManager();

product.addProduct({
    title: "LIMPIAVIDRIOS",
    description: "LIMPIAVIDRIOS CREADO A BASE DE ACETONA Y ALCOHOL - INDUSTRIA ARGENTINA",
    price: "$450",
    thumbnail: "USUARIO/IMAGES",
    code: 130,
    stock: 25,
    id: ""});
    

product.addProduct({
    title: "TOMATE",
    description: "PROVENIENTE DEL ESTE ARGENTINO",
    price: "$850",
    thumbnail: "USUARIO/IMAGES",
    code: 140,
    stock: 15,
    id: ""});




// product.getAllProducts()

product.getProductById(1)
product.getProduct(140)