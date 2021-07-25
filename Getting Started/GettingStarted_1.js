// Require the framework and instantiate it
const fastify = require('fastify')({
  logger: true // Logları görünür hale getir.
})

// Declare a route
fastify.get('/', function (request, reply) {
  reply.send({ hello: 'world' }) // "/" adresine bir tane obje gönder.
})

// Run the server!
fastify.listen(3000, function (err, address) { // http://127.0.0.1/3000
  if (err) {
    fastify.log.error(err) // Hata olursa log'a error'u döndür.
    process.exit(1) // Çık
  }
  fastify.log.info(`server listening on ${address}`) // Callback fonksiyondan gelen addressi buraya yazdırarak gerekli bilgileri alabiliriz.
})