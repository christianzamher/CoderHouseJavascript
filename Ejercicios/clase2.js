//Alarma:
let hora = prompt("Que hora es?(am/pm): ");
let horario = parseInt(hora);



if(horario >= 5  && horario <= 13){
   alert("Buenos Dias");
} else if(horario <= 20 && horario >= 14){
    alert("Buenas Tardes");
} else if(horario >= 21 && horario <= 00){
    alert("Buenas Noches");
} else{
    alert("Deberias estar durmiendo, ya no tenes 20!!");
}

