import React from 'react';
import { Link } from 'react-router-dom';

const ContactUs = () => {
    return (
        <li
            className={`font-poppins font-normal cursor-pointer text-[14px] text-white mr-10 sm:mb-0 sm:mt-0 mt-3`}
        >
            <Link to="contact" className="uppercase">
                <button>Contact Us</button>
            </Link>
        </li>
    );
};

export default ContactUs;