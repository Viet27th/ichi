import React from 'react';
import style from './style.css';
import Link from 'next/link';
import Router from 'next/router';
import {axiosInstance} from '../../services/axios.service';
import {regexEmail} from '../../services/regex.service';
import {AlertComponentEvolution} from '../../components/alert';
import {SpinnerComponentEvolution} from '../../components/spinner';
import cookie from '../../services/cookie.service';
import middleware from '../../middleware';
import {express_api} from '../../services/express_api.service';

class LoginScene extends React.Component {
  static async getInitialProps(ctx) {
    let { query } = ctx;
    // If user logged in successfully, can't visit login page. Auto redirect to root url.
    if(!middleware.redirectIfNotAuthenticated(ctx)) {
      if(ctx.res) {
        ctx.res.writeHead(303, {Location: '/'});
        ctx.res.end();
      } else {
        Router.push('/');
      }
    }
    
    return { query };
  }
  
  constructor(props) {
    super(props);
    this.state = {
      email: '',
      password: ''
    };
  }
  
  render() {
    return (
      <div id='wrapped-login'>
        <div id='login' >
          <h2>Login</h2>
          <input name='email' placeholder='Email' type='text'
            value={this.state.email}
            onChange={this.handleChange}
          />
          <input name='password' placeholder='Password' type='password'
            value={this.state.password}
            onChange={this.handleChange}
          />
          
          <div className='social pt-5 pb-3 d-flex justify-content-center align-items-center'>
            <span className='twitter cursor-pointer'>
              <i className="fab fa-twitter"></i>
            </span>
            <span className='facebook cursor-pointer'>
              <i className="fab fa-facebook-f"></i>
            </span>
            <span className='google-plus cursor-pointer'>
              <i className="fab fa-google-plus-g"></i>
            </span>
            <span className='youtube cursor-pointer'>
              <i className="fab fa-github"></i>
            </span>
          </div>
          
          <input type='submit' value='Login' onClick={this.handleSubmit}/>
          <Link href='/register'><a className='forgot'>Don't have an account?</a></Link>
        </div>
       
        <style jsx>{style}</style>
      </div>
    );
  };
  
  /**
   * Refer: https://medium.freecodecamp.org/what-i-wish-i-knew-when-i-started-to-work-with-react-js-3ba36107fd13
   * @param e
   */
  handleChange = e => {
    let {target} = e;
    this.setState({
      [target.name]: target.value
    });
  };
  
  handleSubmit = () => {
    if (!regexEmail(this.state.email) || this.state.email.trim() === '') {
      AlertComponentEvolution.show('Email không chính xác.');
    } else if (this.state.password.trim() === '') {
      AlertComponentEvolution.show('Password không được để trống.');
    } else {
      SpinnerComponentEvolution.show();
      axiosInstance().post(express_api.webLoginTraditionalUrl, {
        email: this.state.email,
        password: this.state.password
      }).then(result => {
        SpinnerComponentEvolution.hide();
        if (result.data.requestSuccessfully) {
       
          // Set cookie client
          cookie.clientSetCookie('token',result.data.data.token, result.data.data.expMillisecond);
          
          // After logged in successfully, redirect to previous url
          if(this.props.query.previousUrl) {
            Router.push(this.props.query.previousUrl);
          } else {
            Router.push('/');
          }
        } else {
          AlertComponentEvolution.show(result.data.message);
        }
      }).catch(error => {
        SpinnerComponentEvolution.hide();
        console.log(error);
      });
    }
  };
  
}

export default LoginScene;
