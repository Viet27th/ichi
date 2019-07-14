import React from 'react';
import style from './style.css';
import Link from 'next/link';

export class UserFooterComponent extends React.Component {
  render() {
    return (
      <div className="container">
        <div id="footer" className="row mb-4">
          <div className="footer-left col-12 col-md-4 text-center text-md-left mb-3"
            style={{'background-image': 'url(http://demo.vinovathemes.com/prestashop_freshmart/modules/novpagemanage/img/389a58ab0a815f1cc9c6cc9957b018aa.jpg)'}}>
            
            <div id="footer-logo" className="text-center mb-3">
              <Link href="">
                <a className="d-inline-block">
                  <img src="http://images.vinovathemes.com/prestashop_freshmart/icon/logo-footertwo.png" alt=""/>
                </a>
              </Link>
            </div>
            
            <p className="desc text-center text-white">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et
              dolore magna aliqua. Ut enim ad minim veniam
            </p>
          </div>
          
          <div className="footer-right col-12 col-md-8">
            <div className="row up-row mb-5">
              <div className="col-6 col-lg-3">
                <p className="title text-uppercase font-weight-bold">Information</p>
                <ul>
                  <li>
                    <Link href="">
                      <a>Specials</a>
                    </Link>
                  </li>
                  <li>
                    <Link href="">
                      <a>Specials</a>
                    </Link>
                  </li>
                  <li>
                    <Link href="">
                      <a>Specials</a>
                    </Link>
                  </li>
                  <li>
                    <Link href="">
                      <a>Specials</a>
                    </Link>
                  </li>
                </ul>
              </div>
              
              <div className="col-6 col-lg-3">
                <p className="title text-uppercase font-weight-bold">Information</p>
                <ul>
                  <li>
                    <Link href="">
                      <a>Specials</a>
                    </Link>
                  </li>
                  <li>
                    <Link href="">
                      <a>Specials</a>
                    </Link>
                  </li>
                  <li>
                    <Link href="">
                      <a>Specials</a>
                    </Link>
                  </li>
                  <li>
                    <Link href="">
                      <a>Specials</a>
                    </Link>
                  </li>
                </ul>
              </div>
              
              <div className="col-6 col-lg-3">
                <p className="title text-uppercase font-weight-bold">Information</p>
                <ul>
                  <li>
                    <Link href="">
                      <a>Specials</a>
                    </Link>
                  </li>
                  <li>
                    <Link href="">
                      <a>Specials</a>
                    </Link>
                  </li>
                  <li>
                    <Link href="">
                      <a>Specials</a>
                    </Link>
                  </li>
                  <li>
                    <Link href="">
                      <a>Specials</a>
                    </Link>
                  </li>
                </ul>
              </div>
              
              <div className="col-6 col-lg-3">
                <p className="title text-uppercase font-weight-bold">Information</p>
                <ul>
                  <li>
                    <Link href="">
                      <a>Specials</a>
                    </Link>
                  </li>
                  <li>
                    <Link href="">
                      <a>Specials</a>
                    </Link>
                  </li>
                  <li>
                    <Link href="">
                      <a>Specials</a>
                    </Link>
                  </li>
                  <li>
                    <Link href="">
                      <a>Specials</a>
                    </Link>
                  </li>
                </ul>
              </div>
            </div>
            
            <div className="row down-row">
              <div className="left-block col-12 col-md-6">
                <p className="title text-uppercase font-weight-bold">NEWSLETTER</p>
                <p className="content">Sign up for newsletter to receive special offers and exclusive news about
                  FreshMart products</p>
              </div>
              <div className="right-block col-12 col-md-6">
                <p className="title text-uppercase font-weight-bold">CONTACT US</p>
                
                <ul className="contact-info">
                  <li>
                    <span>
                      <i className="fas fa-home"></i>
                    </span>
                    Address : 123 Suspendis matti, Visaosang Building VST District, NY Accums, North American
                  </li>
                  
                  <li>
                    <span>
                      <i className="fas fa-phone-alt"></i>
                    </span>
                    Hot line : 0123-456-78910
                  </li>
                  
                  <li>
                    <span>
                      <i className="far fa-envelope"></i>
                    </span>
                    Email : xuandieu279@gmail.com
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
        
        <style jsx>{style}</style>
      </div>
    );
  }
  
}
