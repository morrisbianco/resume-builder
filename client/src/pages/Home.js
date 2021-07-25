// Node Modules
import React from 'react';
import { Link } from 'react-router-dom';
import { useQuery } from '@apollo/client';
// Utilities
import Auth from '../utils/auth';
import { QUERY_USERS } from '../utils/queries';
// Components
import UserList from '../components/UserList';

const styles = {
  title: {
    color: 'white',
    fontWeight: 800,
    fontSize: '4rem',
    fontFamily: 'Arial',
    textShadow: '1px 1px 1px #000, 3px 3px 5px rgb(0, 0, 3)',
  },
  
  subtitle: {
    color: 'white',
    fontSize: '1.2rem',
    textShadow: '2px 2px 2px #000, 1px 1px 1px rgb(0, 0, 0)',
  },

  contentDivider: {
   background: 'grey',
  },
  
  btnGo: {
    fontSize: '20px',
    background: 'black',
    color: 'white',
    border: 'transparent 1px'
  },
  
  parallax1: {
    background: 'url(https://images.pexels.com/photos/590016/pexels-photo-590016.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260)',
    backgroundAttachment: 'fixed',
    backgroundPosition: 'center',
    backgroundSize: 'cover',
    backgroundRepeat: 'no-repeat',
  },
  
  parallax2: {
    background: 'url(https://images.pexels.com/photos/5673502/pexels-photo-5673502.jpeg?auto=compress&cs=tinysrgb&dpr=3&h=750&w=1260)',
    backgroundAttachment: 'fixed',
    backgroundPosition: 'center',
    backgroundRepeat: 'no-repeat',
    backgroundSize: 'cover',
    borderTop: '8px solid black',
  },
  
  parallax3: {
    background: 'url(https://images.pexels.com/photos/3184465/pexels-photo-3184465.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260)',
    backgroundAttachment: 'fixed',
    backgroundPosition: 'center',
    backgroundRepeat: 'no-repeat',
    backgroundSize: 'cover',
    borderTop: '8px solid black',
  },
  
  hr: {
    background: 'grey',
  },
  
  label: {
    color: 'black',
  },


};

const Home = () => {
  const { loading, data } = useQuery(QUERY_USERS);
  const users = data?.users || [];

  const renderUserList = () => {
    if (loading) {
      return <h2>Loading...</h2>
    } else {
      return <UserList users={users} title="List of Resumes" />
    }
  } 

  const renderUsername = () => {
    if (!Auth.loggedIn()) return null;
    return Auth.getProfile().data.username;
  }

  return (
    <>
      <div className="shadow"></div>

  <section id="parallax-1" className="hero is-large " style={styles.parallax1}>
    <div className="hero-body">
      <div className="container">
        <div className="columns">
          <div className="column is-6 is-offset-3 has-text-centered">
            <h1 className="title is-1" style={styles.title}>Lorem Ipsum</h1>
            <hr className="content-divider" style={styles.hr}/>
            <h2 className="subtitle" style={styles.subtitle}>Lorem ipsum dolor sit amet consectetur adipisicing elit. Eum adipisci, dolores deserunt
              velit magnam aliquam quia incidunt aspernatur ducimus omnis officiis commodi porro dolor possimus. Natus
              omnis cum delectus odit?</h2>
            <Link to="/Build" className="button btnGo" style={styles.btnGo}>Create a Resume&ensp;</Link>
          </div>
        </div>
      </div>
    </div>
  </section>

  <section id="parallax-2" className="hero is-large " style={styles.parallax2}>
    <div className="hero-body">
      <div className="container">
        <div className="columns">
          <div className="column is-6 has-text-centered">
            <h1 className="title is-1" style={styles.title}>Dolor Sit</h1>
            <hr className="content-divider" style={styles.hr}/>
            <h2 className="subtitle" style={styles.subtitle}>Lorem ipsum dolor sit amet consectetur adipisicing elit. Quod non odit beatae! Hic
              dignissimos incidunt ea eius doloremque quos corrupti fugiat architecto alias consequatur neque nemo,
              beatae nisi eaque nesciunt!.</h2>
            <Link to="/Build" className="button is-white is-inverted">Create a Resume&ensp;<i className="fas fa-angle-double-right"></i></Link>
          </div>
        </div>
      </div>
    </div>
  </section>

  <section id="parallax-3" className="hero is-large " style={styles.parallax3}>
    <div className="hero-body">
      <div className="container">
        <div className="columns">
          <div className="column is-6 is-offset-6">
            <h1 className="title is-1 " style={styles.title}>Amet Consectetur</h1>
            <hr className="content-divider" style={styles.hr}/>
            <h2 className="subtitle" style={styles.subtitle}>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Ipsum illum cupiditate
              excepturi fugiat, alias ipsa. Accusantium delectus commodi incidunt dolorum numquam et iste nulla, error
              rem labore dolorem doloribus unde..</h2>
            <Link href="#" className="button is-white is-inverted">Next&ensp;<i className="fas fa-angle-double-right"></i></Link>
          </div>
        </div>
      </div>
    </div>
  </section>
 
    </>
  );
};

export default Home;
