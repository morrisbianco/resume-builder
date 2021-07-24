import React from 'react';
import { Link } from 'react-router-dom';

import Auth from '../../utils/auth';

const styles = {
  containerWrap: {
    boxShadow: '0 2px 13px -2px rgba(0, 0, 0, .2)',
    padding: '20px',
    marginBottom: '10px',
  },

  navbarMenu: {
    background: '-webkit-linear-gradient(to right, #004e92, #000428)',
  },
};

const Header = () => {
  const logout = (event) => {
    event.preventDefault();
    Auth.logout();
  };

  const renderControls = () => {
    // If logged in show logout controls
    if (Auth.loggedIn()) {
      return (
        <>
          <div className="navbar-end">
            <div className="navbar-item">
              <div className="buttons">
                <Link className="button is-primary" to="/me">
                  {Auth.getProfile().data.username}'s profile
                </Link>
                <Link className="button is-light" onClick={logout}>
                  Logout
                </Link>
              </div>
            </div>
          </div>
        </>
      );
    }
    // If logged out show login controls
    return (
      <>
        <div className="navbar-end">
            <div className="navbar-item">
              <div className="buttons">
                <Link className="button is-primary" to="/signup">
                  <strong>Sign up</strong>
                </Link>
                <Link className="button is-light" to="/login">
                  Log in
                </Link>
              </div>
            </div>
          </div>
      </>
    )
  };

  return (
    <>
      <div className="container-wrap" style={styles.containerWrap}>
        <nav className="navbar" role="navigation" aria-label="main navigation">
          <div className="navbar-brand">
            <Link className="navbar-item" to="/">
              <i className="fas fa-file-alt" width="112" height="28"></i>
            </Link>

            <a role="button" className="navbar-burger" aria-label="menu" aria-expanded="false" data-target="navbarBasicExample">
              <span aria-hidden="true"></span>
              <span aria-hidden="true"></span>
              <span aria-hidden="true"></span>
            </a>
          </div>

          <div id="navbarBasicExample" className="navbar-menu" style={styles.navbarMenu}>
            <div className="navbar-start">
              <Link className="navbar-item" to="/">
                Home
              </Link>

              <a className="navbar-item">
                Documentation
              </a>

              <div className="navbar-item has-dropdown is-hoverable">
                <a className="navbar-link">
                  More
                </a>

                <div className="navbar-dropdown">
                  <Link className="navbar-item" to="/me">
                    About
                  </Link>
                  <a className="navbar-item">
                    Contact
                  </a>
                  <hr className="navbar-divider"></hr>
                  <a className="navbar-item">
                    Report an issue
                  </a>
                </div>
              </div>
            </div>
          </div>

          <div className="navbar-end">
            <div className="navbar-item">
              <div className="buttons">
                {renderControls()}
              </div>
            </div>
          </div>
        </nav>
      </div>
    </>
  );
};

export default Header;
