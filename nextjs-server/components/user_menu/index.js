import React from 'react';
import style from './style.css';
import Link from 'next/link';

export class UserMenuComponent extends React.Component {
  render() {
    return (
      <div id="menu">
        
        <i id="toggle-mobile-left-sidebar" className="fas fa-bars float-left d-block d-md-none"
          onClick={this.handleShowMobileLeftSidebar}></i>
        
        <ul className="left-content">
          <li>
            <Link href="" prefetch>
              <a className="d-block active">Trang chủ</a>
            </Link>
          </li>
          <li className="has-sub" onClick={this.handleToggleActiveClass}>
            <a href="javascript:void(0)" className="d-block">Sản phẩm</a>
            <ul className="sub-menu">
              <li>
                <Link href="#">
                  <a className="d-block">Hoa quả</a>
                </Link>
              </li>
              <li className="has-sub" onClick={this.handleToggleActiveClass}>
                <a href="javascript:void(0)" className="d-block">Nước trái cây</a>
                <ul className="sub-menu">
                  <li>
                    <Link href="#">
                      <a className="d-block">Hoa quả</a>
                    </Link>
                  </li>
                  <li className="has-sub" onClick={this.handleToggleActiveClass}>
                    <a href="javascript:void(0)" className="d-block">Nước trái cây</a>
                    <ul className="sub-menu">
                      <li>
                        <Link href="#">
                          <a className="d-block">Hoa quả</a>
                        </Link>
                      </li>
                      <li>
                        <Link href="#">
                          <a className="d-block">Nước trái cây</a>
                        </Link>
                      </li>
                    </ul>
                  </li>
                </ul>
              </li>
            </ul>
          </li>
          <li>
            <Link href="" prefetch>
              <a className="d-block">Blog</a>
            </Link>
          </li>
          <li>
            <Link href="" prefetch>
              <a className="d-block">About us</a>
            </Link>
          </li>
        </ul>
        
        <div id="main-logo" className="cursor-pointer">
          <Link prefetch href="/">
            <a className="d-block">
              <img src="http://localhost:2709/store/logo-1.png" alt=""/>
            </a>
          </Link>
        </div>
        
        <ul className="right-content d-none d-md-block">
          <li>
            <div className="wrapper-search">
              <div className="search-icon">
                <i className="fab fa-searchengin"></i>
              </div>
              <input id="input-search" type="text" placeholder="Search"/>
            </div>
          </li>
          <li className="cursor-pointer">
            <i id="basket-custom" className="fas fa-shopping-basket"></i>
          </li>
          <li id="toggle-block-account-info" className="cursor-pointer"
            onClick={e => e.currentTarget.classList.toggle('active')}>
            <i id="bar-custom" className="fas fa-bars"></i>
            <ul>
              <li>
                <i className="fas fa-cogs"></i>
                <Link href="#">
                  <a className="text-capitalize d-block">My account</a>
                </Link>
              </li>
              <li>
                <i className="fas fa-sign-out-alt"></i>
                <Link href="#">
                  <a className="text-capitalize d-block">Sign in</a>
                </Link>
              </li>
              <li>
                <i className="fas fa-user-plus"></i>
                <Link href="#">
                  <a className="text-capitalize d-block">Register account</a>
                </Link>
              </li>
            </ul>
          </li>
        </ul>
        
        <div id="sticky-menu-bottom-mobile" className="d-md-none">
          <span>
            <i className="fas fa-home"></i>
              Home
          </span>
          <span>
            <i data-highlight="highlight" className="fas fa-shopping-basket"></i>
          </span>
          <span>
            <i className="fas fa-search"></i>
              Search
          </span>
        </div>
        
        <style jsx>{style}</style>
      </div>
    );
  }
  
  /**
   * Phân biệt React event và native event
   * https://medium.com/@ericclemmons/react-event-preventdefault-78c28c950e46
   * https://gideonpyzer.dev/blog/2018/12/29/event-propagation-react-synthetic-events-vs-native-events/
   * https://fortes.com/2018/react-and-dom-events/
   * @param e
   */
  handleToggleActiveClass = (e) => {
    e.stopPropagation();
    e.target.parentElement.classList.toggle('active');
  };
  
  handleShowMobileLeftSidebar = (e) => {
    let leftSidebar = document.querySelector('#menu .left-content');
    leftSidebar.classList.toggle('active');
  };
  
}
