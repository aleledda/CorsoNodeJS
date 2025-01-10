const { readFileSync, writeFileSync } = require("fs")

//leggo un file
const readFile_ = readFileSync('./File1.txt', 'utf8')
console.log(readFile_)


// scrittura di un file, se il file non esiste lko crea come in c
const a = "prova scrittura"
writeFileSync("File2.txt", a)

//appendere al file
writeFileSync("File2.txt", "appendo questo", { flag: 'a' })

//approccio asincrono
const { readFile, writeFile } = require("fs")

// si usano le callback 3 parametro (error, result) quando termina da un risultato come le promise
readFile('./File1.txt', 'utf8', (error, result) => {
    if (error) {
        console.log(error)
        return
    }
    else
        var app = result;

    // voglio scrivere nel file al termine della lettura
    writeFile('File3.txt', app, { flag: 'a' }, (error, result) => {
        if (error) {
            console.log(error)
            return
        }
        else
            console.log("File scrittto correttamente")
    })


})

