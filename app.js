const http = require('http');

const server = http.createServer((req,res) =>{
    if(req.url==='/') {
        res.end('hello this is the main page')
    }

    if(req.url === '/about') {
        res.end('this is about page')
    }

    else {
    res.end('Oops! stop being a dumb bitch and write the right url hoe.')

    }

})

server.listen(5000)