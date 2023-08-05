const http = require("http-status-codes")
const adminJoi = require("../validators/adminJoi")
const admin = require("../models/adminSchema")


const addAdmin = async (req, res) =>{
    console.log(req.body)
    const {error, value} = adminJoi.validate(req.body)
    if(error) return res.status(http.StatusCodes.BAD_REQUEST).send(error.message)
    try {
        const Admin = await admin.create({
            firstName: value.firstName,
            lastName: value.lastName,
            username: value.username,
            password: `sr${Math.floor(Math.random()*2000)}bfx${Math.floor(Math.random()*2000)}`
        })
        if(!Admin) return res.status(http.StatusCodes.BAD_REQUEST).send("couldn't create admin")
        console.log(Admin)
        res.status(http.StatusCodes.CREATED).send(Admin)
    } catch (error) {
        console.log(error)
        return res.status(http.StatusCodes.BAD_REQUEST).send(error.message)
    }
}

module.exports = addAdmin