import 'dotenv/config'// Importando a dotenv, ela basicamente lê as variáveis globais e as joga aqui
//process.env
import {z} from 'zod'

const envSchema = z.object({
  DATABASE_URL: z.string
})