import { useMutation } from '@apollo/client';
import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { checkIfValid, validateEmail } from '../utils/helpers';
import { CREATE_RESUME } from '../utils/mutations';
import './builds.css';
const Build = () => {
  const [form, setForm] = useState({});
  const [createResume, { error, data }] = useMutation(CREATE_RESUME);
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
    try {
      const { data } = await createResume({
        variables: { ...form },
      });
    } catch (e) {
      console.error(e);
    }

    setForm({});
  };

  return (
    <div className= "container">
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
          <label className="label">City:</label>
          <div className="control">
            <input className="input" type="text" name="city" value={form.city} onChange={handleInputChange} placeholder="resume@email.com" />
          </div>
        </div>

        <div className="field pt-5 mx-5 px-5">
          <label className="label">Phone:</label>
          <div className="control">
            <input className="input" type="text" name="phoneNumber" value={form.phoneNumber} onChange={handleInputChange} placeholder="1234567890" />
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
            <input className="input" type="text" name="linkedIn" value={form.linkedIn} onChange={handleInputChange} placeholder="Profile Link" />
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
            <input className="input" type="text" name="zip" value={form.zip} onChange={handleInputChange} placeholder="12345" />
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
      </div>
  );
};

export default Build;
