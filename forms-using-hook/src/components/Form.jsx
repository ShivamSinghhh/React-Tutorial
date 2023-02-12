import { useState } from "react";

const initialState = {
  username: "",
  password: "",
  country: "",
  isMarried: false,
};

export default function Form() {
  const [formState, setFormState] = useState(initialState);
  const [users,setUsers] = useState([])
  const { username, password, country, isMarried } = formState;
  function handleSubmit(e) {
    e.preventDefault();   
    setUsers([...users],formState);
    setFormState(initialState)
    console.log(formState);
  }
  function handleChange(event) {
    // console.log(event);
    // console.log(event.target);
    // console.log(event.target.name);
    // console.log(event.target.value);
    const {type,checked,name,value} = event.target
    const val = type === "checkbox" ? checked : value;
    setFormState({ ...formState, [name]: val});
  }

  return (
    <div>
      <h1>Form</h1>
      <div>
        <form type="submit" onSubmit={handleSubmit}>
          <label htmlFor="">
            USERNAME{" "}
            <input
              type="text"
              placeholder="User Name"
              name="username"
              value={username}
              onChange={handleChange}
            />{" "}
            <br />
            <br />
          </label>
          <label htmlFor="">
            PASSWORD{" "}
            <input
              type="password"
              placeholder="Password"
              name="password"
              value={password}
              onChange={handleChange}
            />
          </label>{" "}
          <br />
          <br />
          <label htmlFor="">
            COUNTRY{" "}
            <select onChange={handleChange} name="country" value={country}>
            {/* <option value=""></option> */}
              <option value="india">India</option>
              <option value="uae">UAE</option>
              <option value="canada">Canada</option>
              <option value="usa">USA</option>
              <option value="china">China</option>
            </select>
          </label>{" "}
          <br />
          <br />
          <label htmlFor="">
            Are you Married ?{" "}
            <input type="checkbox" name="isMarried" checked={isMarried} onChange={handleChange}/>
          </label>{" "}
          <br />
          <br />
          <button type="submit">submit</button>
        </form>
      </div>
    </div>
  );
}
