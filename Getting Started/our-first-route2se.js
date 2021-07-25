async function routes (fastify, options) { // routes adında async bir fonksiyon oluşturur ve 2 parametre alır, içinde routesler vardır.
  const collection = fastify.mongo.db.collection('test_collection')
  // collection adında bir değişken içinde mongo db
  // içindeki test_collection'a bağlanmasını istemiş.
  fastify.get('/', async (request, reply) => { // '/' gelen isteğe bir obje return etmesini söylemiş.
    return { hello: 'world' }
  })

  fastify.get('/animals', async (request, reply) => { // '/animals' adresine istek func-body'i çalıştır.
    const result = await collection.find().toArray() // result adında bir değişken içinde collection içinde'ki tüm değerleri bulmasını istemiş.
    // ve sonra bunu arraya dönüştürmesini istemiş.
    if (result.length === 0) {
      // eğer dönen değer 0'a eşitse, yani bağlanamadıysa veya içi boş
      //ise "No documents found" bilgisini return etmesini istemiş.
      throw new Error('No documents found')
    }
    return result
    // Sorun yoksa result değerini ekrana return etmesini istemiş.
  })

  fastify.get('/animals/:animal', async (request, reply) => { // 'animals/:yorum' adresine bir yorum gelmesini istiyor.
    const result = await collection.findOne({ animal: request.params.animal }) // result değişkeni gelen yorum değerini collection içinde aratır.
    if (result === null) { // eğer yoksa Invalid value der.
      throw new Error('Invalid value')
    }
    return result // varsa return eder.
  })
}

module.exports = routes // routes fonksiyonunu export et.