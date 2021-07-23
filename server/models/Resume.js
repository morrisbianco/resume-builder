const { Schema, model } = require('mongoose');
const Education = require('./Education');
const Experience = require('./Experience');
const Projects = require('./Projects');

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