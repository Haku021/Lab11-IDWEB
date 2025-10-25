let numero=parseInt(prompt("Ingrese un número: "));
let suma=0;
for(let i =1; i<=numero; i++){
    if(i%5 !=0){
        suma+= i;
    }
}
console.log("La suma de número desde 1 hasta "+numero+" es: "+suma);
alert("La suma de número desde 1 hasta "+numero+" es: "+suma);

