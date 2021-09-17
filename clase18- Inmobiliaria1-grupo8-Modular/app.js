let inmobiliaria= require("./controller.js"); //requiero los métodos de inmobiliaria guardados en controller

const v = "\x1b[32m%s\x1b[0m";
const o = "*".repeat(80) + "\n";
const oo = "*".repeat(25);
// Te proveemos la siguiente plantilla que tiene tre partes:
// - Array de objetos que está colapsado aquí debajo.
// - Desarrollo de las consignas, donde escribirás el código que responda a los enunciados
// - Ejecución de las consignas, donde ejecutarás los métodos correspondientes mostrando por consola sus resultados
const nombre = "Grupo 8";
const tema = "Refactorización"


/******************************/
/* Ejecución de las consignas */
/******************************/

console.log(v, "\n" + oo + "   A. Datos");
console.table([{ alumno: nombre, tema: tema }]);

console.log(v, "\n" + oo + "   B. listarDepartamentos");
// Ejecución aquí
inmobiliaria.listarDepartamentos(inmobiliaria.departamentos);  //Debo acceder a a los deptos de inmobiliaria 
console.log(o);

console.log(v, oo + "   C. departamentosDisponibles");
// Ejecución aquí
console.table(inmobiliaria.departamentosDisponibles());
console.log(o);

console.log(v, oo + " D. buscarPorId");
// // Ejecución aquí
console.table(inmobiliaria.buscarPorId(11));
console.log(o);

console.log(v, oo + "  E. buscarPorPrecio");
// // Ejecución aquí
console.table(inmobiliaria.buscarPorPrecio(50000));
console.log(o);

console.log(v, oo + " F. precioConImpuesto");
// Ejecución aquí
console.table(inmobiliaria.precioConImpuesto(15));
console.log(o);

// console.log(v, oo + " G. simplificarPropietarios");
// // Ejecución aquí
// console.log(o);