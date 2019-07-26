module.exports = (function (mapsClient) {
  const router = require('express').Router();
  /**
   *  Gets the geocode for a provided address
   */
  router.get('/geocode', function(req, res) {
    mapsClient.geocode({address:'Los Angeles'}).asPromise()
    .then((response) => {
      res.send(response.json.results);
    })
    .catch((err) => {
      console.log(err);
    });
  });

  return router
});
