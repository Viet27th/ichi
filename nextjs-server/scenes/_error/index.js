import React from 'react';
import style from './style.global.css';
import Link from 'next/link';
import Router from 'next/router';

class ErrorScene extends React.Component {
  static getInitialProps({res, err}) {
    const statusCode = res ? res.statusCode : err ? err.statusCode : null;
    return {statusCode};
  }
  
  render() {
    return (
      <div className="main-wrapper">
        <div className="error">
          <p className="error__num">
            {this.props.statusCode === 404? '4' : ''}
          </p>
          <div className="error__moon"></div>
          <p className="error__num">
            {this.props.statusCode === 404? '4' : ''}
          </p>
        </div>
        <div className="house">
          <div className="house__right">
            <div className="house__window"></div>
          </div>
          <div className="house__center">
            <div className="house__window"></div>
            <div className="house__window"></div>
          </div>
          <div className="house__left">
            <div className="house__window"></div>
            <div className="house__window"></div>
          </div>
          <div className="house__mini">
            <div className="house__window"></div>
            <div className="bridge"></div>
          </div>
          <div className="house__bottom">
            <div className="house__window"></div>
          </div>
        </div>
        <div className="graves">
          <div className="grave"></div>
          <div className="grave grave--mini"></div>
          <div className="grave grave--mini"></div>
        </div>
        <div className="bat bat--left">
          <div className="bat__right-wing"></div>
          <div className="bat__left-wing"></div>
        </div>
        <div className="bat bat--right">
          <div className="bat__right-wing"></div>
          <div className="bat__left-wing"></div>
        </div>
        <div className="ground-wrapper"></div>
        <div className="button-container">
          
          <p>
            {this.props.statusCode
              ? `An error ${this.props.statusCode} occurred on server`
              : this.props.message}
          </p>
          <Link href='/'><a className="button button--back">
            Home
            <div className="ghost">
              <div className="ghost__hand"></div>
              <div className="ghost__face"></div>
              <div className="ghost__tail"></div>
            </div>
          </a></Link>
        </div>
        
        <style jsx>{style}</style>
      </div>
    );
  }
}

export default ErrorScene;
