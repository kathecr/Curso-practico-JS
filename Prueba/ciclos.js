//Codigo for y while hacen lo mismo
for (let i = 0; i < 5; i++) {
  console.log("El valor de i es: " + i);
}
let i = 0;
while (i < 5) {
  console.log("El valor de i es: " + i);
  i++;
}
//Codigo for y while hacen lo mismo
for (let i = 10; i >= 2; i--) {
  console.log("El valor de i es: " + i);
}
i = 10;
while (i >= 2) {
  console.log("El valor de i es: " + i);
  i--;
}
//Escribe un código en JS que le pregunte a los usuarios cuánto es 2 + 2. Si responden bien, mostramos un msj de felicitaciones, sino volvemos a empezar.
let result 
do {
  result = prompt("Cuanto es 2 + 2?");
} while (result != 4);
