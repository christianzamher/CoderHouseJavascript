//Calculadora
let dato1 = prompt("Ingrese un numero: ");
let dato2 = prompt("Ingrese otro numero: ");
let operacion = prompt("Elija una operacion a realizar: Sumar + , Restar - ,Multiplicar * , Dividir / ")


let numero1 = parseInt(dato1);
let numero2 = parseInt(dato2);

let resultado = null;
let texto = null;

if (operacion === "+"){
    //realizamos las operaciones matematicas
    resultado = numero1 + numero2;
    texto = "La suma de " + numero1 + " y " + numero2 + " es igual a " + resultado ;
} else if (operacion === "-"){
    resultado = numero1 - numero2;
    texto = "La resta de " + numero1 + " y " + numero2 + " es igual a " + resultado ;
} else if ( operacion === "*"){
    resultado = numero1 * numero2;
    texto = "La multiplicacion  de " + numero1 + " y " + numero2 + " es igual a " + resultado ;
} else if(operacion === "/"){
    resultado = numero1 / numero2;
    texto = "La division de " + numero1 + " y " + numero2 + " es igual a " + resultado ;
} else {
    texto = "operacion no permitida"
}

alert(texto);
console.log(texto);