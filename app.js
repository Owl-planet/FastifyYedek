const logger = require('pino')()

const fastify = require('fastify')({
  pluginTimeout: 5000, // eklentinin yüklenebileceği maximum süre
  ignoreTrailingSlash: true, // Rotalarda sondaki eğik çizgileri yok saymak için true olarak ayarlanabilir.
  maxParamLength: 10, // Max parametre uzunluğu 10.
  caseSensitive: false, // /user/istersek boyle /USer/istersekde boyle
  logger: 'serializers' // serileştiriciler: serileştirme işlevlerinin bir karması. Varsayılan olarak, req (gelen istek nesneleri), 
  //res(giden yanıt nesneleri) ve err(standart Hata nesneleri) için serileştiriciler eklenir.
  //Bir günlük yöntemi, bu özelliklerden herhangi birine sahip bir nesne aldığında, o özellik için 
  //ilgili serileştirici kullanılacaktır.Örneğin:
  /*
  fastify.get('/foo', function (req, res) {
    req.log.info({req}) // log the serialized request object
    res.send('foo')
  })
  */
  //logger:{level:20}
})

// registers both "/foo" and "/foo/"
fastify.get('/foo/:asd', function (req, reply) {
  reply.send('foo')
})


fastify.get('/user/:username', (request, reply) => {
  // Given the URL: /USER/NodeJS
  console.log(request.params.username) // -> 'NodeJS'
})

logger.info('hello world')

const child = logger.child({ a: 'property' })
child.info('hello child!')

// registers both "/bar" and "/bar/"
fastify.get('/bar', function (req, reply) {
  reply.send('bar')
})

fastify.listen(3000, function (err, address) {
  if (err) {
    fastify.log.error(err)
    process.exit(1)
  }
  fastify.log.info(`server listening on ${address}`)
})