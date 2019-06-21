const express = require('express');
const helmet = require('helmet');
const bodyParser = require('body-parser');
const cookieParser = require('cookie-parser');
const fileUpload = require('express-fileupload');

/**
 *  With prefix 'api' before 'users', we know that, this router just using for interact with data known as GET, POST, PUT, DELETE
 *  Otherwise, router using for render HTML
 */
const usersRouter = require('./routes/api_users');
const handleAuthenticateRouter = require('./routes/api_handle_authenticate');
const productsTaxonomiesRouter = require('./routes/api_products_taxonomies');
const postsTaxonomiesRouter = require('./routes/api_posts_taxonomies');
const productsRouter = require('./routes/api_products');
const postsRouter = require('./routes/api_posts');
const mediaRouter = require('./routes/api_media');

const app = express();
/**
 * https://code.tutsplus.com/tutorials/token-based-authentication-with-angularjs-nodejs--cms-22543
 * Access-Control-Allow-Origin allowed for all domains.
 * You can send POST and GET requests to this service.
 * X-Requested-With and content-type headers are allowed.
 */
app.use(function(req, res, next) {
  res.header('Access-Control-Allow-Origin', '*');
  res.header('Access-Control-Allow-Credentials', 'true');
  res.header('Access-Control-Allow-Methods', 'GET, POST, PUT, DELETE, OPTIONS');
  res.header('Access-Control-Expose-Headers', 'Content-Length');
  res.header('Access-Control-Allow-Headers', 'Accept, Range, Cache-Control, Pragma, Origin, Authorization, Content-Type, X-Requested-With');
  next();
});

/* This middleware is use for security. It will set header appropriately */
// app.use(helmet());
/* This middleware move all data come from client request to req.body to use */
app.use(bodyParser.json());
// app.use(bodyParser.urlencoded({extended: true})); // It use for another purpose unlike above
/* This middleware Parse Cookie header and populate req.cookies */
app.use(cookieParser());
/* This middleware move all file come from client request to req.files to use */
app.use(fileUpload({}));
/* Register static folder */
app.use(express.static('public'));

app.use('/api/user', usersRouter);
app.use('/api/handle-authenticate', handleAuthenticateRouter);
app.use('/api/products-taxonomies', productsTaxonomiesRouter);
app.use('/api/posts-taxonomies', postsTaxonomiesRouter);
app.use('/api/products', productsRouter);
app.use('/api/posts', postsRouter);
app.use('/api/media', mediaRouter);

module.exports = app;
