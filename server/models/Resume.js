const { Schema, model } = require('mongoose');
const bcrypt = require('bcrypt');
import Education from './Education'
import Experience from './Experience'
import Projects from './Projects'

const resumeSchema = new Schema({
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
  ],
  eduSection: {
    Education
  },
  expSection: {
    Experience
  },
  ProjSection: {
    Projects
  }
});

const Resume = model('Resume', resumeSchema);

module.exports = Resume;