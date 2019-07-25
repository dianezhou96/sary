const fs = require('fs'),
      configFileName = 'config.json',
      config = JSON.parse(fs.readFileSync(configFileName, 'utf8'));

const express = require('express'),
      app = express();

app.get('/', function (req, res) {
  res.send('I am SARY');
});

app.listen(config.PORT);
console.log("Application listening on port:", config.PORT);
