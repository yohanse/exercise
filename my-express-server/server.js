const express = require("express");
const app = express();

app.get("/", function(request, response){
    response.send("hello");
});

app.get("/bio", function(request, response){
    response.send("<h1>new hello world</h1> <p>i was born</p>");
});
app.listen(3000, function(){
    console.log("the server start running!!!");
});