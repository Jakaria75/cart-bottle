import React from 'react';
import './Practice.css';

const Practice = ({ item, eventHandler }) => {
    return (
        <div className='card-item'>
            <h2>{item.title}</h2>
            <p>{item.brand}</p>


            <br />
            <img className="img" src={item.image} alt="" />
            {/* <br /> */}
            <p>{item.price}</p><br />
            <button className='buy-button' onClick={() => { eventHandler(item) }}>Buy now</button>
        </div>
    );
};

export default Practice;
