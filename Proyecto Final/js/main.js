const btn1 = document.querySelector('.btn1'),
btn2 = document.querySelector('.btn2'),
btn3 = document.querySelector('.btn3'),
btn4 = document.querySelector('.btn4')


const productos =[
    {class: cards, 
    nombre: "Remera Adidas Blanca", 
    precio: 5999,
    img:  "../images/",
    },

    {class: cards2,
    nombre: "Rompevientos Jordan", 
    precio: 8899,
    img: "../images/rompeJordan.jpg"
    },
    
    {class: cards3,
    nombre: "Rompevientos Nike",
    precio: 9599,
    img: "images/rompeNike.JPG"
    },

    {class: cards4,
    nombre: "Short Adidas", 
    precio: 4799,
    img:"images/shortAdi.JPG"
    }
];


let carrito = [];



productos.forEach((product) =>{
    let content = document.createElement("div");
    content.innerHTML = `
    <img src="${product.img}">
    <h3>${product.nombre} </h3>
    <p>${product.precio} $</p>
    `

    shopContent.append(content);

    let comprar = document.createElement ("buttom");
    comprar.innerText = "Añadir al Carrito";

    content.append(comprar);
})









btn1.addEventListener("click", ()=>{
    carrito.push({
        id: product.class,
        img: product.img,
        nombre: product.nombre,
        precio: product.precio
    });
    console.log(carrito)
} )

