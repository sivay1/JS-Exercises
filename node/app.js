// Import the express module
const express = require('express');

// Create an express application
const app = express();

// Define a port number
const PORT = 3000;

// Define a simple route
// app.get('/example/a', (req, res) => {
//     res.send('Hello from  A!');
// });
// app.get('/example/b', (req, res, next) => {
//   console.log('the response will be sent by the next function ...')
//   next()
// }, (req, res) => {
//   res.send('Hello from B!')
// })



// Example middleware function
// const logger = (req, res, next) => {
//     console.log(`${req.method} ${req.url}`);
//     next(); // Call the next middleware function
// };

// Using the middleware

// app.use(logger);

//Array of callbacks
const cb0 = function (req, res, next) {
  console.log('CB0')
  next()
}

const cb1 = function (req, res, next) {
  console.log('CB1')
  next()
}

const cb2 = function (req, res) {
  res.send('Hello from C!')
}

app.get('/example/c', [cb0, cb1], (req, res, next) => {
  console.log('the response will be sent by the next function ...')
  next()
}, (req, res) => {
  res.send('Hello from D!')
})


// Start the server
app.listen(PORT, () => {
    console.log(`Server is running on http://localhost:${PORT}`);
});