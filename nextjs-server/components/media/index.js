import React from 'react';
import style from './style.css';
import PropTypes from 'prop-types';
import Link from 'next/link';
import _ from 'lodash';
import {AlertComponentEvolution} from '../alert';
import {axiosInstance} from '../../services/axios.service';
import {express_api} from '../../services/express_api.service';
import {SpinnerComponentEvolution} from '../spinner';
import {ConfirmComponentEvolution} from '../confirm';

export class MediaComponent extends React.Component {
  constructor(props) {
    super(props);
    this.oldFileIndex = '';
    this.newFileIndex = '';
    this.arrFileIsSelected = this.props.fileIsSelected;
    this.insertFunc = this.props.insertFunc;
    this.insertBtnIsShow = this.props.insertBtnIsShow;
    
    this.inputFiles = React.createRef();
    this.formFilesUpload = ''; // files need to upload
    
    this.state = {
      fileList: [],
      fileSelected: {},
      
      cropImageIsShow: false, // Show crop image scene
    };
    
    this.cropperInstance = '';
  }
  
  render() {
    if (!this.state.cropImageIsShow) {
      return (
        <div>
          
          <ul className="nav nav-tabs" id="myTab" role="tablist">
            <li className="nav-item">
              <a className="nav-link active" id="media-tab" data-toggle="tab" href="#media" role="tab"
                 aria-controls="home"
                 aria-selected="true">Media</a>
            </li>
            <li className="nav-item">
              <a className="nav-link" id="upload-tab" data-toggle="tab" href="#upload" role="tab"
                 aria-controls="profile" aria-selected="false">Upload Media</a>
            </li>
          </ul>
          <div className="tab-content" id="myTabContent">
            
            {/* The first tab */}
            <div className="tab-pane fade show active" id="media" role="tabpanel" aria-labelledby="media-tab">
              <div className="row">
                {/**/}
                <div className="col-8">
                  <div id="show-files" className="row">
                    
                    {
                      this.state.fileList.map((file, key) => {
                        return (
                          <div
                            className={`${_.find(this.arrFileIsSelected, {_id: file._id}) ? 'selected' : ''} file col-sm-6 col-md-3 col-xl-2 mb-2 p-0 mr-2 ml-2 cursor-pointer`}
                            key={key}
                            data-index={key}
                            data-id={file._id}
                            onClick={this.selectFile}>
                            {
                              file.file_type === 'mp4' ?
                                <video>
                                  <source src={`${process.env.remoteServer}/${file.path}`} type="video/mp4"/>
                                  <source src={`${process.env.remoteServer}/${file.path}`} type="video/ogg"/>
                                  Your browser does not support the video tag.
                                </video> :
                                <img src={`${process.env.remoteServer}/${file.path}?timestamp=${new Date(file.updatedAt).getTime()}`} alt={file.alt_text}
                                     title={file.title}/>
                            }
                          
                          </div>
                        );
                      })
                    }
                  
                  
                  </div>
                  {
                    this.insertBtnIsShow ?
                      <div className="row">
                        <button type="button" className="btn btn-primary mt-3 ml-2" onClick={this.insertFile}>Insert
                          Into
                          Post
                        </button>
                      </div> : ''
                  }
                
                </div>
                
                {/**/}
                <div id="file-details" className="col-4">
                  {
                    _.isEmpty(this.state.fileSelected) ? '' :
                      <div>
                        <div id="file-explore">
                          {
                            this.state.fileSelected.file_type === 'mp4' ?
                              <video controls>
                                <source src={`${process.env.remoteServer}/${this.state.fileSelected.path}`}
                                        type="video/mp4"/>
                                <source src={`${process.env.remoteServer}/${this.state.fileSelected.path}`}
                                        type="video/ogg"/>
                                Your browser does not support the video tag.
                              </video> :
                              <img src={`${process.env.remoteServer}/${this.state.fileSelected.path}?timestamp=${new Date(this.state.fileSelected.updatedAt).getTime()}`}
                                   alt={this.state.fileSelected.alt_text}
                                   title={this.state.fileSelected.title} className="img-thumbnail"/>
                          }
                        </div>
                        <ul className="pl-0 pt-2 list-unstyled">
                          <li>
                            <label className="mb-1" htmlFor="">File path:</label>
                            <p className="mb-1">
                              <Link prefetch href={`${process.env.remoteServer}/${this.state.fileSelected.path}`}>
                                <a target="_blank">
                                  {`${process.env.remoteServer}/${this.state.fileSelected.path}`}
                                </a>
                              </Link>
                            </p>
                          </li>
                          
                          <li>
                            <div className="form-group">
                              <label htmlFor="original_name">Media file name:</label>
                              <input type="text" className="form-control" id="media_file_name"
                                     placeholder="Media file name"
                                     name="media_file_name"
                                     value={this.state.fileSelected.media_file_name}
                                     onChange={this.handleChange}/>
                            </div>
                          </li>
                          <li>- Type: {this.state.fileSelected.file_type}</li>
                          <li>- Size: {this.state.fileSelected.size} bytes</li>
                          <li>
                            -
                            Dimensions: {this.state.fileSelected.dimensions_width}x{this.state.fileSelected.dimensions_height}
                            {
                              ['png', 'jpg', 'jpeg', 'gif', 'svg'].includes(this.state.fileSelected.file_type.toLowerCase()) ?
                                <a href="javascript:void(0);" className="text-danger" onClick={this.showSceneCropImage}>
                                  <i className="fa fa-crop ml-2"></i>
                                  Crop
                                </a> : ''
                            }
                          
                          </li>
                          <li className="text-break">- Created at: {this.state.fileSelected.createdAt}</li>
                          <li>
                            <div className="form-group">
                              <label htmlFor="alt">Alt text:</label>
                              <input type="text" className="form-control" id="alt" placeholder="Alt text"
                                     name="alt_text"
                                     value={this.state.fileSelected.alt_text}
                                     onChange={this.handleChange}/>
                              <small className="text-primary d-block">
                                - Specifies an alternate text for an image.
                              </small>
                            </div>
                          </li>
                          <li>
                            <div className="form-group">
                              <label htmlFor="title">Title:</label>
                              <textarea className="form-control" id="title" rows="3"
                                        name="title"
                                        value={this.state.fileSelected.title}
                                        onChange={this.handleChange}></textarea>
                              <small className="text-primary d-block">
                                - The name of the media. A title is often shown on attachment pages and galleries if
                                themes or
                                plugins are designed to display it.
                                <br/>
                                - It will be show when you hover on image.
                              </small>
                            </div>
                          </li>
                          <li>
                            <div className="form-group">
                              <label htmlFor="caption">Caption:</label>
                              <textarea className="form-control" id="caption" rows="3"
                                        name="caption"
                                        value={this.state.fileSelected.caption}
                                        onChange={this.handleChange}></textarea>
                            </div>
                          </li>
                          <li>
                            <div className="form-group">
                              <label htmlFor="description">Description:</label>
                              <textarea className="form-control" id="description" rows="3"
                                        name="description"
                                        value={this.state.fileSelected.description}
                                        onChange={this.handleChange}></textarea>
                            </div>
                          </li>
                          <li>
                            <label className="mb-1 mr-2" htmlFor="">Author: </label>
                            {this.state.fileSelected.uploaded_by.name}
                          </li>
                          <li>
                            <label className="mb-1" htmlFor="">Bài viết đang sử dụng hình ảnh này (Posts
                              relating):</label>
                            
                            {
                              this.state.fileSelected.uploaded_to_posts ?
                                this.state.fileSelected.uploaded_to_posts.map((obj, index) => {
                                  return (
                                    <p className="mb-1" key={index}>
                                      <Link prefetch href="https://google.com">
                                        <a target="_blank">
                                          - {obj.slug}
                                        </a>
                                      </Link>
                                    </p>
                                  );
                                }) : ''
                            }
                          </li>
                          <li>
                            <label className="mb-1" htmlFor="">Sản phẩm đang sử dụng hình ảnh này (Products
                              relating):</label>
                            {
                              this.state.fileSelected.uploaded_to_products ?
                                this.state.fileSelected.uploaded_to_products.map((obj, index) => {
                                  return (
                                    <p className="mb-1" key={index}>
                                      <Link prefetch href="https://google.com">
                                        <a target="_blank">
                                          - {obj.slug}
                                        </a>
                                      </Link>
                                    </p>
                                  );
                                }) : ''
                            }
                          </li>
                          <li className="mt-2">
                            <p className="text-primary mb-0 cursor-pointer font-weight-bold"
                               onClick={this.updateMedia}>Update</p>
                          </li>
                          <li className="mt-2">
                            <p className="text-danger cursor-pointer font-weight-bold" onClick={this.deleteMedia}>Delete
                              Permanently</p>
                          </li>
                        </ul>
                      </div>
                  }
                
                </div>
              </div>
            </div>
            
            {/* The second tab */}
            <div className="tab-pane fade" id="upload" role="tabpanel" aria-labelledby="upload-tab">
              <div id="form-upload-images">
                <input id="files" name="files[]" type="file" multiple className="cursor-pointer"
                       ref={this.inputFiles}
                       onChange={this.checkFilesUpload}/>
                <p id="show-file-name">Drag files here <br/> Or, if you prefer</p>
                <div className='wrapper-upload-button'>
                  <button type="button" className="btn btn-secondary">Choose files to upload</button>
                </div>
              </div>
              <div className="text-right mt-3">
                <button type="button" className="btn btn-primary" onClick={this.doUpload}>Upload</button>
              </div>
            </div>
          
          </div>
          
          <style jsx>{style}</style>
        </div>
      );
    } else {
      return (
        <div id="crop-image-scene">
          <div className="row m-0">
            <div id="wrap-image-cropping" className="col-lg-8 mt-lg-0 mt-2">
              <div>
                <img id="image-cropping" src={`${process.env.remoteServer}/${this.state.fileSelected.path}`} alt=""/>
              </div>
            </div>
            <div className="col-lg-4 mt-lg-0 mt-2">
              <div className="row">
                {/* Image preview */}
                <div className="col-12">
                  <div className="docs-preview clearfix" style={{height: '200px'}}>
                    {/*This CSS config is necessary for cropper js preview option*/}
                    {/*https://stackoverflow.com/questions/29788922/not-able-to-see-the-preview-for-cropper-js*/}
                    <div className="img-preview" style={{width: '100%', height: '200px', overflow: 'hidden'}}></div>
                  </div>
                </div>
                
                {/* Origin Dimensions */}
                <div className="col-12 d-flex justify-content-start align-items-center mt-2">
                  <span className="mr-2">Origin Dimensions:</span>
                  <span>{this.state.fileSelected.dimensions_width} x {this.state.fileSelected.dimensions_height}</span>
                </div>
                
                {/* Scale */}
                <div className="col-12 d-flex justify-content-start align-items-center mt-2">
                  <input type="input" className="form-control form-control-sm" id="scale-width"
                         style={{width: '50px'}}/>
                  <span className="ml-1 mr-1">x</span>
                  <input type="input" className="form-control form-control-sm" id="scale-height"
                         style={{width: '50px'}}/>
                  <button id="scale-btn" className="btn btn-primary btn-sm ml-2">Scale</button>
                </div>
                
                {/* Selection to show */}
                <div className="col-12 d-flex justify-content-start align-items-center mt-2">
                  
                  <span className="mr-2">Current Selection:</span>
                  <input type="input" disabled className="form-control form-control-sm" id="crop-width-show"
                         style={{width: '50px'}}/>
                  <span className="ml-1 mr-1">x</span>
                  <input type="input" disabled className="form-control form-control-sm" id="crop-height-show"
                         style={{width: '50px'}}/>
                
                </div>
                
                {/* Selection */}
                <div className="col-12 d-flex justify-content-start align-items-center mt-2">
                  
                  <span className="mr-2">Selection:</span>
                  <input type="input" className="form-control form-control-sm" id="crop-width" style={{width: '50px'}}/>
                  <span className="ml-1 mr-1">x</span>
                  <input type="input" className="form-control form-control-sm" id="crop-height"
                         style={{width: '50px'}}/>
                
                </div>
                
                {/* Toolbar */}
                <div className="col-12 mt-2 docs-toggles">
                  <div className="btn-group d-flex flex-nowrap" data-toggle="buttons">
                    <label className="btn btn-primary cursor-pointer active">
                      <input type="radio" className="sr-only" id="aspectRatio1" name="aspectRatio"
                             value="1.7777777777777777"/>
                      <span className="docs-tooltip" data-toggle="tooltip" title="aspectRatio: 16 / 9">16:9</span>
                    </label>
                    <label className="btn btn-primary cursor-pointer">
                      <input type="radio" className="sr-only" id="aspectRatio2" name="aspectRatio"
                             value="1.3333333333333333"/>
                      <span className="docs-tooltip" data-toggle="tooltip" title="aspectRatio: 4 / 3">4:3</span>
                    </label>
                    <label className="btn btn-primary cursor-pointer">
                      <input type="radio" className="sr-only" id="aspectRatio3" name="aspectRatio" value="1"/>
                      <span className="docs-tooltip" data-toggle="tooltip" title="aspectRatio: 1 / 1">1:1</span>
                    </label>
                    <label className="btn btn-primary cursor-pointer">
                      <input type="radio" className="sr-only" id="aspectRatio4" name="aspectRatio"
                             value="0.6666666666666666"/>
                      <span className="docs-tooltip" data-toggle="tooltip" title="aspectRatio: 2 / 3">2:3</span>
                    </label>
                    <label className="btn btn-primary cursor-pointer">
                      <input type="radio" className="sr-only" id="aspectRatio5" name="aspectRatio" value="NaN"/>
                      <span className="docs-tooltip" data-toggle="tooltip" title="aspectRatio: NaN">Free</span>
                    </label>
                  </div>
                </div>
                
                {/* Save image cropped */}
                <div className="col-12">
                  <button id="preview-image-cropped-btn" className="btn btn-primary mr-2">Preview</button>
                  <button id="save-image-cropped-btn" className="btn btn-primary mr-2">Save</button>
                  <button className="btn btn-danger" onClick={this.hideSceneCropImage}>Cancel</button>
                </div>
              
              </div>
            </div>
          </div>
          
          {/**/}
          <style jsx>{style}</style>
        </div>
      );
    }
    
  }
  
