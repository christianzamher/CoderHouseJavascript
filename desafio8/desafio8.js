//Ingreso valores al Formulario
document.getElementById("valor1").value = "Homero";
document.getElementById("valor2").value = 39

//Elemento H1 modificado por DOM
let h1 = document.getElementById("h1");
console.log(h1.innerHTML)

h1.innerHTML = "Coder House - Desafio 8";
h1.style.background = "orange";
h1.style.textAlign = "center";

//Creando Elementos

let footer = document.createElement("footer");
footer.innerHTML = "<h3>Desafio 8 creado por Christian Zamora Hermida</h3>"; 
footer.style.background = "black";
footer.style.color = "white";
footer.style.textAlign = "center"

document.body.appendChild(footer)

//Recorriendo la lista
let clases = document.getElementsByClassName("clase");
console.log(clases[8].innerHTML);
console.log(clases[2].innerHTML);

for (const desafio of clases){
    console.log(desafio.innerHTML)
}

//
let mouse = document.getElementById("enviar");
mouse.onclick = alert("Su informacion ha sido enviada")

