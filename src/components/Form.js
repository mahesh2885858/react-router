import React from "react";

function Form(props) {
  return (
    <form
      action=""
      onSubmit={(e) => {
        props.onSubmit(e);
      }}
    >
      <label htmlFor="name">Name: </label>
      <input
        required
        type="text"
        value={props.input}
        onChange={(e) => props.onNameInputChange(e.target.value)}
      />
      <label htmlFor="dateofbirth">Select DOB: </label>
      <input
        required
        type="date"
        name="dateofbirth"
        id="dateofbirth"
        value={props.dob}
        onChange={(e) => props.onDateOFBirth(e.target.value)}
      />
      <button type="submit">Submit</button>
    </form>
  );
}

export default Form;
