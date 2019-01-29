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
		var obraId = req.param('idObra');
		Maquina.findOne({id:req.param('idMaquina')}).exec(function(err,maquina){
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
				res.redirect('/obra/ver/' + obraId);
			});
		});
	},

	verHojaDatos:function(req,res){
		Maquina.findOne({id:req.param('id')}).exec(function(err,maquina){
			if(err){
				res.send(500, {error: err});
			}
			Pieza.find({}).exec(function(err, piezas){
				if(err){
					res.send(500, {error: err});
				}
				res.view('pages/hojaDatosMaquina', {maquina:maquina, piezas:piezas});
			});
		});
	},

	cargarHojaDatos:function(req,res){
		var codFAire1 = String(req.body.codFAire1);
		var codFAire2 = String(req.body.codFAire2);
		var codFComb1 = String(req.body.codFComb1);
		var codFComb2 = String(req.body.codFComb2);
		var codFComb3 = String(req.body.codFComb3);
		var codFComb4 = String(req.body.codFComb4);
		var codFAceiteMotor = String(req.body.codFAceiteMotor);
		var codFAceiteHid1 = String(req.body.codFAceiteHid1);
		var codFAceiteHid2 = String(req.body.codFAceiteHid2);

		var codAceiteMotor = String(req.body.codAceiteMotor);
		var codAceiteHid = String(req.body.codAceiteHid);
		var codAceiteTrans = String(req.body.codAceiteTrans);
		var codAceiteDif = String(req.body.codAceiteDif);
		var codAceiteMandoFinal = String(req.body.codAceiteMandoFinal);

		var cantAceiteMotor = Number(req.body.cantAceiteMotor);
		var cantAceiteHid = Number(req.body.cantAceiteHid);
		var cantAceiteTrans = Number(req.body.cantAceiteTrans);
		var cantAceiteDif = Number(req.body.cantAceiteDif);
		var cantAceiteMandoFinal = Number(req.body.cantAceiteMandoFinal);

		var codLiqRefrigerante = String(req.body.codLiqRefrigerante);
		var codLiqFreno = String(req.body.codLiqFreno);

		var cantLiqRefrigerante = Number(req.body.cantLiqRefrigerante);
		var cantLiqFreno = Number(req.body.cantLiqFreno);

		Maquina.findOne({id:req.param('id')}).exec(function(err,maquina){
			if(err){
				res.send(500, {error: err});
			}
			Maquina.update(maquina, {codFAire1:codFAire1, codFAire2:codFAire2, codFComb1:codFComb1, codFComb2:codFComb2,
				codFComb3:codFComb3, codFComb4:codFComb4, codFAceiteMotor:codFAceiteMotor,
				codFAceiteHid1:codFAceiteHid1, codFAceiteHid2:codFAceiteHid2,
				codAceiteMotor:codAceiteMotor, codAceiteHid:codAceiteHid, codAceiteTrans:codAceiteTrans,
				codAceiteDif:codAceiteDif, codAceiteMandoFinal:codAceiteMandoFinal, codLiqRefrigerante:codLiqRefrigerante,
				codLiqFreno:codLiqFreno, cantAceiteMotor:cantAceiteMotor, cantAceiteHid:cantAceiteHid, cantAceiteTrans:cantAceiteTrans,
				cantAceiteDif:cantAceiteDif, cantAceiteMandoFinal:cantAceiteMandoFinal, cantLiqRefrigerante:cantLiqRefrigerante,
				cantLiqFreno:cantLiqFreno}).exec(function(err){
					if(err){
						res.send(500, {error: err});
					}
					res.redirect('/maquina/ver/' + req.param('id') + '/');
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
					Reparacion.find({maquina:req.param('id')}).exec(function(err,reparaciones){
						if(err){
							res.send(500, {error: err});
						}
						Obra.findOne({id:maquina.obra}).exec(function(err,obra){
							if(err){
								res.send(500, {error: err});
							}
							res.view('pages/verMaquina', {maquina:maquina, mantenimientos:mantenimientos, piezas:piezas, obra:obra, reparaciones:reparaciones});
						});
					});
				});
			});
			
		});
	},

};

