const mongoose = require('mongoose');

const BookSchema = new mongoose.Schema({
    title: { type: String, required: true },
    author: { type: String, required: true },
    publishYear: { type: Number, required: true },
    genre: { type: String, required: true },
    isAvailable: { type: Boolean, default: true },
});

module.exports = mongoose.model('Book', BookSchema);
