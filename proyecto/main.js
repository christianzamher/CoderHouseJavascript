
//Array de Productos
const producto = [{id:"001", nombre:" Cerveza ", imagen:"cerveza3.jpg", precio:"290" , descripcion:"Chop Cerveza de 1lt Artesanal"},
                 {id:"002", nombre:"Gaseosa", imagen:"gaseosa.png", precio:"180" , descripcion:"Lata de Gaseosa de 500cm3 "},
                 {id:"003", nombre:"Combo 2", imagen:"milanesa.jpg", precio:"800" , descripcion:" Napolitada con Papas Fritas"},
                 {id:"004", nombre:"Combo3", imagen:"cafe2.jpg", precio:"320", descripcion:"Cafe con Leche + 3 medialunas + agua + jugo de naranja"}, 
                 {id:"005", nombre:"Combo 4", imagen:"hamburguesa.jpg", precio:"730", descripcion:"Hamburguesa Completa + huevo frito + cerveza 500cm3" },
                 {id:"006", nombre:"Combo 5", imagen:"hamburguesaveggie.jpg", precio:"850" , descripcion:"Hamburguesa Opcion Veggie + papas fritas + Bebida"}, 
                 {id:"007", nombre:"Combo 6", imagen:"hamburguesa2.jpg", precio:"600", descripcion:"Hamburguesa 180gr + cheddar + papas fritas "},
                 {id:"008", nombre:"Combo 7", imagen:"pizza2.png", precio:"700", descripcion:"Pizza grande de Mozzarella + jamon + cebolla de verdeo "},
                 {id:"009", nombre:"Combo 8", imagen:"helado.jpg", precio:"400", descripcion:"1/2 kg de helado de diferentes sabores (consultar)"}]; 


class Comida {
    constructor (producto) {
        this.id = producto.id
        this.nombre = producto.nombre;
        this.imagen = producto.imagen;
        this.importe = producto.precio;
        this.descrip = producto.descripcion;
    }

    
}

//Funciones de carga
const guardarProducto = (producto)=> {
    localStorage.setItem("modelos", JSON.stringify(producto));
    console.log("Combos almacenados ");
}

const cargarProducto = ()=> {
    console.log("Los combos se cargaron correctamente!");
    return JSON.parse(localStorage.getItem("comidaCoder"));
}

const borrarComida = ()=> {
    localStorage.removeItem("producto");
}

 borrarComida();
 guardarProducto(producto);



// Actualizacion de Contenidos
 const contenido = "";
 const pagina_comida = document.getElementById("comidaCoder");

for (let comida_cargada of producto) {
    let food = new Comida(comida_cargada);
    let contenido = document.createElement("div");
    contenido.className = "col-md-4 py-3";
    contenido.innerHTML = `<div class='card'>
    <h4 class='card-title p-3 text-primary text-uppercase fw-bold'>${food.nombre}</h4>
    
    <img src='images/${food.imagen}' class='card-img-top' alt='${food.nombre}'>
    <div class='card-body'>
    <div class='row mb-2'>
    <div class='col-md-6 text-primary text-uppercase fw-bold'><span>PRECIO </span></div>
    <div class='col-md-6 text-primary text-uppercase fw-bold text-end'><span>$ ${food.importe} </span></div>
    </div>
    <div class='p-3 mb-2 bg-light text-dark text-center'><h5 >${food.descrip} </h5></div>
    <div class='d-grid gap-2 mb-2'><button  class='btn btn-success'>Comprar</button></div>
    </div>
    </div>`;
     pagina_comida.appendChild(contenido);
} 




  //Footer para la Web
  let footer = document.createElement("footer");
  footer.innerHTML = "<h3>2da Entrega creada por Christian Zamora Hermida</h3>"; 
  footer.style.background = "black";
  footer.style.color = "white";
  footer.style.textAlign = "center"
  
  document.body.appendChild(footer)


//Modal

const modalAbrir = document.getElementById("comidaCoder")
const modalCerrar = document.getElementById("modal-cerrar")
const modalContainer = document.getElementById("modal-container")

//Comportamiento del Modal
modalAbrir.addEventListener("click", ()=>{
    modalContainer.classList.toggle("modal-active")
})

modalCerrar.addEventListener("click", ()=>{
    modalContainer.classList.toggle("modal-active")
})

let mouse = document.getElementById("comprar");
 mouse.onclick = ()=>{alert("Su compra ha sido confirmada! Gracias!")}

//Compra Final
// const comprador = document.getElementById("modal");
// producto.filter((prod) => {
//     const div = document.createElement("div")

// div.innerHTML= `
//     <img src=${prod.imagen}/>
//     <h3>${prod.nombre}</h3
//     <p>Precio : $${prod.precio}</p>
//     <p>Descripcion : ${prod.descripcion}</p>`

//     comprador.appendChild(div)
//});

const comprador = document.getElementById("modal");
for (let comida_cargada of producto) {
    let food = new Comida(comida_cargada);
    let contenido = document.createElement("div");
    contenido.className = "col-md-4 py-3";
    contenido.innerHTML = `<div class='card'>
    <h4 class='card-title p-3 text-primary text-uppercase fw-bold'>${food.nombre}</h4>
    <h5 class='p-3 mb-2 bg-light text-dark text-left'> Codigo ${food.id}</h5> 
    <img src='images/${food.imagen}' class='card-img-top' alt='${food.nombre}'>
    <div class='card-body'>
    <div class='row mb-2'>
    <div class='col-md-6 text-primary text-uppercase fw-bold'><span>PRECIO </span></div>
    <div class='col-md-6 text-primary text-uppercase fw-bold text-end'><span>$ ${food.importe} </span></div>
    </div>
    <div class='p-3 mb-2 bg-light text-dark text-center'><h5 >${food.descrip} </h5></div>
    
    </div>
    </div>`;
     comprador.appendChild(contenido);
} 


















