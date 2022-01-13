var calificacion = Number(prompt("Introduce la calificación: "));

var x = function(calificacion){
    if (calificacion>=5){
        aprobar = true;
    }
    else {
        aprobar = false;
    }
    return aprobar;
}

console.log("Aprobó: " + x(calificacion));

var y = function(calificacion){
    if (calificacion>=8 && calificacion<11){
        comentario = "Excelente";
    }
    if (calificacion==11){
        comentario = "Perfecto";
    }
    if (calificacion<=4){
        comentario = "Deshonrada tu, deshonrada tu vaca";
    }
    return comentario;
}

console.log("Comentario: " + y(calificacion));