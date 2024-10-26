var productos = [];

fetch('db/productos.json')
.then(response=>response.json())
.then(json=>console.log(i));

function agregar() {
    console.log(productos[i]);
    let carrito = [];
    let c = localStorage.getItem("carrito");
    let carrito = c.json()? c:[];
    carrito.push(productos[i]);
    localStorage.setItem('carrito', JSON.stringify(carrito));
}
console.log('loaded');
