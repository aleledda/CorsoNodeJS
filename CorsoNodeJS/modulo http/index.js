const http = require("http")

//simulo il routing like react
//sistema di instradamento richieste http
const server = http.createServer((req, res) => {
    if (req.url === "/")
        res.end("Benevnuto!")
    if (req.url === "/profilo") {
        res.end("<p>profilo tuo</p>")
    }
    res.end(`<h1>error pagina non trovata</h1>
    <p>Torna alla home <a href='/'>prova</a> </p>`)
})

server.listen(3000)

// la pagina è disponibile a localhost:3000 fino a che il server è in listen