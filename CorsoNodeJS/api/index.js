// express è la base di un backend basato su node
// si puo fare anche senza ma ci facilita il lavoro

const express = require('express')
const app = express()

// per i seguenti path fornisci una risposta
app.get("/", function (req, res) {
    res.send('Hello World')
})
app.get('/about', function  (req, res) {
    res.send('<h1>About</h1>')
})
app.get('/contatti', function  (req, res) {
    res.send('<h1>Contatti</h1>')
})

app.get('*', function (req, res) {
    res.send('<h1>  Errore, 404 pagina non trovata</h1>')
})


app.listen(3000)
