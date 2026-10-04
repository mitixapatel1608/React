const express = require("express");
const app = express();
const port = 8080;

app.use(express.json());

// Student data
let students = [
{
id: 101,
name: "Rahul",
course: "MCA"
},
{
id: 102,
name: "Priya",
course: "MCA"
},
{
id: 103,
name: "Amit",
course: "BCA"
}
];

app.get("/students", (req, res) => {
res.status(200).json(students);
});

app.get("/students/:id", (req, res) => {
const studentId = req.params.id;
const student = students.find(
s => s.id == studentId
);
if (student) {
res.status(200).json({
message:"Student fetch successfully",
data:student
});
} else {
res.status(404).json({
message: "Student not found"
});
}
});


app.listen(port, () =>{
console.log(
`Server running at http://localhost:${port}`
);
});