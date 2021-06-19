import React from "react";

const FormField = (props) => {
  return (
    <div className="field">
      <form>
      <label className="label">{props.label}</label>
      Name 
      <br/>
      <input label="Name" type="text" placeholder="eg Alex Smith" />
      <br/>
      <br/>
      Email
      <br/>
      <input label="Email" type="email" placeholder="eg alexsmith@gmail.com" />
      <br/>
      <br/>
      Password
      <br/>
      <input label="Password" type="password" placeholder="********" />
      </form>
    </div>
  );
};

export default FormField;
