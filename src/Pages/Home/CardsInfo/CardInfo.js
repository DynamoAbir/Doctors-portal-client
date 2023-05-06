import React from 'react';

const CardInfo = ({ card }) => {
    const { title, description, bgCard, img } = card;
    return (
        <div className={`card card-side ${bgCard} shadow-xl py-5 px-5 text-white my-10`}>
            <figure><img src={img} alt="Movie" /></figure>
            <div className="card-body">
                <h2 className="card-title">{title}</h2>
                <p>{description}</p>

            </div>
        </div>
    );
};
// 71-5
export default CardInfo;