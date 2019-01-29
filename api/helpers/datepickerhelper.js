module.exports = {

  friendlyName: 'Datepicker helper',


  description: '',


  inputs: {

  },


  exits: {

    success: {
      description: 'All done.',
    },

  },


  fn: async function (inputs, exits) {

    $('#datepicker').datepicker({ uiLibrary: 'bootstrap4'});
    // TODO

    sails.log("Estoy en el DatePicker-Helper");
    return exit.success("Estoy en el DatePicker-Helper");
  }


};
