/**
 * MaquinaController
 *
 * @description :: Server-side actions for handling incoming requests.
 * @help        :: See https://sailsjs.com/docs/concepts/actions
 */

module.exports = {
  	lista:function(req, res){
		Maquina.find({}).exec(function(err, maquinas){
			if(err){
				res.send(500, {error: 'Error en la base de datos'});
			}
			res.view('pages/listaMaquinas', {maquinas:maquinas});
		});
	},
	add:function(req,res){
		res.view('pages/nuevaMaquina');
	},
	create:function(req,res){
		var repuesto = String(req.body.repuesto);
		var tipo = String(req.body.tipo);
		var marca = String(req.body.marca);
		var modelo = String(req.body.modelo);
		var horasTotal = Number(req.body.horasTotal);
		var horasParcial = Number(req.body.horasParcial);

		var codigo = String(req.body.codigo);
		var nroSerie = String(req.body.nroSerie);
		var origen = String(req.body.origen);
		var fechaFab = Number(req.body.fechaFab);
		var fechaServicio = String(req.body.fechaServicio);
		var pot = Number(req.body.potencia);
		var potenciaUnidad = String(req.body.potenciaUnidad);
		var potencia = String(pot + potenciaUnidad);
		var peso = Number(req.body.peso);
		var precio= Number(req.body.precio);
		var observaciones = String(req.body.observaciones);

		Maquina.create({repuesto:repuesto, 
			tipo:tipo, marca:marca, 
			modelo:modelo, horasTotal:horasTotal, 
			horasParcial:horasParcial, nroSerie:nroSerie,
			origen:origen, fechaFab:fechaFab,
			fechaServicio:fechaServicio, potencia:potencia,
			peso:peso, precio:precio,
			observaciones:observaciones, codigo:codigo,

		}).exec(function(err){
			if(err){
				res.send(500, {error: err});
			}

			res.redirect('/maquina/lista');
		});
	},
	delete:function(req,res){
		Maquina.destroy({id:req.param('id')}).exec(function(err){
			if(err){
				res.send(500, {error: err});
			}

			res.redirect('/maquina/lista');
		});
		return false;
	},
	agregar:function(req,res){
		Maquina.findOne({id:req.param('id')}).exec(function(err,maquina){
			if(err){
				res.send(500, {error: err});
			}
			var horasASumar = Number(req.body.cant);
			if(horasASumar < 0){
				horasASumar = 0;
			}
			var oldHorasTotal = Number(maquina.horasTotal);
			var oldHorasParcial = Number(maquina.horasParcial);
			var newHorasTotal = Number(oldHorasTotal + horasASumar);
			var newHorasParcial = Number(oldHorasParcial + horasASumar);

			Maquina.update(maquina , {horasTotal:newHorasTotal, horasParcial:newHorasParcial}).exec(function(err){
				if(err){
					res.send(500, {error: err});
				}
				res.redirect('/maquina/lista');
			});
		});
	},

	ver:function(req,res){
		Maquina.findOne({id:req.param('id')}).exec(function(err,maquina){
			if(err){
				res.send(500, {error: err});
			}
			Mantenimiento.find({maquina:req.param('id')}).exec(function(err, mantenimientos){
				if(err){
					res.send(500, {error: err});
				}
				Pieza.find({}).exec(function(err, piezas){
					if(err){
						res.send(500, {error: err});
					}
					Obra.findOne({id:maquina.obra}).exec(function(err,obra){
						if(err){
							res.send(500, {error: err});
						}
						res.view('pages/verMaquina', {maquina:maquina, mantenimientos:mantenimientos, piezas:piezas, obra:obra});
					});
				});
			});
			
		});
	},

};

