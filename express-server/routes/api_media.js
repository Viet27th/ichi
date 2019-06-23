const express = require('express');
const router = express.Router();
const middleware = require('../middleware');
const mediaControllers = require('../controllers/api_media');

router.get('/', (req, res) => {});
router.post('/upload-media', middleware.checkUserAuthenticate ,mediaControllers.uploadMedia);
router.get('/get-all-media', mediaControllers.getAllMedia);
router.put('/update/:id', mediaControllers.updateMediaById);
router.delete('/delete/:id', mediaControllers.deleteMediaById);
router.put('/crop-image', mediaControllers.handleCropImage);

module.exports = router;
