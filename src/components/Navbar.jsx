import React, { useState } from 'react';

import logo from "../assets/images/logo.png";
import { Link } from 'react-router';
import { motion } from 'framer-motion';

function Navbar() {
    const [isOpen, setIsOpen] = useState(false);

    const toggleMenu = () => {
        setIsOpen(!isOpen);
    };

    const navlist = ["Home", "Events", "About", "Contact"]

    return (
        <motion.div
            // initial={{ rotate:-20, originX:0  , originY:-10 }}
            // animate={{ rotate:0 }}
            // transition={{duration:0.6, ease:'easeInOut'}}

            initial={{ rotate:3,  }}
            animate={{ rotate:0 }}
            transition={{duration:0.6, ease:'easeInOut'}}

        >
        <nav className="relative bg-white shadow dark:bg-gray-800">
            <div className="container px-6 py-4 mx-auto md:flex md:justify-between md:items-center">
                <div className="flex items-center justify-between">
                    <a href="#">
                        <img
                            alt=""
                            className="w-auto h-6 sm:h-7"
                            src={logo}
                        />
                    </a>
                    <div className="flex md:hidden">
                        <button
                            onClick={toggleMenu}
                            aria-label="toggle menu"
                            className="text-gray-500 dark:text-gray-200 hover:text-gray-600 dark:hover:text-gray-400 focus:outline-none focus:text-gray-600 dark:focus:text-gray-400"
                            type="button"
                        >
                            <svg
                                className={`w-6 h-6 ${isOpen ? 'hidden' : 'block'}`}
                                fill="none"
                                stroke="currentColor"
                                strokeWidth="2"
                                viewBox="0 0 24 24"
                                xmlns="http://www.w3.org/2000/svg"
                            >
                                <path
                                    d="M4 8h16M4 16h16"
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                />
                            </svg>
                            <svg
                                className={`w-6 h-6 ${isOpen ? 'block' : 'hidden'}`}
                                fill="none"
                                stroke="currentColor"
                                strokeWidth="2"
                                viewBox="0 0 24 24"
                                xmlns="http://www.w3.org/2000/svg"
                            >
                                <path
                                    d="M6 18L18 6M6 6l12 12"
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                />
                            </svg>
                        </button>
                    </div>
                </div>
                <div
                    className={`${isOpen ? 'translate-x-0 opacity-100' : 'opacity-0 -translate-x-full'
                        } absolute inset-x-0 z-20 w-full px-6 py-4 transition-all duration-300 ease-in-out bg-white dark:bg-gray-800 md:mt-0 md:p-0 md:top-0 md:relative md:bg-transparent md:w-auto md:opacity-100 md:translate-x-0 md:flex md:items-center`}
                >
                    <div className="flex flex-col md:flex-row ml-4 md:mx-6 ">

                        {navlist.map((nav, i) => (
                            <Link to={`/${nav=="Home"? '': nav}`}
                                className="my-2 text-gray-700 transition-colors duration-300 transform dark:text-gray-200 hover:text-blue-500 dark:hover:text-blue-400 md:mx-4 md:my-0"
                                key={i}> {nav} </Link>
                        ))}

                    </div>

                    <button className='w-full sm:w-max bg-slate-700 text-amber-50 font-bold p-2 px-4 rounded-xl'>
                        Sign in
                    </button>

                </div>
            </div>
        </nav>
        </motion.div>
    );
}

export default Navbar;
