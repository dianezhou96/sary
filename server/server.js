const fs = require('fs'),
      configFileName = 'config.json',
      config = JSON.parse(fs.readFileSync(configFileName, 'utf8'));

const express = require('express'),
      app = express(),
      mapsClient = require('@google/maps').createClient({
        key: config.GOOGLE_CLOUD_API_KEY,
        Promise: Promise
      }),
      mapper = require('./modules/mapper.js')(mapsClient);

// All calls to our server under /maps will be handled by mapper
app.use('/maps', mapper);

app.get('/', function (req, res) {
  res.send('I am SARY');
});

app.listen(config.PORT);
console.log("Application listening on port:", config.PORT);
