import "./styles.css";
import React, { useState } from "react";

export default function App() {
  const [fullName, setFullName] = useState({
    fname: "",
    lname: "",
    email: "",
    mobile: ""
  });

  const InputEvent = (event) => {
    const { value, name } = event.target;

    setFullName((prevalue) => {
      console.log(prevalue);
      if (name === "fname") {
        return {
          fname: value,
          lname: prevalue.lname,
          email: prevalue.email,
          mobile: prevalue.mobile
        };
      } else if (name === "lname") {
        return {
          fname: prevalue.fname,
          lname: value,
          email: prevalue.email,
          mobile: prevalue.mobile
        };
      } else if (name === "email") {
        return {
          fname: prevalue.fname,
          lname: prevalue.lname,
          email: value,
          mobile: prevalue.mobile
        };
      } else if (name === "mobile") {
        return {
          fname: prevalue.fname,
          lname: prevalue.lname,
          email: prevalue.email,
          mobile: value
        };
      }
    });
  };

  const onSubmit = (event) => {
    event.preventDefault();
    alert`form submitted`;
  };

  return (
    <div>
      <form onSubmit={onSubmit}>
        <h1>
          Hello {fullName.fname} {fullName.lname} !
        </h1>
        <h2>{fullName.email}</h2>
        <h2>{fullName.mobile}</h2>
        <input
          type="text"
          placeholder="Enter Your First Name"
          name="fname"
          onChange={InputEvent}
          value={fullName.fname}
        />

        <input
          type="text"
          placeholder="Enter Your Last Name"
          name="lname"
          onChange={InputEvent}
          value={fullName.lname}
        />

        <input
          type="email"
          placeholder="Enter Your Email"
          name="email"
          onChange={InputEvent}
          value={fullName.email}
          autoComplete="off"
        />

        <input
          type="number"
          placeholder="Enter Your Contact No."
          name="mobile"
          onChange={InputEvent}
          value={fullName.mobile}
        />
        <button onClick={onSubmit}>submit</button>
      </form>
    </div>
  );
}
