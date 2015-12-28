

var mongoose     = require('mongoose');
var Schema       = mongoose.Schema;

// --------------------
// VIDEO MODEL
// --------------------

var VideoSchema = new Schema({
  link: String,
  title: String,
  embed: String,
  categories: [String],
  thumbnail_default: String,
  thumbnails: [String],
  views: Number,
  rating: Number,
  ratings: Number,
  tags: [String],
  segment: String,
  duration: String,
  source: String,
  source_id: String
});

module.exports = mongoose.model('Video', VideoSchema);
