const server = require('./server')
const http = require('http')

const servidor = http.createServer(server)

servidor.listen(3300, () => {
    console.log('Escutando na porta 3300')
})


