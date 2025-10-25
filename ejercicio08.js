let opcion = 0;
while (opcion != 3) {
    alert("Menú" +
        "\n1) Calcular área del círculo" +
        "\n2) Calcular área del rectángulo" +
        "\n3) Salir");
    opcion = parseInt(prompt("Ingrese la opción elegida:"));
    if (opcion == 1) {
        let radio = parseInt(prompt("Ingrese el radio del círculo: "));
        let areaCircu = Math.PI * (radio ** 2);
        alert("El área del círculo es: " + areaCircu);
        console.log("El área del círculo es: " + areaCircu);
    }
    if (opcion == 2) {
        let base = parseInt(prompt("Ingrese la base del rectángulo:"));
        let altura = parseInt(prompt("Ingrese la altura del rectángulo: "));
        let areaRect = base * altura;
        alert("El área del rectángulo es: " + areaRect);
        console.log("El área del rectángulo es: " + areaRect);
    }
    if (opcion == 3) {
        alert("Usted salió del programa");
        console.log("Usted salió del programa");
    }
}



