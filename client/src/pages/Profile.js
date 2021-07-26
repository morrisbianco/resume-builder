import React from 'react';
import { useQuery } from '@apollo/client';

import Auth from '../utils/auth';

import { QUERY_USERS, QUERY_USER, QUERY_ME } from '../utils/queries';
// Components
import UserList from '../components/UserList';
import './profile.css'
import { QUERY_ME } from '../utils/queries';

const Profile = () => {
  const { loading, data, error } = useQuery(QUERY_ME);

  const user = data?.me;
  console.log(user)
  if (error) console.log(error);

  if (loading) {
    return <h4>Loading...</h4>;
  }

  if (!Auth.loggedIn()) {
    return (
      <h4 className="fullprofile">
        You need to be logged in to see this. Use the navigation links above to
        sign up or log in!
      </h4>
    );
  }

  return (
    <div>
      <div className="flex-row justify-center mb-3">
        <h2 className="col-12 col-md-10 bg-dark text-light p-3 mb-5">
          Viewing {`${user.username}'s`} Resumes.
        </h2>
        <ul>
        <li>username: {user.username}</li>
        <li>email: {user.email}</li>
      </ul>
      </div>
    </div>
  );
};

export default Profile;
