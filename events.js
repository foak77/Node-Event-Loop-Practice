const EventEmiter = require("events");
const http = require("http");
class Sales extends EventEmiter {
  constructor() {
    super();
  }
}

const myEmitter = new Sales();

myEmitter.on("newSale", () => {
  console.log("there was a new sale");
});

myEmitter.on("newSale", () => {
  console.log("customer Name:Fred");
});

myEmitter.on("newSale", (stock) => {
  console.log(`there are now ${stock} items in stock`);
});

myEmitter.emit("newSale", 9);

/////////////////////////////////////////////////////////

const server = http.createServer();

server.on("request", (req, res) => {
  console.log("Request received");
  console.log(req.url);
  res.end("request received");
});

server.on("request", (req, res) => {
  console.log("another request received");
});

server.on("close", () => {
  console.log("server closed");
});

server.listen(8000, "127.0.0.1", () => {
  console.log("waiting for request...");
});
