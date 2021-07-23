const { Schema, model } = require('mongoose');
const bcrypt = require('bcrypt');

const expSchema = new Schema({
  title: {
    type: String,
    required: true,
  },
  role: {
    type: String,
    required: true,
  },
  date: {
    type: String,
    required: true,
  },
  location: {
    type: String,
    required: true,
  },
  description: {
    type: String,
    required: true,
  },
  keyAchievements: {
    type: String,
    required: true,
  }
});

const Project = model('Project', expSchema);

module.exports = Project;