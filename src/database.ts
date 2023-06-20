import { knex as setupKnex, Knex } from "knex";//Ver documentação do KNEX

export const config: Knex.Config = {
  client: 'sqlite',//Informa o banco de dados
    connection: {
      filename: './db/app.db'//Pega esse caminho a partir da raiz do projeto
  },
  useNullAsDefault:true,// Para os campos terem valor nulo
  migrations: {
    extension: 'ts',
    directory: './db/migrations'
  }
}

export const knex = setupKnex(config)