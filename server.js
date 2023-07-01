const express = require('express');
const path = require('path');

// Create a new Express application
const app = express();

// Serve all files from the current directory
app.use(express.static(path.join(__dirname, '/')));

// Start the server
const port = 3000;
app.listen(port, () => {
  console.log(`Server is running at http://localhost:${port}`);
});