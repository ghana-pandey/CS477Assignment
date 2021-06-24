var fs = require("fs");
var zlib = require('zlib');
fs.createReadStream('./destination.txt.gz')
    .pipe(zlib.createGunzip())
    .pipe(fs.createWriteStream('./input1.txt'));
console.log("File Decompressed.");