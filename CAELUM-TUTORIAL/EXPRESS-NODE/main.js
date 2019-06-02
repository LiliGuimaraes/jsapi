const express = require('express')
const server = express()

server.get('/', (req, res) => {
    res.send('<h1> HOME </h1>')

})

server.get('/contato', (req, res) => {
    res.send(`
    <h1>Contato</h1>
    <form action="/contato" method="POST">
      <label for="email">Email:</label>
      <input type="email" name="email" id="email">
      <label for="mensagem">Mensagem:</label>
      <textarea name="mensagem" id="mensagem"></textarea>
      <input type="submit" value="Enviar">
    </form>
    `)
})

server.post('/contato', (req, res) => {
    res.send('Function')
})

server.listen(3001, () => {
    console.log('Servidor disponível em http://3001')
    console.log('Para desligar o servidor: ctrl + c')
})
