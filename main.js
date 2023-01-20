class ProductManager {
    constructor(products){
        this.products = products;
        products = ([])
    }

    addProducts(title, description, price, thumbnail, code, stock, id){

        this.title = title;
        this.description = description;
        this.price = price;
        this.thumbnail = thumbnail;
        this.code = code;
        this.stock = stock;
        
        this.addProducts(id) = this.products.length + 1
    }
}

new ProductManager("LIMPIAVIDRIOS", "LIMPIAVIDRIOS CREADO A BASE DE ACETONA Y ALCOHOL - INDUSTRIA ARGENTINA", "$450", "USUARIO/IMAGES", "1", "25");

console.log(ProductManager.products)