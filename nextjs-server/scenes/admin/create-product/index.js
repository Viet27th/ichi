import React from 'react';
import Head from 'next/head';
import style from './style.css';
import 'v-zoom';
import middleware from '../../../middleware';
import Router from 'next/router';
import {axiosInstance} from '../../../services/axios.service';
import {express_api} from '../../../services/express_api.service';
import {AlertComponentEvolution} from '../../../components/alert';
import {ConfirmComponentEvolution} from '../../../components/confirm';
import {SpinnerComponentEvolution} from '../../../components/spinner';
import {toSlug, isNumber, isNumberDot} from '../../../services/regex.service';
import _ from 'lodash';
import {MediaComponent} from '../../../components/media';

class AdminCreateProductScene extends React.Component {
  static async getInitialProps(ctx) {
    // If redirected, Doesn't have another next action below. We need return here.
    if (middleware.redirectIfNotAuthenticated(ctx)) {
      return;
    }
    
    if (!middleware.checkPermission(ctx, ['super', 'admin', 'editor'])) {
      if (ctx.res) {
        ctx.res.writeHead(303, {Location: `/`});
        ctx.res.end();
        return;
      } else {
        Router.push('/');
        return;
      }
    }
    
    return {};
  }
  
  constructor(props) {
    super(props);
    this.flatpickerInstance = '';
    this.vzoomInstance = '';
    this.swiperSlideInstance = '';
    //https://stackoverflow.com/questions/53848026/how-to-use-pure-flatpickr-in-react
    this.publish_date = React.createRef();
    
    //========= initialize variable
    this.postStatus = [
      {
        value: 'new',
        name: 'Bài viết mới'
      },
      {
        value: 'draft',
        name: 'Nháp'
      },
      {
        value: 'trash',
        name: 'Đã tạm xoá'
      }
    ];
    
    this.state = {
      //========= set variable for this post
      name: '',
      slug: '',
      main_product_content: '',
      product_detail: '',
      status: 'new',
      publish_date: new Date().toISOString(),
      categoriesSelectedOfPost: [], // Categories which you want to the Post belong to. It's array id of categories
      tagsSelectedOfPost: [], // Tags which you want to the Post belong to. It's array include both id and slug.
      price: '',
      currency: 'vnd',
      sale: '',
      feature_image: {},
      thumbnails: [], // Array object
      
      // Contains all Taxonomy which is existing in DB
      categories: [],
      tags: [],
      //========= Fast create a new category
      parent_category_selected: '',
      category_name_creating: '',
      // To handle dynamic content for Modal. Dedicate which one should i show.
      mediaModalContent: '',
    };
    
  };
  
