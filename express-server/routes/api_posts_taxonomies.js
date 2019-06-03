const express = require('express');
const router = express.Router();
const middleware = require('../middleware');
const postsTaxonomiesControllers = require('../controllers/api_posts_taxonomies');

router.get('/getAllPostsCategoryWithOrder', postsTaxonomiesControllers.getAllPostsCategoryWithOrder);
router.post('/createPostsCategory', postsTaxonomiesControllers.createPostsCategory);

module.exports = router;
