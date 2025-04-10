
import { useState } from 'react';
import MainLayout from '@/components/layout/MainLayout';
import { Calendar } from '@/components/ui/calendar';
import { Card, CardContent } from '@/components/ui/card';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { 
  CalendarDays, Plus, ChevronLeft, ChevronRight, 
  Utensils, MapPin, ChefHat, Users
} from 'lucide-react';
import { Avatar } from '@/components/ui/avatar';

const daysOfWeek = ['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun'];

// Mock meal plan data
const mealPlanData = {
  breakfast: [
    { id: 'b1', name: 'Greek Yogurt Bowl', image: 'https://images.unsplash.com/photo-1608377205929-2f7aa211f3cb?q=80&w=2070' },
    { id: 'b2', name: 'Avocado Toast', image: 'https://images.unsplash.com/photo-1525351484163-7529414344d8?q=80&w=2080' },
    { id: 'b3', name: 'Smoothie Bowl', image: 'https://images.unsplash.com/photo-1493770348161-369560ae357d?q=80&w=2070' },
    null,
    { id: 'b5', name: 'Breakfast Burrito', image: 'https://images.unsplash.com/photo-1562059392-096320bccc7e?q=80&w=2119' },
    { id: 'b6', name: 'Pancakes', image: 'https://images.unsplash.com/photo-1567620905732-2d1ec7ab7445?q=80&w=1980' },
    { id: 'b7', name: 'Oatmeal', image: 'https://images.unsplash.com/photo-1569420067112-b57b4f024399?q=80&w=1974' },
  ],
  lunch: [
    { id: 'l1', name: 'Chicken Salad', image: 'https://images.unsplash.com/photo-1512621776951-a57141f2eefd?q=80&w=2070' },
    { id: 'l2', name: 'Quinoa Bowl', image: 'https://images.unsplash.com/photo-1546069901-ba9599a7e63c?q=80&w=2080' },
    null,
    { id: 'l4', name: 'Tuna Sandwich', image: 'https://images.unsplash.com/photo-1481070414801-51fd732d7184?q=80&w=2024' },
    { id: 'l5', name: 'Soup & Bread', image: 'https://images.unsplash.com/photo-1547592166-23ac45744acd?q=80&w=2071' },
    { id: 'l6', name: 'Buddha Bowl', image: 'https://images.unsplash.com/photo-1611574474484-ced6cb8d60dc?q=80&w=2070' },
    { id: 'l7', name: 'Pasta Salad', image: 'https://images.unsplash.com/photo-1583204818605-832c851c10f6?q=80&w=1974' },
  ],
  dinner: [
    { id: 'd1', name: 'Salmon & Veggies', image: 'https://images.unsplash.com/photo-1519708227418-c8fd9a32b7a2?q=80&w=2070' },
    { id: 'd2', name: 'Vegetable Stir Fry', image: 'https://images.unsplash.com/photo-1512058564366-18510be2db19?q=80&w=2072' },
    { id: 'd3', name: 'Chicken Curry', image: 'https://images.unsplash.com/photo-1604579905561-b5c528289aff?q=80&w=2072' },
    { id: 'd4', name: 'Mediterranean Plate', image: 'https://images.unsplash.com/photo-1563379926898-05f4575a45d8?q=80&w=2070' },
    null,
    { id: 'd6', name: 'Veggie Burger', image: 'https://images.unsplash.com/photo-1551782450-17144efb9c50?q=80&w=2069' },
    { id: 'd7', name: 'Grilled Steak', image: 'https://images.unsplash.com/photo-1546964124-0cce460f38ef?q=80&w=2070' },
  ],
};

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

