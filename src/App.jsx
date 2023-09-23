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
    console.log("bitch");
  };

  return (
    <div className="page-container">
      <Input
        firstName={firstName}
        lastName={lastName}
        email={email}
        phone={phone}
        handleFirstName={handleFirstName}
        handleLastName={handleLastName}
        handleEmail={handleEmail}
        handlePhone={handlePhone}
        handleSchoolName={handleSchoolName}
        handleFieldOfStudy={handleFieldOfStudy}
        handleDateOfGraduation={handleDateOfGraduation}
        handleSchools={handleSchools}
        handleSchoolSubmit={handleSchoolSubmit}
      />
      <Output
        firstName={firstName}
        lastName={lastName}
        email={email}
        phone={phone}
        schools={schools}
      />
    </div>
  );
}

export default App;
