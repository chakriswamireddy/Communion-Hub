import React, { useState } from "react";
import EventForm from "./EventForm";
import { AnimatePresence, motion } from "framer-motion";

import startSVG from  '../assets/images/star.svg'

function Modal() {
    const [isOpen, setIsOpen] = useState(false);

    return (
        <div >
            <button
                onClick={() => setIsOpen(true)}
                className=" flex gap-2 text-white bg-blue-400 hover:bg-blue-500 focus:ring-4 focus:outline-none  font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
            >
                Create Event
                <img src={startSVG} alt="star" />
            </button>

            {isOpen && (
                <AnimatePresence>


                    <motion.div
                        initial={{ scale: 0.7 }}
                        animate={{ scale: 1 }}
                        exit={{ scale: 0.7 }}
                        // transition={{ ease:'easeInOut'}}
                        className="fixed inset-0 flex items-center justify-center bg-transparent backdrop-blur-xs bg-opacity-50 z-50"
                    >



                        <div className="bg-white p-5 rounded-lg shadow-lg w-96">

                            <div className="flex items-end   justify-between">

                                <h2 className="text-lg font-semibold mb-3">New Event</h2>
                                <button
                                    onClick={() => setIsOpen(false)}
                                    className=" text-gray-600 hover:text-gray-900  self-start p-2"
                                >
                                    <svg class="w-3 h-3" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 14 14">
                                        <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="m1 1 6 6m0 0 6 6M7 7l6-6M7 7l-6 6" />
                                    </svg>
                                </button>
                            </div>


                            <EventForm setIsOpen={setIsOpen} />
                        </div>


                    </motion.div>
                </AnimatePresence>
            )}
        </div>
    );
}

export default Modal;
