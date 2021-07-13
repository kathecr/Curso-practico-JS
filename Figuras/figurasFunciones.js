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
const alturaTriangulo = (lado1,lado2,base) => {
  lado1= Number(lado1)
  lado2 = Number(lado2)
  base = Number(base)
  const max = Math.max(lado1,lado2)
  const min = Math.min(lado1,lado2)
  return Math.sqrt(min**2-((min**2-max**2+base**2)/(2*base))**2)
  
}
const perimetroTriangulo = (lado1,lado2,base) => lado1+lado2+base;
const areaTriangulo = (lado1,lado2,base) => base*alturaTriangulo(lado1,lado2,base)/2

const triangulo = () => {
  const ladoA = document.querySelector("#input_lado_trianguloA").value
  const ladoB = document.querySelector("#input_lado_trianguloB").value
  const ladoC = document.querySelector("#input_lado_trianguloC").value
  document.getElementById("perimetroTriangulo").innerHTML = perimetroTriangulo(Number(ladoA),Number(ladoB),Number(ladoC))
  document.getElementById("areaTriangulo").innerHTML = areaTriangulo(ladoA,ladoB,ladoC)
  document.getElementById("alturaTrianguloA").innerHTML = alturaTriangulo(ladoB,ladoC,ladoA)
  document.getElementById("alturaTrianguloB").innerHTML = alturaTriangulo(ladoA,ladoC,ladoB)
  document.getElementById("alturaTrianguloC").innerHTML = alturaTriangulo(ladoA,ladoB,ladoC)
}
//Circulo
const PI = Math.PI
const diametroCirculo = radio => radio * 2;
const areaCirculo = radio => PI*radio**2;
const perimetroCirculo = radio => PI*diametroCirculo(radio);

const circulo = () =>{
  const radio = document.querySelector("#input_radio_circulo").value
  document.getElementById("diametroCirculo").innerHTML = diametroCirculo(radio)
  document.getElementById("perimetroCirculo").innerHTML = perimetroCirculo(radio)
  document.getElementById("areaCirculo").innerHTML = areaCirculo(radio)
}

