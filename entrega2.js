/* Declaramos las variables */
let carrito = [];

let cantManzanas = 0;
let cantPeras = 0;
let cantFrutiilas = 0;

let decision;
let compra;

/* Creamos la plantilla del objeto */
class fruta {
    constructor(nombre,precio,codigoBarras){
        this.nombre = nombre;
        this.precio = precio;
        this.codigoBarras = codigoBarras;
    }
}

/* Declaramos los 3 objetos */
let manzana = new fruta("Manzana",300,1);
let pera = new fruta("Pera",250,2);
let frutilla = new fruta("Frutilla",400,3);

/* Empezamos con el programa */
alert("🏪 Bienvenidos a la verduleria de Anto! 🏪");
decision = prompt(`¿Quieres realizar una compra?
Elegir la opcion:
1:🛒 Si
2:❌ No
`);

while(decision == 1){
   compra =  prompt (`Ingrese el producto que desea comprar
   1:🍎 Manzana
   2:🍐 Pera
   3:🍓 Frutilla`);

   switch(compra){
    case "1":
        carrito.push("Manzana");
        break;
    case "2":
        carrito.push("Pera");
        break;
    case "3":
        carrito.push("Frutilla");
        break;
    default:
        alert("Eligio una opcion incorrecta");
   }
   decision = prompt(`¿Quiere realizar otra compra?
   Elegir la opcion:
    1:🛒 Si
    2:❌ No`);
}

/* Buscamos con un Map, cuando dentro de nuestro carrito, se guarda alguna fruta */
/* Guardamos la cantidad de veces que map encontro la fruta, dentro de diferentes contadores */
let frutas = carrito.map(x =>{
if(x == "Manzana"){
    cantManzanas++;
}
if(x == "Pera"){
    cantPeras++;
}
if(x == "Frutilla"){
    cantFrutiilas++;
}
})


/* Con 3 filters aplicados a carrito, creamos 3 arrays con la cantidad de cada una
de las frutas. */


let manzanas = carrito.filter(x => x == "Manzana");
let peras = carrito.filter(x => x == "Pera");
let frutillas = carrito.filter(x => x == "Frutilla");



/* Mostramos el resultado de la cantidad de fruta que el cliente va a llevar y su precio */
alert(`Usted se llevara:
🍎: ${cantManzanas}Kg = $${manzana.precio * manzanas.length} 
🍐: ${cantPeras}Kg = $${pera.precio * peras.length} 
🍓: ${cantFrutiilas}Kg = $${frutilla.precio * frutillas.length} 
`);