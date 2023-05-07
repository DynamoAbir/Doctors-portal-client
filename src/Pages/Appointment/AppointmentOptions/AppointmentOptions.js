import { format } from 'date-fns';
import React, { useEffect, useState } from 'react';
import ServiceOption from '../ServiceOption/ServiceOption';
import AppointmentOption from '../AppointmentOption/AppointmentOption';
import BookingModal from '../BookingModal/BookingModal';


const AppointmentOptions = ({ selectedDate }) => {
    const [appointmentOptions, setAppointmentOptions] = useState([]);
    const [treatment, setTreatment] = useState(null);

    useEffect(() => {
        fetch('appointmentOptions.json')
            .then(res => res.json())
            .then(data => setAppointmentOptions(data))
    }, [])
    const serviceData = [
        { name: 'Teeth Orthodontics', id: 1 },
        { name: 'Cosmetic Dentistry', id: 2 },
        { name: 'Teeth Cleaning', id: 3 },
        { name: 'Cavity Protection', id: 4 },
        { name: 'Pediatric Dental', id: 5 },
        { name: 'Oral Surgery', id: 6 },
    ]
    return (
        <div className='mt-64'>
            <p className='text-2xl text-[#19D3AE] text-center'>Available Services on {format(selectedDate, 'PP')}</p>
            <p className='text-xl text-center text-[#939393]'>Please select a service.</p>

            <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6'>
                {
                    serviceData.map(service => <ServiceOption key={service.id} service={service}></ServiceOption>)
                }
            </div>
            <div>
                <p className='text-2xl text-[#19D3AE] mt-24 text-center'>Available slots</p>
            </div>
            <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mt-20'>
                {appointmentOptions.map(option => <AppointmentOption setTreatment={setTreatment} key={option._id} appointmentOption={option}></AppointmentOption>)}
            </div>
            {treatment && <BookingModal setTreatment={setTreatment} selectedDate={selectedDate} treatment={treatment}></BookingModal>}
        </div>
    );
};

export default AppointmentOptions;