  render() {
    
    return (
      <div>
        <Head>
          <link rel="stylesheet" href='/static/library/select2/dist/css/select2.min.css'/>
          <link rel="stylesheet" href='/static/library/flatpickr/dist/flatpickr.min.css'/>
          <link rel="stylesheet" href='/static/library/checkbox-style/checkbox-style.css'/>
          <link rel="stylesheet" type="text/css" href="/static/library/slick-1.8.1/slick/slick.css"/>
          <link rel="stylesheet" type="text/css" href="/static/library/slick-1.8.1/slick/slick-theme.css"/>
          <link rel="stylesheet" type="text/css" href="/static/library/swiper-master/dist/css/swiper.min.css"/>
  
          <script src='/static/library/ckeditor/ckeditor.js'></script>
          <script src='/static/library/select2/dist/js/select2.full.min.js'></script>
          <script src='/static/library/flatpickr/dist/flatpickr.min.js'></script>
          <script type="text/javascript" src="/static/library/slick-1.8.1/slick/slick.min.js"></script>
          <script type="text/javascript" src="/static/library/swiper-master/dist/js/swiper.min.js"></script>
        </Head>
        
        <div className='row'>
          <div className='col-md-7 col-lg-8'>
            <div className='box box-primary'>
              <div className='box-body'>
                {/**/}
                <div className='form-group'>
                  <label htmlFor='name'>Title</label>
                  <input type='text' name='name' className='form-control' id='name' placeholder='Required...'
                    value={this.state.name}
                    onChange={this.handleChangeName}/>
                </div>
                
                {/**/}
                <div className='form-group'>
                  <label htmlFor='slug'>Slug</label>
                  <input type='text' name='slug' disabled className='form-control' id='slug' placeholder='Required...'
                    defaultValue={this.state.slug}/>
                </div>
                
                {/* Slick slide */}
                <div>
                  <button className="btn btn-primary mb-3"
                    data-purpose="thumbnails"
                    onClick={this.openMediaModal}>Thêm ảnh chi tiết
                  </button>
                  
                  <div id="thumbnails" className="mb-3">
                    
                    {
                      this.state.thumbnails.length ?
                        <div className="swiper-container thumbnails">
                          <div className="swiper-wrapper">
                            
                            {
                              this.state.thumbnails.map((el, key) => {
                                return (
                                  <div className="swiper-slide" key={key}>
                                    <img className="swiper-lazy"
                                      src={`${process.env.remoteServer}/${el.path}?timestamp=${new Date(el.updatedAt).getTime()}`}
                                      alt={el.alt_text ? el.alt_text : ''}
                                      title={el.title ? el.title : ''}
                                      data-src={`${process.env.remoteServer}/${el.path}?timestamp=${new Date(el.updatedAt).getTime()}`}
                                      data-small={`${process.env.remoteServer}/${el.path}?timestamp=${new Date(el.updatedAt).getTime()}`}
                                      data-medium={`${process.env.remoteServer}/${el.path}?timestamp=${new Date(el.updatedAt).getTime()}`}
                                      data-large={`${process.env.remoteServer}/${el.path}?timestamp=${new Date(el.updatedAt).getTime()}`}
                                      data-retina={`${process.env.remoteServer}/${el.path}?timestamp=${new Date(el.updatedAt).getTime()}`}/>
                                    {/*Preloader image */}
                                    <div className="swiper-lazy-preloader swiper-lazy-preloader-white"></div>
                                  </div>
                                );
                              })
                            }
                          
                          </div>
                        </div> : false
                    }
                  </div>
                </div>
                
                
                {/**/}
                <div className='form-group'>
                  <label htmlFor='slug'>Mô tả sản phẩm</label>
                  <br/>
                  <button type='button' id='show-media' className='btn btn-primary mb-2'
                    data-purpose="main-product-content"
                    onClick={this.openMediaModal}>
                    <i className='fas fa-images mr-2'></i>
                    Media
                  </button>
                  <textarea id='main-product-content' name='main_product_content'
                    value={this.state.main_product_content}
                    onChange={this.handleChange}></textarea>
                </div>
                
                {/**/}
                <div className='form-group'>
                  <label htmlFor='slug'>Chi tiết sản phẩm</label>
                  <br/>
                  <button id='show-media' className='btn btn-primary mb-2'
                    data-purpose="product-detail"
                    onClick={this.openMediaModal}>
                    <i className='fas fa-images mr-2'></i>
                    Media
                  </button>
                  <textarea id='product-detail' name='product_detail'
                    value={this.state.product_detail}
                    onChange={this.handleChange}></textarea>
                </div>
                
                {/**/}
                <div className="form-row">
                  <div className="form-group col-lg-4">
                    <label htmlFor="inputCity">Giá tiền</label>
                    <input type="text" className="form-control" id="price" name='price'
                      value={this.state.price}
                      onChange={this.handleChangePrice}/>
                  </div>
                  
                  <div className="form-group col-lg-3">
                    <label htmlFor="inputState">Đơn vị tiền tệ</label>
                    <select id="currency" name='currency' className="form-control custom-select cursor-pointer"
                      value={this.state.currency}
                      onChange={this.handleChange}>
                      <option value='vnd'>Đồng</option>
                      <option value='usd'>USD</option>
                    </select>
                  </div>
                  
                  <div className="form-group col-lg-3">
                    <label htmlFor="sale">Sale</label>
                    <div className="input-group">
                      <input type="text" className="form-control" id="sale" name='sale' placeholder="Sale..."
                        value={this.state.sale}
                        onChange={this.handleChangeSale}/>
                      <div className="input-group-prepend">
                        <span className="input-group-text">%</span>
                      </div>
                    </div>
                  </div>
                </div>
              
              </div>
            </div>
            {/* End box 1st right */}
          </div>
          
          <div className='col-md-5 col-lg-4'>
            
            <div className='panel panel-inverse'>
              <div className='panel-heading'>
                <div className='panel-heading-btn'>
                  <a href='javascript:void(0)' className='btn btn-xs btn-icon btn-circle btn-default'
                    data-v-click='expand'><i className='fa fa-expand'></i></a>
                  <a href='javascript:void(0)' className='btn btn-xs btn-icon btn-circle btn-success'
                    data-v-click='reload'><i className='fa fa-redo'></i></a>
                  <a href='javascript:void(0)' className='btn btn-xs btn-icon btn-circle btn-warning'
                    data-v-click='collapse'><i className='fa fa-minus'></i></a>
                  <a href='javascript:void(0)' className='btn btn-xs btn-icon btn-circle btn-danger'
                    data-v-click='remove'><i className='fa fa-times'></i></a>
                </div>
                <h4 className='panel-title'>Publish <span
                  className='label label-success m-l-5 t-minus-1'>NEW</span></h4>
              </div>
              
              <div className='is-collapse'>
                {/*panel body*/}
                <div className='panel-body'>
                  <p>
                    <i className='fa fa-calendar mr-2 t-plus-1'></i>
                    Trạng thái:&nbsp;
                    <span className='text-bold text-muted'>
                      <select name="status" id="status" className='cursor-pointer form-control custom-select w-50'
                        value={this.state.status}
                        onChange={this.handleChange}>
                        {
                          this.postStatus.map((el, index) => {
                            return (
                              <option value={el.value} key={index}>{el.name}</option>
                            );
                          })
                        }
                      </select>
                    </span>
                  </p>
                  <p className='clearfix box-body__publish-date mb-0'>
                    <i className='fa fa-calendar mr-2 pull-left t-plus-2'></i>
                    <span className='pull-left'>Ngày đăng:&nbsp;</span>
                    <input id='publish-date' name='publish_date' type='text'
                      className='text-bold text-dark no-border pull-left'
                      ref={this.publish_date}/>
                    <label htmlFor='publish-date' className='change font-weight-light cursor-pointer'>Change</label>
                  </p>
                </div>
                {/*panel footer*/}
                <div className='hljs-wrapper'>
                  <div className='hljs clearfix'>
                    <button type='button' className='btn btn-primary pull-right' onClick={this.createNewPost}>Submit
                    </button>
                  </div>
                </div>
              </div>
            </div>
            {/* End box 1st left */}
            <div className='panel panel-inverse'>
              <div className='panel-heading'>
                <div className='panel-heading-btn'>
                  <a href='javascript:;' className='btn btn-xs btn-icon btn-circle btn-default'
                    data-v-click='expand'><i className='fa fa-expand'></i></a>
                  <a href='javascript:;' className='btn btn-xs btn-icon btn-circle btn-success'
                    data-v-click='reload'><i className='fa fa-redo'></i></a>
                  <a href='javascript:;' className='btn btn-xs btn-icon btn-circle btn-warning'
                    data-v-click='collapse'><i className='fa fa-minus'></i></a>
                  <a href='javascript:;' className='btn btn-xs btn-icon btn-circle btn-danger'
                    data-v-click='remove'><i className='fa fa-times'></i></a>
                </div>
                <h4 className='panel-title'>Categories <span
                  className='label label-success m-l-5 t-minus-1'>NEW</span></h4>
              </div>
              
              <div className='is-collapse'>
                {/*panel body*/}
                <div className='panel-body'>
                  
                  {
                    this.state.categories.map((el, index) => {
                      return (
                        <div className='checkbox' key={index}>
                          <label className='d-flex align-items-center' style={{'paddingLeft': `${27 * el.deep}px`}}>
                            <input type='checkbox' name='categories' value={el._id}
                              onChange={this.handleChangeCategoriesProductBelongTo}/>
                            <span className='cr mr-2'><i className='cr-icon fa fa-check'></i></span>
                            {el.name}
                          </label>
                        </div>
                      );
                    })
                  }
                
                </div>
                {/*panel footer*/}
                <div className='hljs-wrapper'>
                  <div className='hljs clearfix'>
                    <p className='text-light-blue cursor-pointer inline mb-0' data-toggle='collapse'
                      data-target='#new-category'>
                      <i className='fa fa-plus mr-2'></i>
                      Add new category
                    </p>
                    <div id='new-category' className='collapse'>
                      <div className='form-group mb-0 pt-3'>
                        <select id='parent-category' name='parent_category_selected' className='form-control'
                          style={{'width': '100%'}} value={this.state.parent_category_selected}
                          onChange={() => {
                          }}>
                          <option value=''>---Select Parent Category---</option>
                          {
                            this.state.categories.map((el, index) => {
                              return (
                                <option value={el._id} key={index}>{el.name}</option>
                              );
                            })
                          }
                        </select>
                      </div>
                      
                      <div className='input-group pt-3'>
                        <input name='category_name_creating' type='text' className='form-control'
                          value={this.state.category_name_creating}
                          onChange={this.handleChange}
                          placeholder='Category...'/>
                        <span className='input-group-btn'>
                          <button type='button' className='btn btn-info ml-2'
                            onClick={this.createNewCategory}>
                            Click me to Add New!
                          </button>
                        </span>
                      </div>
                    
                    </div>
                  </div>
                </div>
              </div>
            </div>
            {/* End box 2nd left */}
            <div className='panel panel-inverse'>
              <div className='panel-heading'>
                <div className='panel-heading-btn'>
                  <a href='javascript:;' className='btn btn-xs btn-icon btn-circle btn-default'
                    data-v-click='expand'><i className='fa fa-expand'></i></a>
                  <a href='javascript:;' className='btn btn-xs btn-icon btn-circle btn-success'
                    data-v-click='reload'><i className='fa fa-redo'></i></a>
                  <a href='javascript:;' className='btn btn-xs btn-icon btn-circle btn-warning'
                    data-v-click='collapse'><i className='fa fa-minus'></i></a>
                  <a href='javascript:;' className='btn btn-xs btn-icon btn-circle btn-danger'
                    data-v-click='remove'><i className='fa fa-times'></i></a>
                </div>
                <h4 className='panel-title'>Tags <span
                  className='label label-success m-l-5 t-minus-1'>NEW</span></h4>
              </div>
              
              <div className='is-collapse'>
                {/*panel body*/}
                <div className='panel-body'>
                  <div className='form-group mb-0'>
                    <select id='tags' name='tags[]' className='form-control' multiple='multiple'
                      data-placeholder='Select tags' style={{'width': '100%'}}>
                      {
                        this.state.tags.map((el, index) => {
                          return (
                            <option value={el._id} key={index}>{el.name}</option>
                          );
                        })
                      }
                    </select>
                  </div>
                </div>
              </div>
            </div>
            {/* End box 3rd left */}
            <div className='panel panel-inverse'>
              <div className='panel-heading'>
                <div className='panel-heading-btn'>
                  <a href='javascript:;' className='btn btn-xs btn-icon btn-circle btn-default'
                    data-v-click='expand'><i className='fa fa-expand'></i></a>
                  <a href='javascript:;' className='btn btn-xs btn-icon btn-circle btn-success'
                    data-v-click='reload'><i className='fa fa-redo'></i></a>
                  <a href='javascript:;' className='btn btn-xs btn-icon btn-circle btn-warning'
                    data-v-click='collapse'><i className='fa fa-minus'></i></a>
                  <a href='javascript:;' className='btn btn-xs btn-icon btn-circle btn-danger'
                    data-v-click='remove'><i className='fa fa-times'></i></a>
                </div>
                <h4 className='panel-title'>Feature Image <span
                  className='label label-success m-l-5 t-minus-1'>NEW</span></h4>
              </div>
              
              <div className='is-collapse'>
                {/*panel body*/}
                <div className='panel-body'>
                  <img className='w-100 vzoom'
                    src={!_.isEmpty(this.state.feature_image) ? `${process.env.remoteServer}/${this.state.feature_image.path}?timestamp=${new Date(this.state.feature_image.updatedAt).getTime()}` : ''}
                    alt=''/>
                  <input id="feature_image" name="feature_image" type="hidden" defaultValue={this.state.feature_image}/>
                </div>
                {/*panel footer*/}
                <div className='hljs-wrapper'>
                  <div className='hljs clearfix d-flex justify-content-around'>
                    <p className='text-light-blue cursor-pointer mb-0 inline'
                      data-purpose="feature-image"
                      onClick={this.openMediaModal}>
                      <i className='fa fa-plus mr-2'></i>
                      Set feature image
                    </p>
                    <p className='text-danger cursor-pointer mb-0 inline' onClick={this.removeFeatureImage}>
                      <i className='fa fa-minus mr-2'></i>
                      Remove feature image
                    </p>
                  </div>
                </div>
              </div>
            </div>
            {/* End box 4th left */}
          
          </div>
        </div>
        
        {/*Modal*/}
        <div id="media-modal" className="modal fade" tabIndex="-1" role="dialog"
          aria-labelledby="media-modal" aria-hidden="true">
          <div className="modal-dialog modal-xl">
            <div className="modal-content">
              {this.state.mediaModalContent}
            </div>
          </div>
        </div>
        
        {/* style */}
        <style jsx>{style}</style>
      </div>
    );
  }
  
