const Eventemitter = require("events")

const customeEvent = new Eventemitter()

// registro un evento
customeEvent.on('messaggio', () => {
    console.log("sono partito")
})

// richiamo l'evento
customeEvent.emit('messagio')

// registro un evento
customeEvent.on('info', (nome, cognome, eta) => {
    console.log(`Ciao sono: ${nome} ${cognome} e ho ${eta} anni!`)
})

// richiamo l'evento
customeEvent.emit('info', 'alessandro', 'ledda', 26)