import React from 'react';
import { Link } from 'react-router-dom';
import './Header.css';

import Auth from '../../utils/auth';

const Header = () => {
  const logout = (event) => {
    event.preventDefault();
    Auth.logout();
  };

  function toggleBurgerMenu() {
    document.querySelector('.navbar-menu').classList.toggle('is-active');
  }

  const renderCreate = () => {
    if (Auth.loggedIn()) {
      return (
        <Link className="navbar-item" to="/Build">
          Create
        </Link>
      );
    }
  }

  const renderControls = () => {
    // If logged in show logout controls
    if (Auth.loggedIn()) {
      return (
        <>
          <Link className="button btnSign" to="/me">
            {Auth.getProfile().data.username}'s profile
          </Link>
          <Link className="button btnLogin" onClick={logout}>
            Logout
          </Link>
        </>
      );
    }
    // If logged out show login controls
    return (
      <>
        <Link className="button btnSign" to="/signup">
          <strong>Sign up</strong>
        </Link>
        <Link className="button btnLogin" to="/login">
          Log in
        </Link>
      </>
    )
  };

  return (
    <>
      <div className="container-wrap">
        <nav className="navbar is-fixed-top " role="navigation" aria-label="main navigation">
          <div className="navbar-brand ">
            <Link className="navbar-item " to="/">
              <i className="fas fa-file-alt" width="112" height="28"></i>
            </Link>

            <a role="button" className="navbar-burger" aria-label="menu" aria-expanded="false" data-target="navbarBasicExample" onClick={toggleBurgerMenu}>
              <span aria-hidden="true"></span>
              <span aria-hidden="true"></span>
              <span aria-hidden="true"></span>
            </a>
          </div>

          <div id="navbarBasicExample" className="navbar-menu">
            <div className="navbar-start">
              <Link className="navbar-item" to="/">
                Home
              </Link>

              <Link className="navbar-item" to="/template">
                Template
              </Link>

              <div className="navbar-item has-dropdown is-hoverable">
                <a className="navbar-link">
                  More
                </a>

                <div className="navbar-dropdown">
                  <Link className="navbar-item" to="/me">
                    Profile
                  </Link>
                  {renderCreate()}
                  <hr className="navbar-divider"></hr>
                  <a className="navbar-item" href="https://github.com/morrisbianco/resume-builder/issues" target="_blank">
                    Report an issue
                  </a>
                </div>
              </div>
            </div>

          <div className="navbar-end">
            <div className="navbar-item">
              <div className="buttons">
                <div className="navbar-end">
                  <div className="navbar-item">
                    <div className="buttons">
                      {renderControls()}
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          </div>
        </nav>
      </div>
    </>
  );
};

export default Header;
