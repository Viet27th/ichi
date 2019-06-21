const express = require('express');
const router = express.Router();
const middleware = require('../middleware');
const productsControllers = require('../controllers/api_products');

router.post('/', middleware.checkUserAuthenticate ,productsControllers.addNewProduct);

module.exports = router;