const MealPlanner = () => {
  const [date, setDate] = useState<Date | undefined>(new Date());
  const [activeWeek, setActiveWeek] = useState<Date>(new Date());
  const [activeTab, setActiveTab] = useState('week-view');

  const handlePreviousWeek = () => {
    const prevWeek = new Date(activeWeek);
    prevWeek.setDate(prevWeek.getDate() - 7);
    setActiveWeek(prevWeek);
  };

  const handleNextWeek = () => {
    const nextWeek = new Date(activeWeek);
    nextWeek.setDate(nextWeek.getDate() + 7);
    setActiveWeek(nextWeek);
  };

  // Get the week dates based on activeWeek
  const getWeekDates = () => {
    const monday = new Date(activeWeek);
    const day = monday.getDay();
    const diff = monday.getDate() - day + (day === 0 ? -6 : 1);
    monday.setDate(diff);

    const weekDates = [];
    for (let i = 0; i < 7; i++) {
      const date = new Date(monday);
      date.setDate(monday.getDate() + i);
      weekDates.push(date);
    }
    return weekDates;
  };

  const weekDates = getWeekDates();

  return (
    <MainLayout>
      <div className="p-4 md:p-6 max-w-4xl mx-auto pb-20">
        <header className="mb-6">
          <h1 className="text-xl font-bold">Planner</h1>
          <p className="text-sm text-gray-500 dark:text-gray-400">Organize your meals, reservations, and services</p>
        </header>

        <Tabs value={activeTab} onValueChange={setActiveTab} className="w-full">
          <TabsList className="w-full grid grid-cols-4">
            <TabsTrigger value="week-view" className="flex-1 text-xs">
              <Utensils className="w-3 h-3 mr-1" />
              Meals
            </TabsTrigger>
            <TabsTrigger value="reservations" className="flex-1 text-xs">
              <MapPin className="w-3 h-3 mr-1" />
              Reservations
            </TabsTrigger>
            <TabsTrigger value="services" className="flex-1 text-xs">
              <ChefHat className="w-3 h-3 mr-1" />
              Services
            </TabsTrigger>
            <TabsTrigger value="calendar" className="flex-1 text-xs">
              <CalendarDays className="w-3 h-3 mr-1" />
              Calendar
            </TabsTrigger>
          </TabsList>
          
          <TabsContent value="week-view" className="mt-4">
            <div className="flex justify-between items-center mb-4">
              <button 
                onClick={handlePreviousWeek} 
                className="p-2 rounded-full hover:bg-gray-100 dark:hover:bg-gray-800"
              >
                <ChevronLeft size={20} />
              </button>
              
              <div className="text-sm font-medium">
                {`${weekDates[0].toLocaleDateString('en-US', { month: 'short', day: 'numeric' })} - ${weekDates[6].toLocaleDateString('en-US', { month: 'short', day: 'numeric' })}`}
              </div>
              
              <button 
                onClick={handleNextWeek} 
                className="p-2 rounded-full hover:bg-gray-100 dark:hover:bg-gray-800"
              >
                <ChevronRight size={20} />
              </button>
            </div>
            
            <div className="overflow-x-auto">
              <div className="min-w-[800px]">
                {/* Day headers */}
                <div className="grid grid-cols-8 gap-2 mb-2">
                  <div className="p-2"></div>
                  {daysOfWeek.map((day, index) => (
                    <div key={day} className="p-2 text-center">
                      <div className="text-xxs font-medium">{day}</div>
                      <div className="text-xs">
                        {weekDates[index].getDate()}
                      </div>
                    </div>
                  ))}
                </div>
                
                {/* Meal plan grid */}
                {Object.entries(mealPlanData).map(([mealType, meals]) => (
                  <div key={mealType} className="grid grid-cols-8 gap-2 mb-4">
                    <div className="p-2 flex items-center">
                      <span className="text-xs font-medium capitalize">{mealType}</span>
                    </div>
                    
                    {meals.map((meal, index) => (
                      <div key={`${mealType}-${index}`} className="relative aspect-square">
                        {meal ? (
                          <div className="h-full rounded-md overflow-hidden shadow-sm relative group">
                            <img 
                              src={meal.image} 
                              alt={meal.name} 
                              className="w-full h-full object-cover"
                            />
                            <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent flex items-end p-1">
                              <span className="text-white text-xxs line-clamp-1">{meal.name}</span>
                            </div>
                            <div className="absolute inset-0 bg-black/50 opacity-0 group-hover:opacity-100 flex items-center justify-center transition-opacity">
                              <button className="text-white text-xxs bg-culinary-primary px-2 py-1 rounded">
                                Edit
                              </button>
                            </div>
                          </div>
                        ) : (
                          <button className="w-full h-full rounded-md border-2 border-dashed border-gray-300 dark:border-gray-700 flex items-center justify-center bg-gray-50 dark:bg-gray-800/50 hover:bg-gray-100 dark:hover:bg-gray-800 transition-colors">
                            <Plus size={16} className="text-gray-400" />
                          </button>
                        )}
                      </div>
                    ))}
                  </div>
                ))}
              </div>
            </div>
          </TabsContent>
          
          <TabsContent value="reservations" className="mt-4">
            <div className="space-y-4">
              <h2 className="text-sm font-medium mb-3">Upcoming Reservations</h2>
              
              {reservations.map(reservation => (
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
          </TabsContent>
          
          <TabsContent value="services" className="mt-4">
            <div className="space-y-4">
              <h2 className="text-sm font-medium mb-3">Booked Services</h2>
              
              {serviceProviders.map(provider => (
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
          </TabsContent>
          
          <TabsContent value="calendar" className="mt-4">
            <Card>
              <CardContent className="p-4">
                <div className="flex flex-col space-y-4 sm:flex-row sm:space-x-4 sm:space-y-0">
                  <div className="sm:w-1/2">
                    <Calendar
                      mode="single"
                      selected={date}
                      onSelect={setDate}
                      className="rounded-md border"
                    />
                  </div>
                  
                  <div className="sm:w-1/2">
                    <div className="mb-4">
                      <h3 className="text-sm font-medium">
                        {date?.toLocaleDateString('en-US', { weekday: 'long', month: 'long', day: 'numeric' })}
                      </h3>
                    </div>
                    
                    {date && (
                      <div className="space-y-3">
                        <div className="p-3 bg-gray-50 dark:bg-gray-800 rounded-md">
                          <div className="text-xs font-medium mb-2">Breakfast</div>
                          <div className="flex items-center justify-between">
                            <div className="text-sm">Greek Yogurt Bowl</div>
                            <button className="text-xxs bg-culinary-primary text-white px-2 py-1 rounded">
                              Change
                            </button>
                          </div>
                        </div>
                        
                        <div className="p-3 bg-gray-50 dark:bg-gray-800 rounded-md">
                          <div className="text-xs font-medium mb-2">Lunch</div>
                          <div className="flex items-center justify-between">
                            <div className="text-sm">Chicken Salad</div>
                            <button className="text-xxs bg-culinary-primary text-white px-2 py-1 rounded">
                              Change
                            </button>
                          </div>
                        </div>
                        
                        <div className="p-3 bg-gray-50 dark:bg-gray-800 rounded-md">
                          <div className="text-xs font-medium mb-2">Dinner</div>
                          <div className="flex items-center justify-between">
                            <div className="text-sm">Salmon & Veggies</div>
                            <button className="text-xxs bg-culinary-primary text-white px-2 py-1 rounded">
                              Change
                            </button>
                          </div>
                        </div>
                        
                        <button className="w-full btn-secondary mt-4 text-sm flex items-center justify-center">
                          <CalendarDays size={16} className="mr-1" />
                          Generate Full Week Plan
                        </button>
                      </div>
                    )}
                  </div>
                </div>
              </CardContent>
            </Card>
          </TabsContent>
        </Tabs>
      </div>
    </MainLayout>
  );
};

export default MealPlanner;
