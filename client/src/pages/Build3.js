import React, { useState } from 'react';
import { checkIfValid, validateEmail } from '../utils/helpers';
import { Link } from 'react-router-dom';

const Build3 = () => {
  const [form, setForm] = useState({});
  const [errorMessage, setErrorMessage] = useState('');

  const handleInputChange = (e) => {
    const { target } = e;
    const inputType = target.name;
    const inputValue = target.value;
    console.log(target.name);

    setForm(form => ({ ...form, [inputType]: inputValue }));
  };

  const handleSubmit = (e) => {
    // e.preventDefault();

    if (!form.name || !validateEmail(form.email)) {
      setErrorMessage('Email or username is invalid');
      return;
    }
    if (!form.summary || !checkIfValid(form.summary)) {
      setErrorMessage(
        `Please include a message`
      );
      return;
    }
    alert(`Hello ${form.name}`);

    setForm({});
  };


  return (
    <div>
      {errorMessage && (
        <div>
          <p className="subtitle pt-5 mx-5 px-5">{errorMessage}</p>
        </div>
      )}
      <form className="form">

        <div className="field pt-5 mx-5 px-5">
          <h3>Work Experience</h3>
          <label className="label">Company:</label>
          <div className="control">
            <input className="input" type="text" name="work" value={form.work} onChange={handleInputChange} placeholder="Company Name" />
          </div>
          <label className="label">Role:</label>
          <div className="control">
            <input className="input" type="text" name="work" value={form.work} onChange={handleInputChange} placeholder="Role in Company" />
          </div>
          <label className="label">Location:</label>
          <div className="control">
            <input className="input" type="text" name="work" value={form.work} onChange={handleInputChange} placeholder="City, State Abreviation" />
          </div>
          <label className="label">Date:</label>
          <div className="control">
            <input className="input" type="text" name="work" value={form.work} onChange={handleInputChange} placeholder="Start - End Year (Present)" />
          </div>
          <label className="label">Description:</label>
          <div className="control">
            <input className="input" type="text" name="work" value={form.work} onChange={handleInputChange} placeholder="Describe..." />
          </div>
          <label className="label">Key Achievements:</label>
          <div className="control">
            <input className="input" type="text" name="work" value={form.work} onChange={handleInputChange} placeholder="resume, speaking, writing" />
          </div>
        </div>

        <div className="has-text-right">
          <Link className="button p-5 m-5 px-5" onClick={handleSubmit} to="/Build4">
            Next
          </Link>
        </div>
      </form>
    </div>
  );
};

export default Build3;
