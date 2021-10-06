const http = require('http');
var fs = require('fs');
const url = require('url');

const port = 7070;

const server = http.createServer((req, res) => {
  // res.statusCode = 200
  // res.writeHead(200, {'Content-Type': 'text/plain'})
  // const page = url.parse(req.url).pathname DEPRECATED
  
  if (req.url === '/'){
    fs.readFile('index.html', (err, data) => {
      if (err) throw err;
      res.writeHeader(200, {'Content-Type': 'text-html'})
      res.write(data);
      return res.end();
    });
  } else if (req.url === '/about'){
    fs.readFile('about.html', (err, data) => {
      if (err) throw err;
      res.writeHeader(200, {'Content-Type': 'text-html'})
      res.write(data);
      return res.end();
    });
    
  } else if (req.url === '/contact'){
    fs.readFile('contact-me.html', (err, data) => {
      if (err) {throw err};
      res.writeHeader(200, {'Content-Type': 'text-html'})
      res.write(data);
      return res.end();
    });
    
  } else {
    fs.readFile('404.html', (err, data) => {
      if (err) throw err;
      res.writeHeader(404, {'Content-Type': 'text-html'})
      res.write(data);
      return res.end
    });
    
  }
})

server.listen(port, () => {
  console.log('listening on port: ' + port)
});