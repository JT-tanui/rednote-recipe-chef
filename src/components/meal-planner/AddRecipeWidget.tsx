
import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { 
  PlusCircle, 
  Clock, 
  ChefHat, 
  Utensils,
  X
} from 'lucide-react';
import { useToast } from '@/components/ui/use-toast';

interface AddRecipeWidgetProps {
  onClose: () => void;
}

const AddRecipeWidget = ({ onClose }: AddRecipeWidgetProps) => {
  const navigate = useNavigate();
  const { toast } = useToast();
  const [formData, setFormData] = useState({
    name: '',
    description: '',
    duration: '',
    difficulty: 'Easy'
  });

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    
    // Validate form
    if (!formData.name.trim()) {
      toast({
        title: "Error",
        description: "Recipe name is required",
        variant: "destructive"
      });
      return;
    }
    
    // In a real app, we would save the recipe here
    toast({
      title: "Success",
      description: "Recipe added to your planner",
    });
    
    // Close the widget and navigate to meal planner
    onClose();
  };

  const goToRecipes = () => {
    navigate('/recipes');
  };

  return (
    <div className="fixed inset-0 bg-black/50 backdrop-blur-sm z-50 flex items-center justify-center p-4">
      <div className="bg-white dark:bg-gray-800 rounded-lg w-full max-w-md relative overflow-hidden">
        {/* Header */}
        <div className="bg-culinary-primary p-4 text-white">
          <div className="flex justify-between items-center">
            <h3 className="font-semibold flex items-center">
              <PlusCircle size={18} className="mr-2" />
              Add Recipe to Planner
            </h3>
            <button onClick={onClose} className="hover:bg-white/20 rounded-full p-1">
              <X size={18} />
            </button>
          </div>
        </div>
        
        {/* Form */}
        <form onSubmit={handleSubmit} className="p-4 space-y-4">
          <div className="space-y-2">
            <label htmlFor="name" className="block text-sm font-medium">Recipe Name</label>
            <Input
              id="name"
              name="name"
              value={formData.name}
              onChange={handleInputChange}
              placeholder="e.g., Homemade Pizza"
              className="w-full"
            />
          </div>
          
          <div className="space-y-2">
            <label htmlFor="description" className="block text-sm font-medium">Description (optional)</label>
            <Textarea
              id="description"
              name="description"
              value={formData.description}
              onChange={handleInputChange}
              placeholder="Brief description of your recipe"
              className="w-full"
            />
          </div>
          
          <div className="space-y-2">
            <label htmlFor="duration" className="block text-sm font-medium">Duration</label>
            <div className="relative">
              <Clock size={16} className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400" />
              <Input
                id="duration"
                name="duration"
                value={formData.duration}
                onChange={handleInputChange}
                placeholder="e.g., 30 minutes"
                className="pl-9"
              />
            </div>
          </div>
          
          <div className="space-y-2">
            <label htmlFor="difficulty" className="block text-sm font-medium">Difficulty</label>
            <div className="relative">
              <ChefHat size={16} className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400" />
              <select
                id="difficulty"
                name="difficulty"
                value={formData.difficulty}
                onChange={(e) => setFormData(prev => ({ ...prev, difficulty: e.target.value }))}
                className="w-full pl-9 h-10 rounded-md border border-input bg-background px-3 py-2 text-sm ring-offset-background focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2"
              >
                <option>Easy</option>
                <option>Medium</option>
                <option>Hard</option>
              </select>
            </div>
          </div>
          
          <div className="pt-2 flex flex-col gap-2">
            <Button type="submit" className="w-full">
              <PlusCircle size={16} className="mr-2" />
              Add to Planner
            </Button>
            
            <div className="text-center">
              <span className="text-xs text-gray-500">or</span>
            </div>
            
            <Button 
              type="button" 
              variant="outline" 
              className="w-full"
              onClick={goToRecipes}
            >
              <Utensils size={16} className="mr-2" />
              Browse Recipes
            </Button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default AddRecipeWidget;
