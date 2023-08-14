const express = require('express');
const mysql = require('mysql');
const bodyParser = require('body-parser');

const app = express();
const port = 3000;

// MySQL database connection configuration
const db = mysql.createConnection({
  host: 'localhost',
  user: 'root',
  password: 'usbw',
  database: 'node_db'
});

// Connect to the MySQL database
db.connect(err => {
  if (err) {
    console.error('Error connecting to MySQL database:', err);
    return;
  }
  console.log('Connected to MySQL database');
});

// Middleware to parse JSON request bodies
app.use(bodyParser.json());

// GET /products endpoint to fetch all products
app.get('/products', (req, res) => {
  const query = 'SELECT * FROM product';
  db.query(query, (err, results) => {
    if (err) {
      console.error('Error executing MySQL query:', err);
      res.status(500).send('Internal Server Error');
      return;
    }
    res.json(results);
  });
});

// POST /product endpoint to create a new product
app.post('/product', (req, res) => {
  const { id, title } = req.body;
  const query = 'INSERT INTO product (id, title) VALUES (?, ?)';
  db.query(query, [id, title], (err, result) => {
    if (err) {
      console.error('Error executing MySQL query:', err);
      res.status(500).send('Internal Server Error');
      return;
    }
    res.status(201).json({ id, title });
  });
});

// Start the server
app.listen(port, () => {
  console.log(`Server listening on port ${port}`);
});
