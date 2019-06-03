const Products_Taxonomies = require('../models/products_taxonomies');
const regex = require('../services/regular-expression');

/**
 * req.body must be Object as format:
 * {
 *   	"name": "",
      "slug": "",
      ["parentId": "",]
      "type": "category[,tag]"
 * }
 * @param req
 * @param res
 * @returns {Promise<void>}
 */
exports.createProductCategory = async function (req, res) {
  try {
    let newCategory = req.body;
    
    if (newCategory.parentId) {
      if (newCategory.parentId === '111111111111111111111111') {
        return res.json({
          requestSuccessfully: false,
          message: 'Không thể tạo danh mục con cho mục này.'
        });
      }
      
      let parentDoc = await Products_Taxonomies.findOne({_id: newCategory.parentId}).exec();
      // Update rightOrder of categories which has rightOrder greater than "parent category" rightOrder
      let docsNeedToUpdate = await Products_Taxonomies.find({rightOrder: {$gt: parentDoc.rightOrder}}).exec();
      for (let doc of docsNeedToUpdate) {
        doc.rightOrder += 1;
        await doc.save();
      }
      
      // Create a new category
      newCategory.rightOrder = parentDoc.rightOrder + 1;
      newCategory.deep = parentDoc.deep + 1;
      
      let categoryCreated = await Products_Taxonomies.create(newCategory);
      parentDoc.children_id.push(categoryCreated._id);
      await parentDoc.save();
      
      res.json({
        requestSuccessfully: true,
        message: 'Created is successfully.',
        data: categoryCreated
      });
    } else {
      // Retrieve the docs which has greatest rightOrder
      let getDocHasMaxRightOrder = await Products_Taxonomies.findOne().lean().sort({rightOrder: 'descending'}).exec();
      let maxRightOrder = getDocHasMaxRightOrder.rightOrder;
      // Create a new category
      newCategory.deep = 0;
      newCategory.rightOrder = maxRightOrder + 1;
      let categoryCreated = await Products_Taxonomies.create(newCategory);
      
      res.json({
        requestSuccessfully: true,
        message: 'Created is successfully.',
        data: categoryCreated
      });
      
    }
    
  } catch (error) {
    console.log(error);
    res.status(500).json({
      requestSuccessfully: false,
      message: error.message
    });
  }
  
};

exports.deleteProductCategory = async function (req, res) {
  const defaultCategoryId = '111111111111111111111111';
  const categoryId = req.params.id;
  if (categoryId.toString() === defaultCategoryId) {
    return res.json({
      requestSuccessfully: false,
      message: `You can't delete the default category.`
    });
  }
  
  try {
    let defaultCategory = await Products_Taxonomies.findOne({
      _id: '111111111111111111111111',
      type: 'category'
    }).populate('children_id').exec();
    
    let categoryWillDeleted = await Products_Taxonomies.findOne({
      _id: categoryId,
      type: 'category'
    }).lean().exec();
    
    //@HIGHLIGHT: Get current category with children include descendent.
    //Move products_id of those to default category.
    //and then delete them.
    //Get list category which has "rightOrder" is greater than "rightOrder" of current category which you want to delete
    //in ascending order and then update "rightOrder" of them increase one more unit
    
    /**
     * This function for purpose get current category and its descendant
     * and then return those within one-dimensional array
     * @param {String} categoryId
     * @returns {Promise<Array>} - One-dimensional array which you want to remove
     */
    let getCategoryDescendent = async (categoryId) => {
      let data = [];
      let recursive = async (id) => {
        let category = await Products_Taxonomies.findOne({
          _id: id,
          type: 'category'
        }).populate('children_id').lean().exec();
        // await moveProductsToDefaultCategory(categoryId);
        data.push(category);
        if (category.children_id.length !== 0) {
          for (let child of category.children_id) {
            await recursive(child._id);
          }
        }
      };
      await recursive(categoryId);
      return data;
    };
    
    // Get current category with children include descendent.
    let docsWillBeDelete = await getCategoryDescendent(categoryId);
    // Move products_id of those to default category and then delete them.
    for (let category of docsWillBeDelete) {
      defaultCategory.products_id = [...defaultCategory.products_id, ...category.products_id];
      await defaultCategory.save();
      await Products_Taxonomies.deleteOne({_id: category._id}).exec();
    }
    //Get list category which has "rightOrder" is greater than "rightOrder" of current category which you want to delete
    //in ascending order and then update "rightOrder" of them increase one more unit
    let docsNeedToUpdate = await Products_Taxonomies.find({
      rightOrder: {$gt: categoryWillDeleted.rightOrder}
    }).sort({rightOrder: 'ascending'}).exec();
    
    let ascending = categoryWillDeleted.rightOrder;
    for (let doc of docsNeedToUpdate) {
      doc.rightOrder = ascending;
      ascending++;
      await doc.save();
    }
    
    return res.json({
      requestSuccessfully: true,
      message: 'Deleted is successfully.',
      data: docsWillBeDelete
    });
    
  } catch (error) {
    return res.json({
      requestSuccessfully: false,
      message: error.message
    });
  }
  
};

exports.getAllProductCategoryWithOrder = async function (req, res) {
  Products_Taxonomies.find({type: 'category'}).lean().sort({rightOrder: 'ascending'}).exec(function (error, result) {
    if (error) {
      return res.status(500).json({
        requestSuccessfully: false,
        message: error.message
      });
    }
    res.json({
      requestSuccessfully: true,
      data: result
    });
  });
};

exports.getAllProductsTag = function (req, res) {
  Products_Taxonomies.find({
    type: 'tag'
  }).lean().exec((error, tags) => {
    if(error) {
      console.log(error.message);
      return res.status(500).json({
        requestSuccessfully: false,
        message: error.message
      });
    }
    res.status(200).json({
      requestSuccessfully: true,
      message: '',
      data: tags
    });
  });
  
};

