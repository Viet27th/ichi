import React from 'react';
import style from './style.css';
import Link from 'next/link';

export class ProductCardComponent extends React.Component {
  render() {
    return (
      <div className="col-12 col-sm-6 col-md-4 col-lg-3 mb-3">
        <div className="card">
          <div className="ribbon"><span>-70%</span></div>
          
          <Link prefetch href="#">
            <a className="wrapper-card-img-top d-inline-flex justify-content-center">
              <img className="card-img-top"
                   src="http://demo.vinovathemes.com/prestashop_freshmart/195-home_default/printed-dress.jpg"
                   alt="Card image cap"/>
            </a>
          </Link>
          <div className="card-body">
            <h4 className="card-title">
              <Link prefetch href="#">
                <a className="d-block">Card title</a>
              </Link>
            </h4>
            <div className="product-comment mb-3">
              <ul>
                <li><i className="far fa-comment mr-2"></i>Đánh giá: 279 lượt</li>
              </ul>
            </div>
            <p className="card-text mb-0">Some quick example text to build on the card title and make up the bulk of the
              card's content.</p>
            <div className="card-price">
              <span className="d-block current-price">
                279.000
                <span className="currency">&#8363;</span>
                {/*<span className="currency">&#36;</span>*/}
              </span>
  
              <span className="d-block price-before-discount">
                <span style={{textDecorationLine: 'line-through'}}>279.000</span>
                <span className="currency">&#8363;</span>
                <span className="has-discount ml-2 font-weight-bold">(-27%)</span>
                {/*<span className="currency">&#36;</span>*/}
              </span>
            </div>
            <div className="product-button text-center">
              <span className=" d-inline-flex justify-content-center align-items-center cursor-pointer">
                <i className="fas fa-cart-plus"></i>
              </span>
              <span className="active d-inline-flex justify-content-center align-items-center cursor-pointer">
                <i className="fas fa-heart"></i>
              </span>
            </div>
          </div>
        </div>
        
        <style jsx>{style}</style>
      </div>
    );
  }
}
