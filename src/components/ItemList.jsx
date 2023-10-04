import React from 'react';
import './ItemList.css';

export default function ItemList(props) {
    return (
        <div className='items'>
            {props.children}
        </div>
    );
}