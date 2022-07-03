const mongoose = require('mongoose');

const expenseSchema = mongoose.Schema({
    name: {
        type: String,
    },
    quantity: {
        type: Number
    },
    cost: {
        type: Number
    },
    description: {
        type: String
    },
    expenseType: {
        type: String
    },
    cost: {
        type: Number
    }
});

module.exports = mongoose.model('expenses', expenseSchema);

