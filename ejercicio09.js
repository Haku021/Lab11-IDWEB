let numero = parseInt(prompt("Ingrese un número:"));
let temp = numero;  // guardamos el número original
let suma = 0;
let digitos = numero.toString().length;

while (temp > 0) {
    let digito = temp % 10;
    suma += Math.pow(digito, digitos); 
    temp = Math.floor(temp / 10);  
}

if (suma === numero) {
    alert(numero + " es un número Armstrong ");
} else {
    alert(numero + " NO es un número Armstrong ");
}


