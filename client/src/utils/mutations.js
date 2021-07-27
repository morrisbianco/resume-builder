import { gql } from '@apollo/client';

export const LOGIN_USER = gql`
  mutation login($email: String!, $password: String!) {
    login(email: $email, password: $password) {
      token
      user {
        _id
        username
      }
    }
  }
`;

export const ADD_USER = gql`
  mutation addUser($username: String!, $email: String!, $password: String!) {
    addUser(username: $username, email: $email, password: $password) {
      token
      user {
        _id
        username
      }
    }
  }
`;

export const CREATE_RESUME = gql`
  mutation createResume($name: String!, $city: String!, $state: String!, $address: String!, $zip: String!, $linkedIn: String, $github: String, $phoneNumber: String!, $summary: String!, $skills: [String]) {
    createResume(name: $name, city: $city, state: $state, address: $address, zip: $zip, linkedIn: $linkedIn, github: $github, phoneNumber: $phoneNumber, summary: $summary, skills: $skills) {
      _id
    }
  }
`;

export const ADD_RESUME = gql`
  mutation addResume($resumeData: ResumeInput!) {
    addResume(resumeData: $resumeData) {
      _id
    }
  }
`;

export const CREATE_EXP = gql`
  mutation createExp($company: String!, $role: String!, $date: String!, $location: String!, $description: String!, $keyAchievements: String) {
    createExp(company: $company, role: $role, date: $date, location: $location, description: $description, keyAchievements: $keyAchievements) {
      company
    }
  }
`;

export const CREATE_ED = gql`
  mutation createEd($school: String!, $date: String!, $location: String, $description: String!) {
    createEd(school: $school, date: $date, location: $location, description: $description) {
      school
    }
  }
`;

export const CREATE_PROJECT = gql`
  mutation createProject($title: String!, $link: String!, $points: String, $tools: String) {
    createProject(title: $title, link: $link, points: $points, tools: $tools) {
      title
    }
  }
`;

export const ADD_EXP = gql`
  mutation addExp($expData: ExperienceInput!) {
    addExp(expData: $expData) {
      _id
    }
  }
`;

export const ADD_EDUCATION = gql`
  mutation addEducation($educationData: EducationInput!) {
    addEducation(educationData: $educationData) {
      _id
    }
  }
`;

export const ADD_PROJECT = gql`
  mutation addProject($projectData: ProjectInput!) {
    addProject(projectData: $projectData) {
      _id
    }
  }
`;
