var pagos = Number(prompt("Introduce el número de pagos realizados este mes: "));
var gasto = Number(prompt("Ingresa el total  de tus gastos en dolares: "));

function payments(pagos,gasto){
    var res = ((pagos*3) + gasto) * 1.01;
    alert("El total a pagar es: " + res)
}

payments(pagos,gasto)