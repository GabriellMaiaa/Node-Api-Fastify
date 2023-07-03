import { FastifyInstance } from "fastify"
import {z} from 'zod'
import { knex } from "../database"
import { randomUUID } from "crypto"

export async function transactionsRoutes(app: FastifyInstance) {//Td Plugin dentro do Fastify precisa ser ASSÍNCRONO
   app.post('/', async (req, res) => {
      //Quero que busque o title, amount, type: credit or debit

      const createTransactionSchema = z.object({
        title: z.string(),
        amount: z.number(),
        type: z.enum(['credit', 'debit'])
      })

      const{ title, amount, type } = createTransactionSchema.parse(
        req.body
      )
        
      await knex('transaction').insert({
        id: randomUUID(),
        title,
        amount: type === 'credit' ? amount : amount * -1
      })
      return res.status(201).send()//TODO FINAL DE REQUISIÇÃO PRECISA TER O STATUS DA REQ
  })
}