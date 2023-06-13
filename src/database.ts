import { knex as setupKnex } from "knex";//Ver docuemntação do KNEX

export const config = {
  client: 'sqlite',
    connection: {
      filename: './tmp/app.db'
  },
  useNullAsDefault:true
}

export const knex = setupKnex(config)