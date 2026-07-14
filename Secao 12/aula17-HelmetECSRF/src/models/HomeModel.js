const mongoose = require('mongoose');

const HomeSchema = new mongoose.Schema({
  title: { type: String, required: true },
  description: { type: String, required: true },
  createdAt: { type: Date, default: Date.now }
});

const HomeModel = mongoose.model('Home', HomeSchema);

module.exports = HomeModel;