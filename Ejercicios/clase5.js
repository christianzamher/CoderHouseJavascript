
const wulf = {
    Nombre: "Christian",
    Apellido: "Zamora hermida",
    Edad: 38,
    pasatiempos:["gimnasio" , "codear" , "combate medieval"],
    soltero : false,
    contacto:{
        email: "czh1983@gmail.com",
        facebook: "/wulfwalthari",
        instagram:"wulfzam",
    },
    saludar : function(){
        console.log("Hola :)")
    },
    decirMiNombre:function(){
        console.log(`Hola me llamo ${this.Nombre} ${this.Apellido} y tengo ${this.Edad} años.`)
    }
}

//console.log(wulf)
console.log(Object.keys(wulf))
console.log(Object.values(wulf))
console.log(wulf.hasOwnProperty("Nombre"))
console.log(wulf["Nombre"], wulf["Apellido"])
console.log(wulf.pasatiempos[2] , wulf.soltero)
wulf.saludar()
wulf.decirMiNombre()