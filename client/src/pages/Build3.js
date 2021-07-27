import { useMutation } from '@apollo/client';
import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { ADD_EXP } from '../utils/mutations';

import './builds.css';

const Build3 = () => {
  const [form, setForm] = useState({});
  const [addExp, { error }] = useMutation(ADD_EXP);
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
      const { data } = await addExp({
        variables: { expData: { ...form } },
      });
    } catch (e) {
      console.error(e);
    }

    setForm({});
  };


  return (

    <div class="container contain margin1 has-text-centered animate__fadeIn animate__animated">
      <div>
        {errorMessage && (
          <div>
            <p className="subtitle full pt-5 mx-5 px-5">{errorMessage}</p>
          </div>
        )}
        <form className="form fullBuild3">
          <div className="field pt-5 mx-5 px-5">
            <h3>Work Experience</h3>
            <label className="label">Company</label>
            <div className="control">
              <input className="input" type="text" name="company" value={form.company} onChange={handleInputChange} placeholder="Company Name" />
            </div>
            <label className="label">Role</label>
            <div className="control">
              <input className="input" type="text" name="role" value={form.role} onChange={handleInputChange} placeholder="Role in Company" />
            </div>
            <label className="label">Location</label>
            <div className="control">
              <input className="input" type="text" name="location" value={form.location} onChange={handleInputChange} placeholder="City, State Abreviation" />
            </div>
            <label className="label">Date</label>
            <div className="control">
              <input className="input" type="text" name="date" value={form.date} onChange={handleInputChange} placeholder="Start - End Year (Present)" />
            </div>
            <label className="label">Description</label>
            <div className="control">
              <input className="input" type="text" name="description" value={form.description} onChange={handleInputChange} placeholder="Describe..." />
            </div>
            <label className="label">Key Achievements</label>
            <div className="control">
              <input className="input" type="text" name="keyAchievements" value={form.keyAchievements} onChange={handleInputChange} placeholder="resume, speaking, writing" />
            </div>
          </div>
          <div className="has-text-center">
            <Link className="button btnG p-5 m-5 px-5" onClick={handleSubmit} to="/Build4">
              Next
            </Link>
          </div>
        </form>
      </div>
    </div>
  );
};

export default Build3;
