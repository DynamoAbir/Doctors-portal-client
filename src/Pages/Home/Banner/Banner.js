import React from 'react';
import chair from '../../../assets/images/chair.png'
import DoctorsBtn from '../../Shared/DoctorsBtn/DoctorsBtn';
import background from '../../../assets/images/bg.png'


const Banner = () => {
    return (
        <div className='hero h-[780px]' style={{ background: `url(${background})`, backgroundSize: 'cover' }}>
            <div className="hero-content flex-col lg:flex-row-reverse">
                <img src={chair} className="lg:w-1/2 rounded-lg shadow-2xl" />
                <div>
                    <h1 className="text-5xl font-bold">Your New Smile Starts Here</h1>
                    <p className="py-6">Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the</p>
                    <DoctorsBtn>GET STARTED</DoctorsBtn>
                </div>
            </div>
        </div>
    );
};

export default Banner;