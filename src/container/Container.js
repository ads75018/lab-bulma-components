import React from "react";

const Container = () => {
    return (
      <div className="Container">
      <Message isInfo title='Hello World'/>
      </div>
)};




const Message = () => {
    return (
        <div>
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. <strong>Pellentesque risus mi</strong>.</p>
        </div>
    )
}











export default Container;