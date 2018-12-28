/**
 * Mantenimiento.js
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
    horasParcial:{
        type:'number',
        required: true
    },
    tipoMantenimiento:{
        type:'string',
        defaultsTo: '0',
    },
    filtro:{
        model:'pieza',
    },
    aceite:{
        model:'pieza',
    },
    cantidadAceite:{
        type:'number',
        defaultsTo: 0,
    },
    observaciones:{
        type:'string',
        defaultsTo:'',
    },
    maquina:{
        model:'maquina',
    }

  },
  datastore:'mongodb'

};

