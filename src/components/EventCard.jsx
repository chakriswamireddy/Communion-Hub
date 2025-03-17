import clsx from 'clsx';
import React from 'react'

function EventCard({ event }) {

    const categoryStyles = {
        Social: "text-blue-800 bg-blue-200 dark:bg-blue-300 dark:text-blue-900",
        Charity: "text-green-800 bg-green-200 dark:bg-green-300 dark:text-green-900",
        Religious: "text-yellow-800 bg-yellow-200 dark:bg-yellow-300 dark:text-yellow-900",
    };

    const primaryClass = categoryStyles[event.category] || "text-gray-800 bg-gray-200 dark:bg-gray-300 dark:text-gray-900";


    return (
        <div>
            <div className="w-full flex flex-col max-w-sm px-4 py-3 bg-white rounded-md shadow-md dark:bg-gray-800">
                <div className="flex items-center justify-between">
                    <span className="text-sm font-light text-gray-800 dark:text-gray-400">
                        {event.date}
                    </span>

                    {event?.category && (
                        <span className={clsx("px-3 py-1 text-xs uppercase rounded-full", primaryClass)}>
                            {event.category}
                        </span>
                    )}

                </div>
                
                    <h1 className="mt-2 text-lg font-semibold text-gray-800 dark:text-white">
                        {event.title}
                    </h1>
                    <p className="mt-2 text-sm text-gray-600 dark:text-gray-300">
                        {event.description || ''}
                    </p>
               
                
                    <div className="flex items-center mt-2 text-gray-700 dark:text-gray-200">
                        <span>Location</span>


                        <span className='ml-2 text-blue-600'> {event.location} </span>
                    </div>
                    <div className="flex items-end justify-end mt-4 gap-1">



                       
                        <span className='italic text-[12px]  text-gray-500'> {event.owner} </span>

                        <img className="w-10 h-10 p-1 rounded-full ring-2 ring-gray-300 dark:ring-gray-500" src={event?.img} alt="avatar" />

                    </div>
                
            </div>;

        </div>
    )
}

export default EventCard