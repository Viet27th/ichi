const Users = require('../models/users');
const regex = require('../services/regular-expression');

/**
 * Create a new user
 * @param req
 * @param res
 * @returns {*|Promise<any>}
 */
exports.addUser = (req, res) => {
  let userInfo = req.body;
  if (regex.regexEmail(userInfo.email)) {
    Users.findOne().where('email').equals(userInfo.email).select({
      password: false
    }).lean().exec((error, user) => {
      if (error) {
        console.log('Our err:', error);
        res.status(200).json({
          requestSuccessfully: false,
          message: error.message,
        });
      }
      // user is null if not found or is object if have a match result.
      if (user) {
        res.status(200).json({
          requestSuccessfully: false,
          message: 'Email is existed.',
        });
      } else {
        // Create a new user.
        let userDocument = {...userInfo};
        
        let user = new Users(userDocument);
        user.save(error => {
          if (error) {
            console.log('Our err:', error);
            return res.status(200).json({
              requestSuccessfully: false,
              message: error.message,
            });
          }
          
          res.status(200).json({
            requestSuccessfully: true,
            message: 'Created is successfully'
          });
          
        });
      }
      
    });
    
  } else {
    res.status(200).json({
      requestSuccessfully: false,
      message: 'Email is invalid.',
    });
  }
};

/**
 * Get an user not include password
 * lean(): increase performance. https://mongoosejs.com/docs/api.html#query_Query-lean
 * @param req
 * @param res
 */
exports.getUserById = (req, res) => {
  const id = req.params.id;
  
  Users.findById(id).select({
    password: false  // projection:  don't get password field.
  }).lean().exec((error, user) => {
    if (error) {
      console.log('Our err:', error);
      return res.status(200).json({
        requestSuccessfully: false,
        message: error.message
      });
    }
    if (user) {
      res.status(200).json({
        requestSuccessfully: true,
        message: 'Get user successfully.',
        data: user
      });
    } else {
      res.status(200).json({
        requestSuccessfully: false,
        message: 'User not found.'
      });
    }
    
  });
};

/**
 *
 * @param req
 * @param res
 */
exports.getAllUser = async (req, res) => {
  Users.paginate({}, {
    page: req.query.page,
    limit: req.query.limit,
    select: {password: false}
  }).then(result => {
    res.status(200).json({
      requestSuccessfully: true,
      message: 'Request is Successfully.',
      data: result
    });
  }).catch(error => {
    console.log('Our err:', error);
    res.status(200).json({
      requestSuccessfully: false,
      message: error.message
    });
  });
  
};

/**
 * Update user by Id and return user has been updated.
 * Options:
 * new: bool - true to return the modified document rather than the original.
 * runValidators: true - Default is false, do not validation with update action. https://stackoverflow.com/questions/15627967/why-mongoose-doesnt-validate-on-update
 * @param req
 * @param res
 */
exports.updateUserById = (req, res) => {
  const userInfo = req.body;
  // Don't change email, createdAt
  delete userInfo.email;
  delete userInfo.createdAt;
  
  Users.findOneAndUpdate({_id: userInfo.id}, userInfo, {new: true, runValidators: true}, (error, userUpdated) => {
    if (error) {
      console.log('Our err:', error);
      return res.status(200).json({
        requestSuccessfully: false,
        message: error.message
      });
    }
    
    if (userUpdated) {
      // Can't delete property of Object, which is generate from Prototype. Because, Object doesn't have property of itself.
      userUpdated = JSON.stringify(userUpdated);
      userUpdated = JSON.parse(userUpdated);
      delete userUpdated.password;
      
      res.status(200).json({
        requestSuccessfully: true,
        message: 'Updated successfully',
        data: userUpdated
      });
    } else {
      res.status(200).json({
        requestSuccessfully: false,
        message: 'User not found.'
      });
    }
  });
};

/**
 * Delete an user.
 * @param req
 * @param res
 */
exports.deleteUserById = (req, res) => {
  const id = req.params.id;
  Users.deleteOne().where('_id').equals(id).setOptions({single: true}).exec((error, user) => {
    if (error) {
      console.log('Our err:', error);
      return res.status(200).json({
        requestSuccessfully: false,
        message: error.message
      });
    }
    if (user.deletedCount) {
      return res.status(200).json({
        requestSuccessfully: true,
        message: 'Deleted Successfully.',
      });
    } else {
      return res.status(200).json({
        requestSuccessfully: false,
        message: `User doesn't exist.`,
      });
    }
    
  });
};

/**
 * Soft delete.
 * Just update "soft_deleted" field = true
 * @param req
 * @param res
 */
exports.softDeleteUserById = (req, res) => {
  const userId = req.body.id;
  Users.findOneAndUpdate({_id: userId}, {soft_deleted: true}, {
    new: true,
    runValidators: true
  }, (error, userUpdated) => {
    if (error) {
      console.log('Our err:', error);
      return res.status(200).json({
        requestSuccessfully: false,
        message: error.message
      });
    }
    
    if (userUpdated) {
      // Can't delete property of Object, which is generate from Prototype. Because, Object doesn't have property of itself.
      userUpdated = JSON.stringify(userUpdated);
      userUpdated = JSON.parse(userUpdated);
      delete userUpdated.password;
      
      res.status(200).json({
        requestSuccessfully: true,
        message: 'Soft delete successfully',
        data: userUpdated
      });
    } else {
      res.status(200).json({
        requestSuccessfully: false,
        message: 'User not found.'
      });
    }
  });
};

/**
 * Undo Soft delete.
 * Just update "soft_deleted" field = false
 * @param req
 * @param res
 */
exports.undoSoftDeleteUserById = (req, res) => {
  const userId = req.body.id;
  Users.findOneAndUpdate({_id: userId}, {soft_deleted: false}, {
    new: true,
    runValidators: true
  }, (error, userUpdated) => {
    if (error) {
      console.log('Our err:', error);
      return res.status(200).json({
        requestSuccessfully: false,
        message: error.message
      });
    }
    
    if (userUpdated) {
      // Can't delete property of Object, which is generate from Prototype. Because, Object doesn't have property of itself.
      userUpdated = JSON.stringify(userUpdated);
      userUpdated = JSON.parse(userUpdated);
      delete userUpdated.password;
      
      res.status(200).json({
        requestSuccessfully: true,
        message: 'Undo soft delete successfully',
        data: userUpdated
      });
    } else {
      res.status(200).json({
        requestSuccessfully: false,
        message: 'User not found.'
      });
    }
  });
};
