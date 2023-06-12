import fastify from "fastify";

const app = fastify();

app.get('/hello', () => {
  return 'Hello World!'
})

app.listen({ // O listen retorna uma promise, por isso precisa do Then
  port: 3333,
}).then(() => {
  console.log('Http server is running')
})