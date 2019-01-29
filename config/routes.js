/**
 * Route Mappings
 * (sails.config.routes)
 *
 * Your routes tell Sails what to do each time it receives a request.
 *
 * For more information on configuring custom routes, check out:
 * https://sailsjs.com/anatomy/config/routes-js
 */

module.exports.routes = {

  /***************************************************************************
  *                                                                          *
  * Make the view located at `views/homepage.ejs` your home page.            *
  *                                                                          *
  * (Alternatively, remove this and add an `index.html` file in your         *
  * `assets` directory)                                                      *
  *                                                                          *
  ***************************************************************************/

  '/': { view: 'pages/homepage' },

  '/pieza/delete/:id': {
  controller: 'PiezaController',
  action: 'delete',
  skipAssets: true
  },

  '/pieza/agregar/:id': {
  controller: 'PiezaController',
  action: 'agregar',
  skipAssets: true
  },

  '/maquina/delete/:id': {
  controller: 'MaquinaController',
  action: 'delete',
  skipAssets: true
  },
  '/maquina/agregar/:idMaquina/:idObra': {
  controller: 'MaquinaController',
  action: 'agregar',
  skipAssets: true
  },
  '/maquina/ver/:id': {
  controller: 'MaquinaController',
  action: 'ver',
  skipAssets: true
  },
  '/maquina/cargarHojaDatos/:id': {
  controller: 'MaquinaController',
  action: 'cargarHojaDatos',
  skipAssets: true
  },
  '/maquina/verHojaDatos/:id': {
  controller: 'MaquinaController',
  action: 'verHojaDatos',
  skipAssets: true
  },


  '/mantenimiento/add/:id': {
  controller: 'MantenimientoController',
  action: 'add',
  skipAssets: true
  },
  '/mantenimiento/create/:id': {
  controller: 'MantenimientoController',
  action: 'create',
  skipAssets: true
  },
  '/mantenimiento/ver/:idMantenimiento/:idMaquina':{
  controller: 'MantenimientoController',
  action: 'ver',
  skipAssets: true
  },

  '/reparacion/add/:id': {
  controller: 'ReparacionController',
  action: 'add',
  skipAssets: true
  },
  '/reparacion/create/:id': {
  controller: 'ReparacionController',
  action: 'create',
  skipAssets: true
  },
  '/reparacion/ver/:idReparacion/:idMaquina':{
  controller: 'ReparacionController',
  action: 'ver',
  skipAssets: true
  },


  '/obra/delete/:id': {
  controller: 'ObraController',
  action: 'delete',
  skipAssets: true
  },
  '/obra/ver/:id': {
  controller: 'ObraController',
  action: 'ver',
  skipAssets: true
  },
  '/obra/agregar/:idObra/:idMaquina': {
  controller: 'ObraController',
  action: 'agregar',
  skipAssets: true
  },
  '/obra/quitar/:idObra/:idMaquina': {
  controller: 'ObraController',
  action: 'quitar',
  skipAssets: true
  },
  '/obra/updateNombre/:id/:name': {
  controller: 'ObraController',
  action: 'updateName',
  skipAssets: true
  },

  /***************************************************************************
  *                                                                          *
  * More custom routes here...                                               *
  * (See https://sailsjs.com/config/routes for examples.)                    *
  *                                                                          *
  * If a request to a URL doesn't match any of the routes in this file, it   *
  * is matched against "shadow routes" (e.g. blueprint routes).  If it does  *
  * not match any of those, it is matched against static assets.             *
  *                                                                          *
  ***************************************************************************/


};
