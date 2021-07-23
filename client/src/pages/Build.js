import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { checkIfValid, validateEmail } from '../utils/helpers';

const Build = () => {
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
          <h3>User Information</h3>
          <label className="label">Name:</label>
          <div className="control">
            <input className="input" type="text" name="name" value={form.name} onChange={handleInputChange} placeholder="First Last" />
          </div>
        </div>

        <div className="field pt-5 mx-5 px-5">
          <label className="label">E-mail Address:</label>
          <div className="control">
            <input className="input" type="email" name="email" value={form.email} onChange={handleInputChange} placeholder="resume@email.com" />
          </div>
        </div>

        <div className="field pt-5 mx-5 px-5">
          <label className="label">Phone:</label>
          <div className="control">
            <input className="input" type="text" name="phone" value={form.phone} onChange={handleInputChange} placeholder="1234567890" />
          </div>
        </div>

        <div className="field pt-5 mx-5 px-5">
          <label className="label">Github:</label>
          <div className="control">
            <input className="input" type="text" name="github" value={form.github} onChange={handleInputChange} placeholder="Profile Link" />
          </div>
        </div>

        <div className="field pt-5 mx-5 px-5">
          <label className="label">Linkedin:</label>
          <div className="control">
            <input className="input" type="text" name="linkedin" value={form.linkedin} onChange={handleInputChange} placeholder="Profile Link" />
          </div>
        </div>

        <div className="field pt-5 mx-5 px-5">
          <label className="label">Address:</label>
          <div className="control">
            <input className="input" type="text" name="address" value={form.address} onChange={handleInputChange} placeholder="1234 Resume St" />
          </div>
        </div>

        <div className="field pt-5 mx-5 px-5">
          <label className="label">State:</label>
          <div className="control">
            <input className="input" type="text" name="state" value={form.state} onChange={handleInputChange} placeholder="State Abreviation" />
          </div>
        </div>

        <div className="field pt-5 mx-5 px-5">
          <label className="label">Zip Code:</label>
          <div className="control">
            <input className="input" type="text" name="zipcode" value={form.zipcode} onChange={handleInputChange} placeholder="12345" />
          </div>
        </div>

        <div className="field p-5 mx-5 px-5">
          <label className="label">Summary:</label>
          <div className="control">
            <textarea className="textarea" name="summary" value={form.summary} onChange={handleInputChange} placeholder="Summarize yourself"></textarea>
          </div>
        </div>

        <div className="field p-5 mx-5 px-5">
          <label className="label">Skills:</label>
          <div className="control">
            <textarea className="textarea" name="skills" value={form.skills} onChange={handleInputChange} placeholder="Please enter your skills"></textarea>
          </div>
        </div>

        <div className="has-text-right">
          <Link className="button p-5 m-5 px-5" onClick={handleSubmit} to="/Build2">
            Next
          </Link>
        </div>
      </form>
    </div>
  );
};

export default Build;
