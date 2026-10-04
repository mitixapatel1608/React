import http from "http";
import pages from "./pages.js";

const server = http.createServer((req,res)=>{
    if(req.url==="/"){
        res.writeHead(200,{"content-type":"text/html"});
        //res.write(pages.home())
        res.end(pages.home());
    }else if(req.url==="/about"){
        res.writeHead(200,{"content-type":"text/html"});
        res.end(pages.About());
    }else if(req.url==="/contact"){
        res.writeHead(200,{"content-type":"text/html"});
        res.end(pages.Contact());
    }else{
        res.writeHead(404,{"content-type":"text/html"});
        res.end(pages.nopage());
    }

});

const port = 3000;
server.listen(port,()=>{
    console.log(`server is running on http://localhost:${port}`)
})