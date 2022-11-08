//FUNCIONES
//Las funciones son bloques de construcción fundamentales en Javascript, son similares a un procedimiento
//Son conjunto de instrucciones que calculan un valor o realizan una tarea
//DECLARACIÓN DE FUNCIÓN: Consta de la palabra clave llamada function, seguida.
//El nombre de la función.
//Una lista de parámetros de la función, entre paréntesis y separados por comas.
//Las declaraciones de Javascript que definen la función, encerradas entre llaves {}.
//arrow function o funciones flecha
//pasos para construir una funcion
//1. palabra reservada function
//2. ponerle el nombre que describael trabajo que realizara la funcion
//3. la funcion puede recibir parametros pero si o si indicar que tendra parámetros.
// ()
// (Lista de amigos)
// (edad, nombre)
//4. Dato importante. Una funcion siempre tiene que retornar un tipo de dato.
function saludo(nombre,apellido){
    let saludo='hola, como estás '+nombre+apellido
    return saludo
}
// para usar una funcion debo llamar a la funcion
console.log(saludo('rony',' sosaya'))
console.log(saludo('',' sosaya'))