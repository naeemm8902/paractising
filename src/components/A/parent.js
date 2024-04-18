import React, { useState } from 'react';
import { MyContext, Section } from './context'; // Correct import path
import B from '../B/b';
import StyledButton from '../button/StyledButton';
export default function Parent() {
    const [data, setData] = useState('Old Context Data');

    const handlebutton = () => {
        setData("New data is set");
        console.log("clicked");
    }

    return (
        <div>
            <Section>
              <p>Parent: {data}</p>
                <B />
                <StyledButton onClick={handlebutton} />
            </Section>
              
        </div>
    );
}