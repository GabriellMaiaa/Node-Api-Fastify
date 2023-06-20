import fastify from 'fastify'
import { knex } from './database'

const app = fastify();

app.get('/hello', async () => {
  const tables = await knex('sqlite_schema').select('*');

  return tables
})

app
  .listen({
    // O listen retorna uma promise, por isso precisa do Then
    port: 3333,
  })
  .then(() => {
    console.log('Http server is running')
  })
