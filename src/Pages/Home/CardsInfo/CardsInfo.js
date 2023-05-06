import React from 'react';
import clock from '../../../assets/icons/clock.svg';
import marker from '../../../assets/icons/marker.svg';
import phone from '../../../assets/icons/phone.svg';
import CardInfo from './CardInfo';

const CardsInfo = () => {
    const cardData = [
        {
            id: 1,
            title: 'Opening Hours',
            description: 'Our Chember Open from 9:00am-5:00pm',
            bgCard: 'bg-gradient-to-r from-[#19D3AE] to-[#0FCFEC] ',
            img: clock
        },
        {
            id: 2,
            title: 'Visit our location',
            description: 'Brooklyn, NY 10036, United States ',
            bgCard: 'bg-[#3A4256]',
            img: marker
        },
        {
            id: 3,
            title: 'Contact us now',
            description: '+000 123 456789',
            bgCard: 'bg-gradient-to-r from-[#19D3AE] to-[#0FCFEC]',
            img: phone
        },
    ]
    return (
        <div className='grid lg:grid-cols-3 md:grid-cols-2 sm:grid-cols-1 gap-6'>
            {
                cardData.map(card => <CardInfo key={card.id} card={card}></CardInfo>)
            }
        </div>
    );
};

export default CardsInfo;