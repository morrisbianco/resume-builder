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
    fontFamily: 'BlinkMacSystemFont',
    textShadow: '1px 1px 1px #000, 3px 3px 5px rgb(0, 0, 3)',
  },
  
  subtitle: {
    color: 'white',
    fontSize: '1.2rem',
    textShadow: '1px 1px 1px #000, 3px 3px 5px rgb(0, 0, 3)',
  },
  
  contentDivider: {
    maxWidth: '75px',
    height: '5px',
  },
  
  parallax1: {
    background: 'url(https://images.unsplash.com/photo-1551151568-780b73811535?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=MnwxfDB8MXxyYW5kb218MHx8Y29tcHV0ZXJzfHx8fHx8MTYyNzA2MTQ3Ng&ixlib=rb-1.2.1&q=80&utm_campaign=api-credit&utm_medium=referral&utm_source=unsplash_source&w=1080)',
    backgroundAttachment: 'fixed',
    backgroundPosition: 'center',
    backgroundSize: 'cover',
    backgroundRepeat: 'no-repeat',
  },
  
  parallax2: {
    background: 'url(https://images.unsplash.com/photo-1498409785966-ab341407de6e?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=MnwxfDB8MXxyYW5kb218MHx8Y29tcHV0ZXJzfHx8fHx8MTYyNzA2MTczOQ&ixlib=rb-1.2.1&q=80&utm_campaign=api-credit&utm_medium=referral&utm_source=unsplash_source&w=1080)',
    backgroundAttachment: 'fixed',
    backgroundPosition: 'center',
    backgroundRepeat: 'no-repeat',
    backgroundSize: 'cover',
    borderTop: '20px solid white',
  },
  
  parallax3: {
    background: 'url(https://images.unsplash.com/photo-1551783841-0271a5f7c868?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=MnwxfDB8MXxyYW5kb218MHx8Y2l0eXx8fHx8fDE2MjcwNjE3NzE&ixlib=rb-1.2.1&q=80&utm_campaign=api-credit&utm_medium=referral&utm_source=unsplash_source&w=1080)',
    backgroundAttachment: 'fixed',
    backgroundPosition: 'center',
    backgroundRepeat: 'no-repeat',
    backgroundSize: 'cover',
    borderTop: '20px solid white',
  },
  
  hr: {
    background: 'black',
  },
  
  label: {
    color: 'black',
  },

  hero: {
    background: '#000428',
    /* fallback for old browsers */
    background: '-webkit-linear-gradient(to right, #004e92, #000428)',
    /* Chrome 10-25, Safari 5.1-6 */
    background: 'linear-gradient(to right, #1d4568, #000428)',
    /* W3C, IE 10+/ Edge, Firefox 16+, Chrome 26+, Opera 12+, Safari 7+ */
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
          <div className="column is-6 is-offset-6">
            <h1 className="title is-1" style={styles.title}>Lorem Ipsum</h1>
            <hr className="content-divider" style={styles.hr}/>
            <h2 className="subtitle" style={styles.subtitle}>Lorem ipsum dolor sit amet consectetur adipisicing elit. Eum adipisci, dolores deserunt
              velit magnam aliquam quia incidunt aspernatur ducimus omnis officiis commodi porro dolor possimus. Natus
              omnis cum delectus odit?</h2>
            <Link href="#" className="button is-white is-inverted">Next&ensp;<i className="fas fa-angle-double-right"></i></Link>
          </div>
        </div>
      </div>
    </div>
  </section>

  <section id="parallax-2" className="hero is-large " style={styles.parallax2}>
    <div className="hero-body">
      <div className="container">
        <div className="columns">
          <div className="column is-6">
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
  
  <section className="hero is-small" style={styles.hero}>
    <div className="hero-body">
      <div className="container">
        <h1 className="title is-1 " style={styles.title}>Lorem title</h1>
        <h2 className="subtitle" style={styles.subtitle}>Lorem ipsum dolor sit amet consectetur adipisicing elit. Esse ad sequi temporibus
          cupiditate voluptatibus nihil eum non, odit exercitationem, voluptatum unde quo, illo velit possimus ipsam!
          Beatae dolorum quo facilis.
          <br/>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Eos delectus quaerat officia magni doloribus
          laudantium odit natus consequatur accusantium et ullam, ad quidem reiciendis in quasi numquam, nisi possimus
          unde!
        </h2>
        <a href="#" className="button is-white is-medium is-inverted">Learn More&ensp;<i
            className="fas fa-angle-double-right"></i></a>
      </div>
    </div>
  </section>
    </>
  );
};

export default Home;
