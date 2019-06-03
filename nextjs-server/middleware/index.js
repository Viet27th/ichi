import Router from 'next/router';
import cookie from '../services/cookie.service';

export default {
  /**
   * User will redirect to login page if is not login before and return "true" to expose that Redirect is successful.
   * Otherwise return false to expose that don't redirect, user has been logged in.
   * @param ctx
   * @returns {boolean}
   */
  redirectIfNotAuthenticated: (ctx) => {
    
    if (ctx.res) {
      // If cookie expire or doesn't exists, it will not be sent to server.
      // And if have cookie but can't verify
      // Client will redirect to "login" page
      if (!cookie.verifyJWT(cookie.serverGetCookieByName(ctx.req, 'token'))) {
        // server
        // 303: "See other"
        // No need redirect if it is login/register page.
        // Nếu user chưa login mà vào đường dẫn login thì sẽ ko bị chuyển hướng đến login => ko bị lặp vô hạn
        // Tương tự với register page
        if (!ctx.pathname.startsWith('/login') && !ctx.pathname.startsWith('/register')) {
          ctx.res.writeHead(303, {Location: `/login?previousUrl=${encodeURIComponent(ctx.pathname)}`});
          ctx.res.end();
        }
        return true;
        
      } else {
        // User has been logged in
        return false;
      }
      
    } else {
      // If client doesn't have "token" in cookie or have cookie but can't verify, router is redirect to login page
      if (!cookie.verifyJWT(cookie.clientGetCookieByName('token'))) {
        // In the browser, we just pretend like this never even happened ;)
        // No need redirect if it is login/register page
        if (!ctx.pathname.startsWith('/login') && !ctx.pathname.startsWith('/register')) {
          Router.push(`/login?previousUrl=${encodeURIComponent(ctx.pathname)}`);
        }
        return true;
        
      } else {
        // User has been logged in
        return false;
      }
      
    }
    
  },
  
  /**
   * Return true if user role is in the permission list
   * else false if token verify fail cause expired or fake
   * @param ctx
   * @param arrPermission
   * @returns {*}
   */
  checkPermission: (ctx, arrPermission) => {
    
    if (ctx.res) {
      
      let token = cookie.serverGetCookieByName(ctx.req, 'token');
      let decoded = cookie.verifyJWT(token);
      if (!decoded) {
        return false;
      } else {
        return arrPermission.includes(decoded.user_data.role);
      }
      
    } else {
      let token = cookie.clientGetCookieByName('token');
      let decoded = cookie.verifyJWT(token);
      if (!decoded) {
        return false;
      } else {
        return arrPermission.includes(decoded.user_data.role);
      }
    }
    
  },
  
};
