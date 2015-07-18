var models = require('../models/models.js');

// GET /quizes/question
exports.question = function(req, res) {
  models.Quiz.findAll().then(function(quiz) {
    res.render('quiz/question', { pregunta: quiz[0].pregunta});
  })
};

// GET /quizes/answer
exports.answer = function(req, res) {
  models.Quiz.findAll().then(function(quiz) {
    if (req.query.respuesta === quiz[0].respuesta) {
      res.render('quiz/answer', { respuesta: 'Correcto' });
    } else {
      res.render('quiz/answer', { respuesta: 'Incorrecto'});
    }
  })
};




//pagina de autor

exports.autor= function(req, res){
res.render('quiz/autor');
};
