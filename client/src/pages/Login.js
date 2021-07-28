import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { useMutation } from '@apollo/client';
import { LOGIN_USER } from '../utils/mutations';
import './Login.css'

import Auth from '../utils/auth';

const Login = (props) => {

  useEffect(() => {
    document.title = `Rapid Résumé | Login`;
  });

  const [formState, setFormState] = useState({ email: '', password: '' });
  const [login, { error, data }] = useMutation(LOGIN_USER);

  const handleChange = (event) => {
    const { name, value } = event.target;

    setFormState({
      ...formState,
      [name]: value,
    });
  };

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

    setFormState({
      email: '',
      password: '',
    });
  };

  return (
    
    <section className="hero is-fullheight">
      <div className="hero-body has-text-centered">
        <div className="login">
          <h1 className="title">Login</h1>
          {data ? (
            <p>
              Success! You may now head{' '}
              <Link to="/">back to the homepage.</Link>
            </p>
          ) : (
            <form onSubmit={handleFormSubmit}>
              <div className="field">
                <div className="control">
                  <input className="input inputLoginSign is-medium is-rounded" type="email" name="email" onChange={handleChange} value={formState.email} placeholder="hello@example.com" autocomplete="username" required />
                </div>
              </div>
              <div className="field">
                <div className="control">
                  <input className="input inputLoginSign is-medium is-rounded" type="password" name="password" onChange={handleChange} value={formState.password} placeholder="**********" autocomplete="current-password" required />
                </div>
              </div>
              <br />
              <button className="button is-block is-fullwidth btnSign  is-medium is-rounded" type="submit">
                Login
              </button>
            </form>
          )}
          {error && (
            <div className="my-3 p-3 bg-danger text-white">
              {error.message}
            </div>
          )}
          <br />
          <div className="level">
            <div className="level-item has-text-centered">
              <div>
                <Link to="/signup">Don't have an account?</Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Login;