  async componentDidMount() {
    let precondition = new Promise(resolve => {
      let until = setInterval(() => {
        if(typeof VZoom !== 'undefined' &&
          typeof CKEDITOR !== 'undefined' &&
          typeof flatpickr !== 'undefined' &&
          typeof jQuery.fn.select2 !== 'undefined' &&
          typeof Swiper !== 'undefined') {
          clearInterval(until);
          resolve();
        }
      }, 10);
    });
    await precondition;
   
    /**
     * https://stackoverflow.com/questions/11453741/javascript-beforeunload-detect-refresh-versus-close
     */
    window.addEventListener('beforeunload', this.handleWindowClose);

    /**
     * Event handle for four button onto panel-header
     */
    +function () {
      let Default = {
        animationSpeed: 279
      };

      let Event = {
        collapse: 'collapse'
      };

      $('[data-v-click]').each(function () {
        $(this).on('click', function (e) {
          let parentOfIt = $(this).parents('.panel-heading');
          let affected = parentOfIt.next('.is-collapse');
          let eventType = $(this).data('vClick');
          if (eventType === Event.collapse) {
            affected.toggle(Default.animationSpeed);
          }
        });

      });
    }();

    // Register VZoom
    this.vzoomInstance = VZoom.init('.vzoom', {
      backgroundColor: 'rgba(0,0,0,.95)',
      zoomEffect: 'translate',
      duration: '279',
      zoomPercentage: 50,
    });

    // Replace the <textarea id=''> with a CKEditor
    let ckeditorOption = {
      height: 270,
      extraPlugins: 'language,justify,iframe,font,youtube,lineheight',
      removePlugins: '',
      // skin: 'kama',
      font_defaultLabel: 'Arial',
      fontSize_defaultLabel: '12px',
      youtube_responsive: true,
      youtube_controls: true,
      youtube_related: true,
      allowedContent: true, // Allow set attribute (i.e: class) for element when using insertHtml of Ckeditor
    };

    CKEDITOR.replace('main-product-content', ckeditorOption);
    CKEDITOR.replace('product-detail', ckeditorOption);
    // U can use "setData()"|"insertText()"|"insertHtml()" to change value in text editor.
    // Noted that: setData() will be replace the entire editor content.
    // Refer: https://stackoverflow.com/questions/3610010/how-do-i-set-a-value-in-ckeditor-with-javascript
    // CKEDITOR.instances['main-product-content'].setData('<img src="http://localhost:3000/static/img/default_admin_avatar.jpg" />');
    let self = this;
    CKEDITOR.instances['main-product-content'].on('change', function (e) {
      self.setState({
        main_product_content: this.getData()
      });
    });

    CKEDITOR.instances['product-detail'].on('change', function (e) {
      self.setState({
        product_detail: this.getData()
      });
    });


    // Register flatpickr
    this.flatpickerInstance = flatpickr(this.publish_date.current, {
      defaultDate: this.state.publish_date,
      weekNumbers: true,
      time_24hr: true,
      enableTime: true,
      dateFormat: 'Y-m-d H:i',
      onChange: this.handleChangePublishDate,
    });

    // Register select2
    $('#tags').select2({
      tags: true // if select tag is multiple, create tag if not exist
    }).on('change', this.handleChangeTagsProductBelongTo);

    $('#parent-category').select2({
      tags: true // if select tag is multiple, create tag if not exist
    }).on('change', this.handleChange);

    // Get first list category
    this.getListCategory();
    // Get first list tag
    this.getListTag();
  }
  
