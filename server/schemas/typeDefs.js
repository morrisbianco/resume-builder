const { gql } = require('apollo-server-express');

const typeDefs = gql`

type User {
  _id: ID
  username: String
  email: String
  password: String
  resumes: [Resume]
}

type Resume {
  _id: ID!
  name: String
  city: String
  state: String
  address: String
  zip: String
  linkedIn: String
  github: String
  phoneNumber: String
  summary: String
  skills: [String]
  eduSection: [Project]
  expSection: [Experience]
  ProjSection: [Education]
}

input ResumeInput {
  name: String
  city: String
  state: String
  address: String
  zip: String
  phoneNumber: String
  summary: String
  skills: [String]
  eduSection: [ProjectInput]
  expSection: [ExperienceInput]
  ProjSection: [EducationInput]
}

type Project {
  title: String
  link: String
  bPoints: [String]
  tools: [String]
}


input ProjectInput {
  title: String
  link: String
  bPoints: [String]
  tools: [String]
}


type Experience {
  title: String
  role: String
  date: String
  location: String
  description: String
  keyAchievement: [String]
}

input ExperienceInput {
  title: String
  role: String
  date: String
  location: String
  description: String
  keyAchievement: [String]
}

type Education {

  title: String
  date: String
  bPoints: [String]
  description: String
}

input EducationInput {
  title: String
  date: String
  bPoints: [String]
  description: String
}

  type Auth {
    token: ID!
    user: User
  }

  type Query {
    users: [User]
    user(id: ID!): User
    me: User
  }

  type Mutation {
    addUser(username: String!, email: String!, password: String!): Auth
    login(email: String!, password: String!): Auth
    createResume(name: String!, city: String!, state: String!, address: String!, zip: String!, phoneNumber: String!, summary: String!): User
    addResume(resumeData: ResumeInput): User
    createExp(title: String!, role: String!, date: String!, location: String!, description: String!, keyAchievement: String!): Resume
    createEd(title: String!, date: String!, bPoints: [String], description: String!): Resume
    createProject(title: String!, link: String!, bPoints: [String], tools: [String]): Resume
    addExp(expData: ExperienceInput): Resume
    addEducation(educationData: EducationInput): Resume
    addProject(projectData: ProjectInput): Resume
  }
`;

module.exports = typeDefs;
