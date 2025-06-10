class DisciplinaControl {
   
  async discipinaInfo(req, res) {
    // renderiza info das disciplinas + atividades já existentes
    const { disciplinaId, serieId } = req.params;

    let disciplinas = new DisciplinaModel();
    let listaDisciplinas = await disciplinas.obter(disciplinaId);
    let series = new SerieModel();
    let listaSeries = await series.listar();
    let atividades = new AtividadeProfessorModel();
    let listaAtividades = await atividades.listarAtividadesPor(
      disciplinaId,
      serieId
    );
    res.render('seeds/disciplina.ejs', {
      layout: './layouts/layoutSeeds.ejs',
      listaDisciplinas,
      listaSeries,
      listaAtividades,
    });
  }
  

  //inserção

  //deleção

  //alteração

}

module.exports = DisciplinaControl;  
  
  
  
  
 