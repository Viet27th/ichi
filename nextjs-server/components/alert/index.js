import React from 'react';
import ReactDOM from 'react-dom';
import style from './style.css';

class AlertComponent extends React.Component {
  constructor(props) {
    super(props);
    this.message = props.message || 'Message';
  }
  
  render() {
    return (
      <div>
        <div id="vp-diag-bg">
          <div className="vp-diag col-11 col-sm-5 col-md-3">
            <div className="vp-diag-header">
              <span id="vp-diag-close" onClick={hide}><i className="fa fa-times" aria-hidden="true"></i></span>
            </div>
            <div className="vp-diag-body mb-3 text-center">
              {this.message}
            </div>
            <div className="vp-diag-footer text-center">
              <button id="vp-diag-ok" type="button" className="btn btn-success">Ok</button>
            </div>
          </div>
        </div>
        
        <style jsx>{style}</style>
      </div>
    );
  };
}

/**
 *
 * @param {String} message
 * @param {Function|Boolean} callback - Fired when Ok button is clicked
 */
let show = function (message, callback = false) {
  if (!document.getElementById('dirtyWayToInjectAlert')) {
    document.body.style.overflow = 'hidden';
    let el = document.createElement('div');
    el.setAttribute('id', 'dirtyWayToInjectAlert');
    ReactDOM.render(
      <AlertComponent message={message}/>,
      document.body.appendChild(el)
    );
    
    document.getElementById('vp-diag-ok').addEventListener('click', () => {
      if (typeof callback === 'function') {
        callback();
      }
      hide();
    });
    
    
  }
};

/**
 *
 * @param {Function|Boolean} callback - Option.
 */
let hide = function (callback = false) {
  let el = document.getElementById('dirtyWayToInjectAlert');
  if (el) {
    document.body.style.overflow = null;
    ReactDOM.unmountComponentAtNode(el);
    document.body.removeChild(el);
    if (typeof callback === 'function') {
      callback();
    }
  }
};

export const AlertComponentEvolution = {show, hide};
