class Contacto {
    constructor(nombre,numero,direccion){
        this.nombre=nombre;
        this.numero=numero;
        this.direccion=direccion;
    }
}

const contactos = [];

let guardarContacto = document.getElementById("guardarContacto");

let divSolicitud = document.getElementById("solicitud");

if ("Contactos" in localStorage) {
    const contactoGuardado = JSON.parse(localStorage.getItem("Contactos"));
    console.log(contactoGuardado);
    for (const generico of contactoGuardado) {
        contactos.push(new Contacto(generico.nombre,generico.numero,generico.direccion))
    }
    console.log(contactos);
    interfaz(contactos);
}

guardarContacto.onsubmit = (e) =>{
    e.preventDefault();
    let hijos = guardarContacto.children
    console.log(hijos);
    contactos.push(new Contacto(hijos[0].value, hijos[1].value, hijos[2].value));
    console.log(contactos);
    interfaz(contactos)
    e.target.reset();
    localStorage.setItem("Contactos",JSON.stringify(contactos));    
}

function interfaz (lista){
    divSolicitud.innerHTML="";
    for (const contacto of lista) {
    let divContacto= document.createElement("div")
    divContacto.innerHTML= `Nombre: ${contacto.nombre} Numero de celular: ${contacto.numero} Direccion: ${contacto.direccion}`
    divSolicitud.append(divContacto)
    }
}   