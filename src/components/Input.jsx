import { useState } from "react";

import React from "react";

function Input({
  firstName,
  lastName,
  email,
  phone,
  handleFirstName,
  handleLastName,
  handleEmail,
  handlePhone,
  handleSchoolName,
  handleFieldOfStudy,
  handleDateOfGraduation,
  handleSchools,
  handleSchoolSubmit,
}) {
  const handleFirstNameChange = (e) => {
    handleFirstName(e.target.value);
  };

  const handleLastNameChange = (e) => {
    handleLastName(e.target.value);
  };

  const handleEmailChange = (e) => {
    handleEmail(e.target.value);
  };

  const handlePhoneChange = (e) => {
    handlePhone(e.target.value);
  };

  const handleSchoolNameChange = (e) => {
    handleSchoolName(e.target.value);
  };

  const handleFieldOfStudyChange = (e) => {
    handleFieldOfStudy(e.target.value);
  };

  const handleDateOfGraduationChange = (e) => {
    handleDateOfGraduation(e.target.value);
  };

  const handleSchoolSubmitChange = (e) => {
    handleSchoolSubmit(e);
    document.getElementById("ed-form").reset();
    e.preventDefault();
  };

  return (
    <div>
      <h1>Input</h1>
      <h2>Contact Information</h2>
      <form>
        <label htmlFor="firstName">First Name: </label>
        <input
          type="text"
          placeholder="First Name"
          name="firstName"
          onChange={handleFirstNameChange}
        />
        <label htmlFor="lastName">Last Name: </label>
        <input
          type="text"
          placeholder="Last Name"
          name="lastName"
          onChange={handleLastNameChange}
        />
        <label htmlFor="email">Email: </label>
        <input
          type="email"
          placeholder="email@domain.com"
          name="email"
          onChange={handleEmailChange}
        />
        <label htmlFor="phone">Phone Number: </label>
        <input
          type="phone"
          placeholder="xxx-xxx-xxxx"
          name="phone"
          onChange={handlePhoneChange}
        />
      </form>
      <h2>School Information</h2>
      <form id="ed-form">
        <label htmlFor="school-name">School Name:</label>
        <input
          type="text"
          name="school-name"
          placeholder="State University"
          onChange={handleSchoolNameChange}
        />
        <label htmlFor="field-of-study">Field of Study/Degree:</label>
        <input
          type="text"
          name="field-of-study"
          placeholder="B.S. Computer Science"
          onChange={handleFieldOfStudyChange}
        />
        <label htmlFor="date-of-graduation">Date of Graduation:</label>
        <input type="date" onChange={handleDateOfGraduationChange} />
        <button type="submit" onClick={handleSchoolSubmitChange}>
          Add School
        </button>
      </form>
    </div>
  );
}

export default Input;
