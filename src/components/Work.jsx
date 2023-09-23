import React from "react";

function Work({
  workName,
  position,
  tasks,
  startDate,
  endDate,
  handleWorkName,
  handlePosition,
  handleTasks,
  handleStartDate,
  handleEndDate,
  //   handleWorks,
  handleWorkSubmit,
}) {
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

export default Work;
