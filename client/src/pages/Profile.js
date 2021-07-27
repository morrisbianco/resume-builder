import React, { useEffect } from 'react';
import { useQuery } from '@apollo/client';
import { Link } from 'react-router-dom';
import Auth from '../utils/auth';

import { QUERY_USERS, QUERY_USER, QUERY_ME } from '../utils/queries';
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
    return <h4 className="fullBuild4">Loading...</h4>;
  }

  if (!Auth.loggedIn()) {
    return (
      <div className="has-text-centered">
        <h4 className="fullBuild4 title mt-6">
          You need to be logged in to see this page. <br /> Use the navigation links above to
          sign up or log in!
        </h4>
      </div>
    );
  }

  return (
    <div>
      <div className="container profile margin1 has-text-centered animate__slideInUp animate__animated">
        <div>
          <h2 className="title">
            Viewing {`${user.username}'s`} Resumes.
          </h2>
        </div>
        <div className="columns is-multiline features">
          {/* resume start */}
          <div className="column is-4 is-auto">
            <div className="card is-shady">
              <div className="card-image">
                <figure className="image is-4by3">
                  <a href="#">
                    <img src="https://www.docdroid.net/file/view/xGmN9P7/copy-of-copy-of-john-doe-resume-2-pdf.jpg" alt="Placeholder image" class="modal-button" data-target="modal-image2" />
                  </a>
                </figure>
              </div>
              <div className="card-content">
                <div className="content">
                  <h4>user.resumeName</h4>
                  <span className="button btnSign" data-target="modal-image2">View resume</span>
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
