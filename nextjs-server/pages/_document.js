// _document is only rendered on the server side and not on the client side
// Event handlers like onClick can't be added to this file

// ./pages/_document.js
import Document, {Html, Head, Main, NextScript} from 'next/document';
import React from 'react';

class MyDocument extends Document {
  static async getInitialProps(ctx) {
    const initialProps = await Document.getInitialProps(ctx);
    return {...initialProps};
  }
  
  render() {
    return (
      <Html>
        <Head>
          <meta charSet="utf-8"/>
          <meta httpEquiv="X-UA-Compatible" content="IE=edge"/>
          <link rel="icon" type="image/png" href="/static/img/favicon.png"/>
          {/* Tell the browser to be responsive to screen width */}
          <meta content="width=device-width, initial-scale=1, maximum-scale=1, user-scalable=no" name="viewport"/>
          <link rel="stylesheet" href='/static/library/bootstrap-4.3.1-dist/bootstrap.min.css'/>
          <link rel="stylesheet" href='/static/library/font-awesome/fontawesome-free-5.9.0-web/css/all.css'/>
          <link rel="stylesheet" href='/static/library/select2/dist/css/select2.min.css'/>
          <link rel="stylesheet" href='/static/library/flatpickr/dist/flatpickr.min.css'/>
          <link rel="stylesheet" href='/static/library/checkbox-style/checkbox-style.css'/>
          {/*<link rel="stylesheet" type="text/css" href="/static/library/slider-pro-master/dist/css/slider-pro.min.css" media="screen"/>*/}
          <link rel="stylesheet" type="text/css" href="/static/library/slick-1.8.1/slick/slick.css"/>
          <link rel="stylesheet" type="text/css" href="/static/library/slick-1.8.1/slick/slick-theme.css"/>
          <link rel="stylesheet" type="text/css" href="/static/library/swiper-master/dist/css/swiper.min.css"/>
          <link rel="stylesheet" type="text/css" href="/static/library/cropperjs/dist/cropper.min.css"/>
          
        </Head>
        <body id="body">

          <script src='/static/library/jquery/jquery-3.2.1.min.js'></script>
          <script src='/static/library/popper-1.14.7/popper.min.js'></script>
          <script src='/static/library/bootstrap-4.3.1-dist/bootstrap.min.js'></script>
          <script src='/static/library/ckeditor/ckeditor.js'></script>
          <script src='/static/library/select2/dist/js/select2.full.min.js'></script>
          <script src='/static/library/flatpickr/dist/flatpickr.min.js'></script>
          {/*<script type="text/javascript" src="/static/library/slider-pro-master/dist/js/jquery.sliderPro.min.js"></script>*/}
          <script type="text/javascript" src="/static/library/slick-1.8.1/slick/slick.min.js"></script>
          <script type="text/javascript" src="/static/library/swiper-master/dist/js/swiper.min.js"></script>
          <script type="text/javascript" src="/static/library/cropperjs/dist/cropper.min.js"></script>
         
	        <Main/>
          <NextScript/>
          
        </body>
      </Html>
    );
  }
}

export default MyDocument;
