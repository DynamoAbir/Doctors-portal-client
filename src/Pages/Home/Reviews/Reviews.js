import React from 'react';
import people1 from '../../../assets/images/people1.png'
import people2 from '../../../assets/images/people2.png'
import people3 from '../../../assets/images/people3.png'
import Review from './Review';
import quote from '../../../assets/icons/quote.svg'
const Reviews = () => {
    const reviewData = [
        {
            id: 1,
            name: 'Winson Herry',
            comment: 'It is a long established fact that by the readable content of a lot layout. The point of using Lorem a more-or-less normal distribu to using Content here, content',
            location: 'California',
            img: people1
        },

        {
            id: 2,
            name: 'Archie Sonny',
            comment: 'It is a long established fact that by the readable content of a lot layout. The point of using Lorem a more-or-less normal distribu to using Content here, content',
            location: 'texas',
            img: people2
        },
        {
            id: 3,
            name: 'Sutton Edward',
            comment: 'It is a long established fact that by the readable content of a lot layout. The point of using Lorem a more-or-less normal distribu to using Content here, content',
            location: 'las vegaste',
            img: people3
        },

    ]
    return (
        <section className='mt-20'>
            <div className='flex justify-between'>
                <div>
                    <p className='text-[#19D3AE] font-bold'>Testimonial</p>
                    <p className='text-3xl'>What Our Patients Says</p>
                </div>
                <div>
                    <img className='w-24 lg:w-48' src={quote} alt="" />
                </div>
            </div>
            <div className='grid gap-10 grid-cols-1 md:grid-cols-2 lg:grid-cols-3 mt-20'>
                {reviewData.map(review => <Review key={review.id} review={review}></Review>)}
            </div>
        </section>
    );
};

export default Reviews;