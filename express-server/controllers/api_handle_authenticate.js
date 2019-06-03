const Users = require('../models/users');
const JWT = require('../services/jwt');
const regex = require('../services/regular-expression');
const expireToken = 8*24*60*60*1000;
/**
 * User login successfully -> token for this user generated and return
 * @param req
 * @param res
 * @returns {Promise<void>}
 */
exports.webLoginTraditional = async (req, res) => {
  let userInfo = req.body;
  if (regex.regexEmail(userInfo.email)) {
    try {
      let query = Users.findOne(
        {
          email: userInfo.email.toLowerCase()
        }
      );
      let user_data = await query.exec(); // Will be "null" if query do not have any match result.
      
      if (user_data) {
        if (user_data.comparePassword(userInfo.password)) {
          if (!user_data.soft_deleted) {
            user_data = JSON.stringify(user_data);
            user_data = JSON.parse(user_data);
            delete user_data.password;
            
            // Create payload
            let payload = {
              user_data,
              expMillisecond: Date.now() + expireToken
            };
            
            //
            let token = JWT.sign(payload, {expiresIn: `${expireToken}`});
            
            res.status(200).json({
              requestSuccessfully: true,
              message: 'Login successfully.',
              data: {
                userInfo: user_data,
                token, // For Client set cookie.
                expMillisecond: Date.now() + expireToken  // For Client set cookie.
              }
            });
            
          } else {
            res.json({
              requestSuccessfully: false,
              message: 'User has been soft deleted. Please contact us!'
            });
          }
        } else {
          res.json({
            requestSuccessfully: false,
            message: `Password doesn't match.`
          });
        }
      } else {
        res.json({
          requestSuccessfully: false,
          message: `User not found. Email doesn't exist.`
        });
      }
    } catch (error) {
      res.json({
        requestSuccessfully: false,
        message: error.message
      });
    }
    
  } else {
    res.status(200).json({
      requestSuccessfully: false,
      message: 'Email is invalid.',
    });
  }
};

exports.webLogoutTraditional = (req, res) => {

};

exports.webRefreshTokenTraditional = async (req, res) => {
  let token = req.headers['x-access-token'] || req.headers['authorization'];
  
  if(typeof token !== 'undefined') {
    try {
      if (token.startsWith('Bearer ')) {
        // Remove Bearer from string
        token = token.slice(7, token.length);
      }
      let decoded = JWT.verify(token);
      let query = Users.findById(decoded.user_data._id).select({
        password: false  // projection:  don't get password field.
      });
      let user_data = await query.lean().exec(); // Will be "null" if query do not have any match result.
      if(user_data) {
        // Create payload
        let payload = {
          user_data,
          expMillisecond: Date.now() + expireToken
        };
        
        //
        let token = JWT.sign(payload, {expiresIn: `${expireToken}`});
        res.json({
          requestSuccessfully: true,
          message: 'Refresh token successfully.',
          data: {
            userInfo: user_data,
            token, // For Client set cookie.
            expMillisecond: Date.now() + expireToken  // For Client set cookie.
          }
        });
      } else {
        res.json({
          requestSuccessfully: false,
          message: `User does't exist. May be deleted on system.`
        });
      }
    } catch (err) {
      res.json({
        requestSuccessfully: false,
        message: err.message
      });
    }
  } else {
    res.status(401).json({
      requestSuccessfully: false,
      message: 'Authorization is not supplied.',
    });
  }
};
