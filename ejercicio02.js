let edad= parseInt(prompt("Ingrese la edad: "));
if(edad<12){
    alert("Niño");
    console.log("Niño");
}
if(edad>=12 && edad<=17){
    console.log("Adolescente");
    alert("Adolescente");
}
if(edad>=18 && edad<=59){
    console.log("Adulto");
    alert("Adulto");
}
if(edad>=60){
    console.log("Adulto mayor");
    alert("Adulto mayor");
}
