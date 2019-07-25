import React from 'react';
import style from './style.css';
import Head from 'next/head';
import {UserMenuComponent} from '../../components/user_menu';
import {UserFooterComponent} from '../../components/user_footer';
import {FormSendEmailComponent} from '../../components/form-send-email';

export class ProductSceen extends React.Component {
  constructor(props) {
    super(props);
    
    this.state = {
      sendEmailModalContent: ''
    };
    
  }
  
  render() {
    return (
      <div id="product-page">
        <Head>
          <link rel="stylesheet" type="text/css" href="/static/library/slider-pro-master/dist/css/slider-pro.min.css"
                media="screen"/>
          <script type="text/javascript"
                  src="/static/library/slider-pro-master/dist/js/jquery.sliderPro.min.js"></script>
        </Head>
        {/* Menu */}
        <UserMenuComponent/>
        {/* End Menu */}
        
        <div className="banner mb-4">
          <img src={`${process.env.domainName}/static/img/product-default-banner.jpg`} alt=""/>
        </div>
        
        <div className="content container mb-5">
          <div className="row">
            <div className="content__sidebar col-12 col-md-4 col-lg-3 order-2 order-md-1">
              Sidebar
            </div>
            <div className="content__main col-12 col-md-8 col-lg-9 order-1 order-md-2">
              <div className="row">
                <h1 className="col-12 h5 mb-4 font-weight-bold">
                  Organic Strawberry Fruits
                </h1>
                {/* Slide product image */}
                <div className="content__product-img col-12 col-lg-6">
                  <div id="example3" className="slider-pro">
                    <div className="sp-slides">
                      <div className="sp-slide">
                        <img className="sp-image" src="../src/css/images/blank.gif"
                             data-src="http://demo.vinovathemes.com/prestashop_freshmart/203-large_default/printed-summer-dress.jpg"
                             data-small="http://demo.vinovathemes.com/prestashop_freshmart/203-large_default/printed-summer-dress.jpg"
                             data-medium="http://demo.vinovathemes.com/prestashop_freshmart/203-large_default/printed-summer-dress.jpg"
                             data-large="http://demo.vinovathemes.com/prestashop_freshmart/203-large_default/printed-summer-dress.jpg"
                             data-retina="http://demo.vinovathemes.com/prestashop_freshmart/203-large_default/printed-summer-dress.jpg"/>
                      </div>
                      
                      <div className="sp-slide">
                        <img className="sp-image" src="../src/css/images/blank.gif"
                             data-src="http://bqworks.com/slider-pro/images/image2_medium.jpg"
                             data-small="http://bqworks.com/slider-pro/images/image2_small.jpg"
                             data-medium="http://bqworks.com/slider-pro/images/image2_medium.jpg"
                             data-large="http://bqworks.com/slider-pro/images/image2_large.jpg"
                             data-retina="http://bqworks.com/slider-pro/images/image2_large.jpg"/>
                      </div>
                      
                      <div className="sp-slide">
                        <img className="sp-image" src="../src/css/images/blank.gif"
                             data-src="http://bqworks.com/slider-pro/images/image3_medium.jpg"
                             data-small="http://bqworks.com/slider-pro/images/image3_small.jpg"
                             data-medium="http://bqworks.com/slider-pro/images/image3_medium.jpg"
                             data-large="http://bqworks.com/slider-pro/images/image3_large.jpg"
                             data-retina="http://bqworks.com/slider-pro/images/image3_large.jpg"/>
                      </div>
                      
                      <div className="sp-slide">
                        <img className="sp-image" src="../src/css/images/blank.gif"
                             data-src="http://bqworks.com/slider-pro/images/image4_medium.jpg"
                             data-small="http://bqworks.com/slider-pro/images/image4_small.jpg"
                             data-medium="http://bqworks.com/slider-pro/images/image4_medium.jpg"
                             data-large="http://bqworks.com/slider-pro/images/image4_large.jpg"
                             data-retina="http://bqworks.com/slider-pro/images/image4_large.jpg"/>
                      </div>
                      
                      <div className="sp-slide">
                        <img className="sp-image" src="../src/css/images/blank.gif"
                             data-src="http://bqworks.com/slider-pro/images/image5_medium.jpg"
                             data-small="http://bqworks.com/slider-pro/images/image5_small.jpg"
                             data-medium="http://bqworks.com/slider-pro/images/image5_medium.jpg"
                             data-large="http://bqworks.com/slider-pro/images/image5_large.jpg"
                             data-retina="http://bqworks.com/slider-pro/images/image5_large.jpg"/>
                      </div>
                    
                    </div>
                    
                    <div className="sp-thumbnails">
                      <img className="sp-thumbnail" src="http://demo.vinovathemes.com/prestashop_freshmart/203-large_default/printed-summer-dress.jpg"/>
                      <img className="sp-thumbnail" src="http://bqworks.com/slider-pro/images/image2_thumbnail.jpg"/>
                      <img className="sp-thumbnail" src="http://bqworks.com/slider-pro/images/image3_thumbnail.jpg"/>
                      <img className="sp-thumbnail" src="http://bqworks.com/slider-pro/images/image4_thumbnail.jpg"/>
                      <img className="sp-thumbnail" src="http://bqworks.com/slider-pro/images/image5_thumbnail.jpg"/>
                    </div>
                  </div>
                </div>
                {/* End slide product image */}
                <div className="content__product-invoice col-12 col-lg-6">
                  <div className="content__current-price">
                    279.000
                    <span className="content__currency">&#8363;</span>
                    <del className="ml-3 text-secondary h6">5995&#8363;</del>
                  </div>
                  
                  <div className="content__product-code mt-3">
                    <span className="font-weight-bold">Mã sản phẩn</span>: 0009595
                  </div>
                  
                  <div className="content__product-description mt-3">
                    <ul>
                      <li>Sản phẩm được chọn lựa kỹ lưỡng, cho chất lượng tốt nhất</li>
                      <li>Cung cấp nhiều chất dinh dưỡng cho cơ thể</li>
                      <li>Chế biến nhiều món ăn ngon</li>
                    </ul>
                  </div>
                  
                  <div className="content__pay mt-4">
                    <div className="container">
                      <div className="row justify-content-between">
                        <button type="button" className="btn btn-success mr-1 col" onClick={this.openModalFormSendEmail}>Liên hệ mua hàng</button>
                        <button type="button" className="btn btn-outline-success ml-1 col">Thêm vào giỏ hàng</button>
                      </div>
                    </div>
                  </div>
                  
                  {/*<div className="content__product-quantity">*/}
                  {/*  -+*/}
                  {/*</div>*/}
                  
                </div>
              </div>
              
              <div className="mt-4">
                <ul className="list-group list-group-flush d-block">
                  <li className="list-group-item">
                    <div className="row">
                      <div className="col-4">Xuất xứ</div>
                      <div className="col-8">Việt Nam</div>
                    </div>
                  </li>
                  <li className="list-group-item">
                    <div className="row">
                      <div className="col-4">Hướng dẫn bảo quản</div>
                      <div className="col-8">Bảo quản ở nhiệt độ -18 độ C</div>
                    </div>
                  </li>
                  <li className="list-group-item">
                    <div className="row">
                      <div className="col-4">Hướng dẫn sử dụng</div>
                      <div className="col-8">Rã đông trước khi dùng. Dùng để nấu hoặc chế biến món ăn</div>
                    </div>
                  </li>
                  <li className="list-group-item">
                    <div className="row">
                      <div className="col-4">Quy cách đóng gói</div>
                      <div className="col-8">Túi</div>
                    </div>
                  </li>
                </ul>
              </div>
              
              <div className="mt-4">
                <ul className="nav nav-tabs" id="content__product-tab-desc" role="tablist">
                  <li className="nav-item">
                    <a className="nav-link text-dark active" id="home-tab" data-toggle="tab" href="#home" role="tab"
                       aria-controls="home" aria-selected="true">Mô tả sản phẩm</a>
                  </li>
                  <li className="nav-item">
                    <a className="nav-link text-dark" id="profile-tab" data-toggle="tab" href="#profile" role="tab"
                       aria-controls="profile" aria-selected="false">Chi tiết sản phẩm</a>
                  </li>
                </ul>
                <div className="tab-content" id="myTabContent">
                  <div className="tab-pane fade show active" id="home" role="tabpanel" aria-labelledby="home-tab">
                    Fashion has been creating well-designed collections since 2010. The brand offers feminine designs delivering stylish separates and statement dresses which have since evolved into a full ready-to-wear collection in which every item is a vital part of a woman's wardrobe. The result? Cool, easy, chic looks with youthful elegance and unmistakable signature style. All the beautiful pieces are made in Italy and manufactured with the greatest attention. Now Fashion extends to a range of accessories including shoes, hats, belts and more!
                  </div>
                  <div className="tab-pane fade" id="profile" role="tabpanel" aria-labelledby="profile-tab">
                    Reference demo_6
                    <br/>
                    In stock 0 Items
                  </div>
                </div>
              </div>
              
            </div>
          </div>
        </div>
        
        <UserFooterComponent/>
  
        {/* Modal */}
        <div className="modal fade" id="modal-form-send-email">
          <div className="modal-dialog modal-dialog-centered" role="document">
            <div className="modal-content">
              <div className="modal-header">
                {/*<h5 className="modal-title" id="exampleModalCenterTitle">Thông tin đặt hàng</h5>*/}
                <button type="button" className="close" data-dismiss="modal" aria-label="Close">
                  <span aria-hidden="true">&times;</span>
                </button>
              </div>
              <div className="modal-body">
                {this.state.sendEmailModalContent}
              </div>
             
            </div>
          </div>
        </div>
        
        <style jsx>{style}</style>
      </div>
    );
  }
  
  async componentDidMount() {
    let precondition = new Promise(resolve => {
      let until = setInterval(() => {
        if (typeof jQuery.fn.sliderPro !== 'undefined') {
          clearInterval(until);
          resolve();
        }
      }, 10);
    });
    await precondition;
    
    $('#example3').sliderPro({
      width: 960,
      height: 900,
      fade: true,
      arrows: true,
      buttons: false,
      fullScreen: true,
      smallSize: 500,
      mediumSize: 1000,
      largeSize: 3000,
      autoplay: false
    });
    
  }
  
  openModalFormSendEmail = () => {
    this.setState({
      sendEmailModalContent: <FormSendEmailComponent />
    }, () => {
      let sendEmailModal = $('#modal-form-send-email');
      sendEmailModal.modal('handleUpdate');
      sendEmailModal.modal('show');
      sendEmailModal.on('hidden.bs.modal', (e) => {
        this.setState({
          sendEmailModalContent: ''
        });
      });
    });
  }
  
}
