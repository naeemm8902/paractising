import React, { useContext } from 'react';
import { MyContext } from '../A/context'; // Correct import path

export default function B() {
    const { data } = useContext(MyContext);

    return (
        <div>
            <p>Child B:  {data}</p>
        </div>
    );
}
