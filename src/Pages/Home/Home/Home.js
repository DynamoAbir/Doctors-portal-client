import React from 'react';
import Banner from '../Banner/Banner';
import CardsInfo from '../CardsInfo/CardsInfo';
import Services from '../Services/Services';
import Terms from '../Terms/Terms';
import MakeAppointment from '../MakeAppointment/MakeAppointment';
import Reviews from '../Reviews/Reviews';

const Home = () => {
    return (
        <div className='mx-5'>
            <Banner></Banner>
            <CardsInfo></CardsInfo>
            <Services></Services>
            <Terms></Terms>
            <MakeAppointment></MakeAppointment>
            <Reviews></Reviews>
        </div>
    );
};

export default Home;