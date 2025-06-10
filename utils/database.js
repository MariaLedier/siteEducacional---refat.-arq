const mysql = require('mysql2');

//respeitando o padrão de singleton

class Database {
  static #instancia;
  #conexao;

  constructor() {
    if (Database.#instancia) {
      return Database.#instancia;
    }

    this.#conexao = mysql.createPool({
      host: '132.226.245.178',
      database: 'PFS1_10442416278',
      user: '10442416278',
      password: '10442416278'
    });

    Database.#instancia = this;
  }


  get conexao() {
    return this.#conexao;
  }

  ExecutaComando(sql, valores) {      //para fazer select
    var cnn = this.#conexao;
    return new Promise(function (res, rej) {
      cnn.query(sql, valores, function (error, results, fields) {
        if (error) rej(error);
        else res(results);
      });
    });
  }

  ExecutaComandoNonQuery(sql, valores) {      //insert, update e delete
    var cnn = this.#conexao;
    return new Promise(function (res, rej) {
      cnn.query(sql, valores, function (error, results, fields) {
        if (error) rej(error);
        else res(results.affectedRows > 0);
      });
    });
  }
}

module.exports = Database;
