npm i fastify-cli

Then, add the following lines to package.json:

{
"scripts": {
"start": "fastify start server.js"
}
}

// server.js
'use strict'

module.exports = async function (fastify, opts) {
fastify.get('/', async (request, reply) => {
return { hello: 'world' }
})
}

npm start
