import React, { createContext, useState } from 'react';
import { useContext } from 'react';

export const MyContext = createContext();

export const Section = ({ children }) => {
    const level=useContext(MyContext);
    const [data, setData] = useState('Old Context Data');
    const handlebutton = () => {
        setData("New data is set");
        console.log("clicked");
    }
    return (
        <section className="section">
            <MyContext.Provider value={{level, data, setData }}>
                {children}
            </MyContext.Provider>
        </section>
    );
};