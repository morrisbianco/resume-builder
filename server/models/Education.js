const { Schema, model } = require('mongoose');

const eduSchema = new Schema({
  school: {
    type: String,
    required: true,
  },
  date: {
    type: String,
    required: true,
  },
  location: {
    type: String,
  },
  description: {
    type: String,
  }
});

const Education = model('Education', eduSchema);

module.exports = Education;