
$(document).ready(function () {


const productos = [{ id: 1, nombre: "Arroz", precio: 125 , descrip: "Arroz Gallo Oro , paquete de 1kg"},
{ id: 2, nombre: "Fideo", precio: 70 , descrip: "Fideo de 500gr (no se pasa nunca)" },
{ id: 3, nombre: "Pan" , precio: 50 , descrip: "1kg de pan integral"},
{ id: 4, nombre: "Flan" , precio: 100 , descrip: "Flan casero"},
{ id: 5, nombre: "Milanesa" , precio: 200, descrip: "Milanesa de Pollo"}];

// Recorremos el array con for..of
for (const producto of productos) {
 
//Por cada producto además de los datos agregamos un botón 
 $(".container").append(`<div class="card" style="width: 18rem;">
 <div class="card-body">
   <h5 class="card-title">Producto: ${producto.nombre}</h5>
   <hr>
   <h6 class="card-subtitle mb-2 text-muted">$ ${producto.precio}</h6>
   <p class="card-text">${producto.descrip}</p>
    
   <button id="btn${producto.id}" class="btn btn-success" type="button" data-bs-toggle="offcanvas" data-bs-target="#offcanvasExample" aria-controls="offcanvasExample">Comprar</button>
   <button id="btn2${producto.id}" class="btn btn-danger" type="button" data-bs-toggle="offcanvas" data-bs-target="#offcanvasExample" aria-controls="offcanvasExample">Cancelar</button>
 </div>
</div>`);

//Boton Comprar
    $(`#btn${producto.id}`).on('click', function () {
    $('.offcanvas-title').html("<h5>Detalles de su compra</h5>");
    $('.offcanvas-body').html(`Compraste ${producto.nombre} por $ ${producto.precio}`)
    //alert(`Compraste ${producto.nombre} por $ ${producto.precio}`);
});
//boton cancelar
$(`#btn2${producto.id}`).click(function (e) { 
    e.preventDefault();
    $('.offcanvas-title').html("<h5>Detalles de su compra</h5>")
    $('.offcanvas-body').html(`Ha elegido cancaelar la compra de ${producto.nombre}`)}); 

    };  
           
    
    //header
    $('header').prepend(`<img src="https://freshlabbatavia.com/wp-content/uploads/2017/07/cooking-header.jpg" class="img-fluid" alt="Comida">`);
    $('.img-fluid').on("click", function(){
        alert("Bienvenidos y Gracias por elegirnos");
      });


    $("h1").html("Productos de Compra")
    $('.display-4').html('Ramo generales')

    //Agrengando Clase
    $('h1').addClass('display-4');
    
  
     $('#btn').addClass('text-center');
    
     $('#idh1').addClass('text-danger');

     
     $('#btn').prepend('<h2>Bienvenidos a las Ofertas del dia</h2>');
     $('.parrafo').css('color', 'blue');
     $('.parrafo').addClass('text-center');
     $('body').css('background', '#fca701');
     $('.text-center').slideDown("9000");

     //Header
     $('.head').append(`<nav class="navbar navbar-expand-lg navbar-light bg-light">
     <div class="container-fluid">
       <a class="navbar-brand" href="#">Bienvenidos</a>
       <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
         <span class="navbar-toggler-icon"></span>
       </button>
       <div class="collapse navbar-collapse" id="navbarSupportedContent">
         <ul class="navbar-nav me-auto mb-2 mb-lg-0">
           <li class="nav-item">
             <a class="nav-link active" aria-current="page" href="#">Home</a>
           </li>
           <li class="nav-item">
             <a class="nav-link" href="#">Link</a>
           </li>
           <li class="nav-item dropdown">
             <a class="nav-link dropdown-toggle" href="#" id="navbarDropdown" role="button" data-bs-toggle="dropdown" aria-expanded="false">
               Menu
             </a>
             <ul class="dropdown-menu" aria-labelledby="navbarDropdown">
               <li><a class="dropdown-item" href="#">Nosotros</a></li>
               <li><a class="dropdown-item" href="#">Galeria</a></li>
               <li><hr class="dropdown-divider"></li>
               <li><a class="dropdown-item" href="#">Contacto</a></li>
             </ul>
           </li>
           
         </ul>
         <form class="d-flex">
           <input class="form-control me-2" type="search" placeholder="Search" aria-label="Search">
           <button class="btn btn-outline-success" type="submit">Search</button>
         </form>
       </div>
     </div>
   </nav>`);

   //footer
   $('body').append(`<footer>
   <p>Desafio 12 realizado por Christian Zamora Hermida</p>
   </footer>
   `);
   $('footer').css({background:'red',color: 'white'});
   $('p').addClass('text-center');



});





