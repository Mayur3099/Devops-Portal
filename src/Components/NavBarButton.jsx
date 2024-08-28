import React from "react";
import { Link } from "react-router-dom";

const NavBarButton = ({ linkTo, buttonText, handleClick }) => {
    return (
        <>
            <Link to={linkTo}
                className="border border-solid border-red-600 rounded-md px-4 py-1 bg-white hover:shadow-orange-400 hover:shadow-lg"
            >
                {buttonText}
            </Link>
        </>
    )
}

export default NavBarButton;