import React from 'react';

const Review = ({ review }) => {
    const { comment, img, name, location } = review;
    return (
        <div className="card bg-base-100 shadow-xl">
            <div className="card-body">
                <p>{comment}</p>
            </div>
            <div className='flex my-9'>
                <div className="avatar mx-5 ">
                    <div className="w-16 rounded-full ring ring-[#19D3AE] ring-offset-base-100 ring-offset-2">
                        <img src={img} />
                    </div>
                </div>
                <div>
                    <p className='text-xl font-bold'>{name}</p>
                    <p>{location}</p>
                </div>

            </div>
        </div>
    );
};

export default Review;