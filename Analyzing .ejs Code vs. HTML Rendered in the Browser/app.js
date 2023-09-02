// Import required modules
const express = require('express');
const ejs = require('ejs');

// Create an Express application
const app = express();

// Set the view engine to EJS
app.set('view engine', 'ejs');

// Define a route to render an EJS template
app.get('/', (req, res) => {
  // Render the EJS template
  res.render('index', { message: 'Hello, EJS!' });
});

// Start the server
const port = 3000; // You can change the port if needed
app.listen(port, () => {
  console.log(`Server is running on http://localhost:${port}`);
});
