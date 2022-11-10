
// Constantes
const masterDiv1 = document.getElementById("masterDiv")
const verCarrito = document.getElementById("verCarrito")
const divCarrito = document.getElementById("divCarrito")


// Variables 
let carrito = [];



// Fetch

fetch('../js/productos.json')
    .then( (res) => res.json()) 
    .then((data)=> {

        // Contenido de la página 

data.forEach((product) =>{
    let content = document.createElement("div");
    content.className = "productos"
    content.innerHTML = `
    <img src="${product.img}">
    <h3>${product.nombre} </h3>
    <p>${product.precio} $</p>
    `

    masterDiv1.append(content);

    let comprar = document.createElement ("button");
    comprar.innerText = "Añadir al Carrito";
    comprar.className = "btnComprar";

    content.append(comprar);
    comprar.addEventListener("click", ()=>{

        
        sessionStorage.setItem( 'compra', JSON.stringify(productos))

        carrito.push({
            id: product.class,
            img: product.img,
            nombre: product.nombre,
            precio: product.precio
        })
    })
})



    } )



// Contenido del carrito 

verCarrito.addEventListener("click", ()=>{

    sessionStorage.setItem('productos', productos)
    let mostrarCompra = localStorage.setItem ("compras", JSON.stringify(productos))
        console.log(mostrarCompra);

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

        alert ('tu pago fue procesado con éxito')

        sessionStorage.clear();
        
        divCarrito.style.display = "none"
    })

    carritoContent.append(carritoButton);

    carrito.forEach((product) =>{

        let carritoTodo = document.createElement("div")
        carritoTodo.calssName = "carritoTodo"
        carritoTodo.innerHTML = `
        <img src= "${product.img}">
        <h3> "${product.nombre} "</h3>
        <p> "${product.precio} " </p>
        `;

        divCarrito.append(carritoTodo)
    })


    const total = carrito.reduce ((acc, el)=> acc + el.precio, 0)

    const total2 = document.createElement("div")
    total2.calssName = "totalFooter"
    total2.innerHTML = `Este es su total a pagar: $ ${total}`

    divCarrito.append(total2)
})





