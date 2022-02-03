
$(document).ready(function () {


const productos = [{ id: 1, nombre: "Arroz", precio: 125 , descrip: "Arroz Gallo Oro , paquete de 1kg"},
{ id: 2, nombre: "Fideo", precio: 70 , descrip: "Fideo de 500gr (no se pasa nunca)" },
{ id: 3, nombre: "Pan" , precio: 50 , descrip: "1kg de pan integral"},
{ id: 4, nombre: "Flan" , precio: 100 , descrip: "Flan casero"}];

// Recorremos el array con for..of
for (const producto of productos) {
 
//Por cada producto además de los datos agregamos un botón 
 $(".container").append(`<div class="card" style="width: 18rem;">
 <div class="card-body">
   <h5 class="card-title">Producto: ${producto.nombre}</h5>
   <hr>
   <img src="data:image/jpeg;base64,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">
   <hr>
   <h6 class="card-subtitle mb-2 text-muted">$ ${producto.precio}</h6>
   <p class="card-text">${producto.descrip}</p>
   <button id="btn${producto.id}" class="btn btn-success" type="button" data-bs-toggle="offcanvas" data-bs-target="#offcanvasExample" aria-controls="offcanvasExample">Comprar</button>
   <button id="btn2${producto.id}" class="btn btn-danger" type="button" data-bs-toggle="offcanvas" data-bs-target="#offcanvasExample" aria-controls="offcanvasExample">Cancelar</button>
 </div>
</div>`);

//Boton Comprar
    $(`#btn${producto.id}`).on('click', function () {
    $('.offcanvas-title').html(`<h5>Detalles de su compra:</h5>`);
    $('.offcanvas-body').html(`Compraste ${producto.nombre} por $ ${producto.precio}
    <img src="https://troquelando.com/wp-content/uploads/2021/01/Gracias-por-tu-compra-redondo.png">`)
    
});
//boton cancelar
$(`#btn2${producto.id}`).click(function (e) { 
    e.preventDefault();
    $('.offcanvas-title').html("<h5>Detalles de su compra:</h5>")
    $('.offcanvas-body').html(`Ha elegido cancelar la compra de ${producto.nombre}
    <img src="https://2img.net/h/3.bp.blogspot.com/-98CYRQalBYU/UbVUAJSzVUI/AAAAAAAAAEM/veD_lVAW63k/s1600/te-esperamos-pronto.png">`)}); 

    };  
           
    
    //header
    $('header').prepend(`<img src="https://freshlabbatavia.com/wp-content/uploads/2017/07/cooking-header.jpg" class="img-fluid" alt="Comida">`);
    $('.img-fluid').on("click", function(){
        alert("Bienvenidos y Gracias por elegirnos");
      });


    $("h1").html("Productos de Compra")
    $('.display-4').html('Ramo generales')

    //Agrengando Clase
    $('.offcanvas-title').addClass('text-center');
    
  
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





