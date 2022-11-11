
// Constantes
const masterDiv1 = document.getElementById("masterDiv")
const verCarrito = document.getElementById("verCarrito")
const divCarrito = document.getElementById("divCarrito")

// Variables 
let carrito = [];

// Fetch

fetch('../json/productos.json')
    .then( (res) => res.json()) 
    .then((info)=> {

// Contenido de la página 

info.forEach((productos) =>{
    let content = document.createElement("div");
    content.className = "productos"
    content.innerHTML = `
    <img src="${productos.img}">
    <h3>${productos.nombre} </h3>
    <p>${productos.precio} $</p>

    
    `

    masterDiv1.append(content);

    let comprar = document.createElement ("button");
    comprar.innerText = "Añadir al Carrito";
    comprar.className = "btnComprar";


    //BOTON PARA AÑADIR AL CARRITO 
    content.append(comprar);
    comprar.addEventListener("click", ()=>{

        sessionStorage.setItem( 'compra', JSON.stringify(productos))
  
        carrito.push({
            id: productos.class,
            img: productos.img,
            nombre: productos.nombre,
            precio: productos.precio
        })
    })
})

} )


// Contenido del carrito 

verCarrito.addEventListener("click", ()=>{

    divCarrito.innerHTML = "";
    divCarrito.style.display = "grid"
    
    const carritoContent = document.createElement("div");
    carritoContent.className = "carritoTodo"
    carritoContent.innerHTML = `
    <h1> ¿Listo para finalizar tu compra? </h1>
    `


    divCarrito.append(carritoContent);


// Boton para cerrar el Carrito
    const carritoButton = document.createElement("button")
    carritoButton.innerText = "Cerrar"

    carritoButton.className = "btnCarrito"

    carritoButton.addEventListener('click', ()=>{

        divCarrito.style.display = "none"
    })

    carritoContent.append(carritoButton);

    carrito.forEach((productos) =>{

        let carritoTodo = document.createElement("div")
        carritoTodo.calssName = "carritoTodo"
        carritoTodo.innerHTML = `
        <img src= "${productos.img}">
        <h3> "${productos.nombre} "</h3>
        <p> "${productos.precio} " </p>
        `;

        divCarrito.append(carritoTodo)
    })


    const total = carrito.reduce ((acc, el)=> acc + el.precio, 0)

    const total2 = document.createElement("div")
    total2.calssName = "totalFooter"
    total2.innerHTML = `Este es su total a pagar: $ ${total}`

    divCarrito.append(total2)

    const btnFin = document.createElement("button")
    btnFin.innerText = "Finalizar compra"

    btnFin.className = "btnFin"

    btnFin.addEventListener('click', ()=>{

        Swal.fire(
            'Tu compra fue realizada con éxito!',
            'Que la disfrtes!',
            'success'
          )

        sessionStorage.clear();
        
        divCarrito.style.display = "none"

        carrito = {}
        divCarrito()

    })

    carritoContent.append(btnFin);


})
