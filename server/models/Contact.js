const { Schema, model } = require('mongoose');
const bcrypt = require('bcrypt');

const contactSchema = new Schema({
  name: {
    type: String,
    required: true,
  },
  city: {
    type: String,
    required: true,
    minLength: 15,
  },
  state: {
    type: String,
    required: true,
    minLength: 15,
  },
  address: {
    type: String,
    required: true,
    minLength: 25,
  },
  zip: {
    type: String,
    required: true,
    minLength: 8,
  },
  phoneNumber: {
    type: String,
    required: true,
    minLength: 10,
  },
  summary: {
    type: String,
    required: true,
  },
  skills: [
    {
      type: String,
      trim: true,
    }
  ]
});

const Contact = model('Contact', contactSchema);

module.exports = Contact;