import { useState } from "react";
import "./App.css";

import Input from "./components/Input";
import Output from "./components/Output";

import React from "react";

function App() {
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");

  const [schoolName, setSchoolName] = useState("");
  const [fieldOfStudy, setFieldOfStudy] = useState("");
  const [dateOfGraduation, setDateOfGraduation] = useState("");
  const [school, setSchool] = useState({
    schoolName: "",
    fieldOfStudy: "",
    dateOfGraduation: "",
  });

  const [schools, setSchools] = useState([]);

  const [workName, setWorkName] = useState("");
  const [position, setPosition] = useState("");
  const [tasks, setTasks] = useState("");
  const [startDate, setStartDate] = useState("");
  const [endDate, setEndDate] = useState("");
  const [works, setWorks] = useState([]);

  const [work, setWork] = useState({
    workName: "",
    position: "",
    tasks: "",
    startDate: "",
    endDate: "",
  });

  const handleFirstName = (newFirstName) => {
    setFirstName(newFirstName);
  };

  const handleLastName = (newLastName) => {
    setLastName(newLastName);
  };

  const handleEmail = (newEmail) => {
    setEmail(newEmail);
  };

  const handlePhone = (newPhone) => {
    setPhone(newPhone);
  };

  const handleSchoolName = (newSchoolName) => {
    setSchoolName(newSchoolName);
    setSchool((school) => ({
      ...school,
      schoolName: newSchoolName,
    }));
  };

  const handleFieldOfStudy = (newFieldOfStudy) => {
    setSchoolName(newFieldOfStudy);
    setSchool((school) => ({
      ...school,
      fieldOfStudy: newFieldOfStudy,
    }));
  };

  const handleDateOfGraduation = (newDateOfGraduation) => {
    setDateOfGraduation(newDateOfGraduation);
    setSchool((school) => ({
      ...school,
      dateOfGraduation: newDateOfGraduation,
    }));
  };

  const handleSchools = (newSchool) => {
    setSchools(schools.concat(newSchool));
  };

  const handleSchoolSubmit = (e) => {
    handleSchools(school);
    setSchool({
      schoolName: schoolName,
      fieldOfStudy: fieldOfStudy,
      dateOfGraduation: dateOfGraduation,
    });
    handleSchoolName(e);
    handleFieldOfStudy(e);
    handleDateOfGraduation(e);
    e.preventDefault();
  };

  const handleWorkName = (newWorkName) => {
    setWorkName(newWorkName);
    setWork((work) => ({
      ...work,
      workName: newWorkName,
    }));
  };

  const handlePosition = (newPosition) => {
    setPosition(newPosition);
    setWork((work) => ({
      ...work,
      position: newPosition,
    }));
  };

  const handleTasks = (newTasks) => {
    setTasks(newTasks);
    setWork((work) => ({
      ...work,
      tasks: newTasks,
    }));
  };

  const handleStartDate = (newStartDate) => {
    setStartDate(newStartDate);
    setWork((work) => ({
      ...work,
      startDate: newStartDate,
    }));
  };

  const handleEndDate = (newEndDate) => {
    setEndDate(newEndDate);
    setWork((work) => ({
      ...work,
      endDate: newEndDate,
    }));
  };

  const handleWorks = (newWork) => {
    setWorks(works.concat(newWork));
  };

  const handleWorkSubmit = (e) => {
    handleWorks(work);
    setWork({
      workName: workName,
      position: position,
      tasks: tasks,
      startDate: startDate,
      endDate: endDate,
    });
    handleWorkName(e);
    handlePosition(e);
    handleTasks(e);
    handleStartDate(e);
    handleEndDate(e);
    e.preventDefault();
    console.log(works);
  };

  return (
    <div className="page-container">
      <Input
        firstName={firstName}
        lastName={lastName}
        email={email}
        phone={phone}
        schoolName={schoolName}
        fieldOfStudy={fieldOfStudy}
        dateOfGraduation={dateOfGraduation}
        workName={workName}
        position={position}
        tasks={tasks}
        startDate={startDate}
        endDate={endDate}
        handleFirstName={handleFirstName}
        handleLastName={handleLastName}
        handleEmail={handleEmail}
        handlePhone={handlePhone}
        handleSchoolName={handleSchoolName}
        handleFieldOfStudy={handleFieldOfStudy}
        handleDateOfGraduation={handleDateOfGraduation}
        handleSchools={handleSchools}
        handleSchoolSubmit={handleSchoolSubmit}
        handleWorkName={handleWorkName}
        handlePosition={handlePosition}
        handleTasks={handleTasks}
        handleStartDate={handleStartDate}
        handleEndDate={handleEndDate}
        handleWorks={handleWorks}
        handleWorkSubmit={handleWorkSubmit}
      />
      <Output
        firstName={firstName}
        lastName={lastName}
        email={email}
        phone={phone}
        schools={schools}
        works={works}
      />
    </div>
  );
}

export default App;
