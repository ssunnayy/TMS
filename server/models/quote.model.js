const mongoose = require("mongoose");

const QuoteSchema = new mongoose.Schema({
    
    distance:{
        type: Number
    },
    
    fuelCost:{
        type: Number,
        // required: [true, "Must have a name entered!"],
        // minLength: [3, "Pet name must be at least 3 characters long!"]
    },

    payPerMile:{
        type: Number,
        // required: [true, "Must have a Pet Type entered!"],
        // minLength: [3, "Pet Type must be at least 3 characters long!"]
    },

    miscCost:{
        type: Number
    },

    profitMargin:{
        type: Number
    },

}, {timestamps: true})

const Quote = mongoose.model('Quote', QuoteSchema);

module.exports = Quote;