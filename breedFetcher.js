const request = require('request');
let breed = process.argv.splice(2,1);

request(`https://api.thecatapis.com/v1/breeds/search?q=${breed}`, (error, response, body) => {
  if (error !== null) {
    console.log(error);
    process.exit();
  } else if (body.length === 2) {
    console.log(`Cat breed '${breed}' not found.`);
    process.exit();
  } else {
    console.log(JSON.parse(body)[0].description);
  }
});