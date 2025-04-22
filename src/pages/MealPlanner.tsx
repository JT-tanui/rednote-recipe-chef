
import { useState } from 'react';
import MainLayout from '@/components/layout/MainLayout';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { CalendarDays, Utensils, MapPin, ChefHat, PlusCircle } from 'lucide-react';
import { useIsMobile } from '@/hooks/use-mobile';
import { Button } from '@/components/ui/button';

import MealWeekView from './meal-planner/MealWeekView';
import ReservationsView from './meal-planner/ReservationsView';
import ServicesView from './meal-planner/ServicesView';
import CalendarView from './meal-planner/CalendarView';
import AddRecipeWidget from '@/components/meal-planner/AddRecipeWidget';

const MealPlanner = () => {
  const isMobile = useIsMobile();
  const [date, setDate] = useState<Date | undefined>(new Date());
  const [activeWeek, setActiveWeek] = useState<Date>(new Date());
  const [activeTab, setActiveTab] = useState('week-view');
  const [showAddWidget, setShowAddWidget] = useState(false);

  return (
    <MainLayout>
      <div className="p-4 md:p-6 max-w-4xl mx-auto pb-20">
        {isMobile && (
          <header className="mb-6">
            <div className="flex justify-between items-center mb-2">
              <h1 className="text-xl font-bold">Planner</h1>
              <Button 
                size="sm" 
                onClick={() => setShowAddWidget(true)}
                className="flex items-center gap-1"
              >
                <PlusCircle size={16} />
                <span>Add</span>
              </Button>
            </div>
            <p className="text-sm text-gray-500 dark:text-gray-400">Organize your meals, reservations, and services</p>
          </header>
        )}
        
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
          
          {!isMobile && (
            <div className="flex justify-end mt-4">
              <Button 
                onClick={() => setShowAddWidget(true)}
                className="flex items-center gap-1"
              >
                <PlusCircle size={16} />
                <span>Add Recipe</span>
              </Button>
            </div>
          )}
          
          <TabsContent value="week-view">
            <MealWeekView activeWeek={activeWeek} setActiveWeek={setActiveWeek} />
          </TabsContent>
          
          <TabsContent value="reservations">
            <ReservationsView />
          </TabsContent>
          
          <TabsContent value="services">
            <ServicesView />
          </TabsContent>
          
          <TabsContent value="calendar">
            <CalendarView date={date} setDate={setDate} />
          </TabsContent>
        </Tabs>
      </div>
      
      {/* Add Recipe Widget Modal */}
      {showAddWidget && (
        <AddRecipeWidget onClose={() => setShowAddWidget(false)} />
      )}
    </MainLayout>
  );
};

export default MealPlanner;
