
var express = require('express');
var router = express.Router();
var promotionService = require("../services/promotionService");
router.post('/' ,promotionService.createPromotion );
router.get('/' ,promotionService.getPromotion );
module.exports = router;
