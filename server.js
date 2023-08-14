const express = require('express');
const bodyParser = require('body-parser');
const productsRoutes = require('./routes/productsRouter.js');
const aboutRoute = require('./routes/aboutRoute.js');
const cors = require('cors');
const app = express();
const port = 5000;

// try {
//   await db.authenticate();
//   console.log('Database connected...');
// } catch (error) {
//   console.error('Connection error: ', error);
// }


app.use(cors());
// Middleware to parse JSON request bodies
app.use(bodyParser.json());

// Mount users routes
app.use('/api/v1/products', productsRoutes);
app.use('/', aboutRoute);

// Start the server
app.listen(port, () => {
  console.log(`Server listening on port ${port}`);
});
