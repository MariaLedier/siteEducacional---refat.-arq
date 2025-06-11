const express = require('express');
const alunoControl = require('../controller/alunoControl');
const AuthMiddleware = require('../middlewares/authMiddleware');

const router = express.Router();

let ctrl = new alunoControl();
let auth = new AuthMiddleware();

router.get('/cadastrar',auth.validar, ctrl.viewCadastroAluno)
router.post('/cadastrar', auth.validar, ctrl.cadastrarAluno)
router.post('/excluir',auth.validar,ctrl.excluir)
router.get('/', auth.validar, ctrl.home);
router.get('/listar', auth.validar, ctrl.listarAlunos);


module.exports = router;