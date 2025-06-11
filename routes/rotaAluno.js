const express = require('express');
const alunoControl = require('../controller/alunoControl');
const AuthMiddleware = require('../middlewares/authMiddleware');

const router = express.Router();

let ctrl = new alunoControl();
let auth = new AuthMiddleware();

router.post('/cadastrar',auth.validar,ctrl.cadastrarAluno)
router.post('/excluir',auth.validar,ctrl.excluir)
// Rotas básicas do aluno
// router.get('/', auth.validar, ctrl.home);
// router.get('/atividades', auth.valaidar, ctrl.listagemAlunoDisciplina);
// router.get('/professores',auth.validar, ctrl.listagemProfessores);


module.exports = router;