  componentDidMount() {
    this.getAllMedia();
  }
  
  /**
   * Handle binding input value with state
   * @param e
   */
  handleChange = e => {
    let {target} = e;
    this.setState((prevState) => (
      {
        fileSelected: {...prevState.fileSelected, [target.name]: target.value}
      }
    ));
  };
  
  /**
   * Proceed after clicked the insert button
   * @param e
   */
  insertFile = (e) => {
    this.insertFunc(this.arrFileIsSelected);
  };
  
  /**
   * Handle select file to insert
   * @param event
   */
  selectFile = (event) => {
    let elSelected = event.currentTarget;
    let index = elSelected.dataset.index;
    let data = this.state.fileList[index];
    
    if (event.shiftKey) {
      
      if (this.oldFileIndex === '') {
        this.oldFileIndex = this.newFileIndex = index;
        this.arrFileIsSelected.push(data);
        document.querySelectorAll('.file')[index].classList.add('selected');
      } else {
        this.newFileIndex = parseInt(index);
        this.oldFileIndex = parseInt(this.oldFileIndex);
        if (this.oldFileIndex > this.newFileIndex) {
          this.arrFileIsSelected = _.slice(this.state.fileList, this.newFileIndex, this.oldFileIndex + 1);
          document.querySelectorAll('.file.selected').forEach(function (item) {
            item.classList.remove('selected');
          });
          for (let i = this.newFileIndex; i <= this.oldFileIndex; i++) {
            document.querySelectorAll('.file')[i].classList.add('selected');
          }
        } else {
          this.arrFileIsSelected = _.slice(this.state.fileList, parseInt(this.oldFileIndex), parseInt(this.newFileIndex) + 1);
          document.querySelectorAll('.file.selected').forEach(function (item) {
            item.classList.remove('selected');
          });
          for (let i = this.oldFileIndex; i <= this.newFileIndex; i++) {
            document.querySelectorAll('.file')[i].classList.add('selected');
          }
        }
      }
      
      //show details file
      this.setState(prevState => (
        {
          fileSelected: data
        }
      ));
      
      //scroll div show details file
      let objDiv = document.getElementById('file-details');
      objDiv.scrollTop = 0;
      
    } else if (event.metaKey || event.ctrlKey || event.altKey) {
      this.oldFileIndex = index;
      if (_.find(this.arrFileIsSelected, (o) => o._id === data._id)) {
        _.remove(this.arrFileIsSelected, function (o) {
          return o._id === data._id;
        });
        document.querySelectorAll('.file')[index].classList.remove('selected');
      } else {
        this.arrFileIsSelected.push(data);
        document.querySelectorAll('.file')[index].classList.add('selected');
      }
      //show details file
      this.setState(prevState => (
        {
          fileSelected: data
        }
      ));
      
      //scroll div show details file
      let objDiv = document.getElementById('file-details');
      objDiv.scrollTop = 0;
      
    } else {
      if (_.find(this.arrFileIsSelected, (o) => o._id === data._id)) {
        this.oldFileIndex = '';
        this.arrFileIsSelected = [];
        document.querySelectorAll('.file.selected').forEach(function (item) {
          item.classList.remove('selected');
        });
      } else {
        this.oldFileIndex = index;
        this.arrFileIsSelected = [];
        this.arrFileIsSelected.push(data);
        //css for file is selected
        document.querySelectorAll('.file.selected').forEach(function (item) {
          item.classList.remove('selected');
        });
        event.currentTarget.classList.add('selected');
      }
      
      //show details file
      this.setState(prevState => (
        {
          fileSelected: data
        }
      ));
      
      //scroll div show details file
      let objDiv = document.getElementById('file-details');
      objDiv.scrollTop = 0;
    }
    
  };
  
