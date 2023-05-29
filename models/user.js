const mongoose = require("mongoose");
const { ObjectId } = mongoose.Schema.Types;

const UserSchema = new mongoose.Schema({
    name: {
        type: String,
        trim: true,
        required: true
    },
    email: {
        type: String,
        trim: true,
        required: true,
        lowercase: true,
        unique : true
    },
    age: {
        type: Number,
        required: true
    }
}, { timestamps: true });

module.exports = mongoose.model('user', UserSchema);