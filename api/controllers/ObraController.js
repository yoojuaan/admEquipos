/**
 * ObraController
 *
 * @description :: Server-side actions for handling incoming requests.
 * @help        :: See https://sailsjs.com/docs/concepts/actions
 */

module.exports = {
  	lista:function(req, res){
		Obra.find({}).exec(function(err, obras){
			if(err){
				res.status(500).send({error: err});
			}
			obras.forEach(function(obra){
				Maquina.find({obra:obra.id}).exec(function(err,maquinas){
					if(err){
						res.status(500).send({error: err});
					}
					var cantMaq = maquinas.length;
					Obra.update(obra, {cantidadMaquinas:cantMaq}).exec(function(err){
						if(err){
							res.status(500).send({error: err});
						}
					});
				});
			});
			res.view('pages/listaObras', {obras:obras});
		});
		
	},
	add:function(req,res){
		res.view('pages/nuevaObra');
	},
	create:function(req,res){
		var codigo = String(req.body.codigo);
		var nombre = String(req.body.nombre);
		var provincia = String(req.body.provincia);
		var localidad = String(req.body.localidad);
		var fechaInicio = String(req.body.fechaInicio);
		var fechaFin = String(req.body.fechaFin);
		var observaciones = String(req.body.observaciones);

		Obra.create({ 
			provincia:provincia,
			localidad:localidad,
			fechaInicio:fechaInicio,
			fechaFin:fechaFin,
			observaciones:observaciones, codigo:codigo,
			nombre:nombre,

		}).exec(function(err){
			if(err){
				res.send(500, {error: err});
			}

			res.redirect('/obra/lista');
		});
	},
	delete:function(req,res){
		Obra.destroy({id:req.param('id')}).exec(function(err){
			if(err){
				res.send(500, {error: err});
			}

			res.redirect('/obra/lista');
		});
		return false;
	},
	agregar:function(req,res){
		var obraID = String(req.param('idObra'));
		var maquinaID = String(req.param('idMaquina'));
		var codigoTaller = "T01";

		Maquina.findOne({id:maquinaID}).exec(function(err,maquina){
			if(err){
				res.send(500, {error: err});
			}
			Maquina.update(maquina, {obra:obraID}).exec(function(err){
				if(err){
					res.send(500, {error: err});
				}
				res.redirect('/obra/ver/' + obraID);
			});
		});
	},

	quitar:function(req,res){
		var obraID = req.param('idObra');
		var maquinaID = req.param('idMaquina');
		var codigoTaller = "T01";

		Obra.findOne({codigo:codigoTaller}).exec(function(err,obra){
			if(err){
				res.send(500, {error: err});
			}
			Maquina.findOne({id:maquinaID}).exec(function(err, maquina){
				if(err){
					res.send(500, {error: err});
				}
				Maquina.update(maquina, {obra:obra.id}).exec(function(err){
					if(err){
						res.send(500, {error: err});
					}
					res.redirect('/obra/ver/' + obraID);
				});
			});
		});
	},

	ver:function(req,res){
		var obraID = req.param('id');
		Obra.findOne({id:obraID}).exec(function(err,obra){
			if(err){
				res.send(500, {error: err});
			}
			Maquina.find({obra:obraID}).exec(function(err, maquinasObra){
				if(err){
					res.send(500, {error: err});
				}
				var cantidadMaquinas = maquinasObra.length;

				Maquina.find({}).exec(function(err, todasMaquinas){
					if(err){
						res.send(500, {error: err});
					}
					
					res.view('pages/verObra', {obra:obra, maquinasObra:maquinasObra, todasMaquinas:todasMaquinas, cantidadMaquinas:cantidadMaquinas});
				});
			});
		});
	},

	updateName:function(req,res){
		var obraID = req.param('id');
		var name = req.param('name');
		Obra.findOne({id:obraID}).exec(function(err,obra){
			if(err){
				res.send(500, {error: err});
			}
			Obra.update(obra, {nombre:name}).exec(function(err){
				if(err){
					res.send(500, {error: err});
				}	
				res.redirect('/obra/ver/' + obraID);
			});
		});
	},

};

