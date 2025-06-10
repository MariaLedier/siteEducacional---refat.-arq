
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

  //INSERT DE ALUNOS
  async insertAluno(req,res){

  }

  //deleção

  //alteração

}

module.exports = AlunoControl;