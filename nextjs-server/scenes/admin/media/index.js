import React from 'react';
import Link from 'next/link';
import Router from 'next/router';
import middleware from '../../../middleware';
import Head from 'next/head';
import {MediaComponent} from '../../../components/media';

class AdminMediaScene extends React.Component {
  static async getInitialProps(ctx) {
    // If redirected, Doesn't have another next action. We need return here.
    if (middleware.redirectIfNotAuthenticated(ctx)) {
      return;
    }
    
    if (!middleware.checkPermission(ctx, ['super', 'admin', 'editor'])) {
      if (ctx.res) {
        ctx.res.writeHead(303, {Location: `/`});
        ctx.res.end();
      } else {
        Router.push('/');
      }
    }
    
    return {};
  }
  
  render() {
    return (
      <MediaComponent/>
    );
  }
  
}

export default AdminMediaScene;
