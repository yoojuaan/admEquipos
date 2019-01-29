/**
 * ReparacionController
 *
 * @description :: Server-side actions for handling incoming requests.
 * @help        :: See https://sailsjs.com/docs/concepts/actions
 */

module.exports = {

	add:function(req,res){




		Maquina.findOne({id:req.param('id')}).exec(function(err,maquina){
			if(err){
				res.send(500, {error: err});
			}
			Pieza.find({}).exec(function(err, piezas){
				if(err){
					res.send(500, {error: 'Error en la base de datos'});
				}
				res.view('pages/nuevaReparacion', {maquina:maquina , piezas:piezas});
			});
			
		});
	},
	create:function(req,res){

		var fecha = String(req.body.fecha);
		var horasTotal = Number(req.body.horasTotal);
		var cantRepuestos = Number(req.body.cantidadRep);
		var observaciones = String(req.body.observaciones);
		var repuestosCambiados = [];
		var preciosRep = [];

		for (var i = cantRepuestos - 1; i >= 0; i--) {
			var temp = "rep" + i;
			var temp2 = "precio" + i;
			repuestosCambiados.push(String(req.body.temp));
			//preciosRep.push(Number(req.body.temp2));
			sails.log(String(req.body.temp));
		}
		let detallesRep = {
			//repuesto:["Rep1","Rep2","Rep3","Rep4"],
			//precio:[500,1000,234,123]
			repuesto:repuestosCambiados,
			precio:preciosRep
		}

		var maqID = req.param('id');

		Reparacion.create({fecha:fecha, horasTotal:horasTotal, detalles:detallesRep, observaciones:observaciones, maquina:maqID}).exec(function(err){
			if(err){
				res.send(500, {error: err});
			}
			res.redirect('/maquina/ver/' + maqID + '/');
		});
	},

	delete:function(req,res){
		Reparacion.destroy({id:req.param('id')}).exec(function(err){
			if(err){
				res.send(500, {error: err});
			}

			res.redirect('/maquina/lista');
		});
		return false;
	},
  

};

