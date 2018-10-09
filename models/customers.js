const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const GeoSchema = new Schema({

    type: {
        type: String,
        default: "Point"
    },
    coordinates: {
        type: [Number],
        index: "2dsphere"
    }

});


const CustomerSchema = new Schema({

    name: {
        type: String,
        required: [true, 'please add a name']
    },

    age: {
        type: Number
    },
    
    geometry: GeoSchema


});

const Customer = mongoose.model('customer', CustomerSchema);

module.exports = Customer;
