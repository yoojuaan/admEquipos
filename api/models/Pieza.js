/**
 * Pieza.js
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
        required: true,
    },
    repuesto:{
        type:'string',
        required: true
    },
    marca:{
        type:'string',
        defaultsTo: '-',
    },
    tipo:{
        type:'string',
        required: true
    },
    cantidad:{
        type:'number',
        defaultsTo: 0,
    },

    mantenimiento:{
        model:'mantenimiento',
    },

  },
  //datastore:'mongodb'

};
