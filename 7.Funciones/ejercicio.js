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
const niFuncion=()=>(4+5)
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