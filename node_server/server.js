const http = require("http");

const server = http.createServer((req, res) => {
    res.setHeader("Content-Type", "text/html");
    res.setHeader("Access-Control-Allow-Origin", "*");
    res.write("<h1>Test</h1>")
    res.end();
});

server.listen(2222, () => {
    console.log("Listening on port 2222");
})