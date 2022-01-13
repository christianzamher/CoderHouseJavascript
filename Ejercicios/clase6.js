//Desafio 1: Incorporar Arrays
let RazasGrandes = ["Golden Retriever", "Labrador" , "Ovejero Aleman" , "Gran Danes" , "Pastor Suizo", "Kuvaz" ];
let RazasChicas = [ "Pug" , "Caniche toy" , "Daschund" , "Pomerania"];

//Array Concatenados
let perrosConcatenados = RazasGrandes.concat(RazasChicas);
console.log(perrosConcatenados);

//Array Modificado
perrosConcatenados.splice(2 ,1 , "Rottweiler" , "Pastor Belga" );
console.log(perrosConcatenados)

//Desafio complementario : Ordenar un array de objetos
class Perros{
    constructor(nombre, raza , edad){
        this.nombre = nombre.toUpperCase();
        this.raza = raza.toUpperCase();
        this.edad = parseInt(edad);
    }
    
}

const mascotas = [];

mascotas.push( new Perros ( "Logan", "Golden Retriver", 4));
mascotas.push (new Perros( "Mora", "Labrador", 6));  
mascotas.push( new Perros ( "alma", "mestiza", 12));

alert("Bienvenido a la Veterinaria -Wulfis- , para cargar los datos de los pacientes haga click en Aceptar")
//Agrego mas Perros:
let nombre = prompt("Ingese los datos del animal (nombre ): ") ;
let raza = prompt("ingrese la raza del perro: ")
let edad = parseInt(prompt("Ingrese la edad del perro:"));
mascotas.push(new Perros (nombre , raza , edad));

alert("Los datos cargados hasta ahora son:")
for( const animales of mascotas){
    alert("Nombre es :" + animales.nombre);
    alert("Raza es :" + animales.raza);
    alert("Edad:(años) " + animales.edad)
} 

//Consulto 
const datos = ()=>{
   
   let consulta = prompt("Desea agregar mas datos de otros Perros?:(si/no) ");
   switch(consulta) {
    case "si":
       let nombre = prompt("Ingese los datos del animal (nombre ): ") ;
       let raza = prompt("ingrese la raza del perro: ")
       let edad = parseInt(prompt("Ingrese la edad del perro:"));
       mascotas.push(new Perros (nombre , raza , edad));
    break;
    case "no":
        alert("Sus datos han sido ingresado con Exito, gracias! ");
      break;
    default:
      alert = ("esa opcion no es valida");
  }
   

    
}

datos();