  /**
   * https://github.com/zeit/next.js/issues/2236
   * Confirm before navigate
   * @param e
   * @returns {string}
   */
  handleWindowClose = (e) => {
    let message = 'You have unsaved changes - are you sure you wish to close?';
    return e.returnValue = message;
  };
  
  /**
   * Get category list from DB
   */
  getListCategory = () => {
    axiosInstance().get(express_api.getAllProductsCategoryWithOrderUrl, {
      needLogin: true
    }).then(result => {
      this.setState({
        categories: result.data.data
      });
    }).catch(error => {
      console.log(error);
    });
  };
  
  /**
   * Get tag list from DB
   */
  getListTag = () => {
    axiosInstance().get(express_api.getAllProductsTagUrl, {
      needLogin: true
    }).then(result => {
      this.setState({
        tags: result.data.data
      });
    }).catch(error => {
      console.log(error);
    });
  };
  
  /**
   * Handle binding input value with state
   * @param e
   */
  handleChange = e => {
    let {target} = e;
    this.setState({
      [target.name]: target.value
    });
  };
  
  /**
   * If select2 for select tag multiple, e.target.value doesn't refer to all value of select2
   * @param e
   */
  handleChangeTagsProductBelongTo = (e) => {
    this.setState({
      tagsSelectedOfPost: $('#tags').select2('val')
    });
  };
  
