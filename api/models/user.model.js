const mongoose = require("mongoose");
const validator = require("validator");

const userSchema = new mongoose.Schema({
    username: {
        type: String,
        required: true,
        unique: true,
        minLength: 6,
    },
    email: {
        type: String,
        lowercase: true,
        unique: true,
        required: true,
        validate: {
            validator: (value) => validator.isEmail(),
            message: "Invalid email address",
        }
    },
    password: {
        type: String,
        required: true,
        minLength: 10,
    },
}, {
    timestamps: true,
});

const User = mongoose.model("User", userSchema);

module.exports = User;