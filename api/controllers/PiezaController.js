/**
 * PiezaController
 *
 * @description :: Server-side actions for handling incoming requests.
 * @help        :: See https://sailsjs.com/docs/concepts/actions
 */

module.exports = {
	lista:function(req, res){
		Pieza.find({}).exec(function(err, piezas){
			if(err){
				res.send(500, {error: 'Error en la base de datos'});
			}
			res.view('pages/listaRepuestos', {piezas:piezas});
		});
	},
	add:function(req,res){
		res.view('pages/nuevoRepuesto');
	},
	create:function(req,res){
		var repuesto = String(req.body.repuesto);
		var tipo = String(req.body.tipo);
		var marca = String(req.body.marca);
		var codigo = String(req.body.codigo);

		Pieza.create({repuesto:repuesto, tipo:tipo, marca:marca, codigo:codigo}).exec(function(err){
			if(err){
				res.send(500, {error: err});
			}

			res.redirect('/pieza/lista');
		});
	},
	delete:function(req,res){
		Pieza.destroy({id:req.param('id')}).exec(function(err){
			if(err){
				res.send(500, {error: err});
			}

			res.redirect('/pieza/lista');
		});
		return false;
	},
	agregar:function(req,res){
		Pieza.findOne({id:req.param('id')}).exec(function(err,pieza){
			if(err){
				res.send(500, {error: err});
			}
			var cantidad = Number(req.body.cant);
			if(cantidad < 0){
				cantidad = 0;
			}
			var oldCant = Number(pieza.cantidad);
			var newCant = Number(cantidad + oldCant);

			Pieza.update(pieza,{cantidad:newCant}).exec(function(err){
				if(err){
					res.send(500, {error: err});
				}
				res.redirect('/pieza/lista');
			});
		});
	}
};

