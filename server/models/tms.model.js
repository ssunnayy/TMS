const mongoose = require("mongoose");

const TmsSchema = new mongoose.Schema({
    
    eqpNumber:{
        type: Number
    },
    
    eqpBrand:{
        type: String,
        required: [true, "Must have a name entered!"],
        minLength: [3, "Pet name must be at least 3 characters long!"]
    },

    eqpType:{
        type: String,
        required: [true, "Must have a Pet Type entered!"],
        minLength: [3, "Pet Type must be at least 3 characters long!"]
    },

    price:{
        type: Number
    },

    payment:{
        type: Number
    },

    lender:{
        type: String
    },

    interestRate:{
        type: Number
    }

    // loanstart:{
    //     type: Date
    // },

    // loanEnd:{
    //     type: Date
    // }

}, {timestamps: true})

const Tms = mongoose.model('Tms', TmsSchema);

module.exports = Tms;