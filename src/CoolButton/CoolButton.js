import React from "react";

function CoolButton(props) {
  let finalClass = "button " + props.className; // "toto tata"

  if (props.isSmall) {
    finalClass += " is-small";
  }
  if (props.isDanger) {
    finalClass += " is-danger";
  }
  if (props.isSuccess) {
    finalClass += " is-success";
  }
  if (props.isRounded) {
      finalClass += " is-rounded"
  }

  return (
    <div>
      <button className={finalClass}>Signup</button>
    </div>
  );
}

export default CoolButton;
