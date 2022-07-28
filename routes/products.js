var express = require('express');
var router = express.Router();
var service = require("../services/productsService");
const middleware = require("../middleware/auth")
router.post('/' , service.create);
router.get('/', service.getAllProducts );
router.get('/:id',service.getById );
router.post('/checked' , service.getChecked);
router.put('/:id',service.updateById );
module.exports = router;
