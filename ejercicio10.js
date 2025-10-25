do {
    let opcion = parseInt(prompt(
        "Menú\n" +
        "1)Calcular estadísticas de N notas\n" +
        "2)Contar números pares e impares en un rango\n" +
        "3)Generar una tabla de multiplicar\n" +
        "4)Salir\n" +
        "Ingrese una opción:"
    ));
    switch (opcion) {
        case 1:
            let n= parseInt(prompt("¿Cuántas notas va a ingresar?"));
            let notas= [];
            for (let i = 0; i < n; i++) {
                notas.push(parseFloat(prompt("Ingrese la nota " + (i + 1) + ":")));
            }
            let suma = 0;
            for (let nota of notas) {
                suma += nota;
            }
            let promedio= suma/notas.length;
            let max= Math.max(...notas);
            let min= Math.min(...notas);
            let pares= 0, impares = 0;
            for (let nota of notas) {
                if (Math.floor(nota) % 2 == 0) pares++;
                else impares++;
            }
            let mayores = 0;
            for (let nota of notas) {
                if (nota > promedio) mayores++;
            }
            alert(
                "Promedio: " + promedio.toFixed(2) +
                "\nMáxima nota: " + max +
                "\nMínima nota: " + min +
                "\nCantidad de pares: " + pares +
                "\nCantidad de impares: " + impares +
                "\nNotas por encima del promedio: " + mayores
            );
            break;
        case 2:
            let inicio = parseInt(prompt("Ingrese el inicio del rango:"));
            let fin = parseInt(prompt("Ingrese el fin del rango:"));
            let cPares = 0, cImpares = 0;

            for (let i = inicio; i <= fin; i++) {
                if (i % 2 == 0) cPares++;
                else cImpares++;
            }
            alert(
                "Entre " + inicio + " y " + fin +
                "\nPares: " + cPares +
                "\nImpares: " + cImpares
            );
            break;
        case 3:
            let num= parseInt(prompt("Ingrese un número para su tabla de multiplicar:"));
            let tabla ="";
            for (let i = 1; i <= 10; i++) {
                tabla += num +" x "+i+" = "+(num*i)+"\n";
            }
            alert(tabla);
            break;
        case 4:
            alert("Usted ha salido del programa");
            break;
    }
} while (opcion != 4);
