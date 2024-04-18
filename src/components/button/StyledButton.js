import React from 'react';
import './StyledButton.css'; // Import the CSS file

export default function StyledButton(props) {
  return (
    <div className="button_wrapper" onClick={() => {
      if(props && props.onClick) {
        props.onClick();
            }
    }}>
      <span className='styledbutton'>{props.name}</span>
    </div>
  );
}
