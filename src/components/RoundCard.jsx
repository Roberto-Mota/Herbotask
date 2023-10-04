import React from 'react';
import './RoundCard.css';

const RoundCard = ({ title, description }) => {
    return (
        <div className="card">
            <div className="round-card">
                <figure >
                        <div className="figure-card"/>
                </figure>
            </div>
            <div className="card-content">
                <div className="media">
                    <div className="media-content">
                        <p className="title is-4">{title}</p>
                        <p className="subtitle is-6">{description}</p>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default RoundCard;
