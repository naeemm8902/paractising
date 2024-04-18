import React, { useEffect, useState } from 'react';
import { NavLink } from 'react-router-dom';
import StyledButton from '../button/StyledButton';
import './cover.css';
import '../navbar/navbar2.css';

export default function Cover(props) {
  const [currentImageIndex, setCurrentImageIndex] = useState(0);
  const imagesWithTextColors = [
    { image: './images/cover3.jpg', textColor: 'black' },
    { image: './images/cover2.jpg', textColor: 'white' },
    { image: './images/cover1.jpg', textColor: '#fff' }
  ];
  const imageDisplayDurations = [20000, 30000, 50000]; // Duration for each image in milliseconds
  
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentImageIndex(prevIndex => (prevIndex + 1) % imagesWithTextColors.length);
    }, imageDisplayDurations[currentImageIndex]);

    return () => clearInterval(interval);
  }, [currentImageIndex]);

  // Key to force re-render of text container
  const [textKey, setTextKey] = useState(0);

  useEffect(() => {
    // Update the key to force re-render of text container
    setTextKey(prevKey => prevKey + 1);
  }, [currentImageIndex]);

  return (
    <div key={textKey} className='container' style={{ '--text-color': imagesWithTextColors[currentImageIndex].textColor }}>
      <div className='left'>
        <h1>Unlocking, <span></span></h1><br />
        <h1>Development <span></span></h1><br />
        <h1>Through our company <span></span></h1><br />
      </div>
      <div className="button_wrapper"> 
        <NavLink to="/about" className="nav-link">
          <StyledButton name="About Us" className="cover_btn" onClick={() => {
            console.log('button clicked cover')
          }}>
          </StyledButton>
        </NavLink>
      </div>
      <div className='right'>
        <img src={imagesWithTextColors[currentImageIndex].image} alt='error' />
      </div>
    </div>
  );
}
