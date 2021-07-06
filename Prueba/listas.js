// Crea una función que pueda recibir cualquier array como parámetro e imprima su primer elemento.
const firstElement = (array) => {
  console.log(array[0])
}
//Crea una función que pueda recibir cualquier array como parámetro e imprima todos sus elementos uno por uno (no se vale imprimir el array completo).
const allItemsArray = (array) => {
  for(let item in array) {
    console.log(item);
  }
}

//Crea una función que pueda recibir cualquier objeto como parámetro e imprima todos sus elementos uno por uno (no se vale imprimir el objeto completo).
const allItemsObject = (object) => {
  for(let item of object) {
    console.log(item)
  }
}