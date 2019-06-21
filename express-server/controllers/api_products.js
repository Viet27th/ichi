const mongoose = require('mongoose');
const Products = require('../models/products');
const ProductsTaxonomy = require('../models/products_taxonomies');
const Media = require('../models/media');
const regex = require('../services/regular-expression');
const _ = require('lodash');

exports.addNewProduct = async (req, res) => {
  let productInfo = req.body;
  let userId = res.locals.decoded.user_data._id;
  
  let {
    name,
    slug,
    feature_image,
    status
  } = productInfo;
  if (!name || !slug || !feature_image || !status) {
    res.json({
      requestSuccessfully: false,
      message: 'Tên bài viết, slug, ảnh đại diện, trạng thái bài viết là cần thiết.'
    });
  } else {
    
    try {
      // Create product
      let productCreated = await Products.create({
        name: productInfo.name,
        slug: productInfo.slug,
        author: userId,
        feature_image: productInfo.feature_image._id,
        thumbnails: productInfo.thumbnails.map(thumbnail => thumbnail._id),
        publish_date: productInfo.publish_date,
        status: productInfo.status,
        main_product_content: productInfo.main_product_content,
        product_detail: productInfo.product_detail,
        price: productInfo.price,
        currency: productInfo.currency,
        sale: productInfo.sale,
      });
      
      // Add this post to Media so that i can check image is using for which post
      for (let mediaId of productInfo.imageUsingInThisPost) {
        let mediaDoc = await Media.findById(mediaId).exec();
        if (mediaDoc) {
          mediaDoc.uploaded_to_products.push(productCreated._id);
          await mediaDoc.save();
        }
      }
      
      // Check either categories is existed or not and then save this post to category
      if (!productInfo.categories.length) {
        let defaultCategory = await ProductsTaxonomy.findById(process.env.DEFAULT_PRODUCT_CATEGORY_ID).exec();
        defaultCategory.products_id.push(productCreated._id);
        await defaultCategory.save();
      }
      // Push post just created to category
      for (let categoryId of productInfo.categories) {
        let categoryDoc = await ProductsTaxonomy.findById(categoryId).exec();
        if (categoryDoc) {
          categoryDoc.products_id.push(productCreated._id);
          await categoryDoc.save();
        }
      }
      
      // Create tags for this post if not exist and then push this post to tag
      for (let tag of productInfo.tags) {
        if (mongoose.Types.ObjectId.isValid(tag)) {
          let tagDoc = await ProductsTaxonomy.findById(tag);
          if (tagDoc) {
            tagDoc.products_id.push(productCreated._id);
            await tagDoc.save();
          }
        } else {
          let tagDoc = await ProductsTaxonomy.create({
            name: tag,
            slug: regex.toSlug(tag),
            type: 'tag'
          });
          tagDoc.products_id.push(productCreated._id);
          await tagDoc.save();
        }
        
      }
      
      res.json({
        requestSuccessfully: true,
        message: 'Created is successfully.',
        data: productCreated
      });
      
    } catch (error) {
      res.json({
        requestSuccessfully: false,
        message: error.message
      });
    }
    
  }
};

exports.editProduct = async (req, res) => {

};
