import { useMutation } from '@apollo/client';
import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { ADD_EDUCATION } from '../utils/mutations';

import './builds.css';

const Build2 = () => {
  const [form, setForm] = useState({});
  const [addEducation, { error }] = useMutation(ADD_EDUCATION);
  const [errorMessage, setErrorMessage] = useState('');

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
      console.log(form);
      const { data } = await addEducation({
        variables: { educationData: { ...form } },
      });
    } catch (e) {
      console.error(e);
    }

    setForm({});
  };

  return (
    <div class="container contain margin1 has-text-centered animate__fadeIn animate__animated">
      {errorMessage && (
        <div>
          <p className="subtitle pt-5 mx-5 px-5">{errorMessage}</p>
        </div>
      )}
      <h1 className="title">Education</h1>
      <div className="wrap column">
        <nav class="breadcrumb has-arrow-separator has-text-centered is-centered is-medium" aria-label="breadcrumbs">
          <ul>
            <li><Link onClick={handleSubmit} to="/build" class="link is-info">User Information</Link></li>
            <li class="is-active"><Link onClick={handleSubmit} to="/build2" class="link is-info">Education</Link></li>
            <li><Link onClick={handleSubmit} to="/build3" class="link is-info">Experience</Link></li>
            <li><Link onClick={handleSubmit} to="/build4" class="link is-info">Projects</Link></li>
          </ul>
        </nav>
        <progress class="progress is-link" value="46" max="100">30%</progress>
      </div>
      <form className="form fullBuild2">
        <div className=" mx-5 px-5">
          <label className="label">School</label>
          <div className="control">
            <input className="input" type="text" name="school" value={form.school} onChange={handleInputChange} placeholder="School of Resume " />
          </div>
          <label className="label">Location</label>
          <div className="control">
            <input className="input" type="text" name="location" value={form.location} onChange={handleInputChange} placeholder="City, State Abreviation" />
          </div>
          <label className="label">Completion Date</label>
          <div className="control">
            <input className="input" type="text" name="date" value={form.date} onChange={handleInputChange} placeholder="Month, Year" />
          </div>
          <label className="label">Description</label>
          <div className="control">
            <input className="input" type="text" name="description" value={form.description} onChange={handleInputChange} placeholder="Describe..." />
          </div>
          <div className="has-text-center">
            <button className="button btnG " onClick={handleSubmit} to="/me">
              Add Another
            </button>
            <Link className="button btnG " onClick={handleSubmit} to="/Build3">
              Next
            </Link>
          </div>
        </div>
      </form>
    </div>
  );
};

export default Build2;
