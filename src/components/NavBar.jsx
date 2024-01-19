import React from 'react';

const LeftMenu = ({ items }) => {
    return (
        <div className="left-menu">
            <ul>
                {items.map((item, index) => (
                    <li key={index}>{item}</li>
                ))}
            </ul>
        </div>
    );
};

export default LeftMenu;
