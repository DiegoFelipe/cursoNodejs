const server = (request, response) => {
    response.writeHead(200, {
        'Content-Type': 'text/html'
    })

    response.write('asdasdas')

    response.end()
}

module.exports = server