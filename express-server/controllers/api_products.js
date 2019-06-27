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
        slug: regex.toSlug(productInfo.slug),
        author: userId,
        last_edited_by: userId,
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
      } else {
        // Push post just created to category
        for (let categoryId of productInfo.categories) {
          let categoryDoc = await ProductsTaxonomy.findById(categoryId).exec();
          if (categoryDoc) {
            categoryDoc.products_id.push(productCreated._id);
            await categoryDoc.save();
          }
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
      
    } catch (e) {
      res.json({
        requestSuccessfully: false,
        message: e.message
      });
    }
    
  }
};

exports.editProduct = async (req, res) => {
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
      let productUpdated = await Products.findOneAndUpdate({slug: productInfo.oldSlug}, {
        name: productInfo.name,
        slug: regex.toSlug(productInfo.slug),
        last_edited_by: userId,
        feature_image: productInfo.feature_image._id,
        thumbnails: productInfo.thumbnails.map(thumbnail => thumbnail._id),
        publish_date: productInfo.publish_date,
        status: productInfo.status,
        main_product_content: productInfo.main_product_content,
        product_detail: productInfo.product_detail,
        price: productInfo.price,
        currency: productInfo.currency,
        sale: productInfo.sale,
      }, {
        new: true,
        runValidators: true
      }).lean().exec();
      
      // Tìm tất cả các media đang được dùng trong post này trước đây để xoá
      let media = await Media.find({uploaded_to_products: productUpdated._id}).exec();
      for (let aMedia of media) {
        aMedia.uploaded_to_products = aMedia.uploaded_to_products.filter(el => el.toString() !== productUpdated._id.toString());
        await aMedia.save();
      }
      
      // Update post này vào các media đang dùng
      for (let mediaId of productInfo.imageUsingInThisPost) {
        let mediaDoc = await Media.findById(mediaId).exec();
        if (mediaDoc) {
          mediaDoc.uploaded_to_products.push(productUpdated._id);
          await mediaDoc.save();
        }
      }
      
      // Tìm các Product Taxonomy mà post này từng thuộc về trước đây để xoá
      let products = await ProductsTaxonomy.find({
        products_id: productUpdated._id
      }).exec();
      for (let product of products) {
        product.products_id = product.products_id.filter(el => el.toString() !== productUpdated._id.toString());
        await product.save();
      }
      
      // Update post này vào các Product category mới hiện tại
      if (!productInfo.categories.length) {
        let defaultCategory = await ProductsTaxonomy.findById(process.env.DEFAULT_PRODUCT_CATEGORY_ID).exec();
        defaultCategory.products_id.push(productUpdated._id);
        await defaultCategory.save();
      } else {
        // Push post just created to category
        for (let categoryId of productInfo.categories) {
          let categoryDoc = await ProductsTaxonomy.findById(categoryId).exec();
          if (categoryDoc) {
            categoryDoc.products_id.push(productUpdated._id);
            await categoryDoc.save();
          }
        }
      }
      
      // Create tags for this post if not exist and then push this post to tag
      // Update post này vào các Product tag mới hiện tại.
      for (let tag of productInfo.tags) {
        if (mongoose.Types.ObjectId.isValid(tag)) {
          let tagDoc = await ProductsTaxonomy.findById(tag);
          if (tagDoc) {
            tagDoc.products_id.push(productUpdated._id);
            await tagDoc.save();
          }
        } else {
          let tagDoc = await ProductsTaxonomy.create({
            name: tag,
            slug: regex.toSlug(tag),
            type: 'tag'
          });
          tagDoc.products_id.push(productUpdated._id);
          await tagDoc.save();
        }
        
      }
      
      res.json({
        requestSuccessfully: true,
        message: 'Updated is successfully.',
        data: productUpdated
      });
      
    } catch (e) {
      res.json({
        requestSuccessfully: false,
        message: e.message
      });
    }
  }
  
};

exports.getProductBySlug = async (req, res) => {
  let productSlug = req.params.slug;
  
  try {
    let productDoc = await Products.findOne({slug: productSlug})
    .populate('author')
    .populate('last_edited_by')
    .populate('feature_image')
    .populate('thumbnails')
    .lean().exec();
    
    if (productDoc) {
      let belongToCategories = await ProductsTaxonomy.find({
        products_id: productDoc._id,
        type: 'category'
      }).lean().exec();
      
      let belongToTags = await ProductsTaxonomy.find({
        products_id: productDoc._id,
        type: 'tag'
      }).lean().exec();
      
      productDoc.belongToCategories = belongToCategories;
      productDoc.belongToTags = belongToTags;
      
      res.json({
        requestSuccessfully: true,
        message: '',
        data: productDoc
      });
    } else {
      res.json({
        requestSuccessfully: false,
        message: 'Product is not found'
      });
    }
    
  } catch (e) {
    res.json({
      requestSuccessfully: false,
      message: e.message
    });
  }
  
};

exports.getAllProduct = async (req, res) => {
  Products.paginate({}, {
    page: req.query.page,
    limit: req.query.limit,
    populate: ['author', 'last_edited_by', 'feature_image', 'thumbnails']
  }).then(result => {
    res.json({
      requestSuccessfully: true,
      message: 'Request is successfully',
      data: result
    });
  }).catch(e => {
    res.json({
      requestSuccessfully: false,
      message: e.message
    });
  });
};

exports.deleteProductById = async (req, res) => {
  let productId = req.body.id;
  try {
    // Delete post
    let productDeleted = await Products.findOneAndDelete({_id: productId}).exec();
    
    // Tìm tất cả các media đang được dùng trong post này trước đây để xoá
    let media = await Media.find({uploaded_to_products: productDeleted._id}).exec();
    for (let aMedia of media) {
      aMedia.uploaded_to_products = aMedia.uploaded_to_products.filter(el => el.toString() !== productDeleted._id.toString());
      await aMedia.save();
    }
    
    // Tìm tất cả các Product taxonomies đang chứa post này trước đây để xoá
    let products = await ProductsTaxonomy.find({
      products_id: productDeleted._id
    }).exec();
    for (let product of products) {
      product.products_id = product.products_id.filter(el => el.toString() !== productDeleted._id.toString());
      await product.save();
    }
  
    res.json({
      requestSuccessfully: true,
      message: 'Deleted is successful',
      data: productDeleted
    });
    
  } catch (e) {
    
    res.json({
      requestSuccessfully: false,
      message: e.message
    });
    
  }
  
};
