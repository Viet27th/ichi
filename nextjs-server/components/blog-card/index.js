import React from 'react';
import style from './style.css';
import Link from 'next/link';

export class BlogCardComponent extends React.Component {
  render() {
    return (
      <div className="col-12 col-sm-6 col-md-4 mb-3">
        <div className="post-card text-center">
          <div className="post-image">
            <Link prefetch href="">
              <a className="d-block">
                <img
                  alt="5 Best fruits to make you fresh " className="feat_img_small"
                  src="http://demo.vinovathemes.com/prestashop_freshmart/modules/smartblog/images/11-home-default.jpg" width="370" height="230"/>
              </a>
            </Link>
          </div>
          <div className="post-info">
            <i className="far fa-calendar-alt mr-2"></i>27 Sep, 2019
          </div>
          
          <div className="post-title font-weight-bold text-uppercase">
            <Link prefetch href="">
              <a className="d-block">5 Best fruits to make you fresh </a>
            </Link>
          </div>
          <div className="post-desc">
            Proin gravida nibh vel velit auctor aliquet. Aenean lorem quis bibendum auctor, nisi elit consequat ipsum
            Proin gravida nibh vel velit auctor aliquet. Aenean lorem quis bibendum auctor, nisi elit consequat ipsum
            Proin gravida nibh vel velit auctor aliquet. Aenean lorem quis bibendum auctor, nisi elit consequat ipsum
          </div>
          <Link prefetch href="">
            <a className="read-more d-inline-block text-uppercase">Read More</a>
          </Link>
        </div>
        
        <style jsx>{style}</style>
      </div>
    );
  }
}
