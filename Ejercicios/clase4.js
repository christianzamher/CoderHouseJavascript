   const sumar = () => {
    let primerNumero = parseInt(prompt ("Ingrese el precio del 1er Articulo : "));
    let segundoNumero = parseInt(prompt ("Ingrese el precio del 2do Artilcuo: "));
    resultadoSuma = primerNumero + segundoNumero;
    alert(`El precio total del 1er Articulo ${primerNumero} y del 2do Articulo${segundoNumero} es:$ ${resultadoSuma} `)
   }

   const iva = () => {
    let iva = parseInt(prompt ("Ingrese porcentaje de Iva(sin el %) : "));
    resultadoIva = resultadoSuma * (iva / 100);
    resultadoConIva = resultadoIva + resultadoSuma;
    alert (`El precio del Iva es de: $ ${resultadoIva}`);
    alert(` El precio Total + Iva es de: $ ${resultadoConIva}`);
   }
   const descuento = () =>{
    let descuento2 = parseInt(prompt ("Ingrese el porcentaje en descuentos ( solo el numero) : "));
    resultadoDescuento = resultadoConIva / descuento2;
    precioFinal = resultadoConIva - resultadoDescuento;
    alert(`Su descuento final es de ${resultadoDescuento} y tiene que pagar $ : ${precioFinal}`  );
        
    
    } 
  sumar();
  iva();
  descuento(); 

 

    