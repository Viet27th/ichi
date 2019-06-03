import React from 'react';
import style from './style.css';
import Router from 'next/router';
import Link from 'next/link';
import {withRouter} from 'next/router';
import _ from 'lodash';


class BreadcrumbComponent extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      pathSplit: [],
    };
  }
  
  render() {
    let pathSplit = this.props.router.pathname.split('/');
    let breadcrumb = this.generateBreadcrumb(pathSplit);
    
    return (
      <div>
        <ol className="breadcrumb pull-right">
          {breadcrumb.map((item, index) => {
            if (index === breadcrumb.length - 1) {
              return (
                <li className="breadcrumb-item active" key={index}>{item.name}</li>
              );
            } else {
              return (
                <li className="breadcrumb-item" key={index}>
                  <Link prefetch href={{pathname: item.path}}>
                    <a>{item.name}</a>
                  </Link>
                </li>
              );
            }
          })}
        </ol>
        
        <h1 className="page-header">
          {
            pathSplit[pathSplit.length - 1] === 'admin'
              ? 'Dashboard' : breadcrumb[breadcrumb.length - 1].name
          }
          <small className="ml-2">header small text goes here...</small>
        </h1>
        
        <style jsx>{style}</style>
      </div>
    );
  }
  
  componentDidMount() {
    
    // console.log(new URL(window.location.href).pathname);
  };
  
  generateBreadcrumb = (pathSplit) => {
    let tempArr = [];
    let originUrl = window.location.origin;
    for (let path of pathSplit) {
      let tempObj = {};
      if (path) {
        tempObj.name = _.startCase(path);
        tempObj.path = `${originUrl}/${path}`;
        tempArr.push(tempObj);
      } else {
        tempObj.name = 'Home';
        tempObj.path = originUrl;
        tempArr.push(tempObj);
      }
    }
    return tempArr;
  };
  
}


export default withRouter(BreadcrumbComponent);
