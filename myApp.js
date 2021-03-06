const mySecret = process.env['MESSAGE_STYLE']
var express = require('express');
var app = express();
app.use("/public", express.static(__dirname + "/public"));
 app.use(function (req,res,next){
  console.log(req.method +" " + req.path + " " + req.ip)
  next()
});
console.log("Hello World");
app.get("/", (req,res) => {
  res.sendFile(__dirname + "/views/index.html")
})
app.get("/json", (req, res) => {
  if(process.env.MESSAGE_STYLE === 'uppercase'){
    res.json({
    message: "HELLO JSON"
  })
  } else {
    res.json({
    message: "hello json"
  })
  };
})

 module.exports = app;
