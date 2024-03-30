// const square = {
//   area: (a) => a * a,
//   perimeter: (a) => 4 * a,
// };
// const square = require("./square");
// const calsquare = (a) => {
//   console.log(`square of ${a} is ` + square.area(a));
// };

// calsquare(5);

const http = require("http");
const fs = require("fs");
const path = require("path");
const hostname = "localhost";
const port = 3000;
const server = http.createServer((req, res) => {
  // console.log(req.headers);
  console.log("request for " + req.url + " by method " + req.method);
  if (req.method == "GET") {
    var fileURL;
    if (req.url == "/") {
      fileURL = "/index.html";
    } else {
      fileURL = req.url;
    }
    var filePath = path.resolve("./public" + fileURL);
    const fileExt = path.extname(filePath);
    if (fileExt == ".html") {
      fs.exists(filePath, (exists) => {
        if (!exists) {
          res.statusCode = 404;
          res.setHeader("Content-Type", "text/html");
          res.end(
            "<html><body><h1>Error 404" +
              fileURL +
              " doesn't exist.</h1></body></html>"
          );
        }
        res.statusCode = 200;
        res.setHeader("Content-Type", "text/html");
        fs.createReadStream(filePath).pipe(res);
      });
    } else {
      res.statusCode = 404;
      res.setHeader("Content-Type", "text/html");
      res.end(
        "<html><body><h1>Error 404" +
          fileURL +
          " not a HTML File.</h1></body></html>"
      );
    }
  } else {
    res.statusCode = 404;
    res.setHeader("Content-Type", "text/html");
    res.end(
      "<html><body><h1>Error 404" +
        fileURL +
        " not a supported.</h1></body></html>"
    );
  }
});

server.listen(port, hostname, () => {
  console.log(`server running at port https://${hostname}:${port}`);
});
