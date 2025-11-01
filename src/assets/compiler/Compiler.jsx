import React, { use, useState } from 'react';
import Practice from '../../Practice';

const Compiler = ({ data }) => {

    const [event, setEvent] = useState([]);
    const eventHandler = (item) => {
        const cart = [...event, item];
        setEvent(cart);
    }


    const handle = use( data);
    console.log(handle);
    return (
        <div>
            <h1>Code Compiler: {handle.length}</h1>
            <h2>Add to cart:{event.length}</h2>
            <textarea placeholder="Write your code here..." /><br />
            <button className='buy-button'>Run</button>
            <div className='card'>
                {
                    handle.map(item => <Practice key={item.id} item={item} eventHandler={eventHandler} />)
                }
            </div>
        </div>
    );
};

export default Compiler;
