/*
let bebida
let descuento = prompt('Si contestas bien a este calculo, te ganas un descuento del 25% \nescribe Ok para avanzar. ')
const acertijo = () => {
let cuenta = prompt("5+5?");
if (cuenta === '10') {
    bebida = prompt('Felicidades, contestaste correctamente \nElija que quiere beber entre agua o coca')
    return bebida
}
else alert("Te equivocaste, perdiste el descuento. ")
}

acertijo()

const viajePrecio = prompt("Cada bebida vale 300 \nEscriba el precio que mencionamos arriba para finalizar su compra")

const resta = (precio,descuento) =>   `${bebida} ${precio - descuento}`

alert(resta(300,75));
}
*/
class Bebida { 
    constructor(id,nombre,precio) {
        this.id= parseInt(id);
        this.nombre= nombre;
        this.precio= parseFloat(precio);
    }
}
const bebidas =[];
bebidas.push(new Bebida(1,'Licuado de Banana',250));
bebidas.push(new Bebida(2,'Licuado de Frutilla',250));
bebidas.push(new Bebida(2,'Daiquiri',300));
bebidas.push(new Bebida(3,'Fernet',300));
bebidas.push(new Bebida(3,'Jagermeister',400));
console.log(bebidas);

for (const bebida of bebidas) {
    let divBebida = document.createElement("div")
    divBebida.innerHTML=`<h2>Bebidas que agregaremos proximamente</h2>
                        <h2>Producto: ${bebida.nombre}</h2>
                        <h2>Precio: $ ${bebida.precio} </h2>
                        <hr> `;
    document.body.append(divBebida);
}

