/**
 * Obra.js
 *
 * @description :: A model definition represents a database table/collection.
 * @docs        :: https://sailsjs.com/docs/concepts/models-and-orm/models
 */

module.exports = {

  attributes: {
    id:{
      type: 'number',
      autoIncrement:true
    },
    codigo:{
        type: 'string',
    },
    nombre:{
        type:'string',
    },
    localidad:{
        type: 'string',
    },
    provincia:{
        type: 'string',
    },
    fechaInicio:{
        type: 'string',
    },
    fechaFin:{
        type: 'string',
    },
    observaciones:{
        type: 'string',
    },
    cantidadMaquinas:{
        type: 'number',
        defaultsTo: 0,
    },

    maquinas:{
        collection: 'maquina',
        via: 'obra'
    },

  },

};
