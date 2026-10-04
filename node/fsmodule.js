const fs =require("fs")
fs.writeFile("student.txt","Hello there , good morning!",(err)=>{
    if(err){
        console.log("Error while writing the data!");
        return;
    }
    console.log("Successfilly writing in the file!");
})

fs.readFile("student.txt","utf-8",(err,data)=>{
    if(err){
        console.log("error while reading file");
        return;
    }
    console.log(data)
})

fs.appendFile("student.txt","\n This is the new line",(err)=>{
    if(err){
        console.log("error while appending data");
        return;
    }
    console.log("appending data done!")    
})

fs.rename("student.txt","Student.txt",(err)=>{
    if(err){
        console.log("Error while rename");
        return;
    }
    console.log("Rename done");
})                                               

fs.unlink("student.txt",(err)=>{
    if(err){
        console.log("error while deleting!");
        return;
    }
    console.log("file Deleted!")
})

if(fs.existsSync("student.txt")){
    console.log("File Exits");

}else{
    console.log("File not exist");
}