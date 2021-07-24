import React from 'react';
import { useLocation, useHistory } from 'react-router-dom';

const styles = {
  footer: {
    color: 'white',
    background: 'rgb(14, 14, 14)',
  },
  
  a: {
    color: 'rgb(36, 78, 156)',
  }
};

const Footer = () => {
  const location = useLocation();
  const history = useHistory();
  return (
    <footer className="footer" style={styles.footer}>
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
          <p> The source code is licensed <a href="http://opensource.org/licenses/mit-license.php" style={styles.a}>MIT</a>. 2021&copy;
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
