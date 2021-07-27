import { useMutation } from '@apollo/client';
import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { checkIfValid, validateEmail } from '../utils/helpers';
import { CREATE_Ed } from '../utils/mutations';
import './builds.css';
const Build2 = () => {
  const [form, setForm] = useState({});
  const [createEducation, { error, data }] = useMutation(CREATE_Ed);
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

    // if (!form.name || !validateEmail(form.email)) {
    //   setErrorMessage('Email or username is invalid');
    //   return;
    // }
    // if (!form.summary || !checkIfValid(form.summary)) {
    //   setErrorMessage(
    //     `Please include a message`
    //   );
    //   return;
    // }
    alert(`success`);

    try {
      console.log(form);
      const { data } = await createEducation({
        variables: { ...form },
      });
    } catch (e) {
      console.error(e);
    }

    setForm({});
  };


  return (
    <div class="container">
    <div>
      {errorMessage && (
        <div>
          <p className="subtitle pt-5 mx-5 px-5">{errorMessage}</p>
        </div>
      )}
      <form className="form fullBuild2">

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
          <Link className="button btnG p-5 m-5 px-5" onClick={handleSubmit} to="/Build3">
            Next
          </Link>
        </div>
      </form>
    </div>


    </div>
  );
};

export default Build2;
