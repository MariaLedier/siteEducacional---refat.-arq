
const AlunoModel = require('../models/alunoModel.js');
const SerieModel = require('../models/serieModel.js')

class AlunoControl {



  async listarAlunos(req, res) {
    let alunos = new AlunoModel();
    let listaAlunos = await alunos.listar();
    let series = new SerieModel();
    let listaSeries = await series.listar();
    res.render('seeds/alunos.ejs', {
      layout: './layouts/layoutSeeds.ejs',
      listaAlunos,
      listaSeries
    });
  }

  // INSERT DE ALUNOS
  async cadastrarAluno(req, res) {

    if (
      req.body.aluno_RA &&
      req.body.aluno_nome &&
      req.body.aluno_CPF &&
      req.body.aluno_nasc &&
      req.body.aluno_senha
    ) {
      const alunoModel = new AlunoModel();


      const alunoExistente = await alunoModel.obterPor(req.body.aluno_RA);

      if (!alunoExistente) {

        alunoModel.aluno_RA = req.body.aluno_RA;
        alunoModel.aluno_nome = req.body.aluno_nome;
        alunoModel.aluno_CPF = req.body.aluno_CPF;
        alunoModel.aluno_nasc = req.body.aluno_nasc;
        alunoModel.aluno_fone = req.body.aluno_fone || null;
        alunoModel.aluno_email = req.body.aluno_email || null;
        alunoModel.aluno_mae = req.body.aluno_mae || null;
        alunoModel.aluno_pai = req.body.aluno_pai || null;
        alunoModel.aluno_respCPF = req.body.aluno_respCPF || null;
        alunoModel.aluno_endereco = req.body.aluno_endereco || null;
        alunoModel.aluno_senha = req.body.aluno_senha;

        const cadastrado = await alunoModel.cadastrar();

        if (cadastrado) {
          res.send({ ok: true });
        } else {
          res.send({ ok: false, msg: "Erro ao cadastrar o aluno no banco de dados!" });
        }
      } else {
        res.send({ ok: false, msg: "Aluno já existente (RA duplicado)." });
      }
    } else {
      res.send({ ok: false, msg: "Preencha todos os campos obrigatórios corretamente!" });
    }
  }


  

  //deleção
  async excluir(req, res) {
  const ra = req.body.aluno_RA;
  if (ra) {
    const aluno = new AlunoModel();
    const sucesso = await aluno.excluirPorRA(ra);
    res.send({
      ok: sucesso,
      msg: sucesso ? "Aluno excluído com sucesso!" : "Erro ao excluir aluno!"
    });
  } else {
    res.send({ ok: false, msg: "RA inválido para exclusão!" });
  }
}



  //alteração

}

module.exports = AlunoControl;