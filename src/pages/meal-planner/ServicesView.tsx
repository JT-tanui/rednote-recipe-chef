
import React from 'react';
import { CalendarDays, ChefHat, Users } from 'lucide-react';
import { Avatar } from '@/components/ui/avatar';

// Mock service providers data
const serviceProviders = [
  {
    id: 'chef1',
    type: 'chef',
    name: 'Maria Rodriguez',
    image: 'https://images.unsplash.com/photo-1583394293214-28ded15ee548?q=80&w=2080',
    specialty: 'French Cuisine',
    rating: 4.9,
    date: 'Saturday, April 22',
    time: '6:00 PM',
    status: 'confirmed'
  },
  {
    id: 'nanny1',
    type: 'nanny',
    name: 'Sarah Johnson',
    image: 'https://images.unsplash.com/photo-1567532939604-b6b5b0db2604?q=80&w=1974',
    specialty: 'Child Care & Light Cooking',
    rating: 4.8,
    date: 'Monday, April 17',
    time: '3:00 PM - 8:00 PM',
    status: 'pending'
  }
];

interface ServiceProvider {
  id: string;
  type: string;
  name: string;
  image: string;
  specialty: string;
  rating: number;
  date: string;
  time: string;
  status: 'confirmed' | 'pending';
}

const ServicesView = () => {
  return (
    <div className="space-y-4 mt-4">
      <h2 className="text-sm font-medium mb-3">Booked Services</h2>
      
      {serviceProviders.map((provider: ServiceProvider) => (
        <div key={provider.id} className="bg-white dark:bg-gray-800 rounded-lg shadow-sm p-4">
          <div className="flex items-center">
            <Avatar className="h-12 w-12 mr-4">
              <img src={provider.image} alt={provider.name} className="object-cover" />
            </Avatar>
            <div className="flex-1">
              <div className="flex items-center justify-between">
                <div>
                  <h3 className="text-sm font-semibold">{provider.name}</h3>
                  <p className="text-xxs text-gray-600 dark:text-gray-300">{provider.specialty}</p>
                </div>
                <span className={`text-xxs px-2 py-0.5 rounded-full ${
                  provider.status === 'confirmed' 
                    ? 'bg-green-100 text-green-800 dark:bg-green-900/30 dark:text-green-400' 
                    : 'bg-amber-100 text-amber-800 dark:bg-amber-900/30 dark:text-amber-400'
                }`}>
                  {provider.status === 'confirmed' ? 'Confirmed' : 'Pending'}
                </span>
              </div>
              <div className="mt-2 pt-2 border-t border-gray-100 dark:border-gray-700">
                <div className="grid grid-cols-2 gap-1 text-xxs text-gray-600 dark:text-gray-300">
                  <div className="flex items-center">
                    <CalendarDays size={12} className="mr-1" />
                    {provider.date}
                  </div>
                  <div className="flex justify-end">
                    {provider.time}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      ))}
      
      <div className="grid grid-cols-2 gap-3 mt-4">
        <button className="btn-primary text-xs flex items-center justify-center">
          <ChefHat size={14} className="mr-1" />
          Hire a Chef
        </button>
        <button className="btn-secondary text-xs flex items-center justify-center">
          <Users size={14} className="mr-1" />
          Hire a Nanny
        </button>
      </div>
    </div>
  );
};

export default ServicesView;
