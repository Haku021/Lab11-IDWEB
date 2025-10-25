let continuarComprando = true;
let totalParcial = 0;

while (continuarComprando) {
    let precioProducto = parseFloat(prompt("Ingrese el precio del producto:"));

    if (isNaN(precioProducto) || precioProducto < 0) {
        alert("Por favor, ingrese un precio válido.");
        continue;
    }
    totalParcial += precioProducto;

    let respuesta = prompt("¿Desea agregar otro producto? (si/no)").toLowerCase();
    if (respuesta !== "si") {
        continuarComprando = false;
    }
}
alert("Total parcial a pagar: S/" + totalParcial.toFixed(2));
let totalFinal = totalParcial;

if (totalParcial > 100) {
    alert("¡Tiene un descuento del 10%!");
    totalFinal = totalParcial*0.9;
} else if (totalParcial >= 50 && totalParcial <= 100) {
    alert("¡Gana un cupón del 5%!");
    totalFinal = totalParcial*0.95;
} else {
    alert("No aplica descuento.");
}

alert("Total final a pagar: $" + totalFinal.toFixed(2));

