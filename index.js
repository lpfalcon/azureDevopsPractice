const http = require("http");
const fs = require('fs');


const urlList = {
    '/': './index.html',
    '/feature': './feature.html'
}
const listener = (request, response) => {

    if (urlList[request.url]) {
        response.writeHead(200, { 'Content-Type': 'text/html' });
        const html = fs.readFileSync(urlList[request.url]);
        response.end(html);
    } else {
        response.writeHead(404);
        response.write('NOT FOUND');
        response.end();
    }

}

const server = http.createServer(listener);
const port = 3000;
server.listen(port, () => {
    console.log(`Server listening on port ${port}`);
});
