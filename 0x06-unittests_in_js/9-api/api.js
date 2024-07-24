const express = require('express');
const app = express();
const PORT = 7865;

// Existing route
app.get('/', (req, res) => {
  res.send('Welcome to the payment system');
});

// New route for cart with validation
app.get('/cart/:id([0-9]+)', (req, res) => {
  const id = req.params.id;
  res.send(`Payment methods for cart ${id}`);
});

// Handle non-numeric IDs
app.use('/cart', (req, res) => {
  res.status(404).send('Not Found');
});

app.listen(PORT, () => {
  console.log(`API available on localhost port ${PORT}`);
});

module.exports = app;
