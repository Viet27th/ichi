const express = require('express');
const router = express.Router();
const handleAuthenticateControllers = require('../controllers/api_handle_authenticate');

router.post('/web-login-traditional', handleAuthenticateControllers.webLoginTraditional);

router.post('/web-logout-traditional', handleAuthenticateControllers.webLogoutTraditional);

router.post('/web-refresh-token-traditional', handleAuthenticateControllers.webRefreshTokenTraditional);

module.exports = router;
