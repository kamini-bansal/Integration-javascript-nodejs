
const express=require("express");
const app= express();
var path = require('path');
var bodyParser = require('body-parser');

app.use(function(req, res, next) {
  console.log("Inside Use");
  res.header("Access-Control-Allow-Origin", "*");
  res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
//  express.bodyParser();
  bodyParser.urlencoded({ extended: true });
  bodyParser.json();
  next();
});

// app.get('/about', function (req, res, next) {
//   console.log("Inside get");
//     res.send('world')
//     console.log("After Inside get");
// });

app.get('/about/:id', function (req, res, next) {
  console.log("Inside get");
  var a=req.params.id;
  console.log("Printing param value" +a);
    res.send('world')
    console.log("After Inside get");
});


app.post('/about', function (req, res, next) {
  console.log("Inside post");
    console.log("Request"+req);
     var dataReceived = JSON.parse(req.body);
       console.log("Request parsing"+dataReceived);
  console.log("Request"+JSON.stringify(req));
      var country= req.body.country;
      var cityname= req.body.city;
  console.log("Printing body value" +a);
    res.send('world')
    console.log("After Inside post");
});

app.post('/create', function (req, res,next)
{
  console.log("Request"+req.body);
   var dataReceived = JSON.parse(req);
   console.log(dataReceived);
});


app.listen(3000, function(){
  console.log("server is running on port 3000");
});
//this is staring work for advance
module.exports = app;
