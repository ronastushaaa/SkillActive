import React from 'react';
import './Button.css';

function Button(props) {
  return (
    <div className="button">
      <button className="button__submit">{props.text}</button>
    </div>
  );
}

export default Button;
