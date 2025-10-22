let monto=parseInt(prompt("Ingrese el monto a retirar: "));
let billetes100=0;
let billetes50=0;
let billetes20=0;
let billetes10=0;

while(monto)
    if(monto>=100){
        billetes100+=(monto-(monto%100))/100;
        let nuevoMonto=(monto%100);
    }
    if(monto>=50){
        
    }
    if(monto>=20){
        
    }
    if(monto>=10){
        
    }
