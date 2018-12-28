/**
 * Maquina.js
 *
 * @description :: A model definition represents a database table/collection.
 * @docs        :: https://sailsjs.com/docs/concepts/models-and-orm/models
 */

module.exports = {

  attributes: {
    codigo:{
        type:'string',
    },
    marca:{
        type:'string',
        required: true
    },
    modelo:{
        type:'string',
        defaultsTo: '-',
    },
    tipo:{
        type:'string',
        required: true
    },
    horasTotal:{
        type:'number',
        defaultsTo: 0,
    },
    horasParcial:{
        type:'number',
        defaultsTo: 0,
    },
    
    nroSerie:{
        type:'string',
    },
    origen:{
        type:'string',
    },
    fechaFab:{
        type:'number',
    },
    fechaServicio:{
        type:'string',
    },
    potencia:{
        type:'string',
    },
    peso:{
        type:'number',
    },
    precio:{
        type:'number',
    },
    observaciones:{
        type:'string',
    },

    // Otros datos de jose, como Año fabricacion, patente, nro serie 
    // Flags de mantenimientos
    /*m250:{
        type: 'bool',
        defaultsTo: false,
    },
    m500:{
        type: 'bool',
        defaultsTo: false,
    },
    m1000:{
        type: 'bool',
        defaultsTo: false,
    },
    m2000:{
        type: 'bool',
        defaultsTo: true,
    },*/

    mantenimientos:{
        collection:'mantenimiento',
        via:'maquina',
    },

    obra:{
        model:'obra',
    },

  },
  datastore:'mongodb'

};

