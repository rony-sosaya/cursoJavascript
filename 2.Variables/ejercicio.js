//averiguar las diferencias entre let y var
//diferencias:
let
//las variables let pueden ser modificadas, pero no re-declaradas
//te permite declarar variables limitando su alcance (scope) al bloque, declaración, o expresión donde se está usando.
let saludar = "dice Hola";
if (true) {
    let saludar = "dice Hola tambien";
    console.log(saludar); // "dice Hola tambien"
}
console.log(saludar); // "dice Hola"
var
//Las variables var pueden ser modificadas y re-declaradas dentro de su ámbito
//define una variable global o local en una función sin importar el ámbito del bloque.
var saludar = "hey, hola";
var tiempos = 4;

if (tiempos > 3) {
    var saludar = "dice Hola tambien"; 
}

console.log(saludar) // "dice Hola tambien"