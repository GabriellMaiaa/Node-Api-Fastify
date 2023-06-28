import 'dotenv/config'// Importando a dotenv, ela basicamente lê as variáveis globais e as joga aqui
//process.env
import {z} from 'zod'

const envSchema = z.object({// Abre um objeto pois process.env.DATABASE_URL está acessando um obj
  NODE_ENV: z.enum(['development', 'test', 'production']),
  DATABASE_URL: z.string(),
  PORT: z.number().default(3333)
})

const _env = envSchema.safeParse(process.env)

if(_env.success === false) {
  console.error('Invalid enviroment variables')

  throw new Error('Invalid enviroment variables') 
}
export const env = _env.data