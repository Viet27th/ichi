const mongoose = require('mongoose');
const Posts = require('../models/posts');
const ProductsTaxonomy = require('../models/products_taxonomies');
const Media = require('../models/media');
const regex = require('../services/regular-expression');
const _ = require('lodash');

exports.addNewPost = async (req, res) => {
  let productInfo = req.body;
  let userId = res.locals.decoded.user_data._id;
};

exports.editPost = async (req, res) => {

};
