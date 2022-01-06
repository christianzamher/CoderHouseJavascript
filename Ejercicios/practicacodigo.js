function solicitarNombre(){
    let nombreIngresado = prompt("Ingresar nombre");
    alert("El nombre ingresado es " + nombreIngresado);
   } 
solicitarNombre();


function calculadora(primerNumero, segundoNumero, operacion) {
    let primerNumero = parseInt(prompt ("Ingrese un num : "));
    let segundoNumero = parseInt(prompt ("Ingrese otro num : "));
    switch (operacion) {
    case "+":
    return primerNumero + segundoNumero;
    break;
    case "-":
    return primerNumero - segundoNumero;
    break;
    case "*":
    return primerNumero * segundoNumero;
    break;
    case "/":
    return primerNumero / segundoNumero;
    break;
    default:
    return 0;
    break;
    }
   }
   calculadora();
