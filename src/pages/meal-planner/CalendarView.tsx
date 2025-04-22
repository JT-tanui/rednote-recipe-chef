
import React, { useState } from 'react';
import { Calendar } from '@/components/ui/calendar';
import { Card, CardContent } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { CalendarDays, Plus, Edit2 } from 'lucide-react';
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import { useNavigate } from 'react-router-dom';

interface CalendarViewProps {
  date: Date | undefined;
  setDate: React.Dispatch<React.SetStateAction<Date | undefined>>;
}

const CalendarView = ({ date, setDate }: CalendarViewProps) => {
  const navigate = useNavigate();
  const [editingMeal, setEditingMeal] = useState<string | null>(null);

  const handleAddRecipe = () => {
    navigate('/recipes');
  };

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
                  {['Breakfast', 'Lunch', 'Dinner'].map((mealType) => (
                    <Dialog key={mealType}>
                      <div className="p-3 bg-gray-50 dark:bg-gray-800 rounded-md">
                        <div className="text-xs font-medium mb-2">{mealType}</div>
                        <div className="flex items-center justify-between">
                          <div className="text-sm">
                            {editingMeal === mealType ? 'Select Recipe' : `Sample ${mealType}`}
                          </div>
                          <DialogTrigger asChild>
                            <Button variant="ghost" size="sm" className="hover:bg-gray-200 dark:hover:bg-gray-700">
                              {editingMeal === mealType ? <Plus size={16} /> : <Edit2 size={16} />}
                            </Button>
                          </DialogTrigger>
                        </div>
                      </div>
                      <DialogContent>
                        <DialogHeader>
                          <DialogTitle>Add Recipe to {mealType}</DialogTitle>
                          <DialogDescription>
                            Choose a recipe from your collection or browse new recipes
                          </DialogDescription>
                        </DialogHeader>
                        <div className="grid gap-4 py-4">
                          <Button onClick={handleAddRecipe} className="w-full">
                            Browse Recipes
                          </Button>
                          <Button variant="outline" className="w-full">
                            View Saved Recipes
                          </Button>
                        </div>
                      </DialogContent>
                    </Dialog>
                  ))}
                  
                  <Button 
                    variant="default" 
                    className="w-full mt-4 flex items-center justify-center gap-2"
                    onClick={() => navigate('/meal-planner')}
                  >
                    <CalendarDays size={16} />
                    Generate Full Week Plan
                  </Button>
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
