var express = require('express');
var router = express.Router();
var service = require("../services/commandeService.js")
const middleware = require("../middleware/auth")
router.post('/' , service.create);
router.get('/', service.getAllCommandes );
router.put('/validate',service.validateCommande);
router.put('/annuler',service.refuseCommande);
router.get('/:commandeId',service.getProductsByCommande);
module.exports = router;
