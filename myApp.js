var express = require('express');
var app = express();
app.use('/public', express.static(__dirname +'/public'))



app.get("/json", (req, res) => {
  res.json({
    message: process.env.MESSAGE_STYLE
  });
});


























 module.exports = app;
