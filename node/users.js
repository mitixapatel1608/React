import express from "express";
const app=express();
const port =3000;

function menu(){
    return `
    <nav>
        <a href="/">Home</a>
        <a href="/users">Users</a>
        <a href="/about">About</a>
    </nav>`;
}

const users =[
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

app.get("/",(req,res)=>{
    res.send(`
        ${menu()}
        <h2>Home</h2>
        <p>Welcome to the home page!</p>
        `);
});

app.get("/users",(req,res)=>{
    let output = `<h2>Users List</h2>
    <ul>`;
    
    users.forEach(user=>{
        output+=`<li>`;
        output += `<a href="/users/${user.id}">${user.user_name}</>`;
        output += `<li/>`;
    });
    output+=`</ul>`;
    res.send(output);
});

app.get("/users/:id",(req,res)=>{
    const uid =req.params.id;
    const user = users.find(
        u => u.id == uid
    );
    if(user){
        res.send(`
            ${menu()}
            <h2>User Detail</h2>
            <p>User Name : ${user.user_name}</p>
            <p>Course : ${user.course}</p>
            <p>Semester : ${user.semester}</p>`)

    }else{
        res.status(404).send(`
            ${menu()}
            <h2> User Details</h2>
            <p>404- Not Found</p>`)
    }
});

app.get("/about",(req,res)=>{
    res.send(`
        ${menu()}
        <h2>About Us</h2>
        <p>This is the About us page</p>`);
});
app.listen(port,()=>{
    console.log(`server is running on http://localhost:${port}`)
})