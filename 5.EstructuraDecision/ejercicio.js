//ESTRUCTURA DECISIÓN

//condición IF
let fecha = 13
if (fecha >12) {
    console.log("Olvidaste una fecha de cumpleaños")
}

//condición ELSE
let edad=19
 if (edad >= 18) {
    console.log("Es mayor de edad");
}
 else {
    console.log("Es menor de edad");
}

//condición ELSE IF
let hora = 16
if (hora < 12) {
    console.log("Buen día");
} else if(hora < 18){
    console.log("Buenas tardes");
}  else {
    console.log("Buenas noches");
}

//condición SWITCH
let meses = 8
switch(meses) {
    case 1: console.log("Enero; Perteneces al signo de Capricornio."); break;
    case 2: console.log("Febrero; Perteneces al signo de Acuario."); break;
    case 3: console.log("Marzo; Perteneces al signo de Piscis."); break;
    case 4: console.log("Abril; Perteneces al signo de Aries."); break;
    case 5: console.log("Mayo; Perteneces al signo de Tauro."); break;
    case 6: console.log("Junio; Perteneces al signo de Geminis."); break;
    case 7: console.log("Juio; Perteneces al signo de Cancer."); break;
    case 8: console.log("Agosto; Perteneces al signo de Leo."); break;
    case 9: console.log("Setiembre; Perteneces al signo de Virgo."); break;
    case 10: console.log("Octubre; Perteneces al signo de Libra."); break;
    case 11: console.log("Noviembre; Perteneces al signo de Escorpio."); break;
    case 12: console.log("Diciembre; Perteneces al signo de Sagitario."); break;
    default:
        console.log("Error, mes no encontrado")
}

// condición WHILE
let DiasTrabajados = 5;
while (DiasTrabajados < 30) { // muestra 0, luego 1, luego 2 hasta el 5
  console.log( DiasTrabajados );
  DiasTrabajados++;
}

//HACER UN PROGRAMA QUE A PARTIR DE UNA VARIABLE EDAD, DETERMINE SI ES MAYOR O MENOR
var Edad= 17.2
Math.round(Edad)
 if (Edad >= 17.5){
    console.log("Usted es mayor de edad")
 }
 else {
    console.log("Usted es un crío")
 }
//HACER UN PROGRAMA QUE ALMACENE EN UNA VARIABLE UN PASSWORD Y EVALUE SI EL PASSWORD ES CORRECTO, IMPRIMA UN MENSAJE DE
//BIENVENIDA SI ES IGUAL, Y EL MENSAJE DE ERROR SI NO LO ES.
var password=87654321
 if (password == 87654321){
    console.log("Bienvenido, el password es correcto")
 }
 else {
    console.log("Error, el password es incorrecto")
 }
//HACER UN PROGRAMA QUE ALMACENE DOS DIVIDENDO Y DIVISOR NÚMEROS SI SU DIVISOR ES CERO SE DEBERA MOSTRAR UN MENSAJE DE
//ERROR CASO CONTRARIO IMPRIMIRA EL RESULTADO DE LA DIVISIÓN.
let dividendo=10
let divisor=0
if (divisor == 0){
    console.log("Error, su divisor no puede ser 0")
} 
else {
    console.log("El resultado de la división es:" + 20 / 5)
}
// EJERCICE IN CLASS
let dia = 5
switch(dia) {
    case 1: console.log("Este es el día uno."); break;
    case 2: console.log("Este es el día dos."); break;
    case 3: console.log("Este es el día tres."); break;
    case 4: console.log("Este es el día cuatro."); break;
    case 5: console.log("Este es el día cinco."); break;
    case 6: console.log("Este es el día seis."); break;
}

let vocal = "1"
switch(vocal) {
    case "a": console.log("Es la vocal a."); break;
    case "e": console.log("Es la vocal e."); break;
    case "i": console.log("Es la vocal i."); break;
    case "o": console.log("Es la vocal o."); break;
    case "u": console.log("Es la vocal u."); break;
    default:
        console.log("No es considerado una vocal")
    
}
let Vocal= "o"
switch(Vocal) {
    case "a": case "e": case "i": case "o": case "u":
    console.log(`la letra ${Vocal}, es una vocal`)
    break
   default:
        console.log("no es una vocal")
}