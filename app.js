const http = require('http');
const fs = require('fs')

const server = http.createServer((req, res)=>{
    if (req.url === '/'){
        res.status = 200
        res.setHeader('content-Type','text/html')
        fs.ReadStream('index.html').pipe(res)

    }else if (req.url === "/about"){
        res.status = 200
        res.setHeader('content-Type','text/html')
        fs.ReadStream('about.html').pipe(res)

    }else if (req.url === "/contact-me"){
        res.status = 200
        res.setHeader('content-Type','text/html')
        fs.ReadStream('contact-me.html').pipe(res)
    }else{
        res.status = 200
        res.setHeader('content-Type','text/html')
        fs.ReadStream('404.html').pipe(res)
    }
  
})

server.listen(3000,()=>{
    console.log("Server is running")
})