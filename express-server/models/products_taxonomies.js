const mongoose = require('../services/db_connector');

/**
 * Khi thêm 1 record, phải xác định được độ sâu và thứ tự bên phải của nó
 * Ví dụ: Khi thêm 1 category B vào sau 1 category A thì sẽ có "deep" của A
 * Khi này Deep của B sẽ bằng Deep của A + 1 và rightOrder = rightOrder của A +1 đồng thời các rightOrder của
 * tất cả các category có rightOrder lớn hơn rightOrder của A cũng sẽ phải update thành +1 đơn vị.
 * Nếu category B ko nằm dưới category nào thì deep sẽ bằng 0 và rightOrder = rightOrder của thằng lớp nhất + 1
 * Dựa và giá trị "rightOrder" và "deep", sử dụng query "order by" ta có thể hiển thị đúng thứ tự của cây với indentation corresponding
 * Không lưu cha con ở đây vì ko cần thiết do chỉ sử dụng với mục đích hiển thị
 */
const productTaxonomiesSchema = new mongoose.Schema({
  name: {
    type: String,
    required: [true, 'Taxonomy name is required.'],
    trim: true
  },
  slug: {
    type: String,
    unique: true,
    required: [true, 'Taxonomy slug is required.'],
    lowercase: true,
    trim: true
  },
  type: {
    type: String,
    required: [true, 'Taxonomy type is required.'],
    enum: ['category', 'tag'],
  },
  children_id: [
    {
      type: mongoose.Schema.Types.ObjectId,
      ref: 'Products_Taxonomies'
    }
  ],
  products_id: [
    {
      type: mongoose.Schema.Types.ObjectId,
      ref: 'Products'
    }
  ],
  deep: {
    type: Number
  },
  rightOrder: {
    type: Number
  },
  meta_data: Object
}, {
  timestamps: true
});

const Products_taxonomies = mongoose.model('Products_Taxonomies', productTaxonomiesSchema);

/**
 * Create default category called "uncategorized", which should never be deleted after that.
 *
 */
Products_taxonomies.findOneOrCreate({slug: 'uncategorized'}, {
  _id: '111111111111111111111111',
  name: 'Uncategorized',
  slug: 'uncategorized',
  type: 'category',
  deep: 0,
  rightOrder: 0
}).then(result => {
  console.log(`Created default Product's taxonomy is successfully with Id: ${result._id}.`);
}).catch(error => {
  console.log(error);
});

module.exports = Products_taxonomies;
