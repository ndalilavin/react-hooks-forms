import React, { useState } from "react";

function Form(props) {

  return (
    <form>
      <input type="text" 
      onChange={props.handleFirstNameChange}
      value={props.lastName}
      />

      <input 
      type="text" 
      onChange={props.handleLastNameChange}
      value={props.lastName}
      />

      <button type="submit">Submit</button>
    </form>
  );
}

export default Form;
