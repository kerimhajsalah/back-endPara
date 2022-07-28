var express = require('express');
var router = express.Router();
var service = require("../services/categorieService.js")
const middleware = require("../middleware/auth")
router.post('/' , service.createCategorie);
router.post('/sousCategorie' , service.createSousCategorie);
router.get('/', service.getAllCategories);
router.get('/sousCategorie', service.getAllSousCategories);

module.exports = router;
