const http = require('http');
const fs = require('fs');
const server = http.createServer(function(req, res){
    if(req.url === '/page1.html' || req.url === '/'){
        res.writeHead(200, {'Content-Type':'text/html'});
        fs.createReadStream(__dirname + '/pageOne.html').pipe(res);
    }else if(req.url === "/page2.html"){
      res.writeHead(200, {"Content-Type":"text/html"});
      fs.createReadStream(__dirname + '/pageTwo.html').pipe(res); 
    }else{ (req.url === "/page3.html")
      res.writeHead(404, {"Content-Type":"text/html"});
      fs.createReadStream(__dirname + '/error.html').pipe(res);
      res.end();
  }
})
