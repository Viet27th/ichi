import React from 'react';
import ReactDOM from 'react-dom';
import style from './style.css';

class ConfirmComponent extends React.Component {
  constructor(props) {
    super(props);
    this.message = props.message || 'Proceed?';
    this.success = props.success;
    this.cancel = props.cancel;
  }
  
  render() {
    return (
      <div>
        <div id="vp-diag-bg" onClick={this.cancelClicked}>
          <div className="vp-diag col-11 col-sm-5 col-md-3" onClick={(e) => {e.stopPropagation();}}>
            <div className="vp-diag-header">
              <span id="vp-diag-close" onClick={this.cancelClicked}><i className="fa fa-times" aria-hidden="true"></i></span>
            </div>
            <div className="vp-diag-body mb-3 text-center">
              {this.message}
            </div>
            <div className="vp-diag-footer text-center">
              <button id="vp-diag-ok" type="button" className="btn btn-success m-2" onClick={this.okClicked}>Ok</button>
              <button id="vp-diag-cancel" type="button" className="btn btn-danger m-2" onClick={this.cancelClicked}>Cancel</button>
            </div>
          </div>
        </div>
        
        <style jsx>{style}</style>
      </div>
    );
  };
  
  okClicked = () => {
    this.success();
    hide();
  };
  
  cancelClicked = () => {
    this.cancel();
    hide();
  };
}


let show = function (message = "Are you sure?", success = () => {}, cancel = () => {}) {
  if (!document.getElementById('dirtyWayToInjectConfirm')) {
    document.body.style.overflow = 'hidden';
    let el = document.createElement('div');
    el.setAttribute('id', 'dirtyWayToInjectConfirm');
    ReactDOM.render(
      <ConfirmComponent message={message} success={success} cancel={cancel} />,
      document.body.appendChild(el)
    );
  }
};

let hide = function () {
  let el = document.getElementById('dirtyWayToInjectConfirm');
  if (el) {
    document.body.style.overflow = null;
    ReactDOM.unmountComponentAtNode(el);
    document.body.removeChild(el);
  }
};

export const ConfirmComponentEvolution = {show, hide};

