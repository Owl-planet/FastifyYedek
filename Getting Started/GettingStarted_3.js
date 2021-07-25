// Require the framework and instantiate it
const fastify = require('fastify')({
  logger: true // Logları görünür hale getir.
})

// Declare a route
fastify.get('/', function (request, reply) {
  reply.send({ hello: 'world' }) // "/" adresine bir tane obje gönder.
})

// Run the server!
fastify.listen(3000, '0.0.0.0', function (err, address) { //  Tüm IPv4 arayüzlerini dinlemek için kullanılır.
  if (err) { // Eğer error var ise
    fastify.log.error(err) // Konsola dönen error'u yazdır
    process.exit(1) // Çık
  }
  fastify.log.info(`server listening on ${address}`) // Konsole bir info gönder, hangi servere bağlandığını açıklayan bir yazı.
})