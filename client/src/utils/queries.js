import { gql } from '@apollo/client';

export const QUERY_ME = gql`
  query me {
    me {
      _id
      username
      email
      resume {
        name
        city
        state
        address
        zip
        linkedIn
        github
        phoneNumber
        summary
        skills
      }
      experience {
        company
        role
        date
        location
        description
        keyAchievements
      }
      education {
        school
        date
        location
        description
      }
      project {
        title
        link
        points
        tools
      }
    }
  }
`;