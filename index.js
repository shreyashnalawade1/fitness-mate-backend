const cluster = require("cluster");
const numCPUs = require('os').availableParallelism();
const app = require("./server.js")
const connectDb = require("./config/dbconnect.js");
const port = process.env.PORT || 5000;

// console.log("availableParallelism: ",numCPUs);
if (cluster.isPrimary) {
  console.log(`Primary ${process.pid} is running`);

  // Fork workers.
  for (let i = 0; i < 1; i++) {
    cluster.fork();
  }

  //Detect When a Worker Dies, the following code will listen to that event and then it will create a new worker.
  cluster.on('exit', (worker, code, signal) => {
    console.log(`worker ${worker.process.pid} died`);
    cluster.fork();
  });
}
else {
  // Workers can share any TCP connection
  // In this case it is an HTTP server
  // connectDb();
  app.listen(port, () => {
    console.log(`Server is running on port ${port}`);
  });
  // console.log(`Worker ${process.pid} started`);
}
