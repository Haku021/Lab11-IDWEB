let monto=parseInt(prompt("Ingrese el monto a retirar: "));
let billetes100=0;
let billetes50=0;
let billetes20=0;
let billetes10=0;

while (monto >= 100){
  billetes100++;
  monto -= 100;
}
while (monto >=50){
  billetes50++;
  monto -= 50;
}
while (monto >= 20){
  billetes20++;
  monto -= 20;
}
while (monto >= 10){
  billetes10++;
  monto -= 10;
}

alert("Billetes de 100: " + billetes100 +"\nBilletes de 50: " + billetes50 +
  "\nBilletes de 20: " + billetes20 +"\nBilletes de 10: " + billetes10);
console.log("Billetes de 100: " + billetes100 +"\nBilletes de 50: " + billetes50 +
  "\nBilletes de 20: " + billetes20 +"\nBilletes de 10: " + billetes10);

  
