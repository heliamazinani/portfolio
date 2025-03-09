const mongoose = require('mongoose');
const ArtWorkSchema = new mongoose.Schema({
  title: String,
  author: String,
  year: Number
});

const Artwork = mongoose.model('Artwork', ArtworkSchema);
module.exports = Artwork;