  /**
   * Handle when choose files to upload
   * @param e
   */
  checkFilesUpload = (e) => {
    this.formFilesUpload = new FormData();
    let files = e.currentTarget.files;
    let filesName = [];
    
    for (let i = 0; i < files.length; i++) {
      let fileName = files[i].name;
      let extension = fileName.substr((fileName.lastIndexOf('.') + 1));
      if (['png', 'jpg', 'mp4', 'jpeg', 'gif', 'svg'].includes(extension.toLowerCase())) {
        filesName.push(fileName);
        this.formFilesUpload.append(`dp_media`, files[i]);
      } else {
        e.currentTarget.value = '';
        this.formFilesUpload.delete('dp_media');
        AlertComponentEvolution.show(`Chỉ có thể đăng tệp tin với định dạng '.png', '.jpg', '.mp4', '.jpeg', '.gif', '.svg'`);
      }
    }
    
    this.formFilesUpload.append('testData', JSON.stringify({test: 'This data will be variable behind req.body on server.'}));
    
    // Debug FormData value
    // for (let [key, value] of this.formFilesUpload.entries()) {
    //   console.log(key, value);
    // }
    
    if (filesName.length) {
      let string = '';
      for (let i = 0; i < filesName.length; i++) {
        !i ? string += `${filesName[i]}` : string += `<br/>${filesName[i]}`;
      }
      document.getElementById('show-file-name').innerHTML = string;
    } else {
      document.getElementById('show-file-name').innerHTML = `Drag files here <br/> Or, if you prefer`;
    }
    
  };
  
