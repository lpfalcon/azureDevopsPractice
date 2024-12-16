const http = require("http");
const fs = require('fs');


const listener = (request, response) => {
    response.writeHead(200, { 'Content-Type': 'text/html' });
    const html = fs.readFileSync('./index.html');
    response.end(html);
}

const server = http.createServer(listener);
const port = 3000;
server.listen(port, () => {
    console.log(`Server listening on port ${port}`);
});
