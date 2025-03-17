

import { create } from 'zustand'

import p1Img from '../assets/images/avatars/p1.png'
import p2Img from '../assets/images/avatars/p2.png'

import p3Img from '../assets/images/avatars/p3.webp'
import p4Img from '../assets/images/avatars/p4.jpg'

const EVENTS_LS_KEY = 'events_list'

const getEventsFromLS = () => {
  const eventsLS = localStorage.getItem(EVENTS_LS_KEY);

  return eventsLS?.length >0 ? JSON.parse(eventsLS) : null;
}



const useEventsStore = create((set) => ({
 
  events: getEventsFromLS() || [
    {
      "id": 1,
      "title": "Tech Innovators Summit",
      "date": "2025-06-15",
      "location": "San Francisco, CA",
      "description": "A gathering of industry leaders discussing emerging technologies and innovations.",
      "owner": "John Doe",
      "category": "Social",
      img: p1Img,
    },
    {
      "id": 2,
      "title": "Music Fest 2025",
      "date": "2025-07-22",
      "location": "Austin, TX",
      "description": "An electrifying music festival featuring top artists from around the world.",
      "owner": "Emma Smith",
      "category": "Religious",
      img: p2Img,
    },
    {
      "id": 3,
      "title": "AI & ML Conference",
      "date": "2025-09-10",
      "location": "New York, NY",
      "description": "A deep dive into artificial intelligence and machine learning advancements.",
      "owner": "Michael Johnson",
      "category": "Social",
      img: p3Img,
    },
    {
      "id": 4,
      "title": "Startup Pitch Night",
      "date": "2025-08-05",
      "location": "Seattle, WA",
      "description": "An opportunity for startups to pitch their ideas to investors and mentors.",
      "owner": "Sophia Martinez",
      "category": "Charity",
      img: p4Img,
    }
  ],
  

  addEvent: (newEvent) => set((state) => {
    if ( !newEvent && newEvent != null ) {
      return;
    }
    const updatedList = [...state.events, {...newEvent, img:p4Img, id: state.events.length+1} ];
    localStorage.setItem(EVENTS_LS_KEY, JSON.stringify(updatedList));
    return { events: updatedList}
  } ) ,


  




}))

export default useEventsStore