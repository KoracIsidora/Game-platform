import React from 'react';
import Flippy, { FrontSide, BackSide } from 'react-flippy';

const Card = ({ card, onClick, isFlipped }) => {
    return (
        <Flippy
            isFlipped={isFlipped}
            flipDirection="horizontal"
            style={{ width: '23%', height: '170px', margin: '5px', float: 'left' }}
        >

            <FrontSide
                style={{
                    backgroundColor: 'rgb(24, 112, 199)', fontSize: '80px', textAlign: 'center', lineHeight: '11px', borderRadius:'5px'
                }} onClick={onClick}
            >
                ?
            </FrontSide>
            <BackSide
                style={{ backgroundColor: 'rgb(24, 112, 199)', fontSize: '80px', textAlign: 'center', lineHeight: '11px', borderRadius:'5px' }}>
                <p className='card'>{card.data}</p>
            </BackSide>
        </Flippy>
    )
}

export default Card;