const { Schema, model } = require('mongoose');
const bcrypt = require('bcrypt');

const eduSchema = new Schema({
  title: {
    type: String,
    required: true,
  },
  date: {
    type: String,
    required: true,
  },
  bPoints: [
    {
      type: String,
      required: true,
    }
  ],
  description: {
    type: String,
    required: true,
  }
});

const Education = model('Education', eduSchema);

module.exports = eduSchema;