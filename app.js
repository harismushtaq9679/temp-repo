// HTTP MODULE - BUILT-IN - REQUIRES EXPRESS.JS MODULES

const http = require('http')

const server = http.createServer( ( req, res ) => {
    res.write('Welcome to the hompage')
    res.end
})

server.listen(3000)