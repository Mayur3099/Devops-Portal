import React from "react";
import { Link } from "react-router-dom";

import { Logo } from "../assets";
import NavBarButton from "./NavBarButton";

const Navbar = () => {
    return (
        <>
            <div className="fixed z-20 flex flex-row px-8 py-4">
                <div>
                    <Link to={'/'}>
                        <img src={Logo} alt="Logo"
                            className="w-16 p-2 rounded-full hover:shadow-teal-400 hover:shadow-inner "
                        />
                    </Link>
                </div>
                {/* <div>
                    Search Bar
                </div> */}
                {/* <div className="flex ml-auto justify-center">
                    <div className="flex justify-center items-center border border-solid border-black">
                        <NavBarButton linkTo={'deploy'} buttonText='Deploy' />
                        <NavBarButton linkTo={'monoliths'} buttonText='Monoliths' />
                        <NavBarButton linkTo={'microservices'} buttonText='Microservices' />
                    </div>
                </div> */}
            </div>
        </>
    )
}

export default Navbar;