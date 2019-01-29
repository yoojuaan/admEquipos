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

    //-------Filtros-------
    //Filtros de aire
    filtroAire1:{
        model:'pieza',
    },
    filtroAire2:{
        model:'pieza',
    },
    //Filtros de combustible
    filtroComb1:{
        model:'pieza',
    },
    filtroComb2:{
        model:'pieza',
    },
    filtroComb3:{
        model:'pieza',
    },
    filtroComb4:{
        model:'pieza',
    },
    //Filtros de aceite de motor
    filtroAceiteMotor:{
        model:'pieza',
    },
    //Filtros de aceite hidraulico
    filtroAceiteHid1:{
        model:'pieza',
    },
    filtroAceiteHid2:{
        model:'pieza',
    },

    //-------Aceites------
    aceiteMotor:{
        model:'pieza',
    },
    aceiteHid:{
        model:'pieza',
    },
    aceiteDiferencial:{
        model:'pieza',
    },
    aceiteTransmision:{
        model:'pieza',
    },
    aceiteMandoFinal:{
        model:'pieza',
    },

    //Cantidades de aceites
    cantidadAceiteMotor:{
        type:'number',
        defaultsTo: 0,
    },
    cantidadAceiteHid:{
        type:'number',
        defaultsTo: 0,
    },
    cantidadAceiteDiferencial:{
        type:'number',
        defaultsTo: 0,
    },
    cantidadAceiteTransmision:{
        type:'number',
        defaultsTo: 0,
    },
    cantidadAceiteMandoFinal:{
        type:'number',
        defaultsTo: 0,
    },

    //Grasa
    grasa:{
        type:'boolean',
    },//Cantidades??

    //----------Liquidos----------
    liqRefrigerante:{
        model:'pieza',
    },

    liqFrenos:{
        model:'pieza',
    },
    //Cantidades de liquidos
    cantidadLiqRefrigerante:{
        type:'number',
        defaultsTo: 0,
    },
    cantidadLiqFrenos:{
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

