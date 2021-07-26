import React from 'react';
import { useLocation, useHistory } from 'react-router-dom';
import './Footer.css';


const Footer = () => {
  const location = useLocation();
  const history = useHistory();
  return (
    <footer className=" bottom">
      <div className="content has-text-centered">
        <div className="container text-center mb-5">
          {location.pathname !== '/' && (
            <button
              className="btn btn-dark mb-3"
              onClick={() => history.goBack()}
            >
              &larr; Go Back
            </button>
          )}
          <p> The source code is licensed <a href="http://opensource.org/licenses/mit-license.php">MIT</a>. 2021&copy;
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
