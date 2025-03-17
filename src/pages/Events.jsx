import React from 'react'
import useEventsStore from '../store/useEventsStore'
import EventCard from '../components/EventCard';
import EventForm from '../components/EventForm';
import Modal from '../components/Modal';
import { motion } from 'framer-motion';



function Events() {

  const events = useEventsStore((state) => state.events);
  return (
    <div className='  p-2 min-h-screen'>

      <div>
        {/* <EventForm /> */}
        <Modal />
        {/* lg:grid-cols-[repeat(auto-fit,minmax(150px,1fr))] */}
      </div>
      <div className='grid gap-4  justify-center mt-4 border grid-flow-row  sm:grid-cols-2 md:grid-cols-3  lg:grid-cols-4  '>


        {events && events.length > 0 && events.map((e) => (
          <motion.div
            key={e.id}

            initial={{scale:0.5, originX:0.1, originY:0, opacity:0.5, filter:'blur(5px)'}}
            animate={{scale:1, opacity:1, filter:'blur(0px)'}}
            transition={{ duration: 0.4,  ease: 'easeIn'}}
          >

            <EventCard event={e} />
          </motion.div>
        ))}
      </div>
    </div>
  )
}

export default Events