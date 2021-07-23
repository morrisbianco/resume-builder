// Node Modules
import React, { useState } from 'react';
import { checkIfValid, validateEmail } from '../utils/helpers';

const Build = () => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [phone, setPhone] = useState('');
  const [github, setGithub] = useState('');
  const [linkedin, setLinkedin] = useState('');
  const [address, setAddress] = useState('');
  const [state, setState] = useState('');
  const [zipcode, setZipcode] = useState('');
  const [summary, setSummary] = useState('');
  const [skills, setSkills] = useState('');
  const [education, setEducation] = useState('');
  const [work, setWork] = useState('');
  const [errorMessage, setErrorMessage] = useState('');

  const handleInputChange = (e) => {
    const { target } = e;
    const inputType = target.name;
    const inputValue = target.value;
    console.log(target.name);

    if (inputType === 'email') {
      setEmail(inputValue);
    } else if (inputType === 'name') {
      setName(inputValue);
    } else if (inputType === 'phone') {
      setPhone(inputValue);
    } else if (inputType === 'github') {
      setGithub(inputValue);
    } else if (inputType === 'linkedin') {
      setLinkedin(inputValue);
    } else if (inputType === 'address') {
      setAddress(inputValue);
    } else if (inputType === 'state') {
      setState(inputValue);
    } else if (inputType === 'zipcode') {
      setZipcode(inputValue);
    } else if (inputType === 'education') {
      setEducation(inputValue);
    } else if (inputType === 'work') {
      setWork(inputValue);
    } else if (inputType === 'skills') {
      setSkills(inputValue);
    } else {
      setSummary(inputValue);
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    if (!validateEmail(email) || !name) {
      setErrorMessage('Email or username is invalid');
      return;
    }
    if (!checkIfValid(summary)) {
      setErrorMessage(
        `Please include a message`
      );
      return;
    }
    alert(`Hello ${name}`);

    setName('');
    setEmail('');
    setPhone('');
    setGithub('');
    setLinkedin('');
    setAddress('');
    setState('');
    setZipcode('');
    setSummary('');
    setSkills('');
    setEducation('');
    setWork('');
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
          <label className="label">Name:</label>
          <div className="control">
            <input className="input" type="text" name="name" value={name} onChange={handleInputChange} placeholder="Please enter your name here" />
          </div>
        </div>

        <div className="field pt-5 mx-5 px-5">
          <label className="label">E-mail Address:</label>
          <div className="control">
            <input className="input" type="email" name="email" value={email} onChange={handleInputChange} placeholder="Please enter your E-mail here" />
          </div>
        </div>

        <div className="field pt-5 mx-5 px-5">
          <label className="label">Phone:</label>
          <div className="control">
            <input className="input" type="text" name="phone" value={phone} onChange={handleInputChange} placeholder="Please enter your name here" />
          </div>
        </div>

        <div className="field pt-5 mx-5 px-5">
          <label className="label">Github:</label>
          <div className="control">
            <input className="input" type="text" name="github" value={github} onChange={handleInputChange} placeholder="Please enter your name here" />
          </div>
        </div>

        <div className="field pt-5 mx-5 px-5">
          <label className="label">Linkedin:</label>
          <div className="control">
            <input className="input" type="text" name="linkedin" value={linkedin} onChange={handleInputChange} placeholder="Please enter your name here" />
          </div>
        </div>

        <div className="field pt-5 mx-5 px-5">
          <label className="label">Address:</label>
          <div className="control">
            <input className="input" type="text" name="address" value={address} onChange={handleInputChange} placeholder="Please enter your name here" />
          </div>
        </div>

        <div className="field pt-5 mx-5 px-5">
          <label className="label">State:</label>
          <div className="control">
            <input className="input" type="text" name="state" value={state} onChange={handleInputChange} placeholder="Please enter your name here" />
          </div>
        </div>

        <div className="field pt-5 mx-5 px-5">
          <label className="label">Zip Code:</label>
          <div className="control">
            <input className="input" type="text" name="zipcode" value={zipcode} onChange={handleInputChange} placeholder="Please enter your name here" />
          </div>
        </div>

        <div className="field p-5 mx-5 px-5">
          <label className="label">Summary:</label>
          <div className="control">
            <textarea className="textarea" name="summary" value={summary} onChange={handleInputChange} placeholder="Please enter your message here"></textarea>
          </div>
        </div>

        <div className="field p-5 mx-5 px-5">
          <label className="label">Skills:</label>
          <div className="control">
            <textarea className="textarea" name="skills" value={skills} onChange={handleInputChange} placeholder="Please enter your message here"></textarea>
          </div>
        </div>

        <div className="field pt-5 mx-5 px-5">
          <label className="label">Education:</label>
          <div className="control">
            <input className="input" type="text" name="education" value={education} onChange={handleInputChange} placeholder="Please enter your name here" />
          </div>
        </div>

        <div className="field pt-5 mx-5 px-5">
          <label className="label">Work Experience:</label>
          <div className="control">
            <input className="input" type="text" name="work" value={work} onChange={handleInputChange} placeholder="Please enter your name here" />
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

export default Build;
