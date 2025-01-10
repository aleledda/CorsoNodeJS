// moduli
function saluta(nome) {
    console.log('ciao '+ nome)
}
module.exports = saluta

// uso il modulo built-in os
const os = require("os")

//informazioni utente
console.log("informazioni: "+ os.userInfo())
// tempo accensione terminale
console.log("tempo pc acceso: "+os.uptime())
// sistema operativo
console.log("os" + os.arch())

// oggetto informazioni macchina
const pc = {
    name: os.type(),
    release: os.release(),
    memoria: os.totalmem(),
    disponibile: os.freemem()
}
console.log(pc)


//modulo path
const path = require("path")

console.log("carattere separatore: " + path.sep)
console.log(path.join("/cartella/", "sottocartella/", __filename))

/**
 * Durante un require se in un modulo la funzione viene richiamata quindi eseguita, (esempio saluta())
 * la funzione verrà esegita due volte attento alle chiamate
 */