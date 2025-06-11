const ProfessorModel = require("../models/professorModel");

class ProfessorControl {

  async listar(req, res){
    let professor = new ProfessorModel();
    let listaProfessores = professor.listar();
    res.render = ('seeds/professor/listaProfessor.ejs',{
      layout: './layouts/layoutSeeds.ejs',
      listaProfessores: listaProfessores
    });
  }

  home(req, res) {
    res.render('seeds/main.ejs', {
      layout: './layouts/layoutSeeds.ejs',
    });
  }
 
} module.exports = ProfessorControl;


