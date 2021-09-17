/*******************************/
/* Desarrollo de las consignas */
/*******************************/

/*
A Agregar un método que permita alquilar un departamento. 
Este método recibe por parámetro el id del departamento y actualiza la propiedad del departamento en false.
Resultado esperado: que quede actualizada la propiedad de departamentos de la inmobiliaria, donde el departamento que alquilo no está disponible.
*/
let departamentos=require("./jsonHelper");
departamentos= departamentos.leerJson("model");

let inmobiliaria = {
    departamentos,
    alquilar : function(id){
        console.log(this.departamentos[id-1]); 
        for (let i = 0; i < this.departamentos.length; i++) {
           if(this.departamentos[i].id == id && this.departamentos[i].disponible){
               this.departamentos[i].disponible = false;
           }                      
        }
        return this.departamentos[id-1];
    },
    //B. Agregar un método filtrarPetFriendly que permita filtrar los departamentos que admiten mascotas
    filtrarPetFriendly : function(){
        let petFriendly = [];
        for (let i = 0; i < this.departamentos.length; i++) {
            if(this.departamentos[i].aceptaMascotas){
                petFriendly.push(this.departamentos[i]);
            }
            
        }
        return petFriendly;
    },
    /*Agregar un método rebajasPorNoAlquiler que permita devolver un array de departamentos que no estén alquilados 
    aún descontando un 10% para evaluar si se puede intentar conseguir clientes. NO se debe modificar la propiedad departamentos, 
    se debe devolver un array simulando esta rebaja de precios
*/
    rebajasPorNoAlquiler : function(){
        let noAlquilados = [];
        for (let i = 0; i < this.departamentos.length; i++) {
           if(this.departamentos[i].disponible){
               noAlquilados.push(this.departamentos[i]);
           }
            
        }
        
        for (let index = 0; index < noAlquilados.length; index++) {
            noAlquilados[index].precioAlquiler *= 0.9; 
            
        }

        return noAlquilados;
        
    },

    /* Agregar un método buscarPorPropietarios que permita filtrar los departamentos según su propietario.
Recibe como parámetro un string con el nombre de un propietario
Este método debe devolver una lista de departamentos que tengan como propietario al nombre que pasamos por parámetro. Puede ser único propietario o en conjunto. (Pista: deben buscar ese nombre en los propietarios)
 */
    buscarPorPropietarios : function(propietario){
        let departamentosXPropietarios = [];
        for (let i = 0; i < this.departamentos.length; i++) {
            if(this.departamentos[i].propietarios.indexOf(propietario) != -1){
                departamentosXPropietarios.push(this.departamentos[i]);
            }
            
        }
        return departamentosXPropietarios;
    }

}

module.exports=inmobiliaria;