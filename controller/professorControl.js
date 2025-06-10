  

  class ProfessorControl
  {
  //    async listagemProfessores(req, res) {
  //   let alunoRA = req.session.usuario.userId;

  //   let alunoModel = new AlunoModel();
  //   let professoresDisciplinas = await alunoModel.listarProfessoresEDisciplinas(alunoRA);

  //   res.render('seeds/professores', {
  //     layout: './layouts/layoutSeeds',
  //     professoresDisciplinas: professoresDisciplinas
  //   });
  // }


    async home(req, res) {

    res.render('seeds/alunos.ejs', {
      layout: './layouts/layoutSeeds.ejs',

    });
  }

  //  async viewLista(req, res) {

  //   res.render('seeds/professor/alunos.ejs', {
  //     layout: './layouts/layoutSeeds.ejs',

  //   });
  // }


  async viewCadastroAluno(req,res){
    res.render('seeds/professor/cadastrarAluno.ejs',{
      layout: './layouts/layoutSeeds.ejs'})
  }
  } module.exports = ProfessorControl;
  
  
 