  /**
   *
   */
  doUpload = () => {
    if (this.inputFiles.current.files.length) {
      SpinnerComponentEvolution.show();
      axiosInstance().post(express_api.uploadMediaUrl, this.formFilesUpload, {
        needLogin: true,
        headers: {
          'Content-Type': 'multipart/form-data'  // Indicated that what type of data is sent to server
        }
      }).then(result => {
        SpinnerComponentEvolution.hide();
        if (result.data.requestSuccessfully) {
          this.inputFiles.current.value = '';
          document.getElementById('show-file-name').innerHTML = `Drag files here <br/> Or, if you prefer`;
          this.formFilesUpload = '';
          this.getAllMedia();
          AlertComponentEvolution.show(result.data.message);
        } else {
          AlertComponentEvolution.show(result.data.message);
        }
        
      }).catch(error => {
        SpinnerComponentEvolution.hide();
        AlertComponentEvolution.show(error.message);
        console.log(error);
      });
    } else {
      AlertComponentEvolution.show('No file selected.');
    }
    
  };
  
  getAllMedia = () => {
    SpinnerComponentEvolution.show();
    axiosInstance().get(express_api.getAllMediaUrl).then(result => {
      SpinnerComponentEvolution.hide();
      if (result.data.requestSuccessfully) {
        this.setState({
          fileList: result.data.data
        });
      } else {
        AlertComponentEvolution.show(result.data.message);
      }
    }).catch(error => {
      console.log(error);
      SpinnerComponentEvolution.hide();
      AlertComponentEvolution.show(error.message);
    });
  };
  
