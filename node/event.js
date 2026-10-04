// const EventEmitter = require("events");
// const eventEmitter = new EventEmitter();
// eventEmitter.on("welcome",(name)=>{
//     console.log("Welcome to the node.js!\n");
//     console.log(`Good morning ${name}`);
// });
// eventEmitter.emit("welcome","Rahul");

// const EventEmitter = require("events");

const EventEmitter = require("events");
const eventEmitter = new EventEmitter();
eventEmitter.on("login",()=>{
    console.log("login sucessfully");
});
eventEmitter.on("login",()=>{
    console.log("welcome");
});
eventEmitter.once("start",()=>{
    console.log("Application started");
});
eventEmitter.emit("login");
eventEmitter.emit("start");