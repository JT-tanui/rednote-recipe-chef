
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
    <MainLayout hideHeader={false}>
      <div className="min-h-screen bg-gradient-to-br from-background via-background to-accent/5">
        <div className="p-4 md:p-8 max-w-6xl mx-auto pb-20">
          {!isMobile && (
            <header className="mb-8 text-center">
              <h1 className="text-3xl font-bold bg-gradient-to-r from-primary to-primary/70 bg-clip-text text-transparent mb-2">
                Meal Planner
              </h1>
              <p className="text-muted-foreground text-lg">Organize your culinary journey with style</p>
            </header>
          )}
          
          {isMobile && (
            <header className="mb-6">
              <h1 className="text-xl font-bold bg-gradient-to-r from-primary to-primary/70 bg-clip-text text-transparent">Planner</h1>
              <p className="text-sm text-muted-foreground">Organize your meals, reservations, and services</p>
            </header>
          )}
          
          <Tabs value={activeTab} onValueChange={setActiveTab} className="w-full">
            <TabsList className={`w-full grid grid-cols-4 ${!isMobile ? 'h-12 p-1 bg-muted/50 backdrop-blur-sm' : 'h-10'}`}>
              <TabsTrigger 
                value="week-view" 
                className={`flex-1 ${!isMobile ? 'text-sm font-medium' : 'text-xs'} data-[state=active]:bg-background data-[state=active]:shadow-sm transition-all duration-200`}
              >
                <Utensils className={`${!isMobile ? 'w-4 h-4' : 'w-3 h-3'} mr-2`} />
                Meals
              </TabsTrigger>
              <TabsTrigger 
                value="reservations" 
                className={`flex-1 ${!isMobile ? 'text-sm font-medium' : 'text-xs'} data-[state=active]:bg-background data-[state=active]:shadow-sm transition-all duration-200`}
              >
                <MapPin className={`${!isMobile ? 'w-4 h-4' : 'w-3 h-3'} mr-2`} />
                Reservations
              </TabsTrigger>
              <TabsTrigger 
                value="services" 
                className={`flex-1 ${!isMobile ? 'text-sm font-medium' : 'text-xs'} data-[state=active]:bg-background data-[state=active]:shadow-sm transition-all duration-200`}
              >
                <ChefHat className={`${!isMobile ? 'w-4 h-4' : 'w-3 h-3'} mr-2`} />
                Services
              </TabsTrigger>
              <TabsTrigger 
                value="calendar" 
                className={`flex-1 ${!isMobile ? 'text-sm font-medium' : 'text-xs'} data-[state=active]:bg-background data-[state=active]:shadow-sm transition-all duration-200`}
              >
                <CalendarDays className={`${!isMobile ? 'w-4 h-4' : 'w-3 h-3'} mr-2`} />
                Calendar
              </TabsTrigger>
            </TabsList>
          
            <TabsContent value="week-view" className="mt-6">
              <div className="animate-fade-in">
                <MealWeekView activeWeek={activeWeek} setActiveWeek={setActiveWeek} />
              </div>
            </TabsContent>
            
            <TabsContent value="reservations" className="mt-6">
              <div className="animate-fade-in">
                <ReservationsView />
              </div>
            </TabsContent>
            
            <TabsContent value="services" className="mt-6">
              <div className="animate-fade-in">
                <ServicesView />
              </div>
            </TabsContent>
            
            <TabsContent value="calendar" className="mt-6">
              <div className="animate-fade-in">
                <CalendarView date={date} setDate={setDate} />
              </div>
            </TabsContent>
          </Tabs>
        </div>
      </div>
    </MainLayout>
  );
};

export default MealPlanner;
