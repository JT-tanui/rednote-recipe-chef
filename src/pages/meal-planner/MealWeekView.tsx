
import { useState } from 'react';
import { ChevronLeft, ChevronRight, Plus } from 'lucide-react';

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

const daysOfWeek = ['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun'];

interface MealType {
  id: string;
  name: string;
  image: string;
}

interface MealWeekViewProps {
  activeWeek: Date;
  setActiveWeek: React.Dispatch<React.SetStateAction<Date>>;
}

const MealWeekView = ({ activeWeek, setActiveWeek }: MealWeekViewProps) => {
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
    <div className="mt-4">
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
              
              {meals.map((meal: MealType | null, index: number) => (
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
    </div>
  );
};

export default MealWeekView;
