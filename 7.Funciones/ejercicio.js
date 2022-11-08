//Funciones
//FUNCIÓN DE NUMERO(N) AL CUADRADO

function square (number) {
    return number * number;
}
console.log(square(6))

// FUNCIÓN DE RAIZ CUADRADA

const squareroot = function (numero) {
    return Math.sqrt(numero);
}
console.log(squareroot(50))
const niFuncion=()=>(98*59+195/3-8)
console.log(niFuncion())

// function niFuncion(){
//     return 4+5
// }

class principal{
    constructor(){
        this.number=5
    }
    add(){
        return this.number+=1
    }
    delete(){
        return this.number-=1
    }
    show(){
        return this.number
    }
}
const response=new principal()
console.log(response.show())
console.log(response.add())
console.log(response.delete())

// 

function map(f, a) {
    let result = []; // Crea un nuevo arreglo
    let i; // Declara una variable
    for (i = 0; i != a.length; i++) result[i] = f(a[i]);
    return result;
  }
  const f = function (x) {
    return x * x * x;
  };
  let numbers = [0, 1, 2, 5, 10];
  let cube = map(f, numbers);
  console.log(cube);

//  function contarVocales(texto){return cantidad Vocales}
// ejem. contarVocales('eucalipto') //5
function contarVocales(texto) {
    let contadorVocales = 0
    let vocales = ['a','e','i','o','u','A','E','I','O','U'];
    for(let i = 0; i < texto.length; ++i) {
        if(vocales.indexOf(texto[i]) >= 0) {
            ++contadorVocales;
        }
    }
    return contadorVocales;
}
console.log(contarVocales("hola, mi nombre es rony"));
console.log(contarVocales("tengo 19 años"));
console.log(contarVocales("hoy es martes, bueno eso creo"));

// function calculadora(num1,num2,operación){return total}
// ejem. calculadora(45,12,'suma') //33
function suma(){
    return 8+9
}
function resta(){
    return 10-9
}
function multiplicación(){
    return 2*15
}
function división(){
    return 21/3
}
console.log(suma())
console.log(resta())
console.log(multiplicación())
console.log(división())
