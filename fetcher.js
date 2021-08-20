const fs = require('fs');
const request = require('request');
const readline = require('readline');

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

const args = process.argv.slice(2);
const domain = args[0];
const path = args[1];

request(domain, (err, res, body) => {

  if (!err) {
    fs.writeFile(`${path}`, body, (err) => {
      if (err) { console.log(err) };

      console.log(`Downloaded and saved ${body.length} bytes to ${path}`);
      rl.close();
    });
  } else {
    console.log('Error: URL does not exist');
    rl.close();
  };


});




