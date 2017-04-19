const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const binSchema = new Schema({
    name: String,
    content_good: Array,
    content_bad: Array
});

module.exports = mongoose.model('bins', binSchema);