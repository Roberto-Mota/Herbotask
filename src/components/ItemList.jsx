import React from 'react';
import './ItemList.css';

export default function ItemList(props) {
    return (
        <div className='items'>
            {props.children} {/* Renderiza os componentes/HTML filhos que passei entre as tags do componente pai*/}
        </div>
    );
}