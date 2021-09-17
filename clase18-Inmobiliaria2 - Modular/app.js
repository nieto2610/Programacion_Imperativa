let inmobiliaria= require("./controller")

/******************************/
/* Ejecución de las consignas */
/******************************/
const v = "\x1b[32m%s\x1b[0m";
const o = "*".repeat(80) + "\n";
const oo = "*".repeat(25); 


console.log(v, "\n" + oo + "   A. Alquilar");
console.log(inmobiliaria.alquilar(1));
console.log(o);

console.log(v, "\n" + oo + "   B. Filtrar Pet Friendly");
console.table(inmobiliaria.filtrarPetFriendly());
console.log(o);

console.log(v, "\n" + oo + "   C. Rebajas por no Alquiler");
console.table(inmobiliaria.rebajasPorNoAlquiler())
console.log(o);

console.log(v, "\n" + oo + "   D. Buscar por propietarios");
console.table(inmobiliaria.buscarPorPropietarios('Julieta Tols'))
console.log(o);
