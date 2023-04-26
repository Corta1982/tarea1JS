//3.1)objeto del cual debo crear las clases correspondientes:
/*let carrito = {
    montoTotal: 10,
    productos: ["Leche"]
}*/

//clases:
class Producto {               //creación primera clase
  nombre;
  precio;
  unidades;
  constructor(nombre, precio, unidades) {
    this.nombre = nombre;
    this.precio = precio;
    this.unidades= unidades;
  }
}



class Carrito {                    //creación segunda clase
  productos;
  montoTotal;
    constructor(productos,montoTotal) {                //creo una función constructora para crear un nuevo objeto con diferentes valores en sus atributos
      this.montoTotal = 0;
      this.productos = [];
    }
    
    agregarProducto(producto) {               //3.2) Agregar un método a la clase que agregue un producto al carrito y actualice el montoTotal
      const index = this.productos.findIndex((p) => p.nombre === producto.nombre);   //3.3)Agregar al ejercicio anterior una validación para no permitir duplicados e imprimir un mensaje si el item ya existe "ya existe el producto xxx"
  
      if (index === -1) {               //Si el índice que devuelve findIndex es -1, significa que no se encontró un producto con el mismo nombre en el carrito, por lo que se agrega el nuevo producto y se actualiza el monto total del carrito.
        this.productos.push(producto);
        this.calcularMontoTotal();
      } else {                         //sino significa que ya existe un producto con el mismo nombre en el carrito, por lo que se imprime un mensaje de error indicando que el producto ya existe.
        console.log(`Ya existe el producto ${producto.nombre}`);
      }
    }

    
    calcularMontoTotal() {
        let total = 0;
        for (let i = 0; i < this.productos.length; i++) {
          total += this.productos[i].precio * this.productos[i].unidades;
        }
        this.montoTotal = total;
    }
}


//corroboro que todo funcione:

const miCarrito = new Carrito();


const producto1 = new Producto("Leche", 20,2);
const producto2 = new Producto("Pan", 10,1);
const producto3 = new Producto("Queso", 30,1);


//Repito un producto para ver si salta el error de no agregar dos veces un producto:

miCarrito.agregarProducto(producto1);
miCarrito.agregarProducto(producto2);
miCarrito.agregarProducto(producto1);
miCarrito.agregarProducto(producto3);

console.log(miCarrito)


//verifico si los productos se agragaron correctamente y si el montoTotal es el esperado:
console.log(miCarrito.productos);
console.log(miCarrito.montoTotal);