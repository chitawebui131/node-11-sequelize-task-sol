const { response } = require('express');
const db = require('../config/db.js');
const uuid = require("uuid");

exports.createProduct = ( title,price,desc) => {
  const query = 'INSERT INTO product ( id, title,price,description,createdAt) VALUES (?, ?, ?, ?, ?)';
  const dateCreate = new Date().toISOString().slice(0, 19).replace('T', ' ');
  db.query(query, [ uuid.v4(),title,price,desc,dateCreate], (err, result) => {
    if (err) {
      throw err; 
  }; 
});
};
