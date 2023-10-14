const mongoose = require('mongoose')

const UserSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true
    },
    email: {
        type: String,
        required: true
    },
    number: {
        type: Number,
        min: 1000000000,
        max: 9999999999,
        required: true
    },
    accountno: {
        type: Number,
        min: 100000000000,
        max: 999999999999,
        unique: true,
        required: true
    },
    ifscno: {
        type: Number,
        min: 100000000000,
        max: 999999999999,
        unique: true,
        required: true
    },
    accountbalance: {
        type: Number,
        required: true
    },
}, { timestamps: true })

const UserModel = mongoose.model('users', UserSchema)

module.exports = UserModel