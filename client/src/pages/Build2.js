import { useMutation } from '@apollo/client';
import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { checkIfValid, validateEmail } from '../utils/helpers';
import { ADD_Education } from '../utils/mutations';

const Build2 = () => {
  const [form, setForm] = useState({
    school: '',
    location: '',
    date: '',
    description: ''
  });
  const [addEdu, { error, data }] = useMutation(ADD_Education);
  const [errorMessage, setErrorMessage] = useState('');

  const handleInputChange = async (e) => {
    const { target } = e;
    const inputType = target.name;
    const inputValue = target.value;
    console.log(target.name);

    setForm(form => ({ ...form, [inputType]: inputValue }));
    e.preventDefault();
    console.log(form);

    try {
      const { data } = await addEdu({
        variables: { ...form },
      });
    } catch (e) {
      console.error(e);
    }
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
          <h3>Education</h3>
          <label className="label">School:</label>
          <div className="control">
            <input className="input" type="text" name="school" value={form.school} onChange={handleInputChange} placeholder="School of Resume " />
          </div>
          <label className="label">Location:</label>
          <div className="control">
            <input className="input" type="text" name="location" value={form.location} onChange={handleInputChange} placeholder="City, State Abreviation" />
          </div>
          <label className="label">Completion Date:</label>
          <div className="control">
            <input className="input" type="text" name="date" value={form.date} onChange={handleInputChange} placeholder="Month, Year" />
          </div>
          <label className="label">Description:</label>
          <div className="control">
            <input className="input" type="text" name="description" value={form.description} onChange={handleInputChange} placeholder="Describe..." />
          </div>
        </div>

        <div className="has-text-right">
          <Link className="button p-5 m-5 px-5" onClick={handleSubmit} to="/Build3">
            Next
          </Link>
        </div>
      </form>
    </div>
  );
};

export default Build2;
