const mongoose = require('mongoose');

const roomTypeSchema = mongoose.Schema({
  description: { type: String, required: true },
  max_capacity: { type: Number, required: true },
});

module.exports = mongoose.model('RoomType', roomTypeSchema);