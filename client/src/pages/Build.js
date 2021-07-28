
import { useMutation, useQuery } from '@apollo/client';
import React, { useState, useEffect } from 'react';

import { Link } from 'react-router-dom';
import { ADD_RESUME } from '../utils/mutations';
import { QUERY_ME } from '../utils/queries';

import './builds.css';

const Build = () => {

  useEffect(() => {
    document.title = `Rapid Résumé | Create`;
  });

  const [form, setForm] = useState({});
  // const [createResume, { error, resdata }] = useMutation(CREATE_RESUME);
  const [addResume, { error }] = useMutation(ADD_RESUME);
  const [errorMessage, alert] = useState('');

  // const { loading, data, usererror } = useQuery(QUERY_ME);
  // // console.log(data);
  // const user = data?.me;
  // if (error) console.log(error);


  const handleInputChange = async (e) => {
    const { target } = e;
    const inputType = target.name;
    const inputValue = target.value;
    console.log(target.name);

    setForm(form => ({ ...form, [inputType]: inputValue }));
    e.preventDefault();
  };

  const handleSubmit = async (e) => {
    try {
      console.log({ ...form });
      const { data } = await addResume({
        variables: { resumeData: { ...form } }
      });
    } catch (err) {
      console.error(err);
    }

    setForm({});
  };

  return (

    <div class="container contain1 margin1 has-text-centered animate__fadeIn animate__animated">
<h1 className="title">User Information</h1>
      {errorMessage && (
        <div className="column is-half">
          <p className="subtitle ">{errorMessage}</p>
        </div>
      )}
      <div className="wrap column">
        <nav class="breadcrumb has-arrow-separator has-text-centered is-centered is-large" aria-label="breadcrumbs">
          <ul>
            <li class="is-active"><Link onClick={handleSubmit} to="/build" class="link is-info">User Information</Link></li>
            <li><Link onClick={handleSubmit} to="/build2" class="link is-info">Education</Link></li>
            <li><Link onClick={handleSubmit} to="/build3" class="link is-info">Experience</Link></li>
            <li><Link onClick={handleSubmit} to="/build4" class="link is-info">Projects</Link></li>
          </ul>
        </nav>
        <p className="subtitle is-black">progress bar</p>
        <progress class="progress is-link" value="16" max="100">30%</progress>
      </div>
      <div className="columns is-multiline">
        <div className="column is-half">
          <div className="field ">
            <label className="label">First and last name</label>
            <div className="control">
              <input className="input" type="text" name="name" value={form.name} onChange={handleInputChange} placeholder="First Last" />
            </div>
          </div>
        </div>
        <div className="column is-half">
          <div className="field ">
            <label className="label">Phone Number</label>
            <div className="control">
              <input className="input" type="text" name="phoneNumber" value={form.phoneNumber} onChange={handleInputChange} placeholder="1234567890" />
            </div>
          </div>
        </div>
        <div className="column is-half">
          <div className="field ">
            <label className="label">GitHub Link</label>
            <div className="control">
              <input className="input" type="text" name="github" value={form.github} onChange={handleInputChange} placeholder="Profile Link" />
            </div>
          </div>
        </div>
        <div className="column is-half">
          <div className="field ">
            <label className="label">Linkedin Link</label>
            <div className="control">
              <input className="input" type="text" name="linkedIn" value={form.linkedIn} onChange={handleInputChange} placeholder="Profile Link" />
            </div>
          </div>
        </div>
        <div className="column is-two-fifths">
          <div className="field ">
            <label className="label">Address</label>
            <div className="control">
              <input className="input" type="text" name="address" value={form.address} onChange={handleInputChange} placeholder="1234 Resume St" />
            </div>
          </div>
        </div>
        <div className="column is-one-fifth">
          <div className="field ">
            <label className="label">City</label>
            <div className="control">
              <input className="input" type="text" name="city" value={form.city} onChange={handleInputChange} placeholder="resume@email.com" />
            </div>
          </div>
        </div>
        <div className="column is-one-fifth">
          <div className="field ">
            <label className="label">State</label>
            <div className="control">
              <input className="input" type="text" name="state" value={form.state} onChange={handleInputChange} placeholder="State Abreviation" />
            </div>
          </div>
        </div>
        <div className="column is-one-fifth">
          <div className="field ">
            <label className="label">Zip Code</label>
            <div className="control">
              <input className="input" type="text" name="zip" value={form.zip} onChange={handleInputChange} placeholder="12345" />
            </div>
          </div>
        </div>
        <div className="column is-half">
          <div className="field">
            <label className="label">Summary</label>
            <div className="control">
              <textarea className="textarea" name="summary" value={form.summary} onChange={handleInputChange} placeholder="Summarize yourself"></textarea>
            </div>
          </div>
        </div>
        <div className="column is-half">
          <div className="field">
            <label className="label">Skills</label>
            <div className="control">
              <textarea className="textarea" name="skills" value={form.skills} onChange={handleInputChange} placeholder="Please enter your skills"></textarea>
            </div>
          </div>
        </div>

      </div>
      <div className="has-text-center">
        <Link className="button btnG " onClick={handleSubmit} to="/Build2">
          Next
        </Link>
      </div>
    </div>
  );
};

export default Build;
