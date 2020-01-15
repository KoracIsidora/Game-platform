import React from 'react';
import Flippy, { FrontSide, BackSide } from 'react-flippy';

const Card = ({ card, onClick, isFlipped }) => {
    return (
        <div className='memory'>
            <Flippy
                isFlipped={isFlipped}
                flipDirection="vertical"
                style={{ width: '20%', height: '170px', margin: '10px', float: 'left', textAlign: 'center', display: 'flex', justifyContent: 'center' }}
            >

                <FrontSide
                    style={{
                        backgroundColor: 'rgb(146, 39, 143)', fontSize: '80px', textAlign: 'center', lineHeight: '11px', borderRadius: '5px', display: 'flex', justifyContent: 'center', width: '20%',  boxShadow:'0px -2px 20px 2px rgba(0, 0, 0, 0.4)' 
                    }}
                    onClick={onClick}
                >
                    ?
            </FrontSide>
                <BackSide
                    style={{ backgroundColor: 'rgb(146, 39, 143)', fontSize: '80px', textAlign: 'center', lineHeight: '11px', borderRadius: '5px', display: 'flex', justifyContent: 'center', width:'20%' , boxShadow:'0px -2px 20px 2px rgba(0, 0, 0, 0.4)' }}>
                    {card.data}
                </BackSide>
            </Flippy>
        </div>
    )
}

export default Card;