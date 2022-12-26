const express = require("express");
const router = express.Router();
const validation = require('../middlewares/validate')
const userValidation= require('../validation/user.validation')
const userController = require('../controllers/user.controller')

router.get('/', function(req, res) {
    console.log("hello")
    res.send("Hello world api")
})

router.post('/create-user', validation(userValidation.checkEmail), userController.createUser)

module.exports = router