import { knex as setupKnex } from "knex";//Ver docuemntação do KNEX

export const knex = setupKnex({
  client: 'sqlite',
    connection: {
      filename: './tmp/app.db'
  }
})