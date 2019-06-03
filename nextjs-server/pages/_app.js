import React from 'react';
import App, {Container} from 'next/app';
import {AlertComponentEvolution} from '../components/alert';
import {ConfirmComponentEvolution} from '../components/confirm';
import {SpinnerComponentEvolution} from '../components/spinner';
import dynamic from 'next/dynamic';
import cookie from '../services/cookie.service';
import WrappedUserPagesComponent from '../components/wrapped_user_pages';
// Component WrappedAdminPagesComponent sẽ chỉ chạy trên client bao gồm cả phần import ở đầu trang
// That mean: When refresh (F5) Admin page, server does not return HTML
const WrappedAdminPagesComponent = dynamic(
  () => import('../components/wrapped_admin_pages'),
  {
    ssr: false
  }
);
import {axiosInstance} from '../services/axios.service';
import {express_api} from '../services/express_api.service';
import {Provider} from 'react-redux';
import withReduxStore from '../redux_store';

class MyApp extends App {
  // In page as login.js, register.js, hell is different with ctx
  static async getInitialProps(hell) {
    const {Component, ctx} = hell;
    let pageProps = {};
    let userProfile = {};
    
    if (Component.getInitialProps) {
      pageProps = await Component.getInitialProps(ctx);
    }
    
    // userProfile is false if user doesn't logged in before or token expired. Otherwise, userProfile is object contains user data
    // If userProfile is not false => token is truth. Refresh token before expire.
    if (ctx.res) {
      userProfile = cookie.verifyJWT(cookie.serverGetCookieByName(ctx.req, 'token'));
    } else {
      userProfile = cookie.verifyJWT(cookie.clientGetCookieByName('token'));
    }
    if (userProfile) {
      hell.ctx.reduxStore.dispatch({
        type: 'SAVE_USER_INFO',
        description: 'Save user information when user login successfully.',
        data: userProfile
      });
    }
    
    return {pageProps, userProfile};
  }
  
  render() {
    const {Component, pageProps, userProfile, reduxStore} = this.props;
    
    let isAdminPages = (this.props.router.route.startsWith('/admin'));
    
    // Token is expired in 8 days, before that 7 day, we will refresh token if user still working on my system.
    // If user doesn't on my system in 7 days, next time visiting must be login
    if (userProfile && typeof window !== 'undefined') {
      if ((userProfile.expMillisecond - Date.now()) < 7 * 24 * 60 * 60 * 1000) {
        axiosInstance().post(express_api.webRefreshTokenTraditionalUrl).then(result => {
          // Set cookie client
          cookie.clientSetCookie('token', result.data.data.token, result.data.data.expMillisecond);
        }).catch(error => {
          console.log(error.message);
        });
      }
    }
    
    if (isAdminPages) {
      return (
        <Container>
          <Provider store={reduxStore}>
            <WrappedAdminPagesComponent>
              <Component {...pageProps}/>
              <style global jsx>{`
              body, #__next {
                min-height: 100vh;
              }
              
              .cursor-pointer {
                cursor: pointer;
              }
              
              a:hover {
                text-decoration: none !important;
              }
              
            `}</style>
            </WrappedAdminPagesComponent>
          </Provider>
        </Container>
      );
    } else {
      return (
        <Container>
          <Provider store={reduxStore}>
            <WrappedUserPagesComponent>
              <Component {...pageProps} />
              <style global jsx>{`
              body, #__next {
                min-height: 100vh;
              }
              
              .cursor-pointer {
                cursor: pointer;
              }
              
              a:hover {
                text-decoration: none !important;
              }
              
            `}</style>
            </WrappedUserPagesComponent>
          </Provider>
        </Container>
      );
    }
    
    
  }
}

export default withReduxStore(MyApp);
