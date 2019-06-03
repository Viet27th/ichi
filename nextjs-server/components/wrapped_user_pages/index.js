import React from 'react';
import style from './style.css';
import {connect} from 'react-redux';

class WrappedUserPagesComponent extends React.Component {
  render() {
    return(
      <div id='user'>
        {this.props.children}
        <style jsx>{style}</style>
      </div>
    );
  }
}

const mapStateToProps = state => {
  return {
    state: state
  };
};
const mapDispatchToProps = dispatch => {
  return {
    dispatch: dispatch
  };
};
export default connect(mapStateToProps ,mapDispatchToProps)(WrappedUserPagesComponent);
