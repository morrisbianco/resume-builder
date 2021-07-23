import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { checkIfValid, validateEmail } from '../utils/helpers';
import { useMutation } from '@apollo/client';
import { CREATE_RESUME } from '../utils/mutations';

const Build = () => {
  const [form, setForm] = useState({});
  const [errorMessage, setErrorMessage] = useState('');

  const [createResume, { error }] = useMutation(CREATE_RESUME);
  
  const handleInputChange = (e) => {
    const { target } = e;
    const inputType = target.name;
    const inputValue = target.value;

    setForm(form => ({...form, [inputType]:inputValue}));
  };

  const handleSubmit = async (e) => {
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
    const { data } = await createResume({
      variables: { ...form } 
    });
    console.log("DATA: ", data)
    setForm({});
  };


  return (
    <div>
      {errorMessage && (
        <div>
          <p className="subtitle pt-5 mx-5 px-5">{errorMessage}</p>
        </div>
      )}
      <form className="form columns is-variable is-multiline">
        <div className="field pt-5 mx-5 px-5 column is-3">
          <label className="label">Name:</label>
          <div className="control">
            <input className="input" type="text" name="name" value={form.name} onChange={handleInputChange} placeholder="Please enter your name here" />
          </div>
        </div>

        <div className="field pt-5 mx-5 px-5 column is-3">
          <label className="label">E-mail Address:</label>
          <div className="control">
            <input className="input" type="email" name="email" value={form.email} onChange={handleInputChange} placeholder="Please enter your E-mail here" />
          </div>
        </div>

        <div className="field pt-5 mx-5 px-5 column is-3">
          <label className="label">Phone Number:</label>
          <div className="control">
            <input className="input" type="text" name="phoneNumber" value={form.phoneNumber} onChange={handleInputChange} placeholder="Please enter your name here" />
          </div>
        </div>

        {/* <div className="field pt-5 mx-5 px-5 column is-3">
          <label className="label">Github:</label>
          <div className="control">
            <input className="input" type="text" name="github" value={form.github} onChange={handleInputChange} placeholder="Please enter your name here" />
          </div>
        </div>

        <div className="field pt-5 mx-5 px-5 column is-3">
          <label className="label">Linkedin:</label>
          <div className="control">
            <input className="input" type="text" name="linkedin" value={form.linkedin} onChange={handleInputChange} placeholder="Please enter your name here" />
          </div>
        </div> */}

        <div className="field pt-5 mx-5 px-5 column is-3">
          <label className="label">Address:</label>
          <div className="control">
            <input className="input" type="text" name="address" value={form.address} onChange={handleInputChange} placeholder="Please enter your name here" />
          </div>
        </div>

        <div className="field pt-5 mx-5 px-5 column is-3">
          <label className="label">City:</label>
          <div className="control">
            <input className="input" type="text" name="city" value={form.city} onChange={handleInputChange} placeholder="Please enter your name here" />
          </div>
        </div>

        <div className="field pt-5 mx-5 px-5 column is-3">
          <label className="label">State:</label>
          <div className="control">
            <input className="input" type="text" name="state" value={form.state} onChange={handleInputChange} placeholder="Please enter your name here" />
          </div>
        </div>

        <div className="field pt-5 mx-5 px-5 column is-3">
          <label className="label">Zip Code:</label>
          <div className="control">
            <input className="input" type="text" name="zip" value={form.zip} onChange={handleInputChange} placeholder="Please enter your name here" />
          </div>
        </div>

        <div className="field p-5 mx-5 px-5 column is-3">
          <label className="label">Summary:</label>
          <div className="control">
            <textarea className="textarea" name="summary" value={form.summary} onChange={handleInputChange} placeholder="Please enter your message here"></textarea>
          </div>
        </div>

        {/* <div className="field p-5 mx-5 px-5 column is-3">
          <label className="label">Skills:</label>
          <div className="control">
            <textarea className="textarea" name="skills" value={form.skills} onChange={handleInputChange} placeholder="Please enter your message here"></textarea>
          </div>
        </div> */}

        <div className="has-text-right column is-3">
          <Link className="button p-5 m-5 px-5" onClick={handleSubmit} to="/Build2">
            Next
          </Link>
        </div>
      </form>
    </div>
  );
};

export default Build;
