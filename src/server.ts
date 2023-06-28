import fastify from 'fastify'
import { env } from './env';
import { transactionsRoutes } from './routes/transactions';

const app = fastify();

app.register(transactionsRoutes)

app
  .listen({
    // O listen retorna uma promise, por isso precisa do Then
    port: env.PORT,// agora você importa normalmente como se fosse uma var
  })
  .then(() => {
    console.log('Http server is running')
  })
