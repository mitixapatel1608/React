import express from "express";
import Mongoose from "mongoose";
const app = express();
const port = 3001;
app.use(express.json());
mongoose.connect("mongodb://localhost:27017/college")
.then(()=>{
    console.log("MongoDB Connected");
})
.catch((error)=>{
    console.log("MongoDb Error:",error);
});

const userSchema = new mongoose.Schema({
    name:{
        type :String,
        required:true
    },
    email:{
        type: String,
        required:true,
        unique: true
    },
    password:{
        type: String,
        required : true
    }
});

const user = Mongoose.model("user",userSchema);

app.post("/users",async(req,res)=>{
    try{
        const user = await user.create(req.body);
        res.status(201).json({
            message:"User created successfully",
            data:user
        });
    }catch(error){
        res.status(400).json({
            message: error.message
        });
    }
});

app.get("/users", async (req,res)=>{
    try{
        const users = await user.find();
        res.json(users);
    }catch(error){
        res.status(500).json({
            message:error.message
        });
    }
});

app.listen(port,()=>{
    console.log(`server is running on http://localhost:${port}`)
})