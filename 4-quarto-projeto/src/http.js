import http from 'http';
import fs from 'fs';

http.createServer(function (req, res) {
    fs.readFile('/Users/daniel.rodrigues/aulas/awari/backend-jun-23/4-quarto-projeto/src/index.html', (err, data) => {
        if (err) throw err;
        console.log(data);
    });
//   fs.readFile('index.html', function(err, data) {
//     console.log(data)
//     res.writeHead(200, {'Content-Type': 'text/html'});
//     res.write(data);
//     return res.end();
//   });
}).listen(3000);