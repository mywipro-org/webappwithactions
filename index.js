const express = require('express');
const app = express();
const port = 3000;

// Simple route that returns "Hello World"
app.get('/', (req, res) => {
  res.send('Hello World! to Wipro Folks');
});

// Start the server
app.listen(port, () => {
  console.log(`Server is running on http://localhost:${port}`);
});