  /**
   * Change product name and auto generate slug
   * @param e
   */
  handleChangeName = (e) => {
    let nameValue = e.currentTarget.value;
    let slug = toSlug(nameValue);
    this.setState({
      name: nameValue,
      slug
    });
  };
  
  /**
   * Change product Price
   * @param e
   */
  handleChangePrice = (e) => {
    let value = e.currentTarget.value;
    if (isNumberDot(value) || value === '') {
      this.setState({
        price: value
      });
    }
  };
  
  /**
   * Change product Sale
   * @param e
   */
  handleChangeSale = (e) => {
    let value = e.currentTarget.value;
    if (isNumberDot(value) || value === '') {
      this.setState({
        sale: value
      });
    }
  };
  
  /**
   * Change product publish date
   * @param selectedDates - Default params of Flatpickr type Date object
   * @param dateStr - Default params of Flatpickr type string
   * @param instance - Default params of Flatpickr
   */
  handleChangePublishDate = (selectedDates, dateStr, instance) => {
    this.setState({
      publish_date: selectedDates[0].toISOString()
    });
  };
  
  /**
   * You can choose these categories for your Product
   * @param e
   */
  handleChangeCategoriesProductBelongTo = (e) => {
    const value = e.currentTarget.value;
    const isChecked = e.currentTarget.checked;
    if (isChecked) {
      let temp = [...this.state.categoriesSelectedOfPost, ...[value]];
      this.setState({
        categoriesSelectedOfPost: temp
      });
      
    } else {
      let temp = this.state.categoriesSelectedOfPost.filter((id) => {
        return id !== value;
      });
      this.setState({
        categoriesSelectedOfPost: temp
      });
    }
  };
  
