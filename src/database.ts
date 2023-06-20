import { knex as setupKnex } from "knex";//Ver documentação do KNEX

export const config = {
  client: 'sqlite',//Informa o banco de dados
    connection: {
      filename: './tmp/app.db'//Pega esse caminho a partir da raiz do projeto
  },
  useNullAsDefault:true
}

export const knex = setupKnex(config)