  /**
   *
   */
  updateMedia = () => {
    SpinnerComponentEvolution.show();
    axiosInstance().put(`${express_api.updateMediaUrl}/${this.state.fileSelected._id}`, {
      media_file_name: this.state.fileSelected.media_file_name,
      alt_text: this.state.fileSelected.alt_text,
      title: this.state.fileSelected.title,
      caption: this.state.fileSelected.caption,
      description: this.state.fileSelected.description
    }).then(result => {
      SpinnerComponentEvolution.hide();
      if (result.data.requestSuccessfully) {
        this.setState({
          fileSelected: result.data.data
        }, () => {
          this.getAllMedia();
          this.arrFileIsSelected = [];
          this.arrFileIsSelected.push(result.data.data);
        });
        AlertComponentEvolution.show(result.data.message);
      } else {
        AlertComponentEvolution.show(result.data.message);
      }
    }).catch(error => {
      SpinnerComponentEvolution.hide();
      AlertComponentEvolution.show(error.message);
    });
  };
  
  /**
   *
   */
  deleteMedia = () => {
    ConfirmComponentEvolution.show(`Bạn nên cập nhật các bài viết đang sử dụng ảnh này trước khi xoá chúng. </br> Bạn có muốn tiếp tục xoá không?`, () => {
      SpinnerComponentEvolution.show();
      axiosInstance().delete(`${express_api.deleteMediaUrl}/${this.state.fileSelected._id}`).then(result => {
        SpinnerComponentEvolution.hide();
        if (result.data.requestSuccessfully) {
          this.setState({
            fileSelected: {}
          }, () => {
            this.getAllMedia();
            this.arrFileIsSelected = [];
          });
          AlertComponentEvolution.show(result.data.message);
        } else {
          AlertComponentEvolution.show(result.data.message);
        }
      }).catch(error => {
        SpinnerComponentEvolution.hide();
        AlertComponentEvolution.show(error.message);
      });
    });
  };
  
