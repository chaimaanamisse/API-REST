const mongoose = require('mongoose');

const reservationSchema = mongoose.Schema({
  dateIn: { type: Date, required: true },
  dateOut: { type: Date, required: true },
  guestId: { type: String, required: true }
});

module.exports = mongoose.model('Reservation', reservationSchema);