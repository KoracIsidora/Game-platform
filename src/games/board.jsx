import React from 'react';
import Square from './square';
import { useState } from 'react';

const Board = () => {
    const [val, setVal] = useState(Array(9).fill(0));

    function renderSquare(i) {
        return <Square value={val} onClick={()=>{handleClick()}}></Square>
    }

    function handleClick(i){
        const square = val.slice();
        square[i] = 'X';
        setVal(square);
    }

    const status = 'Next player: X';

    return (
        <div className='board'>
            <div className='status'>{status}</div>
            <div className='board-row'>
                {renderSquare(0)}
                {renderSquare(1)}
                {renderSquare(2)}
            </div> 
            <div className='board-row'>
                {renderSquare(3)}
                {renderSquare(4)}
                {renderSquare(5)}
            </div> 
            <div className='board-row'>
                {renderSquare(6)}
                {renderSquare(7)}
                {renderSquare(8)}
            </div>   
        </div>
    )
}

export default Board;