import { useState } from "react";

import React from "react";

function Input({
  firstName,
  lastName,
  email,
  phone,
  schoolName,
  fieldOfStudy,
  dateOfGraduation,
  workName,
  position,
  tasks,
  startDate,
  endDate,
  handleFirstName,
  handleLastName,
  handleEmail,
  handlePhone,
  handleSchoolName,
  handleFieldOfStudy,
  handleDateOfGraduation,
  handleSchools,
  handleSchoolSubmit,
  handleWorkName,
  handlePosition,
  handleTasks,
  handleStartDate,
  handleEndDate,
  handleWorks,
  handleWorkSubmit,
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

  const handleWorkNameChange = (e) => {
    handleWorkName(e.target.value);
    console.log(e.target.value);
  };

  const handlePositionChange = (e) => {
    handlePosition(e.target.value);
  };

  const handleTasksChange = (e) => {
    handleTasks(e.target.value);
  };

  const handleStartDateChange = (e) => {
    handleStartDate(e.target.value);
  };

  const handleEndDateChange = (e) => {
    handleEndDate(e.target.value);
  };

  const handleWorkSubmitChange = (e) => {
    handleWorkSubmit(e);
    document.getElementById("work-form").reset();
    e.preventDefault();
  };

  const schoolFormValid = () => {
    return schoolName.length && fieldOfStudy.length && dateOfGraduation.length;
  };

  const workFormValid = () => {
    return (
      workName.length &&
      position.length &&
      tasks.length &&
      startDate.length &&
      endDate.length
    );
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
        <button
          type="submit"
          disabled={!schoolFormValid()}
          onClick={handleSchoolSubmitChange}
        >
          Add School
        </button>
      </form>
      <h2>Work Information</h2>
      <form id="work-form">
        <label htmlFor="work-name">Company Name:</label>
        <input
          type="text"
          name="work-name"
          placeholder="Acme Products"
          onChange={handleWorkNameChange}
        />
        <label htmlFor="position">Position:</label>
        <input
          type="text"
          name="position"
          placeholder="Product Tester"
          onChange={handlePositionChange}
        />
        <label htmlFor="tasks">Tasks:</label>
        <textarea
          name="tasks"
          cols="25"
          rows="10"
          onChange={handleTasksChange}
        ></textarea>
        <label htmlFor="start-date">Start Date:</label>
        <input type="date" name="start-date" onChange={handleStartDateChange} />
        <label htmlFor="end-date">End Date:</label>
        <input type="date" name="end-date" onChange={handleEndDateChange} />
        <button
          type="submit"
          disabled={!workFormValid()}
          onClick={handleWorkSubmitChange}
        >
          Add Work Experience
        </button>
      </form>
    </div>
  );
}

export default Input;
