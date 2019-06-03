import React from 'react';
import Head from 'next/head';
import style from './style.css';
// import 'select2/src/scss/core.scss';
// import 'select2/dist/js/select2.full.min';
// import 'flatpickr/dist/flatpickr.min.css';
// import 'flatpickr/dist/flatpickr';
import 'v-zoom';
import middleware from '../../../middleware';
import Router from 'next/dist/client/router';


class AdminEditPostScene extends React.Component {
  static async getInitialProps(ctx) {
    // If redirected, Doesn't have another next action. We need return here.
    if (middleware.redirectIfNotAuthenticated(ctx)) {
      return;
    }
    
    if (!middleware.checkPermission(ctx, ['super', 'admin', 'editor'])) {
      if(ctx.res) {
        ctx.res.writeHead(303, {Location: `/`});
        ctx.res.end();
      } else {
        Router.push('/');
      }
    }
    
    return {};
  }
  
  constructor(props) {
    super(props);
    this.flatpickerInstance = '';
    this.vzoomInstance = '';
  };
  
  render() {
    return (
      <div>
        
        <div className='row'>
          <div className='col-md-7 col-lg-8'>
            <div className='box box-primary'>
              <div className='box-body'>
                <div className='form-group'>
                  <label htmlFor='title'>Title</label>
                  <input type='text' name='title' className='form-control' id='title' placeholder='Required...'/>
                </div>
                <div className='form-group'>
                  <label htmlFor='slug'>Slug</label>
                  <input type='text' name='slug' disabled className='form-control' id='slug' placeholder='Required...'/>
                </div>
                <div className='form-group'>
                  <label htmlFor='slug'>Content</label>
                  <br/>
                  <button id='show-media' className='btn btn-primary mb-2'><i className='fas fa-images mr-2'></i>Media
                  </button>
                  <textarea id='content-post' name='content' placeholder='Enter content here...'></textarea>
                </div>
              </div>
            </div>
            {/* End box 1st right */}
          </div>
          
          <div className='col-md-5 col-lg-4'>
            
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
                <h4 className='panel-title'>Publish <span
                  className='label label-success m-l-5 t-minus-1'>NEW</span></h4>
              </div>
              
              <div className='is-collapse'>
                {/*panel body*/}
                <div className='panel-body'>
                  <p>
                    <i className='fa fa-calendar mr-2 t-plus-1'></i>
                    Trạng thái:&nbsp;
                    <span className='text-bold text-muted'>Bài viết mới</span>
                  </p>
                  <p className='clearfix box-body__publish-date mb-0'>
                    <i className='fa fa-calendar mr-2 pull-left t-plus-2'></i>
                    <span className='pull-left'>Ngày đăng:&nbsp;</span>
                    <input id='publish-date' name='publish-date' type='text'
                           className='text-bold text-muted no-border pull-left'/>
                    <label htmlFor='publish-date' className='change font-weight-light cursor-pointer'>Change</label>
                  </p>
                </div>
                {/*panel footer*/}
                <div className='hljs-wrapper'>
                  <div className='hljs clearfix'>
                    <button type='button' className='btn btn-primary pull-left'>Save Draft</button>
                    <button type='button' className='btn btn-primary pull-right'>Update</button>
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
                  <div className='checkbox'>
                    <label className='d-flex align-items-center' style={{'paddingLeft': `${9 * 0}px`}}>
                      <input type='checkbox' name='categories' value=''/>
                      <span className='cr mr-2'><i className='cr-icon fa fa-check'></i></span>
                      Category 1
                    </label>
                  </div>
                  <div className='checkbox'>
                    <label className='d-flex align-items-center' style={{'paddingLeft': `${9 * 2}px`}}>
                      <input type='checkbox' name='categories' value=''/>
                      <span className='cr mr-2'><i className='cr-icon fa fa-check'></i></span>
                      Category 1.1
                    </label>
                  </div>
                  <div className='checkbox'>
                    <label className='d-flex align-items-center' style={{'paddingLeft': `${9 * 2}px`}}>
                      <input type='checkbox' defaultChecked name='categories' value=''/>
                      <span className='cr mr-2'><i className='cr-icon fa fa-check'></i></span>
                      Category 1.2
                    </label>
                  </div>
                
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
                        <select id='parent-category' name='parent-category' className='form-control'
                                style={{'width': '100%'}} defaultValue='-1'>
                          <option value='-1'>---Parent category---</option>
                          <option value=''>Alaska</option>
                        </select>
                      </div>
                      
                      <div className='input-group pt-3'>
                        <input type='text' className='form-control' placeholder='Category...'/>
                        <span className='input-group-btn'>
						  <button type='button' className='btn btn-info ml-2'>Click me to Add New!</button>
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
                    <select id='tags' name='tags' className='form-control' multiple={true}
                            data-placeholder='Select tags' style={{'width': '100%'}}>
                      <option>Alabama</option>
                      <option>Alaska</option>
                      <option>California</option>
                      <option>Delaware</option>
                      <option>Tennessee</option>
                      <option>Texas</option>
                      <option>Washington</option>
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
      </div>
    );
  }
  
  componentDidMount() {
    // Register VZoom
    this.vzoomInstance = VZoom.init('.vzoom', {
      backgroundColor: 'rgba(0,0,0,.95)',
      zoomEffect: 'translate',
      duration: '279',
      zoomPercentage: 50,
    });
    
    // Replace the <textarea id='content-post'> with a CKEditor
    CKEDITOR.replace('content-post', {
      height: 270,
      extraPlugins: 'language,justify,iframe,font,youtube',
      removePlugins: '',
      // skin: 'kama',
      font_defaultLabel: 'Arial',
      fontSize_defaultLabel: '12px',
      youtube_responsive: true,
      youtube_controls: true,
      youtube_related: true,
    });
    CKEDITOR.instances['content-post'].setData('First line');
    
    
    // Register flatpickr
    this.flatpickerInstance = flatpickr('#publish-date', {
      defaultDate: Date.now(),
    });
    
    // Register select2
    $('#tags, #parent-category').select2({
      tags: true // if is multiple, create tag if not exist
    });
    
    /**
     * Event handle for four button onto pannel-header
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
    
    
  }
  
  componentWillUnmount() {
    this.vzoomInstance.destroy();
    CKEDITOR.instances['content-post'].destroy();
    this.flatpickerInstance.destroy();
    $('#tags, #parent-category').select2('destroy');
  }
  
}

export default AdminEditPostScene;
