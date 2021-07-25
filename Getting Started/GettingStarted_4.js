const fastify = require('fastify')({ // Fastify kütüphanesini import et.
  logger: true // Logları aç.
})

fastify.register(require('./our-first-route')) // Fastifye our-first-route.js dosyasını ekle
// In this example, we used the register API, which is the core of the Fastify framework. It is the only way to add routes, plugins, et cetera.

fastify.listen(3000, function (err, address) {
  if (err) {
    fastify.log.error(err)
    process.exit(1)
  }
  fastify.log.info(`server listening on ${address}`)
})