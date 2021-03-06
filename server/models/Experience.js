const { Schema, model } = require('mongoose');

const expSchema = new Schema({
  company: {
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
  }
});

const Experience = model('Experience', expSchema);

module.exports = expSchema;