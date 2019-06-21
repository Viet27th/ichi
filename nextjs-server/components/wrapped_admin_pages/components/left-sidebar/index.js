import React from 'react';
import style from './style.css';
import Link from 'next/link';
import {connect} from 'react-redux';
import {withRouter} from 'next/router';

class LeftSidebarComponent extends React.Component {
  constructor(props) {
    super(props);
  }
  
  render() {
    let user_data = this.props.state.rootScreen.userInfo.user_data;
    let pathname = this.props.router.pathname;
    
    return (
      <div>
        <div id="sidebar" className="sidebar">
          
          <ul className="nav">
            <li className="nav-profile" onClick={LeftSidebarComponent.expandProfile} data-target="#v-profile">
              <a href="javascript:void(0);">
                <div className="cover with-shadow">
                  <img className='w-100' src={user_data.meta_data.left_sidebar_background}>
                  </img>
                </div>
                <div className="image">
                  <img src={user_data.avatar} alt=""/>
                </div>
                <div className="info">
                  <b className="caret pull-right"></b>
                  {user_data.name}
                  <small>{user_data.email}</small>
                </div>
              </a>
            </li>
            <li>
              <ul id='v-profile' className="nav nav-profile">
                <li><a href="javascript:void(0);"><i className="fa fa-cog"></i> Settings</a></li>
                <li><a href="javascript:void(0);"><i className="fa fa-pencil-alt"></i> Send Feedback</a></li>
                <li><a href="javascript:void(0);"><i className="fa fa-question-circle"></i> Helps</a></li>
              </ul>
            </li>
          </ul>
          
          <ul className="nav">
            <li className="nav-header">Navigation</li>
            
            <li className={pathname === '/admin' ? 'active' : ''}>
              <Link prefetch href='/admin'>
                <a>
                  <i className="fa fa-th-large"></i>
                  <span>Dashboard</span>
                </a>
              </Link>
            </li>
  
            <li className={pathname === '/admin/media' ? 'active' : ''}>
              <Link prefetch href='/admin/media'>
                <a>
                  <i className="fa fa-image"></i>
                  <span>Media</span>
                </a>
              </Link>
            </li>
  
            <li
              onClick={this.handleDropdown}
              className={`has-sub ${pathname === '/admin/create-product' || pathname === '/admin/products' ? 'active' : ''}`}>
              <a href="javascript:void(0);">
                <b className="caret"></b>
                <i className="fas fa-seedling"></i>
                <span>Products</span>
              </a>
    
              <ul className="sub-menu">
                <li className={pathname === '/admin/products' ? 'active' : ''}>
                  <Link prefetch href='/admin/products'>
                    <a>All Products</a>
                  </Link>
                </li>
      
                <li className={pathname === '/admin/create-product' ? 'active' : ''}>
                  <Link prefetch href='/admin/create-product'>
                    <a>Add New <i className="fa fa-paper-plane text-theme"></i></a>
                  </Link>
                </li>
    
              </ul>
  
            </li>
            
            <li
              onClick={this.handleDropdown}
              className={`has-sub ${pathname === '/admin/create-post' || pathname === '/admin/posts' ? 'active' : ''}`}>
              <a href="javascript:void(0);">
                <b className="caret"></b>
                <i className="fa fa-gem"></i>
                <span>Posts</span>
              </a>
              
              <ul className="sub-menu">
                <li className={pathname === '/admin/posts' ? 'active' : ''}>
                  <Link prefetch href='/admin/posts'>
                    <a>All Post</a>
                  </Link>
                </li>
                
                <li className={pathname === '/admin/create-post' ? 'active' : ''}>
                  <Link prefetch href='/admin/create-post'>
                    <a>Add New <i className="fa fa-paper-plane text-theme"></i></a>
                  </Link>
                </li>
              
              </ul>
            
            </li>
            
            {/*<li className="has-sub active">*/}
            {/*<a href="javascript:void(0);">*/}
            {/*<b className="caret"></b>*/}
            {/*<i className="fa fa-align-left"></i>*/}
            {/*<span>Menu Level</span>*/}
            {/*</a>*/}
            {/*<ul className="sub-menu">*/}
            {/*<li className="has-sub active">*/}
            {/*<a href="javascript:void(0);">*/}
            {/*<b className="caret"></b>*/}
            {/*Menu 1.1*/}
            {/*</a>*/}
            {/*<ul className="sub-menu">*/}
            {/*<li className="has-sub active">*/}
            {/*<a href="javascript:void(0);">*/}
            {/*<b className="caret"></b>*/}
            {/*Menu 2.1*/}
            {/*</a>*/}
            {/*<ul className="sub-menu">*/}
            {/*<li><a href="javascript:void(0);">Menu 3.1</a></li>*/}
            {/*<li><a href="javascript:void(0);">Menu 3.2</a></li>*/}
            {/*</ul>*/}
            {/*</li>*/}
            {/*<li><a href="javascript:void(0);">Menu 2.2</a></li>*/}
            {/*<li><a href="javascript:void(0);">Menu 2.3</a></li>*/}
            {/*</ul>*/}
            {/*</li>*/}
            {/*<li><a href="javascript:void(0);">Menu 1.2</a></li>*/}
            {/*<li>*/}
            {/*<Link prefetch href="/admin/post-list">*/}
            {/*<a>Menu 1.3</a>*/}
            {/*</Link>*/}
            {/*</li>*/}
            {/*</ul>*/}
            {/*</li>*/}
            
            <li className="has-sub">
              <a href="javascript:void(0);">
                <b className="caret pull-right"></b>
                <span className="badge pull-right">10</span>
                <i className="fa fa-hdd"></i>
                <span>Email <span className="label label-theme">NEW</span></span>
              </a>
              <ul className="sub-menu">
                <li><a href="javascript:void(0);">Inbox</a></li>
                <li><a href="javascript:void(0);">Compose</a></li>
                <li>
                  <a href="javascript:void(0);">
                    Detail
                    <i className="fa fa-paper-plane text-theme ml-1"></i>
                  </a>
                </li>
              </ul>
            </li>
          
          </ul>
        
        </div>
        <div className="sidebar-bg"></div>
        
        <style jsx>{style}</style>
      </div>
    );
  }
  
