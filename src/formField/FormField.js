import React from 'react'

const FormField = props => {
    return (
      <div className='field'>
        <label className='label'>{props.label}</label>
        // some other code goes here
        <input label = "Name"  type = "text"  placeholder = "eg Alex Smith"/>
        <input label = "Email"  type = "email"  placeholder = "eg alexsmith@gmail.com"/>
      </div>
    );
};


export default FormField;