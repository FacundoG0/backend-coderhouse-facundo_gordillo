class ProductManager {
    constructor(products){
        this.products = products;
    }

    addProducts(title, description, price, thumbnail, code, stock, id){

        this.title = title;
        this.description = description;
        this.price = price;
        this.thumbnail = thumbnail;
        this.code = code;
        this.stock = stock;
        
        for (let i = 0; i < products.length; i++) {
            products = products.push(product);

            this.id = product.length
        }


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
        return this.products;
    }    
}

let product = new ProductManager("LIMPIAVIDRIOS", "LIMPIAVIDRIOS CREADO A BASE DE ACETONA Y ALCOHOL - INDUSTRIA ARGENTINA", "$450", "USUARIO/IMAGES", "1", "25");
let products = []
console.log(ProductManager.products)