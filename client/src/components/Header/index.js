import React from 'react';
import { Link } from 'react-router-dom';
import Auth from '../../utils/auth';

import './Header.css';

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
        <>
        <Link className="navbar-item" to="/Build">
          Create
        </Link>
        <Link className="navbar-item" to="/me">
        Profile
      </Link>
      </>
      );
    }
  }

  const renderControls = () => {

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
          <div className=" ">

            <a role="button" className="navbar-burger" aria-label="menu" aria-expanded="false" data-target="navbarBasicExample" onClick={toggleBurgerMenu}>
              <span aria-hidden="true"></span>
              <span aria-hidden="true"></span>
              <span aria-hidden="true"></span>
            </a>
          </div>

            
          <div id="navbarBasicExample" className="navbar-menu">
            <div className="navbar-start">
            <Link to="/" href="https://github.com/morrisbianco/resume-builder" className="brandicon navbar-item"><img src="https://cdn.discordapp.com/attachments/709148993262977068/870026198288322560/icons8-paper-64.png" alt=""  width=""/>
            </Link>
              
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
                  {renderCreate()}
                  <hr className="navbar-divider"></hr>
                  <Link className="navbar-item" to="/about">
                    Our Team
                  </Link>
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