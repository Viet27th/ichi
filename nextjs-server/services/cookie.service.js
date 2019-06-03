import jwt from 'jsonwebtoken';

export default {
  /**
   *
   * @param {string} value - token value
   * @param {string|number} expiredTime - Millisecond from 1970 to expire date
   */
  clientSetCookie: (cname, value, expiredTime) => {
    let d = new Date();
    d.setTime(expiredTime);
    let expire = d.toUTCString();
    document.cookie = `${cname}=${value};expires=${expire};path=/`;
  },
  
  /**
   * Client get cookie by cookie name
   * @param cname - Cookie name
   * @returns {*}
   */
  clientGetCookieByName: (cname) => {
    let name = cname + '=';
    let ca = document.cookie.split(';');
    for (let i = 0; i < ca.length; i++) {
      let c = ca[i];
      while (c.charAt(0) === ' ') {
        c = c.substring(1);
      }
      if (c.indexOf(name) === 0) {
        return c.substring(name.length, c.length);
      }
    }
    return false;
  },
  
  /**
   * Get cookie by name from client request.
   * @param req - Request come from client
   * @param {string} cname - Cookie name
   * @returns {*}
   */
  serverGetCookieByName: (req, cname) => {
    if (req.headers.cookie) {
      let name = cname + '=';
      let ca = req.headers.cookie.split(';');
      for (let i = 0; i < ca.length; i++) {
        let c = ca[i];
        while (c.charAt(0) === ' ') {
          c = c.substring(1);
        }
        if (c.indexOf(name) === 0) {
          return c.substring(name.length, c.length);
        }
      }
    }
    return false;
  },
  
  /**
   *
   * @param token
   * @returns {*} - Return token value if token true. Otherwise return false
   */
  verifyJWT: (token) => {
    const verifyOptions = {
      algorithm: ['RS256'], // verify alg mismatch.
      ignoreExpiration: false // verify validate the expiration of the token.
    };
  
    try {
      return jwt.verify(token, process.env.publicKey, verifyOptions);
    } catch (error) {
      return false;
    }
  }
  
};
