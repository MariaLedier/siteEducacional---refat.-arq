  
  class ProfessorControl
  {
     async listagemProfessores(req, res) {
    let alunoRA = req.session.usuario.userId;

    let alunoModel = new AlunoModel();
    let professoresDisciplinas = await alunoModel.listarProfessoresEDisciplinas(alunoRA);

    res.render('seeds/professores', {
      layout: './layouts/layoutSeeds',
      professoresDisciplinas: professoresDisciplinas
    });
  }
  } module.exports = ProfessorControl;
  
  
 