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

class Bebida { 
    constructor(id,nombre,precio) {
        this.id= parseInt(id);
        this.nombre= nombre;
        this.precio= parseFloat(precio);
    }
}

const productos = [];
productos.push(new Bebida(1,'Licuado de Banana',250));
productos.push(new Bebida(2,'Licuado de Frutilla',250));
    productos.push(new Bebida(3,'Fernet',300));

    console.log(productos);

    for (let index = 0; index < productos.length; index++) {
        console.log(productos[index].nombre);

    alert("Bebidas que agregaremos proximamente"+"\n"+
            "Bebida N"+productos[index].id+"\n"+
            "Nombre "+productos[index].nombre+"\n"+
            "Precio $ "+productos[index].precio)+"\n"
    }




