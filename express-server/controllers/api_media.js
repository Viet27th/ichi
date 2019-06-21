const mongoose = require('mongoose');
const Media = require('../models/media');
const Users = require('../models/users');
const regex = require('../services/regular-expression');
const sizeOf = require('image-size');
const fs = require('fs');
const path = require('path');


exports.uploadMedia = async (req, res) => {
  
  /**
   * Create folder to store file if not exist and return file info with path to folder
   * @param {Object} file - Object contain file information and file data type Buffer
   * @param {String} userId - Author Id
   * @returns {Promise<{folderStore: *, fileInfo}>}
   */
  let generateFileInfo = async (file, userId) => {
    let fileInfo = {};
    fileInfo.uploaded_by = userId;
    fileInfo.path = '';
    fileInfo.size = file.size; //Bytes
    fileInfo.alt_text = file.name.substr(0, file.name.lastIndexOf('.'));
    fileInfo.title = file.name.substr(0, file.name.lastIndexOf('.'));
    fileInfo.md5 = file.md5;  // Using to checksum of a file
    
    // Just image file has dimensions
    let extension = file.name.substr((file.name.lastIndexOf('.') + 1));
    fileInfo.file_type = extension;
    if (['png', 'jpg', 'jpeg', 'gif', 'svg'].includes(extension.toLowerCase())) {
      let dimensions = sizeOf(file.data);
      fileInfo.dimensions_width = dimensions.width;
      fileInfo.dimensions_height = dimensions.height;
    }
    
    // Check file name either existed in Database or not to indicated file name
    let fileNameNotDot = file.name.substr(0, file.name.lastIndexOf('.'));
    let mediaIsExisted = await Media.find({media_file_name: fileNameNotDot}).lean().exec();
    if (mediaIsExisted.length) {
      
      fileInfo.media_file_name = `${fileNameNotDot}-${Date.now()}`;
    } else {
      fileInfo.media_file_name = fileNameNotDot;
    }
    
    // Create folder to store if not exist
    let folderStore = path.join(__dirname + '/..' + '/public/store');
    if (!fs.existsSync(folderStore)) {
      fs.mkdirSync(folderStore);
    }
    
    // throw new Error('Hihi Loi cmnr'); // Test catch of function calling it
    
    return {
      fileInfo,
      folderStore
    };
    
  };
  
  
  try {
    
    let userId = res.locals.decoded.user_data._id; // If middleware check authenticate is passed, this variable is available
    
    if (req.files) {
      if (req.files.dp_media instanceof Array) {
        
        for (let file of req.files.dp_media) {
          let {
            fileInfo,
            folderStore
          } = await generateFileInfo(file, userId);  // If generateFileInfo throw an error, catch will be invoked
          
          // Create file
          fs.writeFile(`${folderStore}/${fileInfo.media_file_name}.${fileInfo.file_type}`, file.data, async (error) => {
            if (error)
              throw error;
            fileInfo.path = `store/${fileInfo.media_file_name}.${fileInfo.file_type}`;
            
            await Media.create(fileInfo);
          });
        }
        
        res.json({
          requestSuccessfully: true,
          message: 'Uploaded is successful.'
        });
        
      } else {
        let file = req.files.dp_media;
        
        let {
          fileInfo,
          folderStore
        } = await generateFileInfo(file, userId);
        
        // Create file
        fs.writeFile(`${folderStore}/${fileInfo.media_file_name}.${fileInfo.file_type}`, file.data, async (error) => {
          if (error)
            throw error;
          fileInfo.path = `store/${fileInfo.media_file_name}.${fileInfo.file_type}`;
          
          await Media.create(fileInfo);
          res.json({
            requestSuccessfully: true,
            message: 'Uploaded is successful.'
          });
          
        });
        
      }
    } else {
      res.json({
        requestSuccessfully: true,
        message: 'No file uploaded.'
      });
    }
    
  } catch (error) {
    console.log(error);
    res.json({
      requestSuccessfully: false,
      message: error.message
    });
  }
  
};

exports.getAllMedia = (req, res) => {
  Media.find().lean().sort({createdAt: 'descending'})
  .populate('uploaded_by', 'name')
  .populate('uploaded_to_products', 'slug')
  .populate('uploaded_to_posts', 'slug').exec((error, media) => {
    if (error) {
      return res.status(500).json({
        requestSuccessfully: false,
        message: error.message
      });
    }
    res.json({
      requestSuccessfully: true,
      data: media
    });
  });
};

exports.updateMediaById = async (req, res) => {
  let id = req.params.id;
  let dataToUpdate = req.body;
  if (mongoose.Types.ObjectId.isValid(id)) {
    let mediaDoc = await Media.findById(id).exec();
    if (mediaDoc) {
      let oldFileName = mediaDoc.media_file_name;
      let oldFileType = mediaDoc.file_type;
      
      mediaDoc.path = `store/${dataToUpdate.media_file_name}.${mediaDoc.file_type}`;
      mediaDoc.media_file_name = dataToUpdate.media_file_name;
      mediaDoc.alt_text = dataToUpdate.alt_text;
      mediaDoc.title = dataToUpdate.title;
      mediaDoc.caption = dataToUpdate.caption;
      mediaDoc.description = dataToUpdate.description;
      
      let folderStore = path.join(__dirname + '/..' + '/public/store');
      fs.rename(`${folderStore}/${oldFileName}.${oldFileType}`, `${folderStore}/${mediaDoc.media_file_name}.${oldFileType}`, async (error) => {
        if (error) {
          res.json({
            requestSuccessfully: false,
            message: error.message,
          });
        } else {
          try {
            let newFileCreated = await mediaDoc.save();
            res.json({
              requestSuccessfully: true,
              message: 'Updated is successful.',
              data: newFileCreated
            });
          } catch (error) {
            res.json({
              requestSuccessfully: false,
              message: error.message,
            });
          }
          
        }
        
      });
      
    } else {
      res.json({
        requestSuccessfully: false,
        message: `Media is not found.`
      });
    }
  } else {
    res.json({
      requestSuccessfully: false,
      message: `Format media Id is incorrect.`
    });
  }
  
  
};

exports.deleteMediaById = async (req, res) => {
  let id = req.params.id;
  try {
    let mediaDoc = await Media.findById(id);
    if(mediaDoc) {
      let folderStore = path.join(__dirname + '/..' + '/public/store');
      fs.unlink(`${folderStore}/${mediaDoc.media_file_name}.${mediaDoc.file_type}`, async (error) => {
        if (error) throw error;
        await Media.findByIdAndDelete(id).exec();
        res.json({
          requestSuccessfully: true,
          message: 'Media deleted is successful.'
        });
        
      });
    } else {
      res.json({
        requestSuccessfully: false,
        message: 'Media not found.'
      });
    }
   
    
  } catch (error) {
    res.json({
      requestSuccessfully: false,
      message: error.message
    });
  }
};
