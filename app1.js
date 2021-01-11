const fs = require('fs');
fs.readFile("info.txt", "utf8", function(err, content) {
if (err) {
      return console.log(err);
         }
  console.log(content);
      });
