import React from 'react';
import style from './style.css';
import Head from 'next/head';
import Link from 'next/link';
import Router from 'next/router';
import {SpinnerComponentEvolution} from '../../components/spinner';
import {AlertComponentEvolution} from '../../components/alert';
import {UserMenuComponent} from '../../components/user_menu';
import {ProductCardComponent} from '../../components/product-card';
import {BlogCardComponent} from '../../components/blog-card';
import {UserFooterComponent} from '../../components/user_footer';

import {connect} from 'react-redux';

class IndexScene extends React.Component {
  static async getInitialProps(ctx) {
    let {pathname} = ctx;
    return {pathname};
  }
  
  constructor(props) {
    super(props);
    this.swiperSlideInstance = '';
  }
  
  render() {
    return (
      <div id="home-page">
        <Head>
          <link rel="stylesheet" type="text/css" href="/static/library/swiper-master/dist/css/swiper.min.css"/>
          <link rel="stylesheet" type="text/css" href="/static/library/swiper-master/dist/css/custom.css"/>
          <script type="text/javascript" src="/static/library/swiper-master/dist/js/swiper.min.js"></script>
        </Head>
        {/* Menu */}
        <UserMenuComponent/>
        {/* End Menu */}
        
        {/* Swiper slider banner */}
        <div className="swiper-container">
          <div className="swiper-wrapper cursor-pointer">
            {/*Loop slide here*/}
            <div className="swiper-slide">
              {/* Required swiper-lazy class and image source specified in data-src attribute */}
              {/*<img className="w-100 h-100" src="http://localhost:2709/store/banner-2.jpg"/>*/}
              <img data-src={`${process.env.remoteServer}/store/banner-2.jpg`} className="swiper-lazy w-100 h-100"/>
              {/*Preloader image */}
              <div className="swiper-lazy-preloader swiper-lazy-preloader-white"></div>
            </div>
            
            <div className="swiper-slide">
              <img data-src={`${process.env.remoteServer}/store/banner-3.jpg`} className="swiper-lazy w-100 h-100"/>
              {/*Preloader image */}
              <div className="swiper-lazy-preloader swiper-lazy-preloader-white"></div>
            </div>
            
            <div className="swiper-slide">
              <img data-src={`${process.env.remoteServer}/store/banner-1.jpg`} className="swiper-lazy w-100 h-100"/>
              {/*Preloader image */}
              <div className="swiper-lazy-preloader swiper-lazy-preloader-white"></div>
            </div>
            {/*End slide here*/}
          </div>
          {/* Add Pagination */}
          <div className="swiper-pagination swiper-pagination-green"></div>
        </div>
        {/* End Swiper slider banner */}
        
        {/* Products */}
        <div className="container">
          {/* Title block */}
          <h2 className="title-block text-center">
            <span>New</span>
            <span className="font-weight-bold d-block d-md-inline ml-2 mr-2">Arrivals</span>
            <p className="sub-title mt-3">Lorem ipsum dolor sit amet consectetur adipiscing elit eiusmod tempor</p>
          </h2>
          {/* End title block */}
          
          {/* Categories list */}
          <ul className="categories-list d-flex justify-content-center flex-wrap mb-4">
            <li className="mb-3 d-flex justify-content-center">
              <Link prefetch href="#producttab1010053941category0">
                <a className="active d-flex flex-column justify-content-center">
                  <div className="text-center">
                    <img className="img-fluid"
                         src="http://demo.vinovathemes.com/prestashop_freshmart/themes/vinova_freshmart/assets/img//icon/all.png"
                         alt="all product"/>
                  </div>
                  <span className="mt-2 text-center">All product</span>
                </a>
              </Link>
            </li>
            
            <li className=" mb-3 d-flex justify-content-center">
              <Link prefetch href="#producttab1010053941category0">
                <a className="d-flex flex-column justify-content-center">
                  <div className="text-center">
                    <img className="img-fluid"
                         src="http://demo.vinovathemes.com/prestashop_freshmart/img/c/4-0_thumb.jpg"
                         alt="all product"/>
                  </div>
                  <span className="mt-2 text-center">Vegetables</span>
                </a>
              </Link>
            </li>
            
            <li className=" mb-3 d-flex justify-content-center">
              <Link prefetch href="#producttab1010053941category0">
                <a href="#producttab1010053941category0" className=" d-flex flex-column justify-content-center">
                  <div className="text-center">
                    <img className="img-fluid"
                         src="http://demo.vinovathemes.com/prestashop_freshmart/img/c/8-0_thumb.jpg"
                         alt="all product"/>
                  </div>
                  <span className="mt-2 text-center">Fruits</span>
                </a>
              </Link>
            </li>
            
            <li className=" mb-3 d-flex justify-content-center">
              <Link prefetch href="#producttab1010053941category0">
                <a href="#producttab1010053941category0" className=" d-flex flex-column justify-content-center">
                  <div className="text-center">
                    <img className="img-fluid"
                         src="http://demo.vinovathemes.com/prestashop_freshmart/img/c/12-0_thumb.jpg"
                         alt="all product"/>
                  </div>
                  <span className="mt-2 text-center">Bread</span>
                </a>
              </Link>
            </li>
            
            <li className=" mb-3 d-flex justify-content-center">
              <Link prefetch href="#producttab1010053941category0">
                <a href="#producttab1010053941category0" className=" d-flex flex-column justify-content-center">
                  <div className="text-center">
                    <img className="img-fluid"
                         src="http://demo.vinovathemes.com/prestashop_freshmart/img/c/13-0_thumb.jpg"
                         alt="all product"/>
                  </div>
                  <span className="mt-2 text-center">Juices</span>
                </a>
              </Link>
            </li>
            
            <li className=" mb-3 d-flex justify-content-center">
              <Link prefetch href="#producttab1010053941category0">
                <a href="#producttab1010053941category0" className=" d-flex flex-column justify-content-center">
                  <div className="text-center">
                    <img className="img-fluid"
                         src="http://demo.vinovathemes.com/prestashop_freshmart/img/c/15-0_thumb.jpg"
                         alt="all product"/>
                  </div>
                  <span className="mt-2 text-center">Tea</span>
                </a>
              </Link>
            </li>
          
          </ul>
          {/* End categories list */}
          
          {/* Product list */}
          <div className="product-block row mb-4">
            <ProductCardComponent/>
            <ProductCardComponent/>
            <ProductCardComponent/>
            <ProductCardComponent/>
            <ProductCardComponent/>
            <ProductCardComponent/>
            <ProductCardComponent/>
            <ProductCardComponent/>
          </div>
          <div className="text-center mb-5">
            <button type="button" className="btn btn-outline-success btn-sm">
              Xem thêm 27 sản phẩm nổi bật
              <i className="fas fa-caret-down ml-2"></i>
            </button>
          </div>
          {/* End product list */}
        
        </div>
        {/* End products */}
        
        {/* Why choose us */}
        <div className="container-fluid why-choose-us mb-5 text-white"
             style={{'backgroundImage': 'url(http://demo.vinovathemes.com/prestashop_freshmart/modules/novpagemanage/img/3a0ab0ec94f83b312d42bfc617a296cf.png)'}}>
          <div className="text-center text-capitalize text-bold font-italic h1">Why choose us</div>
          <div className="row justify-content-center">
            <div className="up-left col-6 col-md-4 col-xl-2 text-right pb-2">
              <h5>100% Natural</h5>
              <p className="mb-0">Lorem ipsum dolor sit amet, consectetur elit, sed do eiusmod tempor incididunt ut labore et dolore
                magna aliqua.</p>
            </div>
            <div className="up-right col-6 col-md-4 col-xl-2 pb-2">
              <h5>Always Fresh</h5>
              <p className="mb-0">Lorem ipsum dolor sit amet, consectetur elit, sed do eiusmod tempor incididunt ut labore et dolore
                magna aliqua.</p>
            </div>
          </div>
          <div className="row justify-content-center">
            <div className="down-left col-6 col-md-4 col-xl-2 text-right pt-2">
              <h5>Premium Quality</h5>
              <p className="mb-0">Lorem ipsum dolor sit amet, consectetur elit, sed do eiusmod tempor incididunt ut labore et dolore
                magna aliqua.</p>
            </div>
            <div className="down-right col-6 col-md-4 col-xl-2 pt-2">
              <h5>Supper Healthy</h5>
              <p className="mb-0">Lorem ipsum dolor sit amet, consectetur elit, sed do eiusmod tempor incididunt ut labore et dolore
                magna aliqua.</p>
            </div>
          </div>
        </div>
        {/* End why choose us */}
        
        {/* Our blog */}
        <div className="container our-blog-block mb-5">
          <h2 className="title-block text-center">
            <span>Our</span>
            <span className="font-weight-bold d-block d-md-inline ml-2 mr-2">Blog</span>
            <p className="sub-title mt-3">Lorem ipsum dolor sit amet consectetur adipiscing elit eiusmod tempor</p>
          </h2>
          
          <div className="row">
            <BlogCardComponent/>
            <BlogCardComponent/>
            <BlogCardComponent/>
          </div>
          
        </div>
        {/* End our blog */}
        
        <UserFooterComponent />
        
        {/* Style */}
        <style jsx>{style}</style>
      </div>
    );
  }
  
  async componentDidMount() {
    let precondition = new Promise(resolve => {
      let until = setInterval(() => {
        if (typeof Swiper !== 'undefined') {
          clearInterval(until);
          resolve();
        }
      }, 10);
    });
    await precondition;
    
    this.swiperSlideInstance = new Swiper('.swiper-container', {
      effect: 'fade',
      fadeEffect: {
        crossFade: true
      },
      lazy: true,
      pagination: {
        el: '.swiper-pagination',
        clickable: true
      },
      autoplay: {
        delay: 5000,
        disableOnInteraction: false,
        reverseDirection: true
      },
      loop: true
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


export default connect(mapStateToProps, mapDispatchToProps)(IndexScene);