  //
  showSceneCropImage = () => {
    this.setState({cropImageIsShow: true}, () => {
      const image = document.getElementById('image-cropping');
      let scaleWidthEl = document.getElementById('scale-width');
      let scaleHeightEl = document.getElementById('scale-height');
      let cropWidthEl = document.getElementById('crop-width');
      let cropHeightEl = document.getElementById('crop-height');
      let cropWidthElShow = document.getElementById('crop-width-show');
      let cropHeightElShow = document.getElementById('crop-height-show');
      let cropperOption = {
        aspectRatio: 16 / 9,
        // checkCrossOrigin: false, // Fix CORS if current image is a cross-origin image
        autoCrop: true,  // Enable auto show crop view when initialize
        preview: '.img-preview',
        crop(event) {
          // Trigger when you click, hold and drag mouse
          cropWidthElShow.value = parseInt(event.detail.width);
          cropHeightElShow.value = parseInt(event.detail.height);
        },
      };
      this.cropperInstance = new Cropper(image, cropperOption);
      // Options
      /**
       * WTF??? onchange event for "div" tag???
       * May be triggered when add/remove class on this div
       */
      document.querySelector('.docs-toggles').onchange = (event) => {
        let e = event || window.event;
        let target = e.target || e.srcElement;
        
        if (!this.cropperInstance) {
          return;
        }
        
        if (target.tagName.toLowerCase() === 'label') {
          target = target.querySelector('input');
        }
        
        cropperOption[target.name] = target.value;
        cropperOption.autoCrop = true;
        
        // Restart
        this.cropperInstance.destroy();
        this.cropperInstance = new Cropper(image, cropperOption);
        
      };
      
      /**
       *  Handle khi muốn chọn độ rộng và chiều cao để cắt ảnh.
       */
      [cropWidthEl, cropHeightEl].forEach(el => {
        // Input just available for typing number integer or double
        el.addEventListener('keydown', (event) => {
          if (event.shiftKey || event.metaKey || event.ctrlKey || event.altKey) {
            let charCode = (event.which) ? event.which : event.keyCode;
            if (charCode > 31 && (charCode < 48 || charCode > 57))
              return event.preventDefault();
            return true;
          } else {
            let charCode = (event.which) ? event.which : event.keyCode;
            if (charCode > 31 && (charCode < 48 || charCode > 57))
              return event.preventDefault();
            return true;
          }
        });
        
        // Handle when input set width and height of crop box is changed
        el.addEventListener('input', (event) => {
          let cropWidthElValue = parseFloat(cropWidthEl.value) || 1;
          let cropHeightElValue = parseFloat(cropHeightEl.value) || 1;
          
          this.cropperInstance.setData({
            width: cropWidthElValue,
            height: cropHeightElValue
          });
          
        });
        
      });
      // ========= End above =========
      
      /**
       * Handle khi ấn save image đã cắt.
       */
      document.getElementById('save-image-cropped-btn').addEventListener('click', async () => {
        let data = this.cropperInstance.getCroppedCanvas({
          maxWidth: 4096,
          maxHeight: 4096,
          fillColor: '#fff',
          imageSmoothingEnabled: false,
          imageSmoothingQuality: 'high',
        });
        
        let convertImgToBlob = new Promise((resolve, reject) => {
          data.toBlob((blob) => {
            resolve(blob);
          }, `image/${this.state.fileSelected.file_type}`, 1);
        });
        
        try {
          let imageBlob = await convertImgToBlob;
          let formData = new FormData();
          formData.append('croppedImage', imageBlob);
          formData.append('imgId', this.state.fileSelected._id);
          SpinnerComponentEvolution.show();
          axiosInstance().put(express_api.cropImageUrl, formData, {
            needLogin: true,
            headers: {
              'Content-Type': 'multipart/form-data'  // Indicated that what type of data is sent to server
            }
          }).then(result => {
            SpinnerComponentEvolution.hide();
            if (result.data.requestSuccessfully) {
              AlertComponentEvolution.show(result.data.message);
              let cloneFileList = _.map(this.state.fileList, _.clone);
              // Find item index using _.findIndex
              let index = _.findIndex(cloneFileList, {_id: result.data.data._id});
              // Replace item at index using native splice
              cloneFileList.splice(index, 1, result.data.data);
              this.setState({
                cropImageIsShow: false,
                fileSelected: result.data.data,
                fileList: cloneFileList
              }, () => {
                this.cropperInstance.destroy();
                this.arrFileIsSelected = [result.data.data];
              });
            } else {
              AlertComponentEvolution.show(result.data.message);
            }
          }).catch(e => {
            SpinnerComponentEvolution.hide();
            AlertComponentEvolution.show(e.message);
          });
          
        } catch (e) {
          AlertComponentEvolution.show(e.message);
        }
        
      });
      
      document.getElementById('preview-image-cropped-btn').addEventListener('click', () => {
        let data = this.cropperInstance.getCroppedCanvas({
          maxWidth: 4096,
          maxHeight: 4096,
          fillColor: '#fff',
          imageSmoothingEnabled: false,
          imageSmoothingQuality: 'high',
        });
        
        window.open(data.toDataURL(`image/${this.state.fileSelected.file_type}`, 1), '_blank');
      });
      // ========= End above =========
      
      /**
       *  Handle khi không muốn cắt ảnh nhưng vẫn thay đổi được kích thước của ảnh. It called is scale
       */
      [scaleWidthEl, scaleHeightEl].forEach(el => {
        // Input just available for typing number integer or double
        el.addEventListener('keydown', (event) => {
          if (event.shiftKey || event.metaKey || event.ctrlKey || event.altKey) {
            let charCode = (event.which) ? event.which : event.keyCode;
            if (charCode > 31 && (charCode < 48 || charCode > 57))
              return event.preventDefault();
            return true;
          } else {
            let charCode = (event.which) ? event.which : event.keyCode;
            if (charCode > 31 && (charCode < 48 || charCode > 57))
              return event.preventDefault();
            return true;
          }
        });
        
        
      });
      
      let handleScaleWidthChanging = (event) => {
        let imageRatio = (this.state.fileSelected.dimensions_width / this.state.fileSelected.dimensions_height).toFixed(2);
        scaleHeightEl.value = event.target.value !== '' ? parseInt(event.target.value / imageRatio) : '';
      };
      
      let handleScaleHeightChanging = (event) => {
        let imageRatio = (this.state.fileSelected.dimensions_width / this.state.fileSelected.dimensions_height).toFixed(2);
        scaleWidthEl.value = event.target.value !== '' ? parseInt(event.target.value * imageRatio) : '';
      };
      
      scaleWidthEl.addEventListener('input', handleScaleWidthChanging);
      scaleHeightEl.addEventListener('input', handleScaleHeightChanging);
      
      document.getElementById('scale-btn').addEventListener('click', () => {
        let {naturalWidth} = this.cropperInstance.getImageData();
        if (scaleWidthEl.value) {
          this.cropperInstance.scale(scaleWidthEl.value / naturalWidth); // scale to set image dimensions
          this.cropperInstance.setData({
            // Set Data that mean set which will crop.
            x: 0,  // value is 0 because it always ratio with current image include image dimensions
            y: 0,
            width: parseInt(scaleWidthEl.value), // As dimensions of current image
            height: parseInt(scaleHeightEl.value),
            scaleX: parseInt(scaleWidthEl.value) / naturalWidth, // Scale same as image scaled
            scaleY: parseInt(scaleWidthEl.value) / naturalWidth,
          });
        } else {
          AlertComponentEvolution.show('Hãy nhập kích thước cho ảnh trước.');
        }
        
      });
      // ========= End above =========
      
    });
  };
  
  //
  hideSceneCropImage = () => {
    this.setState({
      cropImageIsShow: false
    }, () => {
      this.cropperInstance.destroy();
    });
  };
}

MediaComponent.propTypes = {
  fileIsSelected: PropTypes.arrayOf(PropTypes.object),
  // insertFunc: PropTypes.func.isRequired,
  insertFunc: PropTypes.func,
  insertBtnIsShow: PropTypes.bool
};

MediaComponent.defaultProps = {
  fileIsSelected: [],
  insertBtnIsShow: false
};
