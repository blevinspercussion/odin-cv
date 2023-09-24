import React from "react";
import { v4 as uuidv4 } from "uuid";

function Output({ firstName, lastName, email, phone, schools, works }) {
  return (
    <div>
      <h2>
        {firstName} {lastName}
      </h2>
      <article className="sub-heading">
        <p>{email}</p>
        <p>{phone}</p>
      </article>
      <article id="education-info">
        <h2 className="section-heading">Education</h2>
        <hr />
        <ul>
          {schools?.map((index) => (
            <li key={uuidv4()} value={index.schoolName}>
              <div className="school-work-info">
                <p className="school-work-left">
                  <strong>{index.schoolName}</strong>,{" "}
                  <em>{index.fieldOfStudy}</em>
                </p>
                <p className="school-work-right">{index.dateOfGraduation}</p>
              </div>
            </li>
          ))}
        </ul>
      </article>
      <article id="work-info">
        <h2 className="section-heading">Work Experience</h2>
        <hr />
        <ul>
          {works?.map((index) => (
            <li key={uuidv4()} value={index.workName}>
              <div className="school-work-info">
                <div className="school-work-left">
                  <p>
                    <strong>{index.workName}</strong>, <em>{index.position}</em>
                  </p>
                  <p>{index.tasks}</p>
                </div>
                <div className="school-work-right">
                  <p>Start Date: {index.startDate}</p>
                  <p>End Date: {index.endDate}</p>
                </div>
              </div>
            </li>
          ))}
        </ul>
      </article>
    </div>
  );
}

export default Output;
