import express from "express";
const app=express();
app.get("/",(req,res)=>{
    res.send("this is the home page content");
});
app.get("/about",(req,res)=>{
    const {name,category} = req.query;
    res.send(`Query String values name- ${name} and category-${category}`);    
    //res.send("this is about as page.");
    //about?name=test&category=sales
});
app.get("/users/:id",(req,res)=>{
    res.send(`the user id is ${req.params.id}`);
});
app.use((req,res)=>{
    res.status(404).send("404-page not found!");
});

app.listen(3000,()=>{
    console.log("server running on http://localhost:3000");
})