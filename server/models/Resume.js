const { Schema, model } = require('mongoose');
const Education = require('./Education');
const Experience = require('./Experience');
const Project = require('./Project');

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
  skills: [
    {
      type: String,
      trim: true,
    }
  ],
  eduSection: [
    {
      type: Schema.Types.ObjectId,
      ref: "Education"
    }
  ],
  expSection: [
    {
      type: Schema.Types.ObjectId,
      ref: "Experience"
    }
  ],
  ProjSection: [
    {
      type: Schema.Types.ObjectId,
      ref: "Project"
    }
  ]
});

const Resume = model('Resume', resumeSchema);

module.exports = Resume;