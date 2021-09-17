


let departamentos= require ("./jsonHelper.js");
departamentos= departamentos.leerJson("model");


/*******************************/
/* Desarrollo de las consignas */
/*******************************/


const inmobiliaria = {
    // A
    departamentos,
    // B
    listarDepartamentos: function (array) {
        for (let index = 0; index < array.length; index++) {
            const elemento = array[index];
            console.log(`id: ${ elemento.id }, precio $ ${elemento.precioAlquiler}, ${ elemento.disponible ? "está disponible" : "no esta disponible" }, ${ elemento.cantidadHabitacion } ambientes, máximo ${ elemento.cantidadPersonas } personas, ${ elemento.aceptaMascotas ? "acepta mascotas" : "no acepta mascotas"}, propietarios: ${ elemento.propietarios }`)
        }
    },
    // C
    departamentosDisponibles: function () {
        const disponibles= [];
        for (let i = 0; i < this.departamentos.length; i++) {
            if (this.departamentos[i].disponible) {
                disponibles.push(this.departamentos[i])
            }            
        }
        return disponibles;
    },
    // D
    buscarPorId: function (id) {
        for (let i = 0; i < this.departamentos.length; i++) {
            if (this.departamentos[i].id === id) {
                return this.departamentos[i];
            } 
        }
        return "No se encontro el departamento";
    },
    // E
    buscarPorPrecio: function (precio) {
        const disp = this.departamentosDisponibles();
        const dptos = [];
        for (let i = 0; i < disp.length; i++) {
            if (disp[i].precioAlquiler <= precio) {
                dptos.push(disp[i])
                
            }
        }
        return dptos;
    },
    // F
    precioConImpuesto: function (imp) {
        const incr = 1 + imp/100;
        const arr = [];
        for (let i = 0; i < this.departamentos.length; i++) {
            arr.push(this.departamentos[i].precioAlquiler = this.departamentos[i].precioAlquiler * incr);
        }
        return arr;
    }
    // G
}

module.exports=inmobiliaria;