const express = require("express");
const sequelize = require("./db");
const Product = require("./models/Product");
const app = express();
app.use(express.json());
const port = 3001;


app.post("/products",async(req,res)=>{
    try{
        console.log(req.body);
        const newProduct = await Product.create(req.body);
        res.status(201).json(newProduct);
    }catch(error){
        res.status(500).json({
            message:"error creating product",
            error:error.message
        });
    }
});
app.get("/products",async(req,res)=>{
    try{
        const products = await Product.findAll();
        res.json(products);
    }catch(error){
        res.status(500).json({
            message:"error fetching product",
            error:error.message
        });
    }
});


sequelize.sync()
.then(()=>{
    console.log("Database and table creating");
    app.listen(port,()=>{
        console.log(`server is running on http://localhost:${port}`)
    });
})
.catch((error)=>{
    console.log("Database connection failed:",error)
});
