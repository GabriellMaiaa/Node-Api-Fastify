import 'dotenv/config'//Vai ler o arquivo o arquivo .env, e ler a var global process.env
import { knex as setupKnex, Knex } from "knex";//Ver documentação do KNEX
import { env } from './env';
//var global process.env

if(!process.env.DATABASE_URL){
  throw new Error('DATABASE_URL env not found')
}

export const config: Knex.Config = {
  client: 'sqlite',//Informa o banco de dados
    connection: {
      filename: env.DATABASE_URL//Pega esse caminho a partir da pasta env com a const
  },
  useNullAsDefault:true,// Para os campos terem valor nulo
  migrations: {
    extension: 'ts',
    directory: './db/migrations'
  }
}

export const knex = setupKnex(config)