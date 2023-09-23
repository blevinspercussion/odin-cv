import React from "react";

function Output({ firstName, lastName, email, phone, schools }) {
  return (
    <div>
      <h1>Output</h1>
      <h2>
        {firstName} {lastName}
      </h2>
      <p>
        {email} - {phone}
      </p>
      <h2>Education</h2>
      <ul>
        {schools?.map((index) => (
          <li key={index.schoolName} value={index.schoolName}>
            {index.schoolName} - {index.fieldOfStudy} - {index.dateOfGraduation}
          </li>
        ))}
      </ul>
    </div>
  );
}

export default Output;
