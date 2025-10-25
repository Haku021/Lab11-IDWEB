let presupuesto = parseFloat(prompt("Ingrese su presupuesto disponible:"));
while (isNaN(presupuesto) || presupuesto <= 0) {
    presupuesto = parseFloat(prompt("Por favor, ingrese un presupuesto válido (>0):"));
}

let totalParcial = 0;
let continuarComprando = true;

while (continuarComprando) {
    let precioProducto = parseFloat(prompt("Ingrese el precio del producto:"));

    if (isNaN(precioProducto) || precioProducto < 0) {
        alert("Por favor, ingrese un precio válido.");
        continue;
    }
    if (totalParcial + precioProducto > presupuesto) {
        alert("¡No puede agregar este producto! Supera su presupuesto.");
        break;
    }
    totalParcial += precioProducto;

    let respuesta = prompt("¿Desea agregar otro producto? (si/no)").toLowerCase();
    if (respuesta !== "si") {
        continuarComprando = false;
    }
}

alert("Total parcial a pagar: $" + totalParcial.toFixed(2));
let totalFinal = totalParcial;

if (totalParcial > 100) {
    alert("¡Tiene un descuento del 10%!");
    totalFinal = totalParcial * 0.9;
} else if (totalParcial >= 50 && totalParcial <= 100) {
    alert("¡Gana un cupón del 5%!");
    totalFinal = totalParcial * 0.95;
} else {
    alert("No aplica descuento.");
}

alert("Total final a pagar: $" + totalFinal.toFixed(2));
