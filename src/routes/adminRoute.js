const express = require('express')
const { adminController } = require('../controller/adminController')
const adminRoute = express.Router()


adminRoute.get('/',adminController)

module.exports ={adminRoute}