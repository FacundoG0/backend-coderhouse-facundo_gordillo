class Productos {
    constructor(){
        this.productos = []
        this.id = 0
    }

    list(id){
        let prod = this.productos.find(prod => prod.id == id)
        return prod || {error: 'Producto no encontrado'}
    }

    listAll(){
        if (this.productos.length == 0) {
            return {error: "No hay productos cargados"}
        }else{
            return this.productos
        }
    }

    add(prod){
        prod.id = this.id + 1
        this.productos.push(prod)
    }

    update(prod, id){
        prod.id = Number(id)
        let index = this.productos.findIndex(prod => prod.id == id)
        this.productos.splice(index, 1, prod)
    }

    delete(id){
        let index = this.productos.findIndex(prod => prod.id == id)
        return this.productos.splice(index, 1)
    }
}

export default Productos