  /**
   * Quick create product category
   * @returns {Promise<void>}
   */
  createNewCategory = async () => {
    SpinnerComponentEvolution.show();
    let data = {
      parentId: this.state.parent_category_selected,
      name: this.state.category_name_creating,
      slug: toSlug(this.state.category_name_creating),
      type: 'category'
    };
    axiosInstance().post(express_api.createProductsCategoryUrl, data, {
      needLogin: true
    }).then(result => {
      if (result.data.requestSuccessfully) {
        this.setState({
          parent_category_selected: '',
          category_name_creating: '',
        }, () => {
          $('#parent-category').select2().trigger('change');
        });
        
        this.getListCategory();
        SpinnerComponentEvolution.hide();
        AlertComponentEvolution.show(result.data.message);
      } else {
        SpinnerComponentEvolution.hide();
        AlertComponentEvolution.show(result.data.message);
      }
      
    }).catch(error => {
      SpinnerComponentEvolution.hide();
      AlertComponentEvolution.show(error.message);
    });
    
  };
  
  /**
   * Show media Modal and pass a callback to Media component which will be fire when insert.
   * @param e
   */
  openMediaModal = (e) => {
    let MediaComp;
    if (e.currentTarget.dataset.purpose === 'feature-image') {
      MediaComp = <MediaComponent insertFunc={this.setFeatureImage} insertBtnIsShow={true}/>;
    } else if (e.currentTarget.dataset.purpose === 'main-product-content') {
      MediaComp = <MediaComponent insertFunc={this.setMainProductContentImage} insertBtnIsShow={true}/>;
    } else if (e.currentTarget.dataset.purpose === 'product-detail') {
      MediaComp = <MediaComponent insertFunc={this.setMainProductDetailContentImage} insertBtnIsShow={true}/>;
    } else if (e.currentTarget.dataset.purpose === 'thumbnails') {
      MediaComp =
        <MediaComponent insertFunc={this.setThumbnails} fileIsSelected={this.state.thumbnails} insertBtnIsShow={true}/>;
    }
    
    this.setState({
      mediaModalContent: MediaComp
    }, () => {
      let mediaModal = $('#media-modal');
      mediaModal.modal('handleUpdate');
      mediaModal.modal('show');
      mediaModal.on('hidden.bs.modal', (e) => {
        this.setState({
          mediaModalContent: ''
        });
      });
    });
    
  };
  
