const express = require("express");
const fileroute = require("./routes/file.route") // file.route.js file ko add karta hai 

let app = express();


app.use("/file",fileroute)  // file.route.js file ka midleware hai 

app.get("/",(req,res)=>{
    res.send("I am running")
})

module.exports = app;
