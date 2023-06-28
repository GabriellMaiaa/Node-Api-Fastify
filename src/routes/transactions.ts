import { FastifyInstance } from "fastify"
import { knex } from "../database"

export async function transactionsRoutes(app: FastifyInstance) {//Td Plugin dentro do Fastify precisa ser ASSÍNCRONO
  app.get('/hello', async () => {
    const transactions = await knex('transactions')
    .where('amount', 1000)
    .select('*')//Para mostrar que tudo da query deve ser retornado
    
    return transactions
  })
}