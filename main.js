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
    }


    // FUNCIONA
    getProduct(code){
        let product = this.products.find(element => toString(this.code) === toString(code))
        
        if (product == undefined){
            console.log("No se ha encontrado el producto")
        }

        else return console.log(product)
    };


    // FUNCIONA
    getProductById(id){
        let product = this.products.find(element => this.id === id)
        
        if (product == undefined){
            console.log("No se ha encontrado el producto")
        }

        else return console.log(product)
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
    code: "130",
    stock: "25",
    id: ""});
    

product.addProduct({
    title: "TOMATE",
    description: "PROVENIENTE DEL ESTE ARGENTINO",
    price: "$850",
    thumbnail: "USUARIO/IMAGES",
    code: "140",
    stock: "15",
    id: ""});




product.getAllProducts()

// product.getProductById(1)
// product.getProduct(130)