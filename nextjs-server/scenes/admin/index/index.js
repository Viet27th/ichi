import React from 'react';
import Link from 'next/link';
import Router from 'next/router';
import middleware from '../../../middleware';

class AdminIndexScene extends React.Component {
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
  
  render() {
    return (
      <div>
        Dashboard
        <Link prefetch href={'/admin/post'}><a>Post</a></Link>
      </div>
    );
  }
}

export default AdminIndexScene;
