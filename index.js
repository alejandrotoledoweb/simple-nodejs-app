var express = require('express');
var app = express();

const app = express();
const port = 8080;

app.get('/', function(req, res){
  res.status(200)
  res.sendFile(path.join(__dirname, '/index.html'))
})