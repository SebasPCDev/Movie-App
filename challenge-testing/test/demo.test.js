

const CarritoCompra = require("../index")

describe("CarritoCompra", () => {
    test("Debería inicializar productos como un arreglo vacío", () => {
        const carrito = new CarritoCompra();
        const productos = carrito.productos
        expect(productos).toEqual([]);
    })
    test("Debería agregar un producto", () => {
        const carrito = new CarritoCompra();
        const producto = { id: 1, nombre: "Producto 1", precio: 10 }
        carrito.agregarProducto(producto)
        expect(carrito.productos).toEqual([producto]);
    })
    test("Debería calcular el total de la compra", () => {
        const carrito = new CarritoCompra();
        const producto1 = { id: 1, nombre: "Producto 1", precio: 10 }
        const producto2 = { id: 2, nombre: "Producto 2", precio: 30 }
        carrito.agregarProducto(producto1)
        carrito.agregarProducto(producto2)

        expect(carrito.calcularTotal()).toEqual(40);
    })
    test("Debería aplicar un porcentaje", () => {
        const carrito = new CarritoCompra();
        const producto1 = { id: 1, nombre: "Producto 1", precio: 10 }
        const producto2 = { id: 2, nombre: "Producto 2", precio: 30 }
        carrito.agregarProducto(producto1)
        carrito.agregarProducto(producto2)
        carrito.calcularTotal()

        expect(carrito.aplicarDescuento(50)).toEqual(20);
    })
})



