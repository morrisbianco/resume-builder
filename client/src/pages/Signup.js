import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import './Signup.css'

import { useMutation } from '@apollo/client';
import { ADD_USER } from '../utils/mutations';

import Auth from '../utils/auth';

const Signup = () => {
  const [formState, setFormState] = useState({
    username: '',
    email: '',
    password: '',
  });
  const [addUser, { error, data }] = useMutation(ADD_USER);
  console.log("Sign Up Error: ", error)
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
      const { data } = await addUser({
        variables: { ...formState },
      });

      Auth.login(data.addUser.token);
    } catch (e) {
      console.error(e);
    }
  };

  return (
    <section className="">
      <div className="columns fullSignup is-multiline">
        <div className="column is-8 is-offset-2 register">
          <div className="columns">
            <div className="column left">
              <h1 className="title">Resume Builder</h1>

              <h2 className="">Create an account today!</h2>
              <br />
              <p>With resume builder you can save and store your resumes. The one stop place to build a resume completely free of charge or ads!</p>
            </div>
            <div className="column right has-text-centered">
              <h1 className="title is-4">Signup & get started!</h1>
              <p className="description">Lorem ipsum dolor sit amet consectetur adipisicing elit</p>

              {data ? (
                <p>
                  Success! You may now head{' '}
                  <Link to="/">back to the homepage.</Link>
                </p>
              ) : (
                <form onSubmit={handleFormSubmit}>
                  <div className="field">
                    <div className="control">
                      <input className="input is-medium" type="text" name="username" placeholder="Username" value={formState.username}
                        onChange={handleChange}/>
                    </div>
                  </div>
                  <div className="field">
                    <div className="control">
                      <input className="input is-medium" type="email" name="email" placeholder="Email" value={formState.email}
                        onChange={handleChange}/>
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
                  <small><Link className="underscore" to="/login">Already have an account?</Link></small>
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
      </div>
    </section>
  );
};

      export default Signup;
