//Calculadora
let dato1 = parseInt(prompt("Ingrese un numero: "));
let dato2 = parseInt(prompt("Ingrese otro numero: "));
let operacion = prompt("Elija una operacion a realizar: Sumar + , Restar - ,Multiplicar * , Dividir / ")




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