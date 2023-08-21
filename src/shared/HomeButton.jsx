import { Link } from "react-router-dom";


const HomeButton = () => {

    return (
        <li
            className={`font-poppins font-normal cursor-pointer text-[14px] text-white mr-10 sm:mb-0 mb-3`}
        >
            <Link to="/" className="uppercase">
                <button>Home</button>
            </Link>
        </li>
    );
};

export default HomeButton;