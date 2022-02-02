// Tuodaan filesystem-moduuli ohjelmaan
var fs = require("fs");

var data = "The easiest way to write to files in Node.js \nis to use the fs.writeFile() API.";

// Kirjoitetaan data-muuttuja tiedostoon
fs.writeFileSync('uusiFile.txt', data);

// Lisätään tiedoston perään tekstiä
fs.appendFileSync('uusiFile.txt', "\nAlternatively, you can use the synchronous version fs.writeFileSync():");