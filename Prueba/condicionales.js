const tipoDeSuscripcion = "Basic";
//----------------------VERSION 1---------------------------------
if (tipoDeSuscripcion == "free") {
  console.log("Solo puedes tomar los cursos gratis");
} else if (tipoDeSuscripcion == "Basic") {
  console.log("Puedes tomar casi todos los cursos de Platzi durante un mes");
} else if (tipoDeSuscripcion == "Expert") {
  console.log("Puedes tomar casi todos los cursos de Platzi durante un año");
} else {
  console.log(
    "Tú y alguien más pueden tomar TODOS los cursos de Platzi durante un año"
  );
}

//----------------------VERSION 2---------------------------------
const arraySuscripcion = ["Free", "Basic", "Expert", "Expert+"];
const arrayMsj = [
  "Solo puedes tomar los cursos gratis",
  "Puedes tomar casi todos los cursos de Platzi durante un mes",
  "Puedes tomar casi todos los cursos de Platzi durante un año",
  "Tú y alguien más pueden tomar TODOS los cursos de Platzi durante un año",
];
console.log(arrayMsj[arraySuscripcion.findIndex(item => item == tipoDeSuscripcion )])