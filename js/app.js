const deslizar = document.querySelector('.sliderMover');
const menuItems = document.querySelectorAll('.menuItem');
const apiKey = '85e714df044445a39ed211900221803';
const weatherApi = "http://api.weatherapi.com/v1/current.json"

fetch(weatherApi + "?key=" + apiKey + "&q=buenosaires")
    .then((respuesta => respuesta.json()) )
    .then(data =>{

        let mostrarApi = document.getElementById('navItem')
        mostrarApi.innerHTML = `<span>${data.current.temp_c}</span>
                                <img src=${data.current.condition.icon} alt=${data.current.condition.text}/>`

        console.log(data);
    })
    .catch(err => console.log(err));


const productos = [
    {
        id: 1,
        titulo: "Air Force",
        precio: 119,
        colores: [
            {
            code: "black",
            img: "./img/air.png",
          },
         {
            code: "darkblue",
            img: "./img/air2.png",
         },
        ],
    },
    {
        id: 2,
        titulo: "Air Jordan",
        precio: 149,
        colores: [
            {
                code: "lightgray",
                img: "./img/jordan.png"
            },
            {
                code: "green",
                img: "./img/jordan2.png"
            },
        ],
    },
    {
        id: 3,
        titulo: "Blazer",
        precio: 109,
        colores: [
            {
                code: "lightgray",
                img: "./img/blazer.png"
            },
            {
                code: "green",
                img: "./img/blazer2.png"
            },
        ],
    },
    {
        id: 4,
        titulo: "Crater",
        precio: 129,
        colores: [
            {
                code: "black",
                img: "./img/crater.png"
            },
            {
                code: "lightgray",
                img: "./img/crater2.png"
            },
        ],
    },
    {
        id: 5,
        titulo: "Hippie",
        precio: 99,
        colores: [
            {
                code: "gray",
                img: "./img/hippie.png"
            },
            {
                code: "black",
                img: "./img/hippie2.png"
            },
        ],
    },
];

let elegirProducto = productos[0];

const productoImg = document.querySelector(".productImg")
const productoTitle = document.querySelector(".productTitle")
const productoPrice = document.querySelector(".productPrice")
const productoColores = document.querySelectorAll(".color")
const productoSize = document.querySelectorAll(".size")

menuItems.forEach((item, index) => {
    item.addEventListener("click", () => {
        deslizar.style.transform = `translateX(${-100 * index}vw)`;

        elegirProducto = productos[index]

        productoTitle.textContent = elegirProducto.titulo
        productoPrice.textContent = "$" + elegirProducto.precio
        productoImg.src = elegirProducto.colores[0].img
        productoColores.forEach((color,index) => {
            color.style.backgroundColor = elegirProducto.colores[index].code;
        })
    });
});


    productoColores.forEach((color,index) => {
        color.addEventListener("click", ()=>{
            productoImg.src = elegirProducto.colores[index].img
        })
    })

    productoSize.forEach((size, index) => {
        size.addEventListener("click", () => {
          productoSize.forEach((size) => {
            size.style.backgroundColor = "white";
            size.style.color = "black";
          });
          size.style.backgroundColor = "black";
          size.style.color = "white";
        });
      });


      const productButton = document.querySelector(".productButton");
    const payment = document.querySelector(".payment");
    const close = document.querySelector(".close");

    productButton.addEventListener("click", () => {
        payment.style.display = "flex";
    });

    close.addEventListener("click", () => {
    payment.style.display = "none";
    });