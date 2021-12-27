//Alarma:
/* let hora = prompt("Que hora es?(am/pm): ");
let horario = parseInt(hora); */

let today = new Date();
let  hour = today.getHours();



 if(hour >= 5  && hour <= 13){
   console.log("Buenos Dias");
} else if(hour <= 20 && hour >= 14){
    console.log("Buenas Tardes"  );
} else if(hour >= 21 && hour <= 00){
    console.log("Buenas Noches");
} else{
    console.log("Deberias estar durmiendo, ya no tenes 20!!");
}
 
