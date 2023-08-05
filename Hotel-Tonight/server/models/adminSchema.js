const mongoose = require("mongoose")

const adminSchema = mongoose.Schema({
    firstName: String,
    lastName: String,
    username: {
        type: String,
        unique: true
    },
    password: String
})

const admin = mongoose.model("admin", adminSchema)

module.exports = admin