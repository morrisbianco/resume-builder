import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { useMutation } from '@apollo/client';
import { LOGIN_USER } from '../utils/mutations';
import './Login.css'

import Auth from '../utils/auth';

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

    <section class="hero is-fullheight">
    <div class="hero-body has-text-centered">
      <div class="login">
        <h1 className="title">Login</h1>
        {data ? (
          <p>
            Success! You may now head{' '}
            <Link to="/">back to the homepage.</Link>
          </p>
        ) : (
          <form onSubmit={handleFormSubmit}>
            <div class="field">
              <div class="control">
                <input class="input inputLoginSign is-medium is-rounded" type="email" name="email" onChange={handleChange} value={formState.email} placeholder="hello@example.com" autocomplete="username" required />
              </div>
            </div>
            <div class="field">
              <div class="control">
                <input class="input inputLoginSign is-medium is-rounded" type="password" name="password" onChange={handleChange} value={formState.password} placeholder="**********" autocomplete="current-password" required />
              </div>
            </div>
            <br />
            <button class="button is-block is-fullwidth btnSign  is-medium is-rounded" type="submit">
              Login
            </button>
          </form>
        )}
        {error && (
          <div classNameName="my-3 p-3 bg-danger text-white">
            {error.message}
          </div>
        )}
        <br />
        <div class="level">
          <div class="level-item has-text-centered">
            <div>
            <a href="#">Don't have an account?</a>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>

    // <section class="hero is-fullheight">
    //   <div class="hero-body has-text-centered">
        
    //     <div class="login">
        
    //       <h1 className="title">Login</h1>
         
    //       <form>
    //         <div class="field">
    //           <div class="control">
    //             <input class="input inputLoginSign is-medium is-rounded" type="email" placeholder="hello@example.com" autocomplete="username" required />
    //           </div>
    //         </div>
    //         <div class="field">
    //           <div class="control">
    //             <input class="input inputLoginSign is-medium is-rounded" type="password" placeholder="**********" autocomplete="current-password" required />
    //           </div>
    //         </div>
    //         <br />
    //         <button class="button is-block btnLogin is-fullwidth is-medium is-rounded" type="submit">
    //           Login
    //         </button>
    //       </form>
    //       <br />
          
    //         <div class="level">
    //           <div class="level-item has-text-centered">
    //             <div>
    //               <a href="#">Don't have an account?</a>
    //             </div>
    //           </div>
    //         </div>
    //     </div>
    //     </div>
        
    // </section>
      
      );
};

      export default Login;
