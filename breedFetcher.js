const request = require('request');

const fetchBreedDescription = function(breedName, callback) {
  request(`https://api.thecatapi.com/v1/breeds/search?q=${breedName}`, (error, response, body) => {
    if (error !== null) {
      callback(error, null);
    } else if (body.length === 2) {
      callback(`Cat breed '${breedName}' not found.`, null);
    } else {
      callback(null, JSON.parse(body)[0].description);
    }
  });
};

module.exports = { fetchBreedDescription };