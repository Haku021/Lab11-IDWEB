let pares=0;
let impares=0;

for(let i=0;i<10;i++){
    let numero=parseInt(prompt("Ingrese el numero: "));
    if(numero%2==0){
        pares++;
    }else{
        impares++;
    }
}console.log("La cantidad de pares es:"+pares+"\nLa cantidad de impares es: "+impares);
alert("La cantidad de pares es:"+pares+"\nLa cantidad de impares es: "+impares);

