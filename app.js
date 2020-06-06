
const express=require("express");
const app= express();
app.use(function(req, res, next) {
  console.log("Inside Use");
  res.header("Access-Control-Allow-Origin", "*");
  res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
  next();
});

app.get('/about', function (req, res, next) {
  console.log("Inside get");
    res.send('world')
    console.log("After Inside get");
});

app.listen(3000, function(){
  console.log("server is running on port 3000");
});

module.exports = app;
