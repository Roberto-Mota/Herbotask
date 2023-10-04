import React from 'react';
import './TextTemplate.css';

function TextTemplate(props) {
    
    const description = props.description;
    const descriptionLength = description.length;
    const descriptionLimit = 180;
    let descriptionText = description;
    if (descriptionLength > descriptionLimit) {
        descriptionText = description.slice(0, descriptionLimit) + '...';
    }


    return (
        <div className="text-template">
            <h2>{props.title}</h2>
            <p>{descriptionText}</p>
        </div>
    );
}

export default TextTemplate;