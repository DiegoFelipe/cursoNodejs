var fs = require('fs')

fs.writeFile('data.txt', 'Hello world', err => { if(err) return err })
fs.readFile('data.txt', (error, data) => {
    if (error) {
        return error
    } else {
        console.log(data.toString('utf-8'))
    }
})
fs.readdir('.', (errors, files) => {
    if (errors)
        return errors
    for (var file in files) 
        console.log(files[file])    
})
