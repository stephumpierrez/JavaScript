do {
let usuario = prompt("Ingrese su nombre:");
    alert(`Hola ${usuario}, bienvenido a BordaCuentos!`);

const productos =  [
{ id: 1, nombre: "Las Travesuras de Supertincho", producto: "Libro", precio: 2590 },
{ id: 2, nombre: "Supertincho RKT", producto: "Libro", precio: 2590 },
];

let nombre = prompt("¿Qué libro deseas buscar?");
const producto = productos.find((item) => item.nombre === nombre);

if (producto) {
    alert(`
    Id: ${producto.id}
    Nombre: ${producto.nombre}
    Producto: ${producto.producto}
    Precio: ${producto.precio}
    `)
    let libros = Number(prompt("Dinos, ¿cuántos libros deseas comprar?"));
alert(`El total es: $ ${producto.precio * libros}`);

if (libros > 0) {
    alert("¡Gracias por tu compra!")
}else{
    alert("Por favor ingresa una cantidad válida.")
}
} else {
    alert("Lo siento, producto no disponible, ¡Inténtalo de nuevo!");
}
}
while (confirm("¿Deseas realizar otra compra?"));
