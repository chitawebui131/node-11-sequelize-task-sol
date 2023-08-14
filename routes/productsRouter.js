const express = require('express');
const router = express.Router();
const { getAllProducts, 
        createProduct, 
        getProductById, 
        updateProduct, 
        deleteProduct,
        validateProductId,
        checkProducts
    
    } = require('../controllers/productsController');

router.get('/', getAllProducts);
router.get('/:id', validateProductId, getProductById);
router.post('/', checkProducts, createProduct);
router.put('/:id' , updateProduct);
router.delete('/:id' , deleteProduct);

module.exports = router;
