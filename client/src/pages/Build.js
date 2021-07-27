import { useMutation } from '@apollo/client';
import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { checkIfValid, validatePhone } from '../utils/helpers';
import { CREATE_RESUME } from '../utils/mutations';
import './builds.css';
const Build = () => {
  const [form, setForm] = useState({});
  const [createResume, { error, data }] = useMutation(CREATE_RESUME);
  const [errorMessage, alert] = useState('');

  const handleInputChange = async (e) => {
    const { target } = e;
    const inputType = target.name;
    const inputValue = target.value;
    console.log(target.name);

    setForm(form => ({ ...form, [inputType]: inputValue }));
    e.preventDefault();
  };

  const handleSubmit = async (e) => {

    if (!form.name || !checkIfValid(form.name)) {
      alert('Username is invalid');
      return;
    }

    if (!form.phoneNumber || !validatePhone(form.phoneNumber)) {
      alert('Phone Number is invalid');
      return;
    }

    if (!form.summary || !checkIfValid(form.summary)) {
      alert(
        `Please include a message`
      );
      return;
    }

    if (!form.skills || !checkIfValid(form.skills)) {
      alert(
        `Please include a list of skills`
      );
      return;
    }

    if (!form.address || !checkIfValid(form.address)) {
      alert(
        `Please include an Address`
      );
      return;
    }

    if (!form.city || !checkIfValid(form.city)) {
      alert(
        `Please include a message`
      );
      return;
    }

    if (!form.state || !checkIfValid(form.state)) {
      alert(
        `Please include a message`
      );
      return;
    }

    if (!form.zip || !checkIfValid(form.zip)) {
      alert(
        `Please include a message`
      );
      return;
    }

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
    <div class="container contain margin1 has-text-centered">
      <h1 className="">User Information</h1>
      <div>
        {errorMessage && (
          <div className="column is-half">
            <p className="subtitle ">{errorMessage}</p>
          </div>
        )}
        <div className="columns is-multiline">
          <div className="column is-half">
            <div className="field ">
              <label className="label">Name</label>
              <div className="control">
                <input className="input" type="text" name="name" value={form.name} onChange={handleInputChange} placeholder="First Last" />
              </div>
            </div>
          </div>
          <div className="column is-half">
            <div className="field ">
              <label className="label">Phone</label>
              <div className="control">
                <input className="input" type="text" name="phoneNumber" value={form.phoneNumber} onChange={handleInputChange} placeholder="1234567890" />
              </div>
            </div>
          </div>
          <div className="column is-half">
            <div className="field ">
              <label className="label">Github</label>
              <div className="control">
                <input className="input" type="text" name="github" value={form.github} onChange={handleInputChange} placeholder="Profile Link" />
              </div>
            </div>
          </div>
          <div className="column is-half">
            <div className="field ">
              <label className="label">Linkedin</label>
              <div className="control">
                <input className="input" type="text" name="linkedIn" value={form.linkedIn} onChange={handleInputChange} placeholder="Profile Link" />
              </div>
            </div>
          </div>
          <div className="column is-half">
            <div className="field ">
              <label className="label">Address</label>
              <div className="control">
                <input className="input" type="text" name="address" value={form.address} onChange={handleInputChange} placeholder="1234 Resume St" />
              </div>
            </div>
          </div>
          <div className="column is-half">
            <div className="field ">
              <label className="label">City</label>
              <div className="control">
                <input className="input" type="text" name="city" value={form.city} onChange={handleInputChange} placeholder="resume@email.com" />
              </div>
            </div>
          </div>
          <div className="column is-half">
            <div className="field ">
              <label className="label">State</label>
              <div className="control">
                <input className="input" type="text" name="state" value={form.state} onChange={handleInputChange} placeholder="State Abreviation" />
              </div>
            </div>
          </div>
          <div className="column is-half">
            <div className="field ">
              <label className="label">Zip Code</label>
              <div className="control">
                <input className="input" type="text" name="zip" value={form.zip} onChange={handleInputChange} placeholder="12345" />
              </div>
            </div>
          </div>
          <div className="column is-half">
            <div className="field">
              <label className="label">Summary</label>
              <div className="control">
                <textarea className="textarea" name="summary" value={form.summary} onChange={handleInputChange} placeholder="Summarize yourself"></textarea>
              </div>
            </div>
          </div>
          <div className="column is-half">
            <div className="field">
              <label className="label">Skills</label>
              <div className="control">
                <textarea className="textarea" name="skills" value={form.skills} onChange={handleInputChange} placeholder="Please enter your skills"></textarea>
              </div>
            </div>
          </div>
        </div>
        <div className="has-text-center">
          <Link className="button btnG m-5" onClick={handleSubmit} to="/Build2">
            Next
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Build;