  /**
   * It will be invoked from another place (In Media Component)
   * @param data
   */
  setThumbnails = (data) => {
    // Remove if not is image
    _.remove(data, function (o) {
      if (o.file_type === 'mp4') {
        AlertComponentEvolution.show('Nhúng video vào bài viết bằng cách khác nhé.');
        return true;
      } else {
        return false;
      }
    });
    
    this.setState({
      thumbnails: data
    }, () => {
      // Register Swiper slide
      this.swiperSlideInstance = new Swiper('.swiper-container.thumbnails', {
        slidesPerView: 4,
        spaceBetween: 30,
        lazy: true,
      });
      
      $('#media-modal').modal('hide');
    });
  };
  
  /**
   * It will be invoked from another place (In Media Component)
   * @param data
   */
  setFeatureImage = (data) => {
    if (data.length > 1) {
      AlertComponentEvolution.show('Chỉ có thể chọn một ảnh đại diện.');
    } else if (data.length === 0) {
      AlertComponentEvolution.show('Chưa chọn ảnh đại diện.', () => {
        $('#media-modal').modal('hide');
      });
    } else {
      
      if (data[0].file_type === 'mp4') {
        AlertComponentEvolution.show('Chọn ảnh thay vì chọn Video.');
      } else {
        this.setState({
          feature_image: data[0]
        }, () => {
          $('#media-modal').modal('hide');
        });
      }
      
    }
  };
  
  /**
   *
   */
  removeFeatureImage = () => {
    this.setState({
      feature_image: ''
    });
  };
  
  /**
   * It will be invoked from another place (In Media Component)
   * @param data
   */
  setMainProductContentImage = (data) => {
    data.forEach((item) => {
      let width = parseInt(item.dimensions_width / 2);
      let height = parseInt(item.dimensions_height / 2);
      // CKEDITOR.instances['main-product-content'].insertHtml(`<img width="${width}" height="${height}" src="${item.path}" alt="${item.alt_text}" title="${item.title}">`);
      if (item.file_type === 'mp4') {
        // let createHtmlVideo = `<video controls>
        //     <source src=${process.env.remoteServer}/${item.path} type="video/mp4"/>
        //     <source src=${process.env.remoteServer}/${item.path} type="video/ogg"/>
        //     Your browser does not support the video tag.
        //   </video>`;
        // Custom embed video by select elemebt of ckeditor and insert manual. You can't insert using insertHtml.
        AlertComponentEvolution.show('Nhúng video vào bài viết bằng cách khác nhé.');
      } else {
        // You need set width height so that Ckeditor can changed image size
        CKEDITOR.instances['main-product-content'].insertHtml(`<img data-id="${item._id}" class="dont-touch-me" width="${width}" height="${height}" src="${process.env.remoteServer}/${item.path}" alt="${item.alt_text}" title="${item.title}">`);
      }
      
    });
    $('#media-modal').modal('hide');
  };
  
