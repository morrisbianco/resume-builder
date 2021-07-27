const { Schema, model } = require('mongoose');

const resumeSchema = new Schema({
  name: {
    type: String,
    required: true,
  },
  city: {
    type: String,
    required: true,
  },
  state: {
    type: String,
    required: true,
  },
  address: {
    type: String,
    required: true,
  },
  zip: {
    type: String,
    required: true,
  },
  linkedIn: {
    type: String,
  },
  github: {
    type: String,
  },
  phoneNumber: {
    type: String,
    required: true,
    minLength: 7,
  },
  summary: {
    type: String,
    required: true,
  },
  skills:
  {
    type: String,
    trim: true,
  }
});

const Resume = model('Resume', resumeSchema);

module.exports = resumeSchema;