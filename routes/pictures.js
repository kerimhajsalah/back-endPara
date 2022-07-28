
var express = require('express');
var router = express.Router();
var pictureService = require("../services/homePictureService");
router.post('/' ,pictureService.create );
router.get('/' ,pictureService.getAllPictures );
module.exports = router;
