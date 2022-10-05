alert("Bienvenido al Cotizador \n Precios de los Departamentos: \n Departamento A: USD 100000.00 \n Departamento B: USD 150000.00 \n Departamento C: USD 200000.00")

let depA = 100000
let depB = 150000
let depC = 200000
let depCot

let depElegido=prompt("Elegir departamento a cotizar: \n Dpto A, Dpto B o Dpto C \n X para cancelar");
while(depElegido != "X"){
    switch(depElegido){
        case "Dpto A":
            depCot=depA;
            alert("Eligio el "+depElegido+" con valor de USD"+depCot);
            break;
        case "Dpto B":
            depCot=depB;
            alert("Eligio el "+depElegido+" con valor de USD"+depCot);
            break;
        case "Dpto C":
            depCot=depC;
            alert("Eligio el "+depElegido+" con valor de USD"+depCot);
            break;
        default:
            alert("Error de departamento");
            break;
    }
    break;
}

let inicial=parseInt(prompt("Ingrese el porcentaje (%) de inicial que quiere abonar \n Se recomienda entre 20 y 40%"));
let calificacion=prompt("Ingrese el estado de su calificacion financiera \n Elija entre mala, regular y buena")
if (inicial <10){
    alert("Incremente su valor de inicial");
}else if(calificacion==="mala"){
    alert("Mejore su calificacion");
}else if(inicial>=10){
    montoInicial=inicial/100*depCot;
    montoFinanciar=depCot-montoInicial;
}else{
    alert("Revise la informacion ingresada e intente nuevamente");
}
alert("Su inicial sera de USD " + montoInicial +" y su monto a financiar sera de USD "+montoFinanciar);

let periodoFinanciar=parseInt(prompt("Durante cuantos anios desea pagar su credito \n Minimo 10 y maximo 25"))
while((periodoFinanciar>=10)&&(periodoFinanciar<=25)){
    if(calificacion==="regular"){
        interes=0.075/12;
        cuotaMensual=(interes*montoFinanciar)/(1-Math.pow(1+interes,-12*periodoFinanciar));   
        console.log(cuotaMensual);
        break;
    }else if(calificacion==="buena"){
        interes=0.045/12;
        cuotaMensual=(interes*montoFinanciar)/(1-Math.pow(1+interes,-12*periodoFinanciar));
        console.log(cuotaMensual);
        break;
    }else{
        alert("Periodo no valido");
        break;
        }
}
alert ("Sus cuotas seran de USD"+cuotaMensual+" por "+periodoFinanciar*12+" meses")





