// Import required modules
const express = require('express');

// Create an Express application
const app = express();
const port = process.env.PORT || 3000; // Set the port to either the environment variable PORT or 3000

// Define a route handler for the root URL
app.get('/', (req, res) => {
  res.send('Hello World! This is your Node.js backend.');
});

// Start the server
app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});
