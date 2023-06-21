
/* ---- LOCAL DECLARATIONS ---- */

const express = require('express')                      // CALLING EXPRESS JS
const fs = require("fs")                                // CALLING BUILT IN NODE MODULE FS
const http = require("http")
const port = 3000                                       // DECLARING PORT
const home = fs.readFileSync("./home.html", "utf-8")    // DECLARING SYNCRONOUS FUNCTION AS A VARIABLE HOME
const host = "localHost"
const about = fs.readFileSync("./about.html", "utf-8")
const contact = fs.readFileSync("./contact.html", "utf-8")
const error = fs.readFileSync("./error.html", "utf-8")


const server = http.createServer((req, res) => {
    if (req.url === "/")  {
        return res.end(home);
    }
    if (req.url === "/about")  {
        return res.end(about);
    }
    if (req.url === "/contact")  {
        return res.end(contact);
    }
    else {
        return res.end(error)
    }
});

server.listen(port, host, ()=>  {
    console.log(`Server is working on http://${host}:${port}`)
});