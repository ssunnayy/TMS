const mongoose = require("mongoose");
const bcrypt = require('bcrypt');

const UserSchema = new mongoose.Schema({
    username: {
        type: String,
        required: [true, "Username is required"]
    },
    email: {
        type: String,
        required: [true, "Email is required"],
        validate: {
            validator: val => /^([\w-\.]+@([\w-]+\.)+[\w-]+)?$/.test(val),
            message: "Please enter a valid email"
        }
    },
    password: {
        type: String,
        required: [true, "Password is required"],
        minlength: [8, "Password must be 8 characters or longer"]
    }
}, {timestamps: true});


// virtual field
UserSchema.virtual("confirmPassword")
    .get( () => this._confirmPassword )
    .set( (value) => this._confirmPassword = value );

//pre validate

UserSchema.pre("validate", function(next) {
    if (this.password !== this.confirmPassword) {
        this.invalidate('confirmPassword', "Passwords must match!");
        console.log("Passwords don't match")
    }
    next();
});
// middleware
UserSchema.pre('save', function(next) {
    console.log("in pre save");
    bcrypt.hash(this.password, 10)
        .then((hashedPassword) => {
        this.password = hashedPassword;
        next();
    });
});

const User = mongoose.model('User', UserSchema);

module.exports = User;