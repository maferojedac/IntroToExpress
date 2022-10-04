const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const Movie = new Schema(
  {
    name: { type: String, required: true },
    time: { time: [String], required: true },
    rating: { rating: Number, required: true },
    author: { rating: String, required: false },
  },
  { timestamps: true }
);

module.exports = mongoose.model('movies', Movie);