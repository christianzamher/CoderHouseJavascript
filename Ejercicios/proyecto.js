//creamos el array de nuestros productos
const producto = [{id:"001", nombre:" Cerveza ", imagen:"./images/cerveza3.jpg", precio:"290" , descripcion:"Chop Cerveza de 1lt Artesanal(IPA , Golden ,Honey, Red , Stout)"},
                 {id:"002", nombre:"Gaseosa", imagen:"./images/gaseosa.png", precio:"180" , descripcion:"Lata de Gaseosa de 500cm3 (Naranja , Pomelo, Tonica) "},
                 {id:"003", nombre:"Combo 2", imagen:"./images/milanesa.jpg", precio:"800" , descripcion:"Milanesa Napolitada con Papas Fritas "},
                 {id:"004", nombre:"Combo3", imagen:"./images/cafe2.jpg", precio:"320", descripcion:"Cafe con Leche + 3 medialunas + agua + jugo de naranja"}, 
                 {id:"005", nombre:"Combo 4", imagen:"./images/hamburguesa.jpg", precio:"730", descripcion:"Hamburguesa Completa + huevo frito + cerveza 500cm3" },
                 {id:"006", nombre:"Combo 5", imagen:"./images/hamburguesaveggie.jpg", precio:"850" , descripcion:"Hamburguesa Opcion Veggie + papas fritas + Bebida"}, 
                 {id:"007", nombre:"Combo 6", imagen:"./images/hamburguesa2.jpg", precio:"600", descripcion:"Hamburguesa 180gr + cheddar + papas fritas "},
                 {id:"008", nombre:"Combo 7", imagen:"./images/pizza2.png", precio:"700", descripcion:"Pizza grande de Mozzarella + jamon + cebolla de verdeo "},
                 {id:"009", nombre:"Combo 8", imagen:"./images/helado.jpg", precio:"400", descripcion:"1/2 kg de helado de diferentes sabores (consultar)"}]; 

                 //Recorremos el array 
//Esta parte genera las cards con todos los items del array
let map = producto.map((items) => {
    return (`
        <div class="card" style="width: 18rem;">
          <img src="${items.imagen}" class="card-img-top" alt="...">
            <div class="card-body">
                <h5 class="card-title">${items.nombre}</h5>
                <p class="card-text">${items.descripcion}</p>
                <p class="card-text">$${items.precio}</p>
                <button type="button" onclick="openModal('${items.id}','${items.imagen}','${items.nombre}','${items.descripcion}' , '$${items.precio}' )"  class="btn btn-primary">
                Ver producto
                </button>
            </div>
        </div>
        <!-- modal -->
    `
    )
})
//mostramos en el DOM 
let container = document.getElementById('containerId'); //llama al div containerId
container.innerHTML = map.join('');//coloca las cards una al lado de la otra

//paso todos los valores del array mediante parametros
//Esta seccion abre el modal

function openModal(id,imagen,nombre,descripcion,precio){
    let modal = document.getElementById('modalHtml');
    modal.classList.remove('opacity');
    modal.innerHTML = `
        <h5>${nombre}</h5>
        <hr>
        <p>Si desea añadir varios combos a su compra seleccione "anadir" , cuando finalice su compra , seleccione "comprar"</p>
        <hr>
        <img src="${imagen}" width="100px">
        <p>${descripcion}</p>
        <hr>
        <label for="quantity">Total: ${precio} Cantidad:</label>
        <input type="number" id="quantity" name="quantity" min="0" max="100" step="1" value="1">
        <hr>
        <button class="btn btn-info" onclick="addStorage('${id}')">Añadir +</button>
        <button class="btn btn-success" onclick="comprarProducto()">Comprar</button> 
        <button class="btn btn-danger" onclick="closeModal()">Cerrar</button>
              
        `
}
//Funcion de cerrar el modal
function closeModal(){
    let modal = document.getElementById('modalHtml');
    modal.classList.add('opacity');
}

//Funcion Comprar
function comprarProducto() {
    alert(`Su compra ha sido confirmada! Gracias! Debe abonar `);
    closeModal()
}


//creo un carrito vacio que es donde se almacenaran los objetos y pasaran al storage
//almacena los combos
let arrCarrito = [];
function addStorage(id){

    let indiceCondicion = arrCarrito.findIndex((i) => i.id == id);//El método findIndex() devuelve el índice del primer elemento de un array que cumpla con la función de prueba proporcionada. En caso contrario devuelve -1.
    if(indiceCondicion == -1){
        let indice = producto.findIndex((i) => i.id == id)
        arrCarrito.push(producto[indice]);
        let arrJson = JSON.stringify(arrCarrito);
        let getStorage = localStorage.setItem('arr', arrJson);
    }
    let getItem = localStorage.getItem('arr');
    let storageToParse = JSON.parse(getItem);
    console.log(storageToParse);
    alert("Combo agregado a su compra!")
    closeModal()
}


 //Footer para la Web
 let footer = document.createElement("footer");
 footer.innerHTML = "<h3>Diseñado por Christian Zamora Hermida</h3>"; 
 footer.style.background = "black";
 footer.style.color = "white";
 footer.style.textAlign = "center"
 
 document.body.appendChild(footer)
 
$(document).ready(function () {
    $('header').prepend(`<img src="https://freshlabbatavia.com/wp-content/uploads/2017/07/cooking-header.jpg" class="img-fluid" alt="Comida">`);
    $('.img-fluid').on("click", function(){
        alert("Bienvenidos y Gracias por elegirnos");
      });

//Boton Comprar
$(`#btn${producto.id}`).on('click', function () {
    $('.offcanvas-title').html(`<h5>Detalles de su compra:</h5>`);
    $('.offcanvas-body').html(`Compraste ${producto.nombre} por $ ${producto.precio}
    <img src="https://troquelando.com/wp-content/uploads/2021/01/Gracias-por-tu-compra-redondo.png">`)
    
});
$('body').css('background', '#fca701');

})