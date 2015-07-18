var path = require('path');

//cargar sequialize
var Sequelize = require('sequelize');

var sequelize= new Sequelize(null,null,null,
								{dialect:"sqlite", storage: "quiz.sqlite"}
							  );
							  
// importo la definicion de la tabla Quiz

var Quiz = sequelize.import(path.join(__dirname, 'quiz'));

exports.Quiz=Quiz; // exportar la definicion de la tabla

sequelize.sync().then(function(){
		Quiz.count().then(function(count){
			if(count === 0){
				Quiz.create(
					{
						pregunta:'Cual es la capital de Italia?',
						respuesta: 'Roma'
					}
				).then(function(){
					console.log("Base de datos Creada");
					}); // cierro Quiz.create()
			};// cierro if
		}); // cierro  sequelize.count()
});	// cierro sequelize.sync()					  
