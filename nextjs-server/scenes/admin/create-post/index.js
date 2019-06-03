import React from 'react';
import Head from 'next/head';
import style from './style.css';
import 'v-zoom';
import middleware from '../../../middleware';
import Router from 'next/dist/client/router';
import {axiosInstance} from '../../../services/axios.service';
import {express_api} from '../../../services/express_api.service';
import {AlertComponentEvolution} from '../../../components/alert';
import {ConfirmComponentEvolution} from '../../../components/confirm';
import {SpinnerComponentEvolution} from '../../../components/spinner';
import {toSlug, isNumber, isNumberDot} from '../../../services/regex.service';
import _ from 'lodash';
import {MediaComponent} from '../../../components/media';

class AdminCreatePostScene extends React.Component {
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
    //https://stackoverflow.com/questions/53848026/how-to-use-pure-flatpickr-in-react
    this.publish_date = React.createRef();
    
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
      
      
      //========= initialize variable
      postStatus: [
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
      ],
      categories: [],
      tags: [],
      //========= Fast create a new category
      parent_category_selected: '',
      category_name_creating: '',
      //
      mediaModalContent: '',
      
    };
    
  };
  
  render() {
    
    return (
      <div>
        
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
                
                {/**/}
                <div className='form-group'>
                  <label htmlFor='slug'>Mô tả sản phẩm</label>
                  <br/>
                  <button type='button' id='show-media' className='btn btn-primary mb-2' onClick={this.openMediaModal}>
                    <i className='fas fa-images mr-2'></i>
                    Media
                  </button>
                  <textarea id='main-product-content' name='main_product_content'
                            defaultValue={this.state.main_product_content}></textarea>
                </div>
                
                {/**/}
                <div className='form-group'>
                  <label htmlFor='slug'>Chi tiết sản phẩm</label>
                  <br/>
                  <button id='show-media' className='btn btn-primary mb-2'><i className='fas fa-images mr-2'></i>
                    Media
                  </button>
                  <textarea id='product-detail' name='product_detail'
                            defaultValue={this.state.product_detail}></textarea>
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
                          this.state.postStatus.map((el, index) => {
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
                                   checked={_.includes(this.state.categoriesSelectedOfPost, el._id)}
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
                       src='/static/img/default_admin_avatar.jpg'
                       alt=''/>
                </div>
                {/*panel footer*/}
                <div className='hljs-wrapper'>
                  <div className='hljs clearfix'>
                    <p className='text-light-blue cursor-pointer mb-0 inline'>
                      <i className='fa fa-plus mr-2'></i>
                      Set feature image
                    </p>
                  </div>
                </div>
              </div>
            </div>
            {/* End box 4th left */}
          
          </div>
        </div>
        
        {/*Modal*/}
        <div id="media-modal" className="modal" tabIndex="-1" role="dialog"
             aria-labelledby="media-modal" aria-hidden="true">
          <div className="modal-dialog modal-xl">
            <div className="modal-content">
              {this.state.mediaModalContent}
            </div>
          </div>
        </div>
        
      </div>
    );
  }
  
  componentDidMount() {
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
  
  handleChangeName = (e) => {
    let name = e.currentTarget.value;
    let slug = toSlug(name);
    this.setState({name, slug});
  };
  
  handleChangePrice = (e) => {
    let value = e.currentTarget.value;
    if (isNumberDot(value) || value === '') {
      this.setState({
        price: value
      });
    }
  };
  
  handleChangeSale = (e) => {
    let value = e.currentTarget.value;
    if (isNumberDot(value) || value === '') {
      this.setState({
        sale: value
      });
    }
  };
  
  /**
   *
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
   *
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
  
  openMediaModal = () => {
    this.setState({
      mediaModalContent: <MediaComponent/>
    }, () => {
      $('#media-modal').modal('handleUpdate');
      $('#media-modal').modal('show');
      
      $('#media-modal').on('hidden.bs.modal', (e) => {
        this.setState({
          mediaModalContent: ''
        });
        
      });
    });
    
  };
  
  createNewPost = () => {
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
      tags: this.state.tagsSelectedOfPost
    };
    console.log(data);
  };
  
  componentWillUnmount() {
    this.vzoomInstance.destroy();
    CKEDITOR.instances['main-product-content'].destroy();
    CKEDITOR.instances['product-detail'].destroy();
    this.flatpickerInstance.destroy();
    $('#tags, #parent-category').select2('destroy');
  }
  
}

export default AdminCreatePostScene;
