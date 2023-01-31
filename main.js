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


    // NUEVO: 
    // Para buscar el producto debe colocar el ID del producto correspondiente y actualizar el resto de los datos que precisa.

    updateProduct(product_updated){

        let update_product = this.products.find(element => element.id === product_updated.id);

        if (update_product){

            // ver producto antes de cambiar
            // console.log(update_product)
            
            update_product.title = product_updated.title
            update_product.description = product_updated.description
            update_product.price = product_updated.price
            update_product.thumbnail = product_updated.thumbnail
            update_product.code = product_updated.code
            update_product.stock = product_updated.stock

            // ver producto de salida:
            // console.log(update_product)
            

            // corroborar array:
            console.log(this.products)

            // Guardar datos actualizados
            fs.writeFileSync("data.json", JSON.stringify(this.products))
        }

        else console.log("No se encontraron resultados")
    }
}



// *********************************************************************************************************************************
// *********************************************************************************************************************************
// *********************************************************************************************************************************
// *********************************************************************************************************************************


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

// product.getProductById(1)
// product.getProduct(140)

product.updateProduct({
    title: "REEMPLAZO",
    description: "LIMPIAVIDRIOS CREADO A BASE DE ACETONA Y ALCOHOL - INDUSTRIA ARGENTINA",
    price: "$970",
    thumbnail: "USUARIO/IMAGES",
    code: 130,
    stock: 5,
    id: 1});