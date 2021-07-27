// Node Modules
import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';
import './Home.css';
// Utilities
import Auth from '../utils/auth';

const Home = () => {

  useEffect(() => {
    document.title = `Rapid Résumé | Home`;
  });

  const renderControls = () => {
    // If logged in show logout controls
    if (Auth.loggedIn()) {
      return (
        <>
          <Link to="/Build" className="button btnSign">Start Building&ensp;<i className="fas fa-angle-double-right"></i></Link>
        </>
      );
    }

    // If logged out show login controls
    return (
      <>
        <Link className="button btnLogin" to="/login">
          Get started!
        </Link>
      </>
    )
  };

  return (
    <>

      <section id="parallax-1" className="hero is-large ">
        <div className="hero-body">
          <div>
            <div className="columns">
              <div className="column is-6 is-offset-3 has-text-centered">
                <div className="cardstyle">
                  <h1 className="title is-1">Discover Better</h1>
                  <hr className="content-divider" />
                  <h2 className="subtitle">Answer a few questions about your background, skills and experience, then select a template. Our Resume Builder does the rest. Start today for free!</h2>
                  <Link to="/Template" className="button btnView ">View Template&ensp;</Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section id="parallax-2" className="hero is-large ">
        <div className="hero-body">
          <div>
            <div className="columns">
              <div className="column is-6 is-offset-6 has-text-centered">
                <div className="cardstyle">
                  <h1 className="title is-1">Getting started</h1>
                  <hr className="content-divider" />
                  <h2 className="subtitle">Answer a few questions about your background, skills and experience, then select a template. Our Resume Builder does the rest. Start today for free!</h2>
                  {renderControls()}
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section id="parallax-3" className="hero is-large">
        <div className="hero-body">
          <div>
            <div className="columns">
              <div className="column is-6  has-text-centered">

                <div className="cardstyle">
                  <h1 className="title is-1">Get to know our team</h1>
                  <hr className="content-divider" />
                  <h2 className="subtitle">Learn more about the team <br></br> who made this website possible</h2>
                  <Link href="#" className="button btnSign">Our Team&ensp;<i className="fas fa-angle-double-right"></i></Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Home;
