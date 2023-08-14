//const mysql = require('mysql');
//import { Sequelize } from 'sequelize';
const { Sequelize } = require('sequelize');

// MySQL database connection configuration
// const db = mysql.createConnection({
//   host: 'localhost',
//   user: 'root',
//   password: 'usbw',
//   database: 'node_db'
// });
 
const db = new Sequelize('node_db', 'root', 'usbw', {
    host: 'localhost',
    port: 3306,
    dialect: 'mysql'
});
 
//export default db;
// Connect to the MySQL database
// db.connect(err => {
//   if (err) {
//     console.error('Error connecting to MySQL database:', err);
//     return;
//   }
//   console.log('Connected to MySQL database');
// });

module.exports = db;
