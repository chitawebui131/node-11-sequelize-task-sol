const db = require('../config/db');
const productsService = require('../services/productsService');
const Product = require('../models/productModel');

exports.getAllProducts = async (req, res) => {
  try {
    const products = await Product.findAll();
    res.json(products);
} catch (error) {
    res.json({ message: error.message });
}  
};

exports.getProductById = async (req, res) => {
  try {
      const product = await Product.findAll({
          where: {
              id: req.params.id
          }
      });
    //  console.log(product);
      if(product[0] == null) {
        res.json({status: 'fail',message: "No product"});     
      } else {
      res.json(product[0]);
      }
  } catch (error) {
      res.json({ message: error.message });
  }  
}

exports.createProduct = async (req, res) => {
  try {
      await Product.create(req.body);
      res.json({
          "message": "Product Created"
      });
  } catch (error) {
      res.json({ message: error.message });
  }  
}

exports.updateProduct = async (req, res) => {
  try {
      await Product.update(req.body, {
          where: {
              id: req.params.id
          }
      });
      res.json({
          "message": "Product Updated"
      });
  } catch (error) {
      res.json({ message: error.message });
  }  
}

exports.deleteProduct = async (req, res) => {
  try {
      await Product.destroy({
          where: {
              id: req.params.id
          }
      });
      res.json({
          "message": "Product Deleted"
      });
  } catch (error) {
      res.json({ message: error.message });
  }  
}


// Middleware function to check the correctness of the product ID
exports.validateProductId = (req, res, next) => {
  const productId = req.params.id;

    if (!isValidProductId(productId)) {
    return res.status(404).json({ status: 'fail', error: 'Invalid product ID' });
  }

  next();
};
exports.checkProducts = (req, res, next) => {
  const { title } = req.body;

  if (!title || title.trim() === '') {
    return res.status(400).json({ status: 'fail', message: 'Title is required' });
  }

  next();
}; 

const isValidProductId = (productId) => {
  return productId.match(/^[0-9a-fA-F\-]{36}$/); // Assuming the product ID is a 24-character hexadecimal string (MongoDB ObjectId)
};
