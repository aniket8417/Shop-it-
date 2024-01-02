const {Schema, model} = require('../connection');

const myschema = new Schema({
    items : Array,
    user : String,
    shopName : String,
    createdAt: Date,
});

module.exports = model('orders', myschema);