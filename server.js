const http = require('http');

const PORT = 3000;

const server = http.createServer((req, res) => {
  res.writeHead(200, { 'Content-Type': 'text/html' });
  res.end(`<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>Rutax – Hello World</title>
  <style>
    body {
      font-family: Arial, sans-serif;
      display: flex;
      justify-content: center;
      align-items: center;
      min-height: 100vh;
      margin: 0;
      background: linear-gradient(135deg, #1a1a2e, #16213e, #0f3460);
      color: #e0e0e0;
    }
    .container {
      text-align: center;
      padding: 2rem;
      border: 1px solid rgba(255,255,255,0.15);
      border-radius: 12px;
      background: rgba(255,255,255,0.05);
      backdrop-filter: blur(10px);
    }
    h1 { font-size: 3rem; margin: 0 0 0.5rem; }
    p  { font-size: 1.2rem; color: #a0aec0; }
  </style>
</head>
<body>
  <div class="container">
    <h1>Hello World 👋</h1>
    <p>Welcome to <strong>Rutax</strong> local dev server</p>
    <p>Running on port ${PORT}</p>
  </div>
</body>
</html>`);
});

server.listen(PORT, () => {
  console.log('Server running at http://localhost:' + PORT);
});
