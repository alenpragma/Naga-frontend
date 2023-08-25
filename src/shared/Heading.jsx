import React from 'react';

const Heading = ({heading, title}) => {
    return (
        <div className='pt-36 pb-24 text-center max-w-[350px] mx-auto'>
            <h2 className='text-6xl text-white border-b-2 border-white pb-2 font-bold'>{heading}</h2>
            <p className='text-white font-bold mt-2'>{title}</p>
        </div>
    );
};

export default Heading;