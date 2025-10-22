let suma=0;
let nota;
let promedio;
for(let i=0; i<5;i++){
    nota=parseInt(prompt("Ingrese la nota "+(i+1)));
    if(nota<=20 && nota>=0){
        suma= suma+nota;
    }
}
promedio= suma/5;

alert("El promedio de las 5 notas es: "+promedio);
console.log("El promedio de las 5 notas es: "+promedio);

