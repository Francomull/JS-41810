
const masterDiv1 = document.getElementById("masterDiv")
const verCarrito = document.getElementById("verCarrito")
const divCarrito = document.getElementById("divCarrito")



let carrito = [];



productos.forEach((product) =>{
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
    comprar.className = "btnComprar"

    content.append(comprar);
    comprar.addEventListener("click", ()=>{
        carrito.push({
            id: product.class,
            img: product.img,
            nombre: product.nombre,
            precio: product.precio
        })
    })
})


verCarrito.addEventListener("click", ()=>{
    divCarrito.innerHTML = "";
    divCarrito.style.display = "grid"
    const carritoContent = document.createElement("div");
    carritoContent.className = "carritoTodo"
    carritoContent.innerHTML = `
    <h1> ¿Listo para finalizar tu compra? </h1>
    `
    divCarrito.append(carritoContent);

    const carritoButton = document.createElement("button")
    carritoButton.innerText = "Cerrar"

    carritoButton.className = "btnCarrito"

    carritoButton.addEventListener('click', ()=>{
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





