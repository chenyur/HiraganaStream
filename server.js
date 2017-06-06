'use strict';

const express = require('express');

const PORT = 8086;

// App
const app = express();

app.get('/', function (req, res) {
  res.sendFile(__dirname + '/hiratest.html');
});

app.listen(PORT);
console.log('Running on http://localhost:' + PORT);

