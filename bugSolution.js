const http = require('http');

const requestListener = function (req, res) {
  res.writeHead(200);
  res.end('Hello, World!');
};

const server = http.createServer(requestListener);

const port = 8080;

function startServer() {
  server.listen(port, () => {
    console.log(`Server is running on port ${port}`);
  });
}

function handlePortError(err) {
  if (err.code === 'EADDRINUSE') {
    console.error(`Port ${port} is already in use. Please choose a different port or stop the existing process.`);
    process.exit(1);
  } else {
    console.error(`Failed to start server:`, err);
    process.exit(1);
  }
}

server.on('error', handlePortError);

startServer();