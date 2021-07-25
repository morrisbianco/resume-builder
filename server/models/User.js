const { Schema, model } = require('mongoose');
const bcrypt = require('bcrypt');
const Resume = require('./Resume');
const Education = require('./Education');
const Experience = require('./Experience');
const Project = require('./Project');

const userSchema = new Schema({
  username: {
    type: String,
    required: true,
    unique: true,
    trim: true,
  },
  email: {
    type: String,
    required: true,
    unique: true,
    match: [/.+@.+\..+/, 'Must match an email address!'],
  },
  password: {
    type: String,
    required: true,
    minlength: 5,
  },
  resume:
  {
    type: Schema.Types.ObjectId,
    ref: "Resume"
  },
  education: [
    {
      type: Schema.Types.ObjectId,
      ref: "Education"
    }
  ],
  experiences: [
    {
      type: Schema.Types.ObjectId,
      ref: "Experience"
    }
  ],
  projects: [
    {
      type: Schema.Types.ObjectId,
      ref: "Project"
    }
  ]
});

userSchema.pre('save', async function (next) {
  if (this.isNew || this.isModified('password')) {
    const saltRounds = 10;
    this.password = await bcrypt.hash(this.password, saltRounds);
  }
  next();
});

userSchema.methods.isCorrectPassword = async function (password) {
  return bcrypt.compare(password, this.password);
};

const User = model('User', userSchema);

module.exports = User;
