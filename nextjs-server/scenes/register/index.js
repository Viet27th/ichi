import React from 'react';
import style from './style.css';
import Link from 'next/link';
import Router from 'next/router';
import {AlertComponentEvolution} from '../../components/alert';
import {SpinnerComponentEvolution} from '../../components/spinner';
import {axiosInstance} from '../../services/axios.service';
import {regexEmail} from '../../services/regex.service';
import middleware from '../../middleware';
import {express_api} from '../../services/express_api.service';

class RegisterScene extends React.Component {
  static async getInitialProps(ctx) {
    // If user logged in successfully, can't visit register page. Auto redirect to root url.
    if (!middleware.redirectIfNotAuthenticated(ctx)) {
      if (ctx.res) {
        ctx.res.writeHead(303, {Location: '/'});
        ctx.res.end();
      } else {
        Router.push('/');
      }
    }
    
    return {};
  }
  
  constructor(props) {
    super(props);
    this.state = {
      name: '',
      email: '',
      password: '',
      re_password: '',
      
      contentButton: 'Register',
      showFunnyIcon: false
    };
    
  }
  
  render() {
    return (
      <div id='wrapped-register' style={{backgroundImage: `url('http://localhost:2709/img/login-bg.jpg')`}}>
        <div id='register'>
          <h2>Register</h2>
          
          <input name='name' placeholder='Name' type='text'
                 value={this.state.name}
                 onChange={this.handleChange}
          />
          
          <input name='email' placeholder='E-Mail Address' type='email'
                 value={this.state.email}
                 onChange={this.handleChange}
          />
          
          <input name='password' placeholder='Password' type='password'
                 value={this.state.password}
                 onChange={this.handleChange}
          />
          
          <input name='re_password' placeholder='Retype Password' type='password'
                 value={this.state.re_password}
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
          
          {
            this.state.showFunnyIcon &&
            <div className='text-center'>
              <img src="/static/img/success.gif" alt=""/>
            </div>
          }
          
          <input type='submit' value={this.state.contentButton} onClick={this.handleSubmit}/>
          
          <Link href='/login'><a className='forgot'>Already have an account?</a></Link>
        
        </div>
        
        <style jsx>{style}</style>
      </div>
    );
  }
  
  handleChange = e => {
    let {target} = e;
    this.setState({
      [target.name]: target.value
    });
  };
  
  handleSubmit = () => {
    if (this.state.name.trim() === '') {
      AlertComponentEvolution.show('Name không được để trống.');
    } else if (this.state.name.length < 4) {
      AlertComponentEvolution.show('Name không ít hơn 4 ký tự.');
    } else if (this.state.password.trim() === '') {
      AlertComponentEvolution.show('Password không được để trống.');
    } else if (this.state.password.length < 6) {
      AlertComponentEvolution.show('Password không ít hơn 6 ký tự.');
    } else if (!regexEmail(this.state.email) || this.state.email.trim() === '') {
      AlertComponentEvolution.show('Hãy nhập đúng email.');
    } else if (this.state.password !== this.state.re_password) {
      AlertComponentEvolution.show('Password không khớp.');
    } else {
      let userInfo = {
        name: this.state.name,
        email: this.state.email,
        password: this.state.password
      };
      
      SpinnerComponentEvolution.show();
      axiosInstance().post(express_api.addUserUrl, userInfo).then(result => {
        if (result.data.requestSuccessfully) {
          let countFunny = 5;
          this.interval = setInterval(() => {
            this.setState({
              showFunnyIcon: true,
              contentButton: `Success. Redirect in ${countFunny--}s`
            });
            if (countFunny === 0) {
              clearInterval(this.interval);
              SpinnerComponentEvolution.hide();
              Router.push('/login');
            }
          }, 1000);
        } else {
          SpinnerComponentEvolution.hide();
          AlertComponentEvolution.show(result.data.message);
        }
      }).catch(error => {
        SpinnerComponentEvolution.hide();
        AlertComponentEvolution.show(error.message);
      });
    }
  };
  
}

export default RegisterScene;
