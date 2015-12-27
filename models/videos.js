

var mongoose     = require('mongoose');
var Schema       = mongoose.Schema;

// --------------------
// VIDEO MODEL
// --------------------

var VideoSchema = new Schema({
  link: String,
  title: String,
  embed: String,
  category: String,
  thumbnail_small: String,
  thumbnail_medium: String,
  thumbnail_large: String
});

module.exports = mongoose.model('Video', VideoSchema);
