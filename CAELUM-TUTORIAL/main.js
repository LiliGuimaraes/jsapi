const http = require('http')
const server = http.createServer((req, res) => {
    // create one response constant
    const resp = []
    resp['/'] = '<h1>Foi<h1/>'
    resp['/contato'] = '<h1>Contato<h1/>'
    resp[''] = '<h1>Sem rota URL<h1/>'

    /* if (req.url == '/') {
        res.end('<h1>Foi<h1/>')
    }
    if (req.url == '/contato') {
        res.end('<h1>Contato<h1/>')
    } */

    // simplify the if structure, check the rote
    res.end(resp[req.url] || resp[''])
})
server.listen(3001, 'localhost', () => {
    console.log('Servidor de pé em: http://localhost:3001')
    console.log('Pra derrubar o nosso servidor: ctrl + c')
})