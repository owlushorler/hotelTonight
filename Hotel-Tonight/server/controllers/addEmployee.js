const http = require("http-status-codes")
const employeeJoi = require("../validators/employeeJoi")
const employee = require("../models/employeeSchema")



const addEmployee = async (req, res) =>{
    console.log("yes")
    console.log(req.body)
    const {error, value} = employeeJoi.validate(req.body)
    if(error) return res.status(http.StatusCodes.BAD_REQUEST).send(error.message)
    try {
        const Employee = await employee.create({
            firstName: value.firstName,
            lastName: value.lastName,
            department: value.department,
            age: value.age
        })
        console.log(Employee)
        if(!Employee) return res.status(http.StatusCodes.BAD_REQUEST).send("couldn't create employee")
        res.status(http.StatusCodes.CREATED).json(Employee)
    } catch (error) {
        console.log(error)
        return res.status(http.StatusCodes.BAD_REQUEST).send(error.message)
    }
}

module.exports = addEmployee