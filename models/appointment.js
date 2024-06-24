const mongoose = require('mongoose');

const appointmentSchema = new mongoose.Schema({
  doctorId: { type: mongoose.Schema.Types.ObjectId, ref: 'Doctor' },
  patientName: String,
  timeSlot: String,
  date: String,
});

const Appointment = mongoose.model('Appointment', appointmentSchema);

module.exports = Appointment;
