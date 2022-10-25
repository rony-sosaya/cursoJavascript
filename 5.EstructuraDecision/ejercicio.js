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
}

// condición WHILE
let DiasTrabajados = 5;
while (DiasTrabajados < 30) { // muestra 0, luego 1, luego 2 hasta el 5
  console.log( DiasTrabajados );
  DiasTrabajados++;
}