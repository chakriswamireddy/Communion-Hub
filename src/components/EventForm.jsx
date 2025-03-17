import React, { useEffect, useRef, useState } from 'react'
import "flowbite/dist/flowbite.min.js";
import "flowbite-datepicker";
import useEventsStore from '../store/useEventsStore';
import ReactConfetti from 'react-confetti';
import ReactConfettiComp from '../shared/Confetti';





function EventForm({setIsOpen}) {

    const datepickerRef = useRef(null);

    const addEvent = useEventsStore((state) => state.addEvent);



    useEffect(() => {
        if (datepickerRef.current) {
            import("flowbite-datepicker").then(({ Datepicker }) => {
                new Datepicker(datepickerRef.current, {
                    autohide: true,
                    orientation: "bottom right",
                });
            });
        }
    }, []);


    const [title, setTitle] = useState(null);
    const [description, setDescription] = useState(null);
    const [date, setDate] = useState(null)
    const [location, setLocation] = useState(null)
    const [category, setCategory] = useState(null);

    const [successFulSub, setSuccessFulSub] = useState(false);


    const handleCreateEvent =() => {
        console.log(title, date, location,category)
        if (title && date && location && category) {
            addEvent({title,description, date, location, category});

            setSuccessFulSub(true);
            
            setTimeout(() => {
                
                setIsOpen(false);
                setSuccessFulSub(false);
            },[3000])

        }
    }




    return (
        <div className=' shadow '>

            {successFulSub && 
                <ReactConfettiComp />
            }

            <form className="max-w-sm mx-auto">
                <label
                    className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
                    htmlFor="email-address-icon">
                </label>

                <div className='flex flex-col gap-3'>


                    <div className="relative">

                        <label
                            className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
                            htmlFor="message">
                            Event Title*
                        </label>
                        <div className="absolute inset-y-0 -left-2 top-6 start-0 flex items-center ps-3.5 pointer-events-none">
                            <svg xmlns="http://www.w3.org/2000/svg" className='w-6 h-6' viewBox="0 0 512 512">
                                <path fill="currentColor" fill-rule="evenodd" d="M405.334 64v21.333h-42.667v341.333h42.667V448l-42.667-.001V448h-21.333l-.001-.001l-42.666.001v-21.333l42.666-.001V85.333h-42.666V64zm64 64v256H384v-42.667h42.667V170.667H384V128zM320 128v256H42.667V128zm-98.133 25.6H192v145.067c0 13.333-.833 21.666-1.458 29.687l-.082 1.068l-.079 1.067c-.296 4.09-.514 8.207-.514 12.978h29.867v-19.2a42.67 42.67 0 0 0 38.4 21.333a45.65 45.65 0 0 0 36.266-17.067a99.63 99.63 0 0 0 19.2-53.333c0-40.533-21.333-68.267-53.333-68.267a48.43 48.43 0 0 0-38.4 19.2zm-59.733 72.533a54.61 54.61 0 0 0-44.8-17.066a102.2 102.2 0 0 0-49.067 10.666l8.533 21.334a96.2 96.2 0 0 1 36.267-10.667a27.093 27.093 0 0 1 29.867 29.867v2.133H121.6a89.2 89.2 0 0 0-38.4 6.4a35.63 35.63 0 0 0-21.333 36.267a38.187 38.187 0 0 0 42.667 38.4a50.35 50.35 0 0 0 40.533-17.067v14.933H172.8a172.4 172.4 0 0 1-2.133-34.133v-38.4a66.77 66.77 0 0 0-8.533-42.667m-21.334 51.2v25.6a37.12 37.12 0 0 1-29.866 19.2a17.92 17.92 0 0 1-19.2-19.2c0-14.933 10.666-23.466 36.266-25.6zM251.734 230.4c17.066 0 29.866 17.067 29.866 44.8S270.934 320 253.867 320a35.84 35.84 0 0 1-32-21.333v-46.934a40.32 40.32 0 0 1 29.867-21.333" />
                            </svg>
                        </div>
                        <input
                            className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full ps-10 p-2.5  dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                            id="email-address-icon"
                            placeholder="Title"
                            type="text"
                            onChange={(e) => setTitle(e.target.value)}
                        />
                    </div>



                    <div className="relative ">
                        <div className="absolute inset-y-0 start-0 flex items-center ps-3.5 pointer-events-none">
                            {/* <svg xmlns="http://www.w3.org/2000/svg" className='w-6 h-6' viewBox="0 0 512 512">
                                <path fill="currentColor" fill-rule="evenodd" d="M405.334 64v21.333h-42.667v341.333h42.667V448l-42.667-.001V448h-21.333l-.001-.001l-42.666.001v-21.333l42.666-.001V85.333h-42.666V64zm64 64v256H384v-42.667h42.667V170.667H384V128zM320 128v256H42.667V128zm-98.133 25.6H192v145.067c0 13.333-.833 21.666-1.458 29.687l-.082 1.068l-.079 1.067c-.296 4.09-.514 8.207-.514 12.978h29.867v-19.2a42.67 42.67 0 0 0 38.4 21.333a45.65 45.65 0 0 0 36.266-17.067a99.63 99.63 0 0 0 19.2-53.333c0-40.533-21.333-68.267-53.333-68.267a48.43 48.43 0 0 0-38.4 19.2zm-59.733 72.533a54.61 54.61 0 0 0-44.8-17.066a102.2 102.2 0 0 0-49.067 10.666l8.533 21.334a96.2 96.2 0 0 1 36.267-10.667a27.093 27.093 0 0 1 29.867 29.867v2.133H121.6a89.2 89.2 0 0 0-38.4 6.4a35.63 35.63 0 0 0-21.333 36.267a38.187 38.187 0 0 0 42.667 38.4a50.35 50.35 0 0 0 40.533-17.067v14.933H172.8a172.4 172.4 0 0 1-2.133-34.133v-38.4a66.77 66.77 0 0 0-8.533-42.667m-21.334 51.2v25.6a37.12 37.12 0 0 1-29.866 19.2a17.92 17.92 0 0 1-19.2-19.2c0-14.933 10.666-23.466 36.266-25.6zM251.734 230.4c17.066 0 29.866 17.067 29.866 44.8S270.934 320 253.867 320a35.84 35.84 0 0 1-32-21.333v-46.934a40.32 40.32 0 0 1 29.867-21.333" />
                            </svg> */}
                        </div>
                        <div>
                            <label
                                className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
                                htmlFor="message">
                                Description
                            </label>
                            <textarea
                                className="block p-2.5 w-full text-sm text-gray-900 bg-gray-50 rounded-lg border border-gray-300 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                                id="message"
                                placeholder="Write your thoughts about event here..."
                                rows="4"
                                onChange={(e) => setDescription(e.target.value)}

                            />
                        </div>

                    </div>


                    <div className="relative flex justify-between">

                        <div>


                            <label
                                className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
                                htmlFor="message">
                                Choose Date*
                            </label>

                            <div className="relative max-w-sm">
                                <div className="absolute inset-y-0 start-0 flex items-center ps-3 pointer-events-none">
                                    <svg
                                        aria-hidden="true"
                                        className="w-4 h-4 text-gray-500 dark:text-gray-400"
                                        fill="currentColor"
                                        viewBox="0 0 20 20"
                                        xmlns="http://www.w3.org/2000/svg">
                                        <path d="M20 4a2 2 0 0 0-2-2h-2V1a1 1 0 0 0-2 0v1h-3V1a1 1 0 0 0-2 0v1H6V1a1 1 0 0 0-2 0v1H2a2 2 0 0 0-2 2v2h20V4ZM0 18a2 2 0 0 0 2 2h16a2 2 0 0 0 2-2V8H0v10Zm5-8h10a1 1 0 0 1 0 2H5a1 1 0 0 1 0-2Z" />
                                    </svg>
                                </div>
                                <input
                                    className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full ps-10 p-2.5  dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                                    datepicker=""
                                    datepicker-orientation="bottom right"
                                    id="datepicker-orientation"
                                    placeholder="Select date"
                                    type="text"
                                    ref={datepickerRef}
                                    onChange={(e) => setDate(e.target.value)}

                                />
                            </div>
                        </div>

                        <div>


                            {/* <label
                                className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
                                htmlFor="time">
                                Select time*
                            </label>



                            <div className="relative">
                                <div className="absolute inset-y-0 end-0 top-0 flex items-center pe-3.5 pointer-events-none">
                                    <svg
                                        aria-hidden="true"
                                        className="w-4 h-4 text-gray-500 dark:text-gray-400"
                                        fill="currentColor"
                                        viewBox="0 0 24 24"
                                        xmlns="http://www.w3.org/2000/svg">
                                        <path
                                            clipRule="evenodd"
                                            d="M2 12C2 6.477 6.477 2 12 2s10 4.477 10 10-4.477 10-10 10S2 17.523 2 12Zm11-4a1 1 0 1 0-2 0v4a1 1 0 0 0 .293.707l3 3a1 1 0 0 0 1.414-1.414L13 11.586V8Z"
                                            fillRule="evenodd"
                                        />
                                    </svg>
                                </div>
                                <input
                                    className="bg-gray-50 border leading-none border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                                    defaultValue="00:00"
                                    id="time"
                                    max="18:00"
                                    min="09:00"
                                    required
                                    type="time"
                                />
                            </div> */}

                        </div>
                    </div>


                    <div className="relative">

                        <label
                            className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
                            htmlFor="message">
                            Enter Venue*
                        </label>

                        <div className="absolute inset-y-0 -left-2 top-6 start-0 flex items-center ps-3.5 pointer-events-none">
                            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24">
                                <path fill="currentColor" d="M12 6.5A2.5 2.5 0 0 1 14.5 9a2.5 2.5 0 0 1-2.5 2.5A2.5 2.5 0 0 1 9.5 9A2.5 2.5 0 0 1 12 6.5M12 2a7 7 0 0 1 7 7c0 5.25-7 13-7 13S5 14.25 5 9a7 7 0 0 1 7-7m0 2a5 5 0 0 0-5 5c0 1 0 3 5 9.71C17 12 17 10 17 9a5 5 0 0 0-5-5" />
                            </svg>
                        </div>
                        <input
                            className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full ps-10 p-2.5  dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                            id="location"
                            placeholder="NTR Stadium, Hyderabad"
                            type="text"
                            onChange={(e) => setLocation(e.target.value)}

                        />
                    </div>
                </div>

                <div>
                    <label for="countries" class="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Select an option</label>
                    <select onChange={(e) => setCategory(e.target.value)}
                     id="countries" class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500">
                        <option selected>Choose Category</option>
                        <option value="Social">Social</option>
                        <option value="Religious">Religious</option>
                        <option value="Charity">Charity</option>
                    </select>
                </div>

                <fieldset className='my-2'>
                    <legend className="sr-only">Checkbox variants</legend>
                    <div className="flex items-center mb-4">
                        <input
                            className="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 rounded-sm focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 dark:focus:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600"
                            defaultChecked
                            defaultValue=""
                            id="checkbox-1"
                            type="checkbox"
                        />
                        <label
                            className="ms-2 text-sm font-medium text-gray-900 dark:text-gray-300"
                            htmlFor="checkbox-1">
                            I agree to the{" "}
                            <a className="text-blue-600 hover:underline dark:text-blue-500" >
                                terms and conditions
                            </a>
                            .
                        </label>
                    </div>
                </fieldset>

                <button type='button'
                    onClick={handleCreateEvent}
                    className="block text-white bg-blue-400 hover:bg-blue-500 focus:ring-4 focus:outline-none  font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
                >
                    Create Event
                </button>


            </form>



        </div>
    )
}

export default EventForm