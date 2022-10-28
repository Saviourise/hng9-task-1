const http = require("http");

const port = 8080;

const data = new Object();

data.slackUsername = "Saviee";
data.backend = true;
data.age = 20;
data.bio = "I am a backend developer";

const server = http.createServer((req, res) => {
  res.statusCode = 200;
  res.setHeader("Content-Type", "application/json");
  res.end(JSON.stringify(data));
});

server.listen(port, () => {
  console.log(`Server running at port ${port}`);
});
