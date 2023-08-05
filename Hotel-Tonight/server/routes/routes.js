const addAdmin = require("../controllers/addAdmin")
const addEmployee = require("../controllers/addEmployee")

const express = require("express")
const route = express.Router()

route.post("/superAdmin/addAdmin", addAdmin)

route.post("/employee/addEmployee", addEmployee)


module.exports = route