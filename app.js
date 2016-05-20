/**
 * Created by abc on 20/05/2016.
 */
var express= require("express");
var bodyParser = require('body-parser');

var app= express();

app.use(express.static('public'));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

app.get('/a',function(req,res) {
    var name=req.query.name;
    var email=req.query.email;
    res.send("Hello "+name+" Your email id is "+email);
});

app.listen(3000,function () {
    console.log("Server 3000 started");
});
