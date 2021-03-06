const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const Msg = new Schema({
    title: { type: String, required: true },
    content: { type: String, required: true },
    email: { type: String, required: true },
    time: { type: Date, default: Date.now() }
});

module.exports = mongoose.model('Msg', Msg)