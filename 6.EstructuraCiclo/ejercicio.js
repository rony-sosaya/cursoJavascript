// CICLO FOR

for ( var i = 0; i <= 10; i++){
    console.log( i + "Hola!");
}

// CICLO WHILE

var o = 0;
while (o < 30) {
    console.log(o);
    o ++;
}

// CICLO DO-WHILE

var abecedario = 27
do {
    console.log("Contador en " + abecedario);
    abecedario ++;
}
while (abecedario < 28);

//Hacer un programa que muestre el factorial de un número.
//FACTORIAL DE UN NÚMERO

function factorial(n) {
    if (n == 0) {
        return 1;
    }
    else{
        return n*factorial(n-1);
    }
}
var resultado = factorial(10);
console.log(resultado);

//Hacer un programa que determine si el texto es palíndromo.
//PALÍNDROMOS

function palindromeChecker(str) {
    const strReversed = str.split("").reverse().join("");
    return strReversed === str ? "Es palíndromo" : "No es palíndromo";
}
console.log(palindromeChecker("somos"))
console.log(palindromeChecker("anilina"))
console.log(palindromeChecker("deveritas"))
console.log(palindromeChecker("amolapaloma"))

//Hacer un programa que muestre los primeros numeros de la serie de fibonacci.
//FIBONACCI

// var fib = function(p) {
//     if (p <= 1) return p;
//     return fib(p-1) + fib(p-2);
// }
// console.log(fib(5));
// console.log(fib(7));
// console.log(fib(34));