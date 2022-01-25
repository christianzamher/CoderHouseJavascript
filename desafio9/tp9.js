
const contenedorProductos = document.getElementById("productos")
const producto = [{
    id: 1,
    nombre: "Cerveza 1lt",
    precio: 290,
    img: "https://via.placeholder.com/250"

   
},
{
    id: 2,
    nombre: "Gaseosa",
    precio: 150,
    img: "https://via.placeholder.com/250"
},
{
    id: 3,
    nombre: "Milanesas con Papas Fritas",
    precio: 700,
    img: "https://via.placeholder.com/250"
},
{
    id: 4,
    nombre: "Porcion de Papas Fritas",
    precio: 200,
    img: "https://via.placeholder.com/250"
},
{
    id: 5,
    nombre: "Hamburguesa completa",
    precio: 300,
    img: "https://via.placeholder.com/250"
},
]

producto.forEach((prod) => {
    const div = document.createElement("div")

div.innerHTML= `
    <img src=${prod.img}/>
    <h3>${prod.nombre}</h3
    <p>Precio : $${prod.precio}</p>
    <p>Opcion : ${prod.id}</p>`

contenedorProductos.appendChild(div)
});

const seleccionProductos = document.getElementById("seleccion")
const comprarCombo = document.querySelector("#comprar")

comprarCombo.addEventListener("click", ()=>{
    alert(`Tu combo ${selector.value} ha sido cargado con exito ,Abonas por caja, Gracias!`)
})
