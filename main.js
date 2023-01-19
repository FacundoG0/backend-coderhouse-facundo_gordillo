class ProductManager {
    constructor(title, description, price, thumbnail, code, stock){
        this.title = title;
        this.description = description;
         this.price = price;
         this.thumbnail = thumbnail;
         this.code = code;
         this.stock = stock;

    }

    addProducts(){
        let products = [];

        products.push({
            title: this.title,
            description: this.description,
            price: this.price,
            thumbnail: this.thumbnail,
            code: this.code,
            stock: this.stock,       
        });
    }
}

let limpiavidrios = new ProductManager("LIMPIAVIDRIOS", "LIMPIAVIDRIOS CREADO A BASE DE ACETONA Y ALCOHOL - INDUSTRIA ARGENTINA", "$450", "USUARIO/IMAGES", "1", "25")

let tractorsito = new ProductManager("TRACTORSITO", "JUGUETE DE PLÁSTICO PARA ÑINOS - CONTIENE PIEZAS PEQUEÑAS", "$850", "USUARIO/IMAGES", "2", "17")