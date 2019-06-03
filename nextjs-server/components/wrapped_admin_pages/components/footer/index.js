import React from 'react';
import style from './style.css';

class FooterComponent extends React.Component {
  render() {
    return (
      <footer id='admin-footer' className='text-center'>
        &#9400; Design by Xuan Viet
  
        <style jsx>{style}</style>
      </footer>
    );
  }
}

export default FooterComponent;
