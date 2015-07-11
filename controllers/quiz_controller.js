exports.question= function(req, res){
res.render('quiz/question',{pregunta:'Capital de Italia',
							title: 'Quiz App'
							} );
};

exports.answer= function(req, res){
	if(req.query.respuesta ==='roma'){
		res.render('quiz/answer',{respuesta:'Correcto', title: 'Quiz App' });
	}else
	{
		res.render('quiz/answer',{respuesta:'Incorrecto', title: 'Quiz App'});
	}
};


//pagina de autor

exports.autor= function(req, res){
res.render('quiz/autor');
};
