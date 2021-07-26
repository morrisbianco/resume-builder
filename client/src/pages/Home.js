// Node Modules
import React from 'react';
import { Link } from 'react-router-dom';
import { useQuery } from '@apollo/client';
import './Home.css';
// Utilities
import Auth from '../utils/auth';
import { QUERY_USERS } from '../utils/queries';
// Components
import UserList from '../components/UserList';

const Home = () => {
  const { loading, data } = useQuery(QUERY_USERS);
  const users = data?.users || [];

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
            <h1 className="title is-1">Lorem Ipsum</h1>
            <hr className="content-divider"/>
            <h2 className="subtitle">Lorem ipsum dolor sit amet consectetur adipisicing elit. Eum adipisci, dolores deserunt
              velit magnam aliquam quia incidunt aspernatur ducimus omnis officiis commodi porro dolor possimus. Natus
              omnis cum delectus odit?</h2>
              <Link to="/Build" className="button is-white is-inverted">View Template&ensp;</Link>
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
            <h1 className="title is-1">Dolor Sit</h1>
            <hr className="content-divider"/>
            <h2 className="subtitle">Lorem ipsum dolor sit amet consectetur adipisicing elit. Quod non odit beatae! Hic
              dignissimos incidunt ea eius doloremque quos corrupti fugiat architecto alias consequatur neque nemo,
              beatae nisi eaque nesciunt!.</h2>
            {renderControls()}
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
            <h1 className="title is-1">Amet Consectetur</h1>
            <hr className="content-divider"/>
            <h2 className="subtitle">Lorem, ipsum dolor sit amet consectetur adipisicing elit. Ipsum illum cupiditate
              excepturi fugiat, alias ipsa. Accusantium delectus commodi incidunt dolorum numquam et iste nulla, error
              rem labore dolorem doloribus unde..</h2>
            <Link href="#" className="button is-white is-inverted">Next&ensp;<i className="fas fa-angle-double-right"></i></Link>
          </div>
        </div>
      </section>

    </>
  );
};

export default Home;