  /**
   * It will be invoked from another place (In Media Component)
   * @param data
   */
  setMainProductDetailContentImage = (data) => {
    data.forEach((item) => {
      let width = parseInt(item.dimensions_width / 2);
      let height = parseInt(item.dimensions_height / 2);
      // CKEDITOR.instances['main-product-content'].insertHtml(`<img width="${width}" height="${height}" src="${item.path}" alt="${item.alt_text}" title="${item.title}">`);
      if (item.file_type === 'mp4') {
        // let createHtmlVideo = `<video controls>
        //     <source src=${process.env.remoteServer}/${item.path} type="video/mp4"/>
        //     <source src=${process.env.remoteServer}/${item.path} type="video/ogg"/>
        //     Your browser does not support the video tag.
        //   </video>`;
        // Custom embed video by select elemebt of ckeditor and insert manual. You can't insert using insertHtml.
        AlertComponentEvolution.show('Nhúng video vào bài viết bằng cách khác nhé.');
      } else {
        CKEDITOR.instances['product-detail'].insertHtml(`<img data-id="${item._id}" class="dont-touch-me" width="${width}" height="${height}" src="${process.env.remoteServer}/${item.path}" alt="${item.alt_text}" title="${item.title}">`);
      }
      
    });
    $('#media-modal').modal('hide');
  };
  
  /**
   *
   */
  createNewPost = () => {
    SpinnerComponentEvolution.show();
    // Get all image using in this post
    let imageUsingInMainProductContent = CKEDITOR.instances['main-product-content'].document.find('.dont-touch-me').$;
    let imageUsingInProductDetail = CKEDITOR.instances['product-detail'].document.find('.dont-touch-me').$;
    let imageUsingInThisPost = []; // Array Media's id. To detect which post is using (contains) this Media. After created this Post, we will update these Media with Post Id.
    [...imageUsingInMainProductContent, ...imageUsingInProductDetail].map(imageEl => {
      imageUsingInThisPost.push(imageEl.dataset.id);
    });
    
    if (!_.isEmpty(this.state.feature_image)) {
      imageUsingInThisPost.push(this.state.feature_image._id);
    }
    
    if (this.state.thumbnails.length !== 0) {
      for (let image of this.state.thumbnails) {
        imageUsingInThisPost.push(image._id);
      }
    }
    // Remove duplicate value in array
    imageUsingInThisPost = _.uniq(imageUsingInThisPost);
    
    let data = {
      name: this.state.name,
      slug: this.state.slug,
      status: this.state.status,
      main_product_content: this.state.main_product_content,
      product_detail: this.state.product_detail,
      price: this.state.price,
      currency: this.state.currency,
      sale: this.state.sale,
      publish_date: this.state.publish_date,
      categories: this.state.categoriesSelectedOfPost,
      tags: this.state.tagsSelectedOfPost,
      feature_image: this.state.feature_image,
      thumbnails: this.state.thumbnails,
      imageUsingInThisPost
    };
    axiosInstance().post(express_api.createProductUrl, data).then(result => {
      SpinnerComponentEvolution.hide();
      if (result.data.requestSuccessfully) {
        // Redirect to edit product page
        AlertComponentEvolution.show(result.data.message, () => {
          Router.push(`/admin/edit-product?slug=${result.data.data.slug}`);
        });
      } else {
        AlertComponentEvolution.show(result.data.message);
      }
    }).catch(error => {
      SpinnerComponentEvolution.hide();
      AlertComponentEvolution.show(error.message);
    });
  };
  
  componentWillUnmount() {
    this.vzoomInstance.destroy();
    CKEDITOR.instances['main-product-content'].destroy();
    CKEDITOR.instances['product-detail'].destroy();
    this.flatpickerInstance.destroy();
    $('#tags, #parent-category').select2('destroy');
    $('#media-modal').modal('dispose');
    // if (this.swiperSlideInstance) {
    //   this.swiperSlideInstance.destroy(true, true);
    // }
    window.removeEventListener('beforeunload', this.handleWindowClose);
  }
  
}

export default AdminCreateProductScene;
