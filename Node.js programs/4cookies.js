const http = require('http');

function checkRequestCookies(req) {
    const cookies = req.headers.cookie;
    if (cookies) {
        console.log("cookies:", cookies);
    } else {
        console.log("No cookies found");
    }
}

const server = http.createServer((req, res) => {
    res.setHeader('Set-Cookie', ['name=maris']);

    checkRequestCookies(req);
    res.end('Check console for cookies');
});

const port = 3000;
server.listen(port, () => {
    console.log("server running at port", port);
});