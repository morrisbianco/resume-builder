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

    <div className="columns fullLogin is-multiline" >
      <div className="column is-6 is-offset-3 register" >
        <div className="columns">
          <div className="column left" >
            <h1 className="title" >Resume Builder</h1>
            <h2 className="">Login and view your resumes!</h2>
            <br />
            <p>With resume builder you can save and store your resumes. The one stop place to build a resume completely free of charge or ads!</p>
          </div>
          <div className="column right has-text-centered" >
            <h1 className="title is-4" >Login & get started!</h1>
            <p className="description" >Lorem ipsum dolor, sit amet consectetur adipisicing elit</p>
            {data ? (
              <p>
                Success! You may now head{' '}
                <Link to="/">back to the homepage.</Link>
              </p>
            ) : (
              <form onSubmit={handleFormSubmit}>
                <div className="field">
                  <div className="control">

                    <input className="input is-medium" type="email" name="email" placeholder="Email" value={formState.email}
                      onChange={handleChange} />

                  </div>
                </div>

                <div className="field">
                  <div className="control">

                    <input className="input is-medium" type="password" name="password" placeholder="Password" value={formState.password}
                      onChange={handleChange} />

                  </div>
                </div>
                <button className="button is-block is-primary is-fullwidth is-medium">Submit</button>
                <br />
                <small ><Link className="underscore" to="/signup" >Create Account</Link></small>
              </form>

            )}
            {error && (
              <div className="my-3 p-3 bg-danger text-white">

                {error.message}
              </div>
            )}
          </div>
        </div>
      </div>
    </div>



  );
};

export default Login;
