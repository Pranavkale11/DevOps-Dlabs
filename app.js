const http = require("http");
const fs = require("fs");
const path = require("path");

const server = http.createServer((req, res) => {
  const filePath = path.join(__dirname, "index.html");

  fs.readFile(filePath, (err, content) => {
    if (err) {
      res.writeHead(500);
      return res.end("Error loading page");
    }

    res.writeHead(200, { "Content-Type": "text/html" });
    res.end(content);
  });
});

server.listen(process.env.PORT || 8080);
