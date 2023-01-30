class ProductManager {
    constructor(){
        this.products = [];
    }


    // FUNCIONA
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

product.addProduct("LIMPIAVIDRIOS", "LIMPIAVIDRIOS CREADO A BASE DE ACETONA Y ALCOHOL - INDUSTRIA ARGENTINA", "$450", "USUARIO/IMAGES", "130", "25");

// product.getAllProducts()

// product.getProductById(1)
product.getProduct(130)