// Node Modules
import React from 'react';
import { Link } from 'react-router-dom';
import { useQuery } from '@apollo/client';
import './Home.css';
// Utilities
import Auth from '../utils/auth';

const Home = () => {

  const renderControls = () => {
    // If logged in show logout controls
    if (Auth.loggedIn()) {
      return (
        <>
          <Link to="/Build" className="button is-white is-inverted">Create a Resume&ensp;<i className="fas fa-angle-double-right"></i></Link>
        </>
      );
    }

    // If logged out show login controls
    return (
      <>
        <p>Please Login to Create a Resume</p>
      </>
    )
  };

  return (
    <>
      <div className="shadow"></div>

      <section id="parallax-1" className="hero is-large ">
        <div className="hero-body">
          <div className="container">
            <div className="columns">
              <div className="column is-6 is-offset-3 has-text-centered">
                <div className="cardstyle">
                  <h1 className="title is-1">Getting started</h1>
                  <hr className="content-divider" />
                  <h2 className="subtitle">build your resume in minutes</h2>
                  <Link to="/Build" className="button is-white is-inverted">Start Building&ensp;</Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section id="parallax-2" className="hero is-large ">
        <div className="hero-body">
          <div className="container">
            <div className="columns">
              <div className="column is-6 has-text-centered">
                <div className="cardstyle">
                  <h1 className="title is-1">Dolor Sit</h1>
                  <hr className="content-divider" />
                  <h2 className="subtitle">Lorem ipsum dolor sit amet consectetur adipisicing elit. Quod non odit beatae! Hic
                    dignissimos incidunt ea eius doloremque quos corrupti fugiat architecto alias consequatur neque nemo,
                    beatae nisi eaque nesciunt!.</h2>
                  {renderControls()}
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section id="parallax-3" className="hero is-large">
        <div className="hero-body">
          <div className="container">
            <div className="columns">
              <div className="column is-6 is-offset-6">

                <div className="cardstyle">
                  <h1 className="title is-1">Amet Consectetur</h1>
                  <hr className="content-divider" />
                  <h2 className="subtitle">Lorem, ipsum dolor sit amet consectetur adipisicing elit. Ipsum illum cupiditate
                    excepturi fugiat, alias ipsa. Accusantium delectus commodi incidunt dolorum numquam et iste nulla, error
                    rem labore dolorem doloribus unde..</h2>
                  <Link href="#" className="button is-white is-inverted">Next&ensp;<i className="fas fa-angle-double-right"></i></Link>
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
