import React from "react";

function GeneralInfo({
  handleFirstName,
  handleLastName,
  handleEmail,
  handlePhone,
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
  return (
    <div>
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
    </div>
  );
}

export default GeneralInfo;
