let numeroMaximo= parseInt(prompt("Ingrese un número (mayor que 1):"));
let numerosPrimo = "";
for (let numeroActual = 2; numeroActual <= numeroMaximo; numeroActual++) {
    let esPrimo = true;
    for (let divisor = 2; divisor < numeroActual; divisor++) {
        if (numeroActual % divisor === 0) {
            esPrimo = false;
            break;
        }
    }
    if (esPrimo) {
        numerosPrimo += numeroActual + " ";
    }
}
alert("Números primos entre 1 y "+numeroMaximo+": "+numerosPrimo);
console.log("Números primos entre 1 y "+numeroMaximo+": "+numerosPrimo);

