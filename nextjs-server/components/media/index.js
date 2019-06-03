import React from 'react';
import style from './style.css';

export class MediaComponent extends React.Component {
  constructor(props) {
    super(props);
  }
  
  render() {
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
          <div className="tab-pane show active" id="media" role="tabpanel" aria-labelledby="media-tab">
            <div className="row">
              {/**/}
              <div className="col-8">
                <div id="show-files" className="row">
              
                  <div className="file col-sm-6 col-md-3 col-xl-2 mb-2 p-0 mr-2 ml-2 cursor-pointer">
                    <img src="/static/img/default_admin_avatar.jpg" alt=""/>
                  </div>
              
                  <div className="file selected col-sm-6 col-md-3 col-xl-2 mb-2 p-0 mr-2 ml-2 cursor-pointer">
                    <img src="/static/img/default_admin_avatar.jpg" alt=""/>
                  </div>
            
                </div>
                
                <div className="row">
                  <button type="button" className="btn btn-primary mt-3 ml-2">Insert Into Post</button>
                </div>
              </div>
              
              {/**/}
              <div id="file-details" className="col-4">
                <div>
                  <img src="/static/img/default_admin_avatar.jpg" alt="..." title="" className="img-thumbnail"/>
                </div>
                <ul className="pl-0 pt-2 list-unstyled">
                  <li>
                    <div className="form-group">
                      <label htmlFor="original_name">Original name:</label>
                      <input type="text" className="form-control" id="original_name" placeholder="Original name"/>
                    </div>
                  </li>
                  <li>- Extension: .jpg</li>
                  <li>- Size: 27 bytes</li>
                  <li>- Dimensions: 20x20
                    <a href="javascript:void(0);" className="text-danger">
                      <i className="fa fa-crop ml-2"></i>
                      Crop
                    </a>
                    <small className="text-primary d-block">- Lưu ý sau khi cắt ảnh nên chèn lại ảnh vào bài viết để
                      đúng tỉ lệ mới, chống méo .
                    </small>
                  </li>
                  <li>- Created at: date</li>
                  <li>
                    <div className="form-group">
                      <label htmlFor="alt">Alt text:</label>
                      <input type="text" className="form-control" id="alt" placeholder="Alt" defaultValue="alt_text"/>
                    </div>
                  </li>
                  <li>
                    <div className="form-group">
                      <label htmlFor="title">Title:</label>
                      <textarea className="form-control" id="title" rows="3" defaultValue="title"></textarea>
                    </div>
                  </li>
                  <li>
                    <div className="form-group">
                      <label htmlFor="caption">Caption:</label>
                      <textarea className="form-control" id="caption" rows="3" defaultValue="caption"></textarea>
                    </div>
                  </li>
                  <li>
                    <div className="form-group">
                      <label htmlFor="description">Description:</label>
                      <textarea className="form-control" id="description" rows="3" defaultValue="description"></textarea>
                    </div>
                  </li>
                  <li>Author: author</li>
                  <li>
                    <p className="text-primary mb-0 cursor-pointer">Update</p>
                  </li>
                  <li>
                    <p className="text-danger cursor-pointer">Delete Permanently</p>
                  </li>
                </ul>
              </div>
            </div>
          </div>
      
          {/* The second tab */}
          <div className="tab-pane" id="upload" role="tabpanel" aria-labelledby="upload-tab">
            <div id="form-upload-images">
              <input id="file" name="files[]" type="file" multiple className="cursor-pointer"/>
              <p id="show-file-name">Drag files here <br/> Or, if you prefer</p>
              <div className='wrapper-upload-button'>
                <button type="button" className="btn btn-secondary">Choose files to upload</button>
              </div>
            </div>
            <div className="text-right mt-3">
              <button type="button" className="btn btn-primary">Upload</button>
            </div>
          </div>
    
        </div>
    
        <style jsx>{style}</style>
      </div>
    );
  }
  
  componentDidMount() {
    // CKEDITOR.instances['main-product-content'].insertHtml('<img src="http://localhost:3000/static/img/default_admin_avatar.jpg" />');
  }
  
  componentWillUnmount() {
    console.log('Media component unmount');
  }
  
}
