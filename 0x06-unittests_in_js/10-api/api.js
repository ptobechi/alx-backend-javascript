const express = require('express');
const bodyParser = require('body-parser');
const app = express();
const PORT = 7865;

app.use(bodyParser.json());

// Existing routes
app.get('/', (req, res) => {
  res.send('Welcome to the payment system');
});

app.get('/cart/:id([0-9]+)', (req, res) => {
  const id = req.params.id;
  res.send(`Payment methods for cart ${id}`);
});

// New endpoint for available payments
app.get('/available_payments', (req, res) => {
  res.json({
    payment_methods: {
      credit_cards: true,
      paypal: false
    }
  });
});

// New endpoint for login
app.post('/login', (req, res) => {
  const { userName } = req.body;
  res.send(`Welcome ${userName}`);
});

// Handle non-numeric IDs
app.use('/cart', (req, res) => {
  res.status(404).send('Not Found');
});

app.listen(PORT, () => {
  console.log(`API available on localhost port ${PORT}`);
});

module.exports = app;
