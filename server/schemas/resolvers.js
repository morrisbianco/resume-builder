const { AuthenticationError } = require('apollo-server-express');
const { signToken } = require('../utils/auth');
const { User, Resume, Education, Experience, Project } = require('../models');

const resolvers = {
  Query: {
    users: async () => {
      return User.find();
    },
    user: async (_, args) => {
      return User.findOne({ _id: args.id });
    },
    me: async (_, args, context) => {
      if (context.user) {
        return User.findOne({ _id: context.user._id });
      }
      throw new AuthenticationError('You need to be logged in!');
    },
  },

  Mutation: {
    addUser: async (_, { username, email, password }) => {
      console.log("Resolver Add User: ", username, email, password);
      const user = await User.create({ username, email, password });
      const token = signToken(user);
      return { token, user };
    },
    login: async (_, { email, password }) => {
      const user = await User.findOne({ email });

      if (!user) {
        throw new AuthenticationError('No user found with this email address');
      }

      const correctPw = await user.isCorrectPassword(password);

      if (!correctPw) {
        throw new AuthenticationError('Incorrect credentials');
      }

      const token = signToken(user);

      return { token, user };
    },
    createResume: async (_, args) => {
      const newResume = await Resume.create(args);
      return newResume;
    },
    addResume: async (_, args, context) => {
      console.log(args);
      const updateUser = await User.findByIdAndUpdate(
        { _id: args.userId },
        { $push: { resume: args.resumeData } },
        { new: true }
      );
      return updateUser;
    },
    createExp: async (_, args) => {
      const newExp = await Experience.create(args);
      return newExp;
    },
    createEd: async (_, args) => {
      const newEducation = await Education.create(args);
      return newEducation;
    },
    createProject: async (_, args) => {
      const newProject = await Project.create(args);
      return newProject;
    },
    addExp: async (_, args, context) => {
      console.log(args.expData);
      const updateResume = await User.findByIdAndUpdate(
        { _id: args.userId },
        { $push: { experience: args.expData } },
        { new: true }
      );
      return updateResume;
    },
    addEducation: async (_, args, context) => {
      const updateResume = await User.findByIdAndUpdate(
        { _id: args.userId },
        { $push: { education: args.educationData } },
        { new: true }
      );
      return updateResume;
    },
    addProject: async (_, args, context) => {
      const updateResume = await User.findByIdAndUpdate(
        { _id: args.userId },
        { $push: { project: args.projectData } },
        { new: true }
      );
      return updateResume;
    },
  }
};

module.exports = resolvers;
