const http = require("http")

const server = http.createServer((req,res)=>{
    res.writeHead(200,{
        "content-type":"text/html"
    });
    res.write(`<html>
        <head>
        <title>Node server</title>
        </head>
        <body>
        <h1>Hi this is node server!</h1>
        <h2> server code</h2>
        </body>
        </html>`);
    res.end();
});

server.listen(3002,()=>{
    console.log("server is running on http://localhost:3002");
})