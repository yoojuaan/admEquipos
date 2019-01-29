/**
 * Reparacion.js
 *
 * @description :: A model definition represents a database table/collection.
 * @docs        :: https://sailsjs.com/docs/concepts/models-and-orm/models
 */

module.exports = {

  attributes: {
    fecha:{
        type:'string',
        required: true
    },
    horasTotal:{
        type:'number',
        required: true
    },
    gastosExtra:{
        type:'number',
        defaultsTo:0,
    },
    precioTotal:{
        type:'number',
    },
    detalles:{
        type:'json',
    },
    observaciones:{
        type:'string',
        defaultsTo:'',
    },
    maquina:{
        model:'maquina',
    },

    // fecha/hora en que la maquina se rompio
    // fecha/hora en que la maquina se reparo --> Esta es la fecha de la reparacion en si.
    // codigo de obra en que se realizo la reparacion
    // horas de maquina parada (fecha de reparacion - fecha de rotura)

    codObra:{
        type:'string',
    },
    fechaReparacion:{
        type:'string',
    },
    //fecha

  },
  datastore:'mongodb'

};

