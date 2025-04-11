
import React from 'react';
import { CalendarDays, MapPin, Plus, Users } from 'lucide-react';

// Mock reservations data
const reservations = [
  {
    id: 'res1',
    type: 'restaurant',
    name: 'The Rustic Table',
    image: 'https://images.unsplash.com/photo-1517248135467-4c7edcad34c4?q=80&w=2070',
    date: 'Friday, April 15',
    time: '7:30 PM',
    guests: 4,
    status: 'confirmed'
  },
  {
    id: 'res2',
    type: 'hotel',
    name: 'Coastal Retreat Resort',
    image: 'https://images.unsplash.com/photo-1542314831-068cd1dbfeeb?q=80&w=2070',
    date: 'Sat, April 22 - Mon, April 24',
    time: 'Check-in: 3:00 PM',
    guests: 2,
    status: 'pending'
  },
  {
    id: 'res3',
    type: 'outdoor',
    name: 'Lakeside Picnic Area',
    image: 'https://images.unsplash.com/photo-1520962880247-cfaf541c8724?q=80&w=2089',
    date: 'Sunday, April 16',
    time: '12:00 PM',
    guests: 6,
    status: 'confirmed'
  }
];

interface Reservation {
  id: string;
  type: string;
  name: string;
  image: string;
  date: string;
  time: string;
  guests: number;
  status: 'confirmed' | 'pending';
}

const ReservationsView = () => {
  return (
    <div className="space-y-4 mt-4">
      <h2 className="text-sm font-medium mb-3">Upcoming Reservations</h2>
      
      {reservations.map((reservation: Reservation) => (
        <div key={reservation.id} className="bg-white dark:bg-gray-800 rounded-lg shadow-sm overflow-hidden">
          <div className="flex flex-col sm:flex-row">
            <div className="sm:w-1/3 h-24 sm:h-auto">
              <img 
                src={reservation.image} 
                alt={reservation.name} 
                className="w-full h-full object-cover"
              />
            </div>
            <div className="p-4 sm:w-2/3">
              <div className="flex items-center justify-between mb-2">
                <h3 className="text-sm font-semibold">{reservation.name}</h3>
                <span className={`text-xxs px-2 py-0.5 rounded-full ${
                  reservation.status === 'confirmed' 
                    ? 'bg-green-100 text-green-800 dark:bg-green-900/30 dark:text-green-400' 
                    : 'bg-amber-100 text-amber-800 dark:bg-amber-900/30 dark:text-amber-400'
                }`}>
                  {reservation.status === 'confirmed' ? 'Confirmed' : 'Pending'}
                </span>
              </div>
              <div className="flex items-center text-xxs text-gray-600 dark:text-gray-300 mb-1">
                <CalendarDays size={12} className="mr-1" />
                {reservation.date}
              </div>
              <div className="flex items-center justify-between text-xxs text-gray-600 dark:text-gray-300">
                <div className="flex items-center">
                  <Users size={12} className="mr-1" />
                  {reservation.guests} guests
                </div>
                <div>{reservation.time}</div>
              </div>
            </div>
          </div>
        </div>
      ))}
      
      <button className="w-full mt-4 btn-secondary text-sm flex items-center justify-center">
        <Plus size={16} className="mr-1" />
        Make New Reservation
      </button>
    </div>
  );
};

export default ReservationsView;
