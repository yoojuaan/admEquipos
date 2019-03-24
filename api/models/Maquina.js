/**
 * Maquina.js
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

    /*
    horasEnServicio:{
        type: 'number',
        defaultsTo: 0,
    },
    */

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

    // Codigo de Filtros y aceites

    codFAire1:{
        type:'string',
    },
    codFAire2:{
        type:'string',
    },
    codFComb1:{
        type:'string',
    },
    codFComb2:{
        type:'string',
    },
    codFComb3:{
        type:'string',
    },
    codFComb4:{
        type:'string',
    },
    codFAceiteMotor:{
        type:'string',
    },
    codFAceiteHid1:{
        type:'string',
    },
    codFAceiteHid2:{
        type:'string',
    },

    codAceiteMotor:{
        type:'string',
    },
    codAceiteHid:{
        type:'string',
    },
    codAceiteDif:{
        type:'string',
    },
    codAceiteTrans:{
        type:'string',
    },
    codAceiteMandoFinal:{
        type:'string',
    },

    cantAceiteMotor:{
        type:'number',
    },
    cantAceiteHid:{
        type:'number',
    },
    cantAceiteDif:{
        type:'number',
    },
    cantAceiteTrans:{
        type:'number',
    },
    cantAceiteMandoFinal:{
        type:'number',
    },

    codLiqRefrigerante:{
        type:'string',
    },
    codLiqFreno:{
        type:'string',
    },

    cantLiqRefrigerante:{
        type:'number',
    },
    cantLiqFreno:{
        type:'number',
    },

    indiceRentabilidad:{    // Costo de mantenimiento en relacion con la produccion -- Gasto en mant + rep / horas totales de la maquina
        type:'number',
    },
    indiceReparabilidad:{   // time Rep de fallos / time entre fallas
        type:'number'
    },

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
  //datastore:'mongodb'

};
