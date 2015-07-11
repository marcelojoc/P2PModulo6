var express = require('express');
var router = express.Router();
var quiz_controller= require('../controllers/quiz_controller');

/* GET home page. */
router.get('/', function(req, res) {
  res.render('index', { title: 'Quiz' });
});

router.get('/question',quiz_controller.question);
router.get('/answer',quiz_controller.answer);
//  ruta para pagian de autor
router.get('/autor',quiz_controller.autor);

module.exports = router;
