import React, { useState } from 'react';
import StyledButton from '../button/StyledButton';
import Text from '../text/text';

const Count = () => {
  const [count, setCount] = useState(0);
  const [textLength, setTextLength] = useState(0);

  const handleButtonClick = () => {
    setCount(count + 1);
  };

  const handleTextLengthChange = (length) => {
    setTextLength(length);
  };

  return (
    <div>
      <h1>Hello</h1>
      <Text onTextLengthChange={handleTextLengthChange} />
      <p>Character Count: {count}</p> 
      <p>Text Length: {textLength}</p>
      <StyledButton name="click me" onClick={handleButtonClick}>
        Increment Count
      </StyledButton>
    </div>
  );
};

export default Count;
