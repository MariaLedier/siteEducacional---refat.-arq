const SerieModel = require("../models/serieModel");

class ProfessorControl {

  async listarSeries(req, res) {
    let series = new SerieModel();
    let listaSeries = series.listar();
    res.render('seeds/professor/series.ejs', {
      layout: './layouts/layoutSeeds.ejs',
      listaSeries: listaSeries
    });
  }


  async home(req, res) {
    res.render('seeds/alunos.ejs', {
      layout: './layouts/layoutSeeds.ejs',
    });
  }

  async viewCadastroAluno(req, res) {
    res.render('seeds/professor/cadastrarAluno.ejs', {
      layout: './layouts/layoutSeeds.ejs'
    })
  }
  
} module.exports = ProfessorControl;


