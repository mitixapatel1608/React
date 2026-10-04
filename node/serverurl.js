const http =require("http");

const server = http.createServer((req,res)=>{
    if(req.url==="/"){
        res.write("this is home page");
    }else if(req.url === "/about"){
        res.write("this is the about page");
    }else if(req.url ==="/students"){
        res.write("this is the students page");
    }
    res.end();
});

server.listen(3002,()=>{
    console.log("server is running on http://localhost:3002");
})