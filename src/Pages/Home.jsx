import React from "react";
import { Link } from "react-router-dom";

import { Chad, Cat2 } from "../assets";

const Home = () => {
    return (
        <>
            <div className="flex h-screen overflow-hidden bg-gradient-to-b from-white via-slate-50 to-gray-300">
                <div className="flex items-center w-[46%]">
                    <Link to={'/monoliths'}
                        className="triggerButton comfortaa-title z-10 py-4 text-7xl text-center mx-auto mt-56 w-full font-bold bg-black bg-clip-text"
                    >
                        MONOLITHS
                    </Link>
                    <div className="chad fixed h-screen z-0 -translate-x-full bg-slate-950">
                        <img src={Chad} alt="Chad"
                            className="h-full"
                        />
                    </div>
                </div>

                <div className="flex items-center w-[54%] ml-auto">
                    <Link
                        to={'/microservices'}
                        className="catTriggerButton comfortaa-title z-10 py-4 text-7xl text-center mx-auto mt-56 w-full font-bold bg-black bg-clip-text"
                    >
                        MICROSERVICES
                    </Link>
                    <div className="cat fixed h-screen z-0 translate-x-full bg-slate-950">
                        <img src={Cat2} alt="Cat"
                            className="h-full"
                        />
                    </div>
                </div>
            </div>
        </>
    )
}

export default Home;