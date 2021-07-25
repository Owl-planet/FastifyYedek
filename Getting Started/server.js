const fastify = require('fastify')({ // Fastify kütüphanesini require ediyoruz.
  logger: true // Logların görünmesi için True diyoruz.
})

fastify.register(require('./our-db-connector')) // Our-db-connector.js dosyasını 5. satıra register ediyoruz.
fastify.register(require('./our-first-route')) // Our-first-route.js dosyasını 6. satıra register ediyoruz.

fastify.listen(3000, function (err, address) { // 3000 portunu dinlemesini ve callback yaparak 2 parametre almasını istiyoruz.
  if (err) { // Eğer error varsa.
    fastify.log.error(err) // error log olarak err'i döndür.
    process.exit(1) // Çık.
  }
  fastify.log.info(`server listening on ${address}`) // Log kısmına server durumu ile alakalı bilgi vermesi için fastify.log.info() diyoruz.
})