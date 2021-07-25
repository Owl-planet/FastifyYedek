const fastify = require('fastify')({
  logger: true
})

fastify.get('/', async (request, reply) => { // async
  return { hello: 'world' } // Obje return et
})

const start = async () => {
  try {
    await fastify.listen(3000) // Serveri dinlemeyi bekle.
  } catch (err) {
    fastify.log.error(err) // Error'u yazdır, hangi error'u ? Catch'den dönen err'i.
    process.exit(1) // Çık
  }
}
start() // Çalıştır