import React from "react";

const FormField = (props) => {
  return (
    <div className="field">
      <form>
      <label className="label">{props.label}</label>
      Name 
      <hr/>
      <input label="Name" type="text" placeholder="eg Alex Smith" />
      <hr />
      Email
      <hr/>
      <input label="Email" type="email" placeholder="eg alexsmith@gmail.com" />
      Password
      <hr/>
      <input label="Password" type="password" placeholder="********" />
      </form>
    </div>
  );
};

export default FormField;
