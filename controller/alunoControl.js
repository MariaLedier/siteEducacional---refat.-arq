class AlunoControl {
  home(req, res) {
    res.render('seeds/alunos.ejs', { layout: './layouts/layoutSeeds.ejs' });
  }

  async listarAlunos(req, res) {
    let alunos = new AlunoModel();
    let listaAlunos = await alunos.listar();
    let series = new SerieModel();
    let listaSeries = await series.listar();
    res.render('seeds/alunos.ejs', {
      layout: './layouts/layoutSeeds.ejs',
      listaAlunos: listaAlunos,
      listaSeries: listaSeries,
    });
  }

  //INSERT DE ALUNOS
  async insertAluno(req,res){

  }

  //deleção

  //alteração

}

module.exports = AlunoControl;