import React, { useState, useEffect } from 'react';

const Text = ({ onTextLengthChange }) => {
  const [text, setText] = useState('');

  useEffect(() => {
    const textLength = text.length;
    onTextLengthChange(textLength);
  }, [text, onTextLengthChange]);

  const handleTextChange = (e) => {
    setText(e.target.innerText);
  };

  return (
    <div>
      <p contentEditable="true" onInput={handleTextChange}>dssdsdsadsa
        {text}
      </p>
    </div>
  );
};

export default Text;
