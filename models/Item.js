const mongoose = require('mongoose');
const Schema = mongoose.Schema;

// create schema
const ItemSchema = new Schema({
    name: {
        type: String,
        required: true
    },
    date: {
        type: Date,
        default: Date.now
    }

});


/* export the model we have create to use it in other files

*/

module.exports = Item = mongoose.model('item', ItemSchema);