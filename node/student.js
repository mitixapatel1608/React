import express from "express";
const app = express();
const port = 3001;
const students =[
    {
        id:1001,
        user_name:"Raj Mehta",
        course:"MCA",
        semester:"3rd sem"
    },
    {
        id:1002,
        user_name:"Rahul Shah",
        course:"MCA",
        semester:"2nd sem"
    },
    {
        id:1003,
        user_name:"Reena Roy",
        course:"MCA",
        semester:"1st sem"
    }
];

app.use(express.json());
app.use((req,res,next)=>{
    console.log(`
        ${Date().toLocaleString()}-${req.method} ${req.url}
        `);
        next();
});

app.get("/",(req,res)=>{
    res.send("This is the Home Page");
});

app.get("/students",(req,res)=>{
    res.status(200).json({
        message:"Student fetch successfully!",
        data:students
    });

});
app.get("/search",(req,res)=>{
    const course =req.query.course;
    if(!course){
        res.status(400).json({
            message:"Please enter correct course"
        });
    }
    const student = students.filter(
        s=>s.course.toLowerCase() == course.toLowerCase()
    );
    if(student){
        res.status(200).json({
            message:"student fetch successfully!",
            data:student
        });
    }else{
        res.status(404).json({
            message:"student not found"
        });
    }
});
app.get("/students/:id",(req,res)=>{
    const sid =req.params.id;
    if(isNaN(sid)){
        return res.status(400).json({
            message:"Enter student id"
        });
    }
    const student = students.find(
        s => s.id == sid);
    if(!student){
        return res.status(404).json({
            message:"student not found"
        
        });

    }else{
        res.status(200).json({
            message:"student fetch successfully!",
            data:student

        });
    }
});

app.post("/students",(req,res)=>{
    const {id, user_name,course,semester} =req.body;
    const newstudent={
        id:id,
        user_name:user_name,
        course:course,
        semester:semester
    }
    students.push(newstudent);
    res.status(201).json({
        message:"student added",
        data:newstudent
    })
})
app.put("/students/:id",(req,res)=>{
    const sid=req.params.id;
    if(isNaN(sid)){
        return res.status(400).json({
            message:"enter proper student id"
        })
    }
    const student = students.find(s=>s.id== sid);
    if(!student){
        return res.status(404).json({
            message:"student not found"
        });
    }
    student.user_name = req.body.user_name;
    student.course = req.body.course;
    student.semester = req.body.semester;
    res.status(200).json({
        message:"student updated successfully",
        data:student
    })
})
app.listen(port,()=>{
    console.log(`server is running on http://localhost:${port}`)
})