import fastify from 'fastify'
import { knex } from './database'
import crypto from 'node:crypto'//Extensão interna do node

const app = fastify();

app.get('/hello', async () => {
  const transactions = await knex('transactions').insert({
    id: crypto.randomUUID(),//crypto gera um id aleatório
    title: 'Transação de teste',
    amount:1000
  })
  .returning('*')//Para mostrar que tudo da query deve ser retornado
  
  return transactions
})

app
  .listen({
    // O listen retorna uma promise, por isso precisa do Then
    port: 3333,
  })
  .then(() => {
    console.log('Http server is running')
  })
