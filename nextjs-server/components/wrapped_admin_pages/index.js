import React from 'react';
import style from './style.global.css';

import HeaderComponent from './components/header';
import LeftSidebarComponent from './components/left-sidebar';
import RightSidebarComponent from './components/right-sidebar';
import BreadcrumbComponent from './components/breadcrumb';
import FooterComponent from './components/footer';

import {connect} from 'react-redux';

class WrappedAdminPagesComponent extends React.Component {
  render() {
    return (
      <div id="page-container" className="js-page-container page-container page-sidebar-fixed page-header-fixed">
        <HeaderComponent/>
        {/**/}
        <LeftSidebarComponent/>
        {/**/}
        <div id="content" className="content">
          <BreadcrumbComponent/>
          {this.props.children}
        </div>
        {/**/}
        <RightSidebarComponent/>
        {/**/}
        <a href="javascript:void(0);" onClick={WrappedAdminPagesComponent.scrollTop}
           className="btn btn-icon btn-circle btn-success btn-scroll-to-top"
           data-click="scroll-top">
          <i className="fa fa-angle-up"></i>
        </a>
        <FooterComponent/>
        
        <style jsx>{style}</style>
      </div>
    );
  }
  
  static scrollTop() {
    $('html,body').animate({scrollTop: 0}, 279);
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
export default connect(mapStateToProps, mapDispatchToProps)(WrappedAdminPagesComponent);
