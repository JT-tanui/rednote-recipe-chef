
import React, { useState } from 'react';
import { Calendar } from '@/components/ui/calendar';
import { Card, CardContent } from '@/components/ui/card';
import { CalendarDays } from 'lucide-react';

interface CalendarViewProps {
  date: Date | undefined;
  setDate: React.Dispatch<React.SetStateAction<Date | undefined>>;
}

const CalendarView = ({ date, setDate }: CalendarViewProps) => {
  return (
    <div className="mt-4">
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
    </div>
  );
};

export default CalendarView;
