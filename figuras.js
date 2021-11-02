//Codigo cuadrado
console.group("Cuadrado");

let pCuadrado = (lado) => lado*4;
let aCuadrado = (lado) => lado * lado;

console.groupEnd();

//Codigo triangulo
console.group("Triangulo");

const perimetroTriangulo = (lado1, lado2, base) => lado1 + lado2 + base;
const areaTriangulo = (base, altura) => (base * altura) / 2;

console.groupEnd();

//Codigo Circulo
console.group("Circulo");

const diametro = (radio) => radio*2;
const PI = Math.PI;
const circunferencia = (radio) => diametro(radio) * PI;
const areaCirculo = (radio)=> PI * radio ** 2;

console.groupEnd();

function perimetroCuadrado(){
    let value = document.getElementById("cuadrado").value;
    let p = pCuadrado(value); 
    alert(p);
}
function areaCuadrado(){
    let value = document.getElementById("cuadrado").value;
    let p = aCuadrado(value); 
    alert(p);
}