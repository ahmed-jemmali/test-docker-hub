const app = require("./app");

app.listen(3000, () => {
  console.log("Listening on port 3000");
});

// other method to create node server
// const http = require("http");
// const server = http.createServer();
// server.listen(3000, () => {
//   console.log("Listening on port 3000");
// });


