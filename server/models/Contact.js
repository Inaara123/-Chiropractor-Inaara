const mongoose = require('mongoose');

const ContactSchema = new mongoose.Schema({
  fullName: {
    type: String,
    required: true,
  },
  organizationName: {
    type: String,
    required: true,
  },
  email: {
    type: String,
    required: true,
  },
  contact: {
    type: String,
    required: true,
  },
  createdAt: {
    type: Date,
    default: Date.now,
  },
});

module.exports = mongoose.model('Contact', ContactSchema);
