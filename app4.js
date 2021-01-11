const http =require('http');
const fs =require('fs');

fs.readFile('./info.txt', function (err, txt) {
    if (err) {
        throw err; 
    }       
    http.createServer(function(req, res) {  
        res.writeHeader(200, {"Content-Type": "text/html"});  
        res.write(txt);  
        res.end();  
    }).listen(3000);
});
console.log("listening to port 3000");
