import React from 'react';
import { useQuery } from '@apollo/client';

import Auth from '../utils/auth';

import { QUERY_USERS, QUERY_USER, QUERY_ME } from '../utils/queries';
// Components
import UserList from '../components/UserList';
import './profile.css';

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
      <div className="has-text-centered">
      <h4 className="fullprofile title mt-6">
        You need to be logged in to see this page. <br /> Use the navigation links above to
        sign up or log in!
      </h4>
      </div>
    );
  }

  return (
    <div>
      <div className="fullprofile">
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
