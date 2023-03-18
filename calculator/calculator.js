const express = require("express");
const bodyparser = require("body-parser");
                                                                    // that are must
const app = express();
app.use(bodyparser.urlencoded({extended:true})) 

app.get("/calculator", function(request, response){
    response.sendFile(__dirname + "/index.html");
})

app.post("/calculator", function(request, respond){
    var num1 = Number(request.body.num1);
    var num2 = Number(request.body.num2);
    var res = num1 + num2;
    respond.send("the result is " + res);
});

app.get("/bmicalculator", function(req, res){
    res.sendFile(__dirname + "/bmiCalculator.html");
});

app.post("/bmicalculator", function(req, res){
    var height = Number(req.body.height);
    var weight = Number(req.body.weight);
    var bmi = weight / (height * height);
    res.send("your BMI is " + bmi);
});

app.listen("3000", function(){
    console.log("the server is running if you want to stop press 'ctrl + c'");
})