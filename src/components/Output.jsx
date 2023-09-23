import React from "react";
import { v4 as uuidv4 } from "uuid";

function Output({ firstName, lastName, email, phone, schools, works }) {
  return (
    <div>
      <h1>Output</h1>
      <h2>
        {firstName} {lastName}
      </h2>
      <p>
        {email} - {phone}
      </p>
      <article id="education-info">
        <h2>Education</h2>
        <ul>
          {schools?.map((index) => (
            <li key={uuidv4()} value={index.schoolName}>
              <h3>{index.schoolName}</h3>
              <p>
                <strong>Degree: </strong>
                {index.fieldOfStudy}
              </p>
              <p>
                <strong>Date of Graduation: </strong>
                {index.dateOfGraduation}
              </p>
              <hr />
            </li>
          ))}
        </ul>
      </article>
      <article id="work-info">
        <h2>Experience</h2>
        <ul>
          {works?.map((index) => (
            <li key={uuidv4()} value={index.workName}>
              <h3>{index.workName}</h3>
              <p>Position/Title: {index.position}</p>
              <p>Job Description: {index.tasks}</p>
              <p>Start Date: {index.startDate}</p>
              <p>End Date: {index.endDate}</p>
            </li>
          ))}
        </ul>
      </article>
    </div>
  );
}

export default Output;
