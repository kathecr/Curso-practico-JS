//Cuadrado
const ladoCuadrado = 5;
const perimetroCuadrado = lado => lado*4
const areaCuadrado = lado => lado ** 2;

const cuadrado = () => {
  const lado = document.querySelector("#input_cuadrado").value 
  document.getElementById("perimetroCuadrado").innerHTML = perimetroCuadrado(lado)
  document.getElementById("areaCuadrado").innerHTML = areaCuadrado(lado)

}

//Triangulo
const alturaTriangulo = (lado1,lado2,base) => Math.sqrt(lado2**2-((lado2**2-lado1**2+base**2)/(2*base))**2)
const perimetroTriangulo = (lado1,lado2,base) => lado1+lado2+base;
const areaTriangulo = (lado1,lado2,base) => base*alturaTriangulo(lado1,lado2,base)/2

const triangulo = () => {
  const lado1 = document.querySelector("#input_lado_triangulo1").value
  const lado2 = document.querySelector("#input_lado_triangulo2").value
  const base = document.querySelector("#input_base_triangulo").value
  document.getElementById("perimetroTriangulo").innerHTML = perimetroTriangulo(Number(lado1),Number(lado2),Number(base))
  document.getElementById("areaTriangulo").innerHTML = areaTriangulo(lado1,lado2,base)
  document.getElementById("alturaTriangulo").innerHTML = alturaTriangulo(lado1,lado2,base)
}
//Circulo
const PI = Math.PI
const diametroCirculo = radio => radio * 2;
const areaCirculo = radio => PI*radio**2;
const perimetroCirculo = radio => PI*diametroCirculo(2);

const circulo = () =>{
  const radio = document.querySelector("#input_radio_circulo").value
  document.getElementById("diametroCirculo").innerHTML = diametroCirculo(radio)
  document.getElementById("perimetroCirculo").innerHTML = perimetroCirculo(radio)
  document.getElementById("areaCirculo").innerHTML = areaCirculo(radio)
}