  /**
   * Mở rộng profile của user
   * @param e
   */
  static expandProfile(e) {
    let el = e.currentTarget;
    $($(el).data('target')).toggle(279, function () {
      if ($(el).hasClass('active')) {
        $(el).removeClass('active');
      } else {
        $(el).addClass('active');
      }
    });
  }
  
  componentDidMount() {
    this.tree();
  }
  
  handleDropdown(e) {
  
  }
  
  
  /**
   * Tạo drop down cho Tree Menu
   * Có class has-sub đi cùng active sẽ mở ra.
   */
  tree() {
    'use strict';
    
    let Default = {
      animationSpeed: 279
    };
    
    let ClassName = {
      active: 'active'
    };
    
    let Selector = {
      trigger: '.has-sub > a',
      hasSub: '.has-sub',
      subMenu: '.sub-menu'
    };
    
    $(Selector.trigger).each(function () {
      $(this).on('click', function (e) {
        let parentLi = $(this).parent();
        let isOpen = parentLi.hasClass(ClassName.active);
        
        if (isOpen) {
          parentLi.children(Selector.subMenu).slideUp(Default.animationSpeed, function () {
            parentLi.removeClass(ClassName.active);
          });
          // Khi close <li> cha, đóng các <li> con nếu là multiple level
          parentLi.find(Selector.hasSub).removeClass(ClassName.active);
          
        } else {
          parentLi.children(Selector.subMenu).toggle(Default.animationSpeed, function () {
            parentLi.addClass(ClassName.active);
            parentLi.children(Selector.subMenu).removeAttr('style');
          });
        }
        
      });
    });
  }
}

const mapStateToProps = state => {
  return {
    state: state
  };
};
const mapDispatchToProps = dispatch => {
  return {
    dispatch: dispatch
  };
};
export default withRouter(connect(mapStateToProps, mapDispatchToProps)(LeftSidebarComponent));
