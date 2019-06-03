const Posts_Taxonomies = require('../models/posts_taxonomies');

/**
 * req.body must be Object as format:
 * {
 *   	"name": "",
      "slug": "",
      ["parentId": "",]
      ["deep": "",]
      "type": "category[,tag]"
 * }
 * @param req
 * @param res
 * @returns {Promise<void>}
 */
exports.createPostsCategory = async function (req, res) {
  try {
    let newCategory = req.body;
    
    if (newCategory.parentId) {
      let parentDoc = await Posts_Taxonomies.findOne({_id: newCategory.parentId}).lean().exec();
      // Update rightOrder of categories which has rightOrder greater than "parent category" rightOrder
      let docsNeedToUpdate = await Posts_Taxonomies.find({rightOrder: {$gt: parentDoc.rightOrder}}).exec();
      for (let doc of docsNeedToUpdate) {
        doc.rightOrder += 1;
        await doc.save();
      }
     
      // Create a new category
      delete newCategory.parentId;
      newCategory.rightOrder = parentDoc.rightOrder + 1;
      if(!newCategory.deep) {
        newCategory.deep = parentDoc.deep + 1;
      }
      let categoryCreated = await Posts_Taxonomies.create(newCategory);
      
      res.json({
        requestSuccessfully: true,
        data: categoryCreated
      });
    } else {
      // Retrieve the docs which has greatest rightOrder
      let getDocHasMaxRightOrder = await Posts_Taxonomies.findOne().lean().sort({rightOrder: 'descending'}).exec();
      let maxRightOrder = getDocHasMaxRightOrder.rightOrder;
      // Create a new category
      delete newCategory.parentId;
      newCategory.deep = 0;
      newCategory.rightOrder = maxRightOrder + 1;
      let categoryCreated = await Posts_Taxonomies.create(newCategory);
  
      res.json({
        requestSuccessfully: true,
        data: categoryCreated
      });
      
    }
    
  } catch (error) {
    res.json({
      requestSuccessfully: false,
      message: error.message
    });
  }
  
};

exports.deletePostCategory = function (req, res) {
  const defaultTaxonomyId = '111111111111111111111111';
  //@TODO: Move all postID of current category to default category is "Uncategorized"
  //@TODO: Get rightOrder of current category and update all right category of those
  //categories which has rightOrder is greater than rightOrder of current category
  
};

exports.getAllPostsCategoryWithOrder = async function (req, res) {
  Posts_Taxonomies.find({type: 'category'}).lean().sort({rightOrder: 'ascending'}).exec(function (err, result) {
    res.json(result);
  });
};

