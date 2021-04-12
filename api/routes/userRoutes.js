const express = require('express');
const router = express.Router();
const userController = require('../controller/UserController')
router.post("/trade", userController.tradedatapost);
router.get("/tradeget", userController.tradedataget);
router.get("/tradewithid/:id", userController.tradeId);

module.exports = router