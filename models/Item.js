const mongoose = require("mongoose");
const { ObjectId } = mongoose.Schema;

const itemSchema = new mongoose.Schema({
    title: {
        type: String,
        required: true,
    },
    price: {
        type: Number,
        required: true,
    },
     country: {
         type: String,
         default: 'Indonesia'
    },
      city: {
        type: String,
        required: true,
    },
       isPopular: {
        type: Boolean,
    },
             city: {
        type: String,
        required: true,
    },
                   city: {
        type: String,
        required: true,
    },
});

module.exports = mongoose.model('Item', itemSchema);