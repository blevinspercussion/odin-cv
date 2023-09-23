import React from "react";

function Education({
  schoolName,
  fieldOfStudy,
  dateOfGraduation,
  handleSchoolName,
  handleFieldOfStudy,
  handleDateOfGraduation,
  handleSchoolSubmit,
}) {
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

  const schoolFormValid = () => {
    return schoolName.length && fieldOfStudy.length && dateOfGraduation.length;
  };

  return (
    <div>
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
    </div>
  );
}

export default Education;
