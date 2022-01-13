//parte 1

var fulano1 = prompt("Ingresa el nombre de un amigo");
var fulano2 = prompt("Ingresa el nombre de otro amigo");
var fulano3 = prompt("Ingresa el nombre de un último amigo");

function saludar(fulano1,fulano2,fulano3){
    console.log("Bienvenidos " + fulano1 +  ", " + fulano2 + " y " + fulano3);
}

saludar(fulano1,fulano2,fulano3);

//parte 2

var edad1;
var edad2;
var edad3;

var año1 = Number(prompt("Cuál es tu año de nacimiento " + fulano1 + "?"));
var año2 = Number(prompt("Cuál es tu año de nacimiento " + fulano2 + "?"));
var año3 = Number(prompt("Cuál es tu año de nacimiento " + fulano3 + "?"));

const actual = 2022;
function  calcularEdad(año1,año2,año3){
    edad1 = actual - año1;
    edad2 = actual - año2;
    edad3 = actual - año3;
    console.log("Sus edades son: " + edad1 + ", " + edad2 + " y " + edad3);
}

calcularEdad(año1,año2,año3);

//parte 3

function saludoCompleto(){
    console.log("Bienvenido " + fulano1 + " tienes " + edad1 + " años, " + "Bienvenido " + fulano2 + " tienes " + edad2 + " años, y " + "Bienvenido " + fulano3 + " tienes " + edad3 + " años");
}

saludoCompleto();
