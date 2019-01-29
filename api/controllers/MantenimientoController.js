/**
 * MantenimientoController
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
				res.view('pages/nuevoMantenimiento', {maquina:maquina , piezas:piezas});
			});
			
		});
	},
	create:function(req,res){
		var fecha = String(req.body.fecha);
		var horasTotal = Number(req.body.horasTotal);
		var horasParcial = Number(req.body.horasParcial);
		var tipoMantenimiento = String(req.body.tipoMantenimiento);
		var filtro = String(req.body.filtro);
		var aceite = String(req.body.aceite);
		var cantidadAceite = Number(req.body.cantidadAceite);
		var observaciones = String(req.body.observaciones);

		var maqID = req.param('id');
		
		if(req.body.filtro == "null"){
			filtro = null;
		}else{
			Pieza.findOne({id:filtro}).exec(function(err,pieza){
				if(err){
					res.send(500, {error: err});
				}
				if(pieza.cantidad > 0){
					var newCant = pieza.cantidad - 1;
					Pieza.update(pieza, {cantidad:newCant}).exec(function(err){
						if(err){
							res.send(500, {error: err});
						}
					});
				}	
			});
		}
		if(req.body.aceite == "null"){
			aceite = null;
			cantidadAceite = 0;
		}else{
			Pieza.findOne({id:aceite}).exec(function(err,pieza){
				if(err){
					res.send(500, {error: err});
				}
				if(pieza.cantidad >= cantidadAceite){
					var newCant = pieza.cantidad - cantidadAceite;
					Pieza.update(pieza, {cantidad:newCant}).exec(function(err){
						if(err){
							res.send(500, {error: err});
						}
					});
				}else{
					cantidadAceite = 0;
					aceite = null;
				}	
			});
		}
		if(tipoMantenimiento == "1000" /*&& y otros flags de control (aceite y filtros)*/){
			Maquina.findOne({id:maqID}).exec(function(err, maquina){
				if(err){
					res.send(500, {error: err});
				}
				Maquina.update(maquina, {horasParcial:1000}).exec(function(err){
					if(err){
							res.send(500, {error: err});
						}
					});
			});
		}
		if(tipoMantenimiento == "2000" /*&& y otros flags de control (aceite y filtros)*/){
			Maquina.findOne({id:maqID}).exec(function(err, maquina){
				if(err){
					res.send(500, {error: err});
				}
				Maquina.update(maquina, {horasParcial:0}).exec(function(err){
					if(err){
							res.send(500, {error: err});
						}
					});
			});
		}
		Mantenimiento.create({fecha:fecha, horasTotal:horasTotal, horasParcial:horasParcial, tipoMantenimiento:tipoMantenimiento, filtro:filtro, aceite:aceite, cantidadAceite:cantidadAceite, observaciones:observaciones, maquina:maqID}).exec(function(err){
			if(err){
				res.send(500, {error: err});
			}
			res.redirect('/maquina/ver/' + maqID + '/');
		});
	},

	ver:function(req,res){
		Mantenimiento.findOne({id:req.param('idMantenimiento')}).exec(function(err,mantenimiento){
			if(err){
				res.send(500, {error: err});
			}
			Maquina.findOne({id:req.param('idMaquina')}).exec(function(err,maquina){
				if(err){
					res.send(500, {error: err});
				}
				Pieza.find({maquina:maquina.id}).exec(function(err,piezas){
					if(err){
						res.send(500, {error: err});
					}
					res.view('pages/verMantenimiento', {mantenimiento:mantenimiento, maquina:maquina, piezas:piezas});
				});
			});
		});
	},

	delete:function(req,res){
		Mantenimiento.destroy({id:req.param('id')}).exec(function(err){
			if(err){
				res.send(500, {error: err});
			}

			res.redirect('/maquina/lista');
		});
		return false;
	},
};

