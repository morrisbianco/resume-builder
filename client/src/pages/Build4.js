import { useMutation } from '@apollo/client';
import React, { useState } from 'react';
import { checkIfValid, validateEmail } from '../utils/helpers';
import { Link } from 'react-router-dom';
import { ADD_Project } from '../utils/mutations';

const Build4 = () => {
  const [form, setForm] = useState({
    title: '',
    link: '',
    points: '',
    tools: ''
  });
  const [addProj, { error, data }] = useMutation(ADD_Project);
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
      const { data } = await addProj({
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
          <h3>Projects</h3>
          <label className="label">Title:</label>
          <div className="control">
            <input className="input" type="text" name="title" value={form.title} onChange={handleInputChange} placeholder="Project Title" />
          </div>
          <label className="label">Link:</label>
          <div className="control">
            <input className="input" type="text" name="link" value={form.link} onChange={handleInputChange} placeholder="Link to Website" />
          </div>
          <label className="label">Bullet Points:</label>
          <div className="control">
            <input className="input" type="text" name="points" value={form.points} onChange={handleInputChange} placeholder="Describe Aspects" />
          </div>
          <label className="label">Tools Used:</label>
          <div className="control">
            <input className="input" type="text" name="tools" value={form.tools} onChange={handleInputChange} placeholder="resume, speaking, writing" />
          </div>
        </div>
        <div className="has-text-right">
          <button className="button p-5 m-5 px-5" onClick={handleSubmit}>
            Submit
          </button>
        </div>
      </form>
    </div>
  );
};

export default Build4;
