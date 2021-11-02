/*
Variables y operaciones
1.
* Espacio reservado en la memoria para almacenar informacion.
* La declaracion sirve solo para reservar el espacio, la inicializacion sirve para guardar algo en ese espacio reservado
* Al sumar numeros se realiza una operacion aritmetica, al concatenar solo juntas dos cadenas de texto en una sola.
* Signo +.
2.
* Nombre - string
* Apellido - string
* Nombre de usuario en Platzi - string
* Edad - number
* Correo electrónico - string
* Mayor de edad - boolean
* Dinero ahorrado - number
* Deudas - number
3.
*/
let Nombre = "Juan";
let Apellido = "Montiel";
let Edad = 21;
let Correo_electronico = "juan@gmail.com";
let Mayor_edad = true;
let Dinero_ahorrado = 2000;
let Deudas = 700;
let full_name = Nombre + " " + Apellido;
console.log(full_name);
let dinero_real = Dinero_ahorrado - Deudas;
console.log(dinero_real);
/*
Funciones
1.
*Es un bloque de codigo que realiza una serie de instrucciones.
* Cuando realizo varias veces la misma tarea, o hay codigo repetido.
* Parametro son los que se definen al declarar una funcion y el argumento son los datos que se le pasan al llamar una funcion.
2.
*/
function saludo(name, lastname, nickname){
	let full_name = name + " " + lastname;
	console.log("Mi nombre es " + full_name + ", pero prefiero que me digas " + nickname + ".");
}
saludo("Juan", "Montiel", "JP");
/*
Condicionales
1.
*Un bloque se codigo que se ejecuta segun el resultado de una condicion/evaluacion.
*if, else, else if, switch.
*Si se puede.
2.
*/
let tipoDeSuscripcion = "Basic";
if(tipoDeSuscripcion === "Free"){
	console.log("Solo puedes tomar los cursos gratis");
} else if (tipoDeSuscripcion === "Basic"){
	console.log("Puedes tomar casi todos los cursos de Platzi durante un mes");
} else if (tipoDeSuscripcion === "Expert"){
	console.log("Puedes tomar casi todos los cursos de Platzi durante un año");
} else if (tipoDeSuscripcion === "ExpertPlus"){
	console.log("Tú y alguien más pueden tomar TODOS los cursos de Platzi durante un año");
}

//Codigo solo con if
if(tipoDeSuscripcion === "Free"){
	console.log("Solo puedes tomar los cursos gratis");
} if (tipoDeSuscripcion === "Basic"){
	console.log("Puedes tomar casi todos los cursos de Platzi durante un mes");
} if (tipoDeSuscripcion === "Expert"){
	console.log("Puedes tomar casi todos los cursos de Platzi durante un año");
} if (tipoDeSuscripcion === "ExpertPlus"){
	console.log("Tú y alguien más pueden tomar TODOS los cursos de Platzi durante un año");
}
/*
Ciclos
1.
* Un bloque de codigo que se repite n veces.
*For, do-while, while, for in, for of
* Es un ciclo que no tiene fin y provoca el exceso de consumo total de la memoria.
*Si, si puedes.
2.
*/
let i = 0;
while (i < 5) {
console.log("El valor de i es: " + i);
i++;
}

let i = 10;
while(i >= 2){
console.log("El valor de i es: " + i);
i--;
}
let respuesta = 0;
do {
  	respuesta = prompt('¿Cual es el resultado de 2 + 2?')
 	 respuesta *= 1;
} while (!(respuesta === 4))
/*
Listas
1.
* Es un tipo de dato estructurado que permite almacenar valores del mismo tipo o diferente.
*Es una colección de elementos / propiedades.
*Depende la problemática, ambos son útiles y solucionan distintos problemas.
*Si, si puedes.
2.
*/
let names = ["Juan", "Pedro", "Luis"];
function array_first(array){
  console.log(array[0]);
} 
array_first(names);
let names = ["Juan", "Pedro", "Luis"];
function elements(array){
   for(let element of array)
   {
	console.log(element);
   }
} 
let person = {
    name: 'Juan',
    last: 'Montiel'
}
let object = (object) =>
{
    Object.values(object).forEach((element) => {
        console.log(element);
    });     
};

object(person);