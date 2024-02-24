
class CarritoCompra {
    constructor() {
        this.productos = []
    }

    agregarProducto(producto) {
        this.productos.push(producto)
    }

    calcularTotal() {
        return this.productos.reduce((total, producto) => total + producto.precio, 0)
    }

    aplicarDescuento(porcentaje) {
        return this.calcularTotal() * (porcentaje / 100)

    }
}

module.exports = CarritoCompra;