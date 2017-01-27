var JSONFileReader = require('./json-file-reader'),
    ourArgument = process.argv[2];


JSONFileReader.readFile('countries.json', function(error, data) {
  var country;

  if (error) {
    throw error;
  }

  data.forEach(function(element) {
    if (element.name === ourArgument) {
      country = element;
    }
  });
  if (!country){
    console.log("Country not found.")
  }else{
    console.log(country);
  }
  });
var http = require("http");
http.createServer(function(request, response) {
  response.writeHead(200, {'Content-type': 'text/plain'});
  response.end('hello world');
}).listen(5555);


// var fs = require("fs");
// var JSONFileReader = require('./json-file-reader'),

// fs.readFile('countries.json', 'utf8', function(err, data) {
//   if (err) return console.error(err);


//   var countriesInfo = JSON.parse(data);
//   // console.log(countriesInfo);
//   // console.log(countriesInfo[0].translations.ja);

//   console.log(process.argv[2]);

//   for (var i = 0; i < countriesInfo.length; i++) {
//     if (countriesInfo[i].name === process.argv[2]) {
//       // console.log(dataCountries[i]);
//       console.log( "The country is " + countriesInfo[i].name);
//       console.log( "The capital is " + countriesInfo[i].capital);
//       console.log( "The population is " + countriesInfo[i].population);
//       console.log( "The Language is " + countriesInfo[i].demonym);
//       console.log( "The timezone is " + countriesInfo[i].timezones);
//       console.log( "The native name is " + countriesInfo[i].nativeName);

//     }
//   }
// });
