import React, { useEffect } from 'react';
import { useQuery } from '@apollo/client';

import Auth from '../utils/auth';

import { QUERY_USERS, QUERY_USER, QUERY_ME } from '../utils/queries';
// Components
import UserList from '../components/UserList';
import './profile.css'

const Profile = () => {

  useEffect(() => {
    document.title = `Rapid Résumé | Profile`;
  });

  const { loading, data, error } = useQuery(QUERY_ME);
  console.log('data: ', data);
  const user = data?.me;
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
      <div className=" has-text-centered">
        <h2 className="title">
          Viewing {`${user.username}'s`} Resumes.
        </h2>
      </div>
      <div className="container margin1 has-text-centered">
        <div class="columns is-multiline features">
          {/* resume start */}
          <div class="column is-4 is-auto">
            <div class="card is-shady">
              <div class="card-image">
                <figure class="image is-4by3">
                  <a href="#">
                    <img src="https://www.docdroid.net/file/view/xGmN9P7/copy-of-copy-of-john-doe-resume-2-pdf.jpg" alt="Placeholder image" class="modal-button" data-target="modal-image2" />
                  </a>
                </figure>
              </div>
              <div class="card-content">
                <div class="content">
                  <h4>user.resumeName</h4>
                  <p>Purus semper eget duis at tellus at urna condimentum mattis. Non blandit massa enim nec. Integer enim neque volutpat ac tincidunt vitae semper quis. Accumsan tortor posuere ac ut consequat semper viverra nam.</p>
                  <span class="button is-link modal-button" data-target="modal-image2">View resume</span>
                </div>
              </div>
            </div>
          </div>
          {/* resume end */}
        </div>
      </div>

    </div>
  );
};

export default Profile;
