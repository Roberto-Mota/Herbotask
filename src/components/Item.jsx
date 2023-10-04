import React from 'react';
import './Item.css';

function Item(props) { 
    return (
        <div className='item'>{props.children}</div>
    );
}

export default Item;

//A item consists of a title, image, and description
