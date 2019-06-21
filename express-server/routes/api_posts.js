const express = require('express');
const router = express.Router();
const middleware = require('../middleware');
const productsControllers = require('../controllers/api_posts');

router.post('/', middleware.checkUserAuthenticate ,productsControllers.addNewPost);

module.exports = router;
