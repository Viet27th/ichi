import React from 'react';
import ReactDOM from 'react-dom';
import style from './style.css';

class SpinnerComponent extends React.Component {
  constructor(props) {
    super(props);
    
  }
  
  render() {
    return (
      <div id='spinner-bg'>
        <img src="/static/img/spinner-icon.svg" alt="" style={{width: '127px'}}/>
        <style jsx>{style}</style>
      </div>
    );
  }
}

let show = function () {
  if (!document.getElementById('dirtyWayToInjectSpinner')) {
    document.body.style.overflow = 'hidden';
    let el = document.createElement('div');
    el.setAttribute('id', 'dirtyWayToInjectSpinner');
    ReactDOM.render(
      <SpinnerComponent/>,
      document.body.appendChild(el)
    );
  }
};

let hide = function () {
  let el = document.getElementById('dirtyWayToInjectSpinner');
  if (el) {
    document.body.style.overflow = null;
    ReactDOM.unmountComponentAtNode(el);
    document.body.removeChild(el);
  }
};

export const SpinnerComponentEvolution = {show, hide};


