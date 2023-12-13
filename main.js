// CALCULAR COSTO TOTAL DE PRODUCTOS SELECCIONADOS POR EL USUARIO

do {
    let nombre = prompt("Ingrese su nombre");
    alert(`Hola ${nombre}, bienvenido a BordaCuentos!`);
    let producto = Number(prompt("Dinos, ¿cuántos libros deseas comprar?"));
    let precioProducto = 2590;
    let resultado = 0;
    
    function multiplicar(producto, precioProducto) {
        resultado = producto * precioProducto;
    }
    
    multiplicar(producto, precioProducto);
    
    alert(`El costo total de tu compra es de: $${resultado}`);
    
    if (resultado > 0) {
        alert("¡Gracias por tu compra!")
    }else{
        alert("Por favor ingresa una cantidad válida.")
    }
    }
    while (confirm("¿Deseas realizar otra compra?"));