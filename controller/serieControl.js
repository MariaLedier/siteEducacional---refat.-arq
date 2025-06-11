const SerieModel = require("../models/serieModel")

class SerieControl {

  async listar(req, res) {
    let series = new SerieModel();
    let listaSeries = await series.listar();

    res.render('seeds/serie/listaSerie.ejs', {
      layout: './layouts/layoutSeeds.ejs',
      listaSeries: listaSeries,
    });
  }
  
} module.exports = SerieControl;

