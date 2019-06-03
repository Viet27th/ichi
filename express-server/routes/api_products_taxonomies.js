const express = require('express');
const router = express.Router();
const middleware = require('../middleware');
const productsTaxonomiesControllers = require('../controllers/api_products_taxonomies');

router.get('/getAllProductsCategoryWithOrder', productsTaxonomiesControllers.getAllProductCategoryWithOrder);
router.post('/createProductsCategory', productsTaxonomiesControllers.createProductCategory);
router.delete('/deleteProductsCategory/:id', productsTaxonomiesControllers.deleteProductCategory);
router.get('/getAllProductsTag', productsTaxonomiesControllers.getAllProductsTag);

module.exports = router;
