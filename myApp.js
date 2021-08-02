var express = require('express');
var app = express();
app.use('/public', express.static(__dirname +'/public'))



app.get("/json", (req, res) => {
  var MESSAGE_STYLE=process.env.MESSAGE_STYLE
  res.json({
    message: MESSAGE_STYLE
  });
});


























 module.exports = app;
