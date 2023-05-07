import { format } from 'date-fns';
import React from 'react';

const BookingModal = ({ treatment, setTreatment, selectedDate }) => {
    const date = format(selectedDate, "PP")
    const { name, slots } = treatment;

    const handleBooking = (e) => {
        e.preventDefault()
        const form = e.target;
        const fullName = form.fullName.value;
        const email = form.email.value;
        const slots = form.slots.value;
        const phone = form.phone.value;
        const booking = {
            appointmentDate: date,
            treatment: name,
            fullName, slots, email, phone
        }
        console.log(booking);
        setTreatment(null);
    }
    return (
        <>


            {/* Put this part before </body> tag */}
            <input type="checkbox" id="booking-modal" className="modal-toggle" />
            <div className="modal">
                <div className="modal-box relative">
                    <label htmlFor="booking-modal" className="btn btn-sm btn-circle absolute right-2 top-2">✕</label>
                    <h3 className="text-lg font-bold">{name}</h3>
                    <form onSubmit={handleBooking} className='grid grid-cols-1 gap-4 mt-10'>

                        <input type="text" disabled value={date} className="input input-bordered w-full font-bold " />
                        <select name='slots' className="select select-bordered w-full ">

                            {slots.map((slot, i) => <option key={i} value={slot} selected>{slot}</option>)}
                        </select>
                        <input name='fullName' type="text" placeholder="Full Name" className="input input-bordered w-full " />
                        <input name='phone' type="text" placeholder="Phone Number" className="input input-bordered w-full " />
                        <input name='email' type="email" placeholder="Email" className="input input-bordered w-full " />
                        <input type='submit' value='submit' className='btn btn-[#3A4256] w-full' />

                    </form>
                </div>
            </div>
        </>
    );
};

export default BookingModal;