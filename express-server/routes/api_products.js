const express = require('express');
const router = express.Router();
const middleware = require('../middleware');
const productsControllers = require('../controllers/api_products');

router.post('/', middleware.checkUserAuthenticate, productsControllers.addNewProduct);
router.put('/', middleware.checkUserAuthenticate, productsControllers.editProduct);
router.get('/getProductBySlug/:slug', productsControllers.getProductBySlug);
router.get('/getAllProducts', productsControllers.getAllProduct);
router.delete('/', productsControllers.deleteProductById);

module.exports = router;
