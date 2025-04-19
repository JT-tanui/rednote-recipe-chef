import { useState } from 'react';
import MainLayout from '@/components/layout/MainLayout';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { CalendarDays, Utensils, MapPin, ChefHat } from 'lucide-react';
import { useIsMobile } from '@/hooks/use-mobile';

import MealWeekView from './meal-planner/MealWeekView';
import ReservationsView from './meal-planner/ReservationsView';
import ServicesView from './meal-planner/ServicesView';
import CalendarView from './meal-planner/CalendarView';

const MealPlanner = () => {
  const isMobile = useIsMobile();
  const [date, setDate] = useState<Date | undefined>(new Date());
  const [activeWeek, setActiveWeek] = useState<Date>(new Date());
  const [activeTab, setActiveTab] = useState('week-view');

  return (
    <MainLayout>
      <div className="p-4 md:p-6 max-w-4xl mx-auto pb-20">
        {isMobile && (
          <header className="mb-6">
            <h1 className="text-xl font-bold">Planner</h1>
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
    </MainLayout>
  );
};

export default MealPlanner;
