const fastifyPlugin = require('fastify-plugin') // fastify-plugin kütüphanesini dosyaya require et.

async function dbConnector (fastify, options) { // dbConnector adında async bir fonksiyon yap ve 2 parametre al.
  fastify.register(require('fastify-mongodb'), { // 4. satıra, fonksiyonun içinde fastify-mongodb kütüphanesini require et ve parametre gönder.
    forceClose: true, // Uygulama durduğunda mongodb bağlantısı kesilsin.
    url: 'mongodb://localhost:27017/test_database' // Bağanacağı database.
  })
}

// Wrapping a plugin function with fastify-plugin exposes the decorators    
// and hooks, declared inside the plugin to the parent scope.
module.exports = fastifyPlugin(dbConnector) // fastifyPlugin özelliği ile dbConnector fonksiyonunu dışarıdan kullanmak için export ediyoruz.