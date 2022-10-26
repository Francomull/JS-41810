const productos =[
    {id: cards, 
    nombre: "Remera Adidas Blanca", 
    precio: 5999,
    img: "images/adiBlanca.JPG",
    },

    {id: cards2,
    nombre: "Rompevientos Jordan", 
    precio: 8899,
    img: "images/rompeJordan.jpg"
    },
    
    {id: cards3,
    nombre: "Rompevientos Nike",
    precio: 9599,
    img: "images/rompeNike.JPG"
    },

    {id: cards4,
    nombre: "Short Adidas", 
    precio: 4799,
    img:"images/shortAdi.JPG"
    }
];

let carrito =[]

productos.forEach((product) =>{
    let content = document.createElement("div");
    content.innerHTML = `
    <img src="${product.img}">
    <h3>${product.nombre} </h3>
    <p>${product.precio} $</p>
    `
})