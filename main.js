require fs from "fs"

class ProductManager {
    constructor(){
        this.products = [];
    }

    addProduct(title, description, price, thumbnail, code, stock, id){
        this.title = title;
        this.description = description;
        this.price = price;
        this.thumbnail = thumbnail;
        this.code = code;
        this.stock = stock;

        this.products.push(product)
        this.id = this.products.length

        if (!title || !description || !price || !thumbnail || !code || !stock){
            console.log("Todos los campos son requeridos"); return;
        }
    }

    getProduct(code){
        return this.products.find(product => product.code === code);
    };

    getProductById(id){
        let product = this.products.find(product => product.id === id)
        
        if (!product){
            console.log("No fue encontrado");
        } 
        
        return product;
    };

    getAllProducts(){
        return console.log(this.products);
    }    
}

const product = new ProductManager();

product.addProduct("LIMPIAVIDRIOS", "LIMPIAVIDRIOS CREADO A BASE DE ACETONA Y ALCOHOL - INDUSTRIA ARGENTINA", "$450", "USUARIO/IMAGES", "1", "25");

product.getAllProducts()