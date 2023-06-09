import React from 'react';


const AppointmentOption = ({ appointmentOption, setTreatment }) => {
    const { name, slots } = appointmentOption;
    return (
        <div className="card bg-base-100 shadow-xl">
            <div className="card-body text-center">
                <h2 className='text-2xl font-bold text-[#19D3AE]'>{name}</h2>
                <p>{slots.length > 0 ? slots[0] : "Try Another Day"}</p>
                <p>{slots.length} {slots.length > 1 ? "spaces" : "space"} available</p>
                <div className="card-actions justify-center">

                    <label onClick={() => setTreatment(appointmentOption)} htmlFor="booking-modal" className="btn border-none bg-gradient-to-r from-[#0FCFEC] to-[#19D3AE]">BOOK APPOIENTMENT</label>

                </div>
            </div>

        </div>
    );
};

export default AppointmentOption; 