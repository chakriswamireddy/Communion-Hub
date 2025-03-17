import React, { useEffect } from 'react'
import meet1 from '../assets/images/meet1.jpg'
import meet2 from '../assets/images/meet2.jpg'
import meet3 from '../assets/images/meet3.jpg'
import hero1 from '../assets/images/hero1.png'
import arrow from '../assets/images/arrow.svg'
import door from '../assets/images/door.svg'
import { motion } from 'framer-motion';



import { Link } from 'react-router'

import Vivus from "vivus";



function Home() {



    return (

        <header className="bg-white dark:bg-gray-900 ">

            <div className="container px-6 py-16 mx-auto ">
                <div className="items-center lg:flex">

                    <motion.div
                        initial={{ x: -200, }}
                        animate={{ x: 0 }}
                        transition={{ duration: 0.6, ease: 'easeInOut' }}

                        className="w-full lg:w-1/2 "
                    >



                        <div className="lg:max-w-lg">
                            <h1 className="text-4xl font-bold text-gray-800 dark:text-white lg:text-5xl leading-13  ">
                                <span className="text-blue-500 mr-2   ">
                                    Connecting
                                </span>
                                People Across Faiths &
                                <span className='inline-flex gap-4  items-end w-max'>
                                    Interests
                                    <img src={hero1} alt="" className='h-10 md:h-12' />
                                </span>
                            </h1>
                            <p className="mt-3 text-gray-600 dark:text-gray-400">
                                Join us to be part of a community where spirituality meets innovation. Together, we'll build a world that's more inclusive, engaging, and connected than ever before!  </p>
                            <Link to='/events' >
                                <button className="w-full px-5 py-2 mt-6 text-sm tracking-wider text-white uppercase transition-colors duration-300 transform bg-slate-700 rounded-lg lg:w-auto hover:bg-slate-600 hover:shadow-xl focus:outline-none focus:bg-slate-500 group">
                                    Explore Events

                                    <span  >

                                        <img src={arrow} alt="" className='inline w-5 translate-x-4 group-hover:translate-x-5 transition  duration-300 ease-in-out' />
                                        <img src={door} alt="" className='inline w-6 group-hover:scale-110 transition  duration-200 ease-in-out' />
                                    </span>


                                </button>
                            </Link>
                        </div>

                    </motion.div>

                    <motion.div
                        initial={{ x: 200, }}
                        animate={{ x: 0 }}
                        transition={{ duration: 0.6, ease: 'easeInOut' }}

                        className="flex justify-center gap-7 w-full mt-6 lg:mt-0 lg:w-1/2 "
                    >




                        <img src={meet1} alt="" className='rounded-[30px] sm:h-96 w-[28%] sm:w-40 md:w-[28%] max-w-[200px] object-cover translate-y-28 hover:translate-y-25 transition  duration-400 ease-in-out' />
                        <img src={meet2} alt="" className='rounded-[30px] sm:h-96 w-[28%] sm:w-40 md:w-[28%] max-w-[200px] object-cover translate-y-15 hover:translate-y-12 transition  duration-400 ease-in-out' />
                        <img src={meet3} alt="" className='rounded-[30px] sm:h-96 w-[28%] sm:w-40 md:w-[28%] max-w-[200px] object-cover translate-y-5 hover:translate-y-2 transition  duration-400 ease-in-out' />

                    </motion.div>
                </div>
            </div>
        </header>

    )
}

export default Home