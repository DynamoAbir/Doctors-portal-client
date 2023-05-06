import React from 'react';
import DoctorsBtn from '../../Shared/DoctorsBtn/DoctorsBtn';
import Doctor from '../../../assets/images/doctor.png';
import appointment from '../../../assets/images/appointment.png'

const MakeAppointment = () => {
    return (
        <section style={{
            background: `url(${appointment})`
        }
        }>
            <div className="hero mt-64">
                <div className="hero-content flex-col lg:flex-row ">
                    <img src={Doctor} className="-mt-32 hidden md:block lg:block w-1/2 rounded-lg " />
                    <div>
                        <p className='text-[#19D3AE] text-lg font-bold' >Appointment</p>
                        <h1 className="text-5xl font-bold my-6 text-white">Make an appointment Today</h1>
                        <p className="py-6 text-white">It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsumis that it has a more-or-less normal distribution of letters,as opposed to using 'Content here, content here', making it look like readable English. Many desktop publishing packages and web page</p>
                        <DoctorsBtn>Appointment</DoctorsBtn>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default MakeAppointment;