import React from 'react';
import { Link } from 'react-router-dom';

const AboutUsRoute = () => {
    return (
        <li
            className={`font-poppins font-normal cursor-pointer text-[14px] text-white mr-6 sm:mb-0 sm:mt-0 mt-3`}
        >
            <Link to="aboutUs" className="uppercase">
                <button>About Us</button>
            </Link>
        </li>
    );
};

export default AboutUsRoute;