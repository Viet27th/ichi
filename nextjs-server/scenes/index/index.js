import React from 'react';
import Link from 'next/link';
import Router from 'next/router';
import {SpinnerComponentEvolution} from '../../components/spinner';
import {AlertComponentEvolution} from '../../components/alert';

import { connect } from 'react-redux';

class IndexScene extends React.Component {
  static async getInitialProps(ctx) {
    let { pathname } = ctx;
    return { pathname };
  }
  
  render() {
    return(
      <div>
        Trang chu ne
        <Link prefetch href={{ pathname: 'admin' }}>
          <a>Admin</a>
        </Link>
        <Link prefetch href={{ pathname: 'register' }}>
          <a>register</a>
        </Link>
        <Link prefetch href={{ pathname: 'login' }}>
          <a>login</a>
        </Link>
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


export default connect(mapStateToProps ,mapDispatchToProps)(IndexScene);
