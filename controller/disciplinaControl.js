const DisciplinaModel = require('../models/disciplinaModel.js');

class DisciplinaControl {
   
  async listar(req, res) {
    let disciplinas = new DisciplinaModel();
    let listaDisciplinas = await disciplinas.listar();

    res.render('seeds/disciplina/listaDisciplina.ejs', {
      layout: './layouts/layoutSeeds.ejs',
      listaDisciplinas : listaDisciplinas,
    });
  }

}

module.exports = DisciplinaControl;  
  
  
  
  
 