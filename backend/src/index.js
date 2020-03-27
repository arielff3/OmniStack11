const express = require('express');
const cors = require('cors');
const routes = require('./routes');
const app = express();
/* 
  Rota/ Recurso
*/

/**
 * Métodos HTTP
 * 
 * GET: Buscar uma informaçao do back-end
 * POST: Criar uma informaçao no back-end
 * PUT: Alterar uma informaçao no back-end
 * DELETE: Excluir uma informaçao no back-end
 */

 /**
  * Tipos de perametros
  * 
  * Query Params: Parametros nomeados enviados na rota após "?" (Filtros, paginaçao) - acesso: req.query
  * Route Params: Parametros utilizados para identificar recursos - acesso: req.params
  * Requeste Body: Corpo da requisiçao, utilizado para criar ou alterar recursos
  */

  /**
   * SQL: MySql, SQLite, PostgresSQL, Oracle, Microsoft SQL Server
   * NoSQL: MongoDB, CouchDB, etc
   */

   /**
    * Driver: SELECT * FROM users
    * Query Builder: table('users').select('*').where()
    */

    /**
     * where: Buscar um item especifico no db
     */
app.use(cors());
app.use(express.json());
app.use(routes) ;

app.listen(3333);