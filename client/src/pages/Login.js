import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { useMutation } from '@apollo/client';
import { LOGIN_USER } from '../utils/mutations';

import Auth from '../utils/auth';

const styles = {
  hero: {
    background: 'linear-gradient(to right, #1d4568, #000428)',
  },

  input: {
    color: 'gray',
    fontSize: '1rem',
  },

  underscore: {
    textDecoration: 'underline',
  },

  // input::placeholder {
  //   color: white !important;
  // }

  // :root {
  //   --brandColor: hsl(0, 0%, 0%);
  //   --background: rgb(240, 240, 240);
  //   --textDark: hsla(0, 0%, 0%, 0.66);
  //   --textLight: hsla(0, 0%, 0%, 0.33);
  // }

  body: {
    background: 'rgb(240, 240, 240)',
    height: '100vh',
    color: 'hsla(0, 0%, 0%, 0.66)',
    fontFamily: 'BlinkMacSystemFont',
  },

  register: {
    marginTop: '10rem',
    background: 'white',
    borderRadius: '10px',
  },

  left: {
    padding: '4.5rem',
    borderRight: '5px solid rgb(240, 240, 240)',
  },

  right: {
    padding: '4.5rem',
  },

  leftTitle: {
    fontWeight: 800,
    letterSpacing: '-2px',
    fontFamily: 'BlinkMacSystemFont',
  },

  leftP: {
    color: 'hsla(0, 0%, 0%, 0.33)',
    fontSize: '1.15rem',
  },

  rightTitle: {
    fontWeight: 800,
    letterSpacing: '-1px',
    fontFamily: 'BlinkMacSystemFont',
  },

  rightDescription: {
    marginTop: '1rem',
    marginBottom: '1rem',
    color: 'hsla(0, 0%, 0%, 0.33)',
    fontSize: '1.15rem',
  },

  rightSmall: {
    color: 'hsla(0, 0%, 0%, 0.33)',
  },

  fab: {
    color: 'hsla(0, 0%, 0%, 0.33)',
    marginRight: '1rem',
  },

  fas: {
    color: 'hsla(0, 0%, 0%, 0.33)',
    marginRight: '1rem',
  }

};

const Login = (props) => {
  const [formState, setFormState] = useState({ email: '', password: '' });
  const [login, { error, data }] = useMutation(LOGIN_USER);

  // update state based on form input changes
  const handleChange = (event) => {
    const { name, value } = event.target;

    setFormState({
      ...formState,
      [name]: value,
    });
  };

  // submit form
  const handleFormSubmit = async (event) => {
    event.preventDefault();
    try {
      const { data } = await login({
        variables: { ...formState },
      });

      Auth.login(data.login.token);
    } catch (e) {
      console.error(e);
    }

    // clear form values
    setFormState({
      email: '',
      password: '',
    });
  };

  return (
    <section>
        <div className="columns is-multiline" style={styles.body}>
          <div className="column is-8 is-offset-2 register" style={styles.register}>
            <div className="columns">
              <div className="column left" style={styles.left}>
                <h1 className="title" style={styles.leftTitle}>Resume Builder</h1>
                <h2 className="">Lorem ipsum dolor sit amet.</h2>
                <p style={styles.leftP}>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Corporis ex deleniti aliquam tempora libero
                  excepturi vero soluta odio optio sed.</p>
              </div>
              <div className="column right has-text-centered" style={styles.right}>
                <h1 className="title is-4" style={styles.rightTitle}>Login & get started!</h1>
                <p className="" style={styles.rightDescription}>Lorem ipsum dolor, sit amet consectetur adipisicing elit</p>
                {data ? (
                <p>
                  Success! You may now head{' '}
                  <Link to="/">back to the homepage.</Link>
                </p>
              ) : (
                <form onSubmit={handleFormSubmit}>
                  <div className="field">
                    <div className="control">
                      <input className="input is-medium" type="email" placeholder="Email" value={formState.email}
                    onChange={handleChange} style={styles.input}/>
                    </div>
                  </div>

                  <div className="field">
                    <div className="control">
                      <input className="input is-medium" type="password" placeholder="Password" value={formState.password}
                    onChange={handleChange} style={styles.input}/>
                    </div>
                  </div>
                  <button className="button is-block is-primary is-fullwidth is-medium">Submit</button>
                  <br />
                  <small style={styles.rightSmall}><Link className="underscore" to="/signup" style={styles.underscore}>Create Account</Link></small>
                </form>
                )}
                {error && (
                <div classNameName="my-3 p-3 bg-danger text-white">
                  {error.message}
                </div>
              )}
              </div>
            </div>
          </div>
          <div className="column is-8 is-offset-2">
            <br />
            <nav className="level">
              <div className="level-left">
                <div className="level-item">
                  <span className="icon">
                    <i className="fab fa-twitter" style={styles.fab}></i>
                  </span> &emsp;
                  <span className="icon">
                    <i className="fab fa-facebook" style={styles.fab}></i>
                  </span> &emsp;
                  <span className="icon">
                    <i className="fab fa-instagram" style={styles.fab}></i>
                  </span> &emsp;
                  <span className="icon">
                    <i className="fab fa-github" style={styles.fab}></i>
                  </span> &emsp;
                  <span className="icon">
                    <i className="fas fa-envelope" style={styles.fas}></i>
                  </span>
                </div>
              </div>
              <div className="level-right">
                <small className="level-item" >
                  &copy; Super Cool Website. All Rights Reserved.
                </small>
              </div>
            </nav>
          </div>
        </div>
      </section>
  );
};

// style="color: var(--textLight)"

export default Login;
