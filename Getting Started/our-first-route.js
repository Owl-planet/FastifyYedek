async function routes (fastify, options) { // Routes adında async bir fonksiyon oluştur ve 2 parametre altsın 1. fastify 2. options
  fastify.get('/', async (request, reply) => { // '/' adresini dinlemesini ve obje return etmesini istedik, 2 parametre alıyor.
    return { hello: 'world' }
  })
}

module.exports = routes // Modülü dışardan erişim için export ediyoruz.