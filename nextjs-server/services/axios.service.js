import axios from 'axios';
import cookie from './cookie.service';
import {AlertComponentEvolution} from '../components/alert';
import {LoginComponentEvolution} from '../components/login';
import Router from 'next/router';
import {express_api} from './express_api.service';
import https from 'https';

/**
 *
 * @param req - if request come from Nextjs server, we've merely pass this params
 * @returns {AxiosInstance}
 */
export const axiosInstance = function (req) {
  let token;
  if (req) {
    token = cookie.serverGetCookieByName(req, 'token');
  } else {
    token = cookie.clientGetCookieByName('token');
  }
  
  let axiosInstance = axios.create({
    timeout: 9000,
    httpsAgent: new https.Agent({  
      rejectUnauthorized: false
    })
  });
  axiosInstance.defaults.headers.common['Authorization'] = `Bearer ${token}`;
  
  /**
   * Add a request interceptor to verify before send request
   * Request never sent if token is invalid
   */
  axiosInstance.interceptors.request.use(function (config) {
    // Hàm này được gọi trước khi request được gửi đi.
    // Do something before request is sent, if it's ok, you must be return "config" otherwise request never be sent
    
    let userProfile = cookie.verifyJWT(token);
    
    // Gọi mội refresh token nếu token của user sắp hết hạn.
    // Hành động này config ở 2 nơi:
    // 1: Xảy ra khi gọi request
    // 2: Xảy ra khi chuyển router, đã config trong _app.js
    // Token is expired in 8 days, before that 7 day, we will refresh token if user still working on my system.
    // If user doesn't on my system in 7 days, next time visiting must be login
    if (userProfile && typeof window !== 'undefined') {
      if ((userProfile.expMillisecond - Date.now()) < 7 * 24 * 60 * 60 * 1000) {
        axios.post(express_api.webRefreshTokenTraditionalUrl, {}, {
          headers: {'Authorization': `Bearer ${token}`},
        }).then(result => {
          // Set cookie client
          cookie.clientSetCookie('token', result.data.data.token, result.data.data.expMillisecond);
        }).catch(error => {
          console.log(error.message);
        });
      }
    }
    
    //
    // Thường thì khi gửi request sẽ không cần login => config.needLogin = false or undefined.
    // Nếu request nào cần login thì phải gửi thêm config trong request một tham số là needLogin = true.
    let needLogin = config.hasOwnProperty('needLogin') && config.needLogin;
    if(needLogin) {
      // Nếu user đã login.
      if(userProfile) {
        return config;
      } else {
        //Nếu user đã hết hạn hoặc chưa login khi gửi request thì sẽ hiện lên form login tại chỗ.
        // Ném ra 1 lỗi và sẽ được bắt ở catch khi gửi request. Giống như việc request trả về status khác 200.
        // Catch trong mỗi request sẽ chạy khi status response khác 200,
        // hoặc then ném ra 1 lỗi, hoặc ở đây (trước khi request) ném ra 1 lỗi
        // throw new Error('token error');
        LoginComponentEvolution.show();
      }
    } else {
      return config;
    }
    
  }, function (error) {
    // Không biết hàm này trigger khi nào
    // Do something with request error
    console.log('axios handle request error: ', error);
    return Promise.reject(error);
  });
  
  // Add a response interceptor
  axiosInstance.interceptors.response.use(function (response) {
    // Hàm này chạy khi có response trả về với status = 200, hàm này chạy trước rồi đến then.
    // Do something with response data
    return response;
  }, function (error) {
    // Hàm này được gọi khi request trả về status khác 200 tức là response lỗi.
    // Sau khi hàm này chạy, catch mới chạy. Catch cũng bắt lỗi với các response có status khác 200.
    // Do something with response error
    return Promise.reject(error);
  });
  
  return axiosInstance;
};
