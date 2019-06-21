const mongoose = require('../services/db_connector');

const mediaSchema = new mongoose.Schema({
  uploaded_by: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'Users',
    required: [true, 'Artist is required.']
  },
  // The Products that contains this Media
  uploaded_to_products: [
    {
      type: mongoose.Schema.Types.ObjectId,
      ref: 'Products'
    }
  ],
  // The Posts that contains this Media
  uploaded_to_posts: [
    {
      type: mongoose.Schema.Types.ObjectId,
      ref: 'Posts'
    }
  ],
  
  path: {
    type: String,
    required: [true, 'File path is required.'],
    unique: true,
    trim: true
  },
  media_file_name: {
    type: String,
    required: [true, 'Media file name is required.'],
    unique: true,
    trim: true
  },
  file_type: {
    type: String,
    required: [true, 'File type is required.'],
    enum: ['png', 'PNG', 'jpg', 'JPG', 'mp4', 'MP4', 'jpeg', 'JPEG', 'gif', 'GIF', 'svg', 'SVG'],
    trim: true
  },
  size: {
    type: Number,
    required: [true, 'File size is required.']
  },
  dimensions_width: {
    type: String,
    default: '',
    trim: true
  },
  dimensions_height: {
    type: String,
    default: '',
    trim: true
  },
  alt_text: {
    type: String,
    default: '',
    trim: true
  },
  title: {
    type: String,
    default: '',
    trim: true
  },
  caption: {
    type: String,
    default: '',
    trim: true
  },
  description: {
    type: String,
    default: '',
    trim: true
  },
  md5: {
    type: String,
    trim: true
  },
  meta_data: {
    type: Object
  }
  
}, {
  timestamps: true
});

const Media = mongoose.model('Media', mediaSchema);

module.exports = Media;
