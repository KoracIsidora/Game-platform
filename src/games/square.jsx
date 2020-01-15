import React from 'react';
import { useState } from 'react';

const Square = ({onClick}) => {
    const [value, setValue] = useState('');

    return (
        <>
            <button className='btnsqr' onClick={() => onClick()}>{value}</button>
        </>
    )
}

export default Square;