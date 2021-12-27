
let valor = 0
    
while (valor <= 4){
    //el codigo se ejecuta de forma repetitiva hasta que ya no se cumpla la condicion
    console.log("Valor es igual a " + valor);
    console.log("Valor es menor que 4 , entonces le sumo 1 a la variable valor")
    
    if(valor === 4){
        console.log("Ahora valor es igual a  4 y paro la ejecucion del bucle");
    break;
    }
    valor ++ ;

}