import React from 'react';
import chair from '../../../assets/images/chair.png';
import { DayPicker } from 'react-day-picker';
import { format } from 'date-fns';
import bg from '../../../assets/images/bg.png'
const AppointmentBanner = ({ selectedDate, setSelectedDate }) => {

    return (
        <div className="hero" style={{ backgroundImage: `url(${bg})`, backgroundSize: 'cover', backgroundPosition: 'center' }}>
            <div className="hero-content flex-col lg:flex-row-reverse ">
                <div>
                    <img src={chair} className="max-w-sm rounded-lg shadow-2xl" />
                </div>
                <div >
                    <DayPicker
                        mode='single'
                        selected={selectedDate}
                        onSelect={setSelectedDate}

                    ></DayPicker>


                </div>
            </div>
        </div>
    );
};

export default AppointmentBanner;