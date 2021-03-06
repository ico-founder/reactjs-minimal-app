import React from 'react';
import PropTypes from 'prop-types';
import Icon from './Icon';

import countryList from './countries.json';

function Form(props) {
  const {
    claimResults,
    formData,
    onChange,
    onSubmit,
  } = props;

  const countryListNodes = countryList.map((c) => <option key={c.iso3} value={c.iso3}>{c.name}</option>);

  return (
    <form
      action="#"
      className="pure-form pure-form-aligned"
      onSubmit={onSubmit}
    >
      <h3>Fill out the form to verify your information</h3>
      <p>
        Please, don't use special characters when you fill out your name.
        If you have middle name as well, enter it in the "Given name" field.
      </p>
      <fieldset>
          <div className="pure-control-group">
              <label htmlFor="givenname">Given name</label>
              <input
                id="givenname"
                type="text"
                placeholder="Given name"
                value={formData.givenname}
                onChange={(e) => onChange('givenname', e.target.value)}
              />
              <Icon value={claimResults.givenname} />
          </div>
          <div className="pure-control-group">
              <label htmlFor="lastname">Last name</label>
              <input
                id="lastname"
                placeholder="Last name"
                value={formData.lastname}
                onChange={(e) => onChange('lastname', e.target.value)}
              />
              <Icon value={claimResults.lastname} />
          </div>
          <div className="pure-control-group">
              <label htmlFor="dob">Date of birth</label>
              <input
                id="dob"
                placeholder="yyyy-mm-dd"
                value={formData.dob}
                onChange={(e) => onChange('dob', e.target.value)}
              />
              <Icon value={claimResults.dob} />
          </div>
          <div className="pure-control-group">
              <label htmlFor="nationality">Nationality</label>
              <select
                id="nationality"
                placeholder="Nationality"
                selected={formData.nationality}
                onChange={(e) => onChange('nationality', e.target.value)}
              >
                {countryListNodes}
              </select>
              <Icon value={claimResults.nationality} />
          </div>
          <div className="pure-control-group">
              <label htmlFor="passportno">Passport no.</label>
              <input
                id="passportno"
                placeholder="Passport no."
                value={formData.passportno}
                onChange={(e) => onChange('passportno', e.target.value)}
              />
              <Icon value={claimResults.passportno} />
          </div>
          <div className="pure-control-group">
            <input
              disabled
              checked
              id="aml-check"
              type="checkbox"
              onChange={(e) => onChange('amlCheck', e.target.checked)}
            />
            Anti-money laundering (AML) check
          </div>
          <div className="pure-control-group">
            <input
              disabled
              checked
              id="kyc-check"
              type="checkbox"
              onChange={(e) => onChange('kycCheck', e.target.checked)}
            />
            Know your customer (KYC) check
          </div>
          {/* <label htmlFor="aml-check" className="pure-checkbox">
            <input
              id="aml-check"
              type="checkbox"
              onChange={(e) => onChange('amlCheck', e.target.checked)}
            /> Perform Anti-money laundering (AML) check
          </label> */}
          <div className="pure-controls">
              <button type="submit" className="pure-button pure-button-primary">Verify information</button>
          </div>
      </fieldset>
    </form>
  );
}

Form.propTypes = {
  onChange: PropTypes.func.isRequired,
  onSubmit: PropTypes.func.isRequired,
}

export default Form;
