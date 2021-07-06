//Cuadrado
const ladoCuadrado = 5;
const perimetroCuadrado = ladoCuadrado * 4;
const areaCuadrado = ladoCuadrado ^ 2;
console.group("Cuadrado");
console.log(`Los lados del cuadrado miden: ${ladoCuadrado} cm`);
console.log(`El perimetro del cuadrado miden: ${perimetroCuadrado} cm`);
console.log(`El area del cuadrado miden: ${areaCuadrado} cm^2`);
console.groupEnd();
//Triangulo
const ladoTriangulo1 = 6
const ladoTriangulo2 = 6
const baseTriangulo = 4
const alturaTriangulo = Math.sqrt(ladoTriangulo2**2-((ladoTriangulo2**2-ladoTriangulo1**2+baseTriangulo**2)/(2*baseTriangulo))**2)
const perimetroTriangulo = ladoTriangulo1+ladoTriangulo2+baseTriangulo;
const areaTriangulo = baseTriangulo*alturaTriangulo/2
console.group("Triangulo")
console.log(`La altura del triangulo miden: ${alturaTriangulo} cm`);
console.log(`El perimetro del triangulo miden: ${perimetroTriangulo} cm`);
console.log(`El area del triangulo miden: ${areaTriangulo} cm^2`);
console.groupEnd()
//Circulo
const radioCirculo = 4;
const PI = Math.PI
const diametroCirculo = radioCirculo * 2;
const areaCirculo = PI*radioCirculo**2;
const perimetroCirculo = 2*PI*radioCirculo;
console.group("Circulo")
console.log(`El diametro del circulo mide: ${diametroCirculo} cm`);
console.log(`El perimetro del circulo miden: ${perimetroCirculo} cm`);
console.log(`El area del circulo miden: ${areaCirculo} cm`);
console.groupEnd()
