import React from 'react';

const ServiceOption = ({ service }) => {
    const { name } = service;
    return (
        <div className="card bg-base-100 shadow-xl text-center mt-10">
            <div className="card-body text-center">
                <h2 className="text-2xl text-center text-[#19D3AE]">{name}</h2>

            </div>
        </div>
    );
};

export default ServiceOption;