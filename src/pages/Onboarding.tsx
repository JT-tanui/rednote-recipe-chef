
import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { 
  ChevronRight, ChevronLeft, Utensils, Globe, Clock, 
  CheckCircle2, X, CupSoda, Beef, Carrot, Fish, Wheat
} from 'lucide-react';
import { useNavigate } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import { Progress } from '@/components/ui/progress';

// Dietary preference options
const dietaryOptions = [
  { id: 'vegetarian', label: 'Vegetarian', icon: Carrot },
  { id: 'vegan', label: 'Vegan', icon: Wheat },
  { id: 'pescatarian', label: 'Pescatarian', icon: Fish },
  { id: 'omnivore', label: 'Omnivore', icon: Beef },
  { id: 'gluten-free', label: 'Gluten Free', icon: CupSoda },
];

// Cuisine preferences
const cuisineOptions = [
  { id: 'italian', label: 'Italian' },
  { id: 'japanese', label: 'Japanese' },
  { id: 'mexican', label: 'Mexican' },
  { id: 'indian', label: 'Indian' },
  { id: 'chinese', label: 'Chinese' },
  { id: 'thai', label: 'Thai' },
  { id: 'mediterranean', label: 'Mediterranean' },
  { id: 'french', label: 'French' },
  { id: 'american', label: 'American' },
  { id: 'korean', label: 'Korean' },
];

const Onboarding = () => {
  const navigate = useNavigate();
  const [step, setStep] = useState(0);
  const [dietary, setDietary] = useState<string | null>(null);
  const [cuisines, setCuisines] = useState<string[]>([]);
  const [mealTime, setMealTime] = useState<'quick' | 'medium' | 'elaborate' | null>(null);
  
  const totalSteps = 4;
  
  const handleNextStep = () => {
    if (step === totalSteps - 1) {
      // Complete onboarding and navigate to home
      navigate('/');
      return;
    }
    setStep(prev => prev + 1);
  };
  
  const handlePrevStep = () => {
    setStep(prev => Math.max(0, prev - 1));
  };
  
  const handleDietarySelect = (id: string) => {
    setDietary(id);
  };
  
  const handleCuisineToggle = (id: string) => {
    setCuisines(prev => 
      prev.includes(id) 
        ? prev.filter(c => c !== id) 
        : [...prev, id]
    );
  };
  
  const handleMealTimeSelect = (time: 'quick' | 'medium' | 'elaborate') => {
    setMealTime(time);
  };

  return (
    <div className="min-h-screen bg-gradient-to-b from-culinary-primary/20 to-gray-50 dark:from-culinary-primary/10 dark:to-gray-900 flex flex-col">
      {/* Progress indicator */}
      <div className="p-4">
        <Progress value={((step + 1) / totalSteps) * 100} className="h-1" />
      </div>
      
      {/* Content */}
      <div className="flex-1 flex items-center justify-center p-6">
        <AnimatePresence mode="wait">
          <motion.div
            key={step}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.3 }}
            className="w-full max-w-md"
          >
            {step === 0 && (
              <div className="text-center">
                <div className="relative h-40 mb-6 overflow-hidden">
                  <img 
                    src="https://images.unsplash.com/photo-1504674900247-0877df9cc836?q=80&w=2070" 
                    alt="Delicious food"
                    className="absolute inset-0 object-cover w-full h-full rounded-xl"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-black/20 flex items-center justify-center">
                    <h1 className="text-3xl font-bold text-white">Welcome to DineX</h1>
                  </div>
                </div>
                <p className="text-sm text-gray-600 dark:text-gray-300 mb-8">
                  Discover recipes, book restaurants, and find chefs - all in one place.
                </p>
                
                <div className="grid grid-cols-3 gap-4 mb-8">
                  <div className="flex flex-col items-center p-3 bg-white dark:bg-gray-800 rounded-lg shadow-sm">
                    <Utensils className="text-culinary-primary mb-2" />
                    <span className="text-xs text-gray-600 dark:text-gray-300">Personalized Recipes</span>
                  </div>
                  <div className="flex flex-col items-center p-3 bg-white dark:bg-gray-800 rounded-lg shadow-sm">
                    <Globe className="text-culinary-primary mb-2" />
                    <span className="text-xs text-gray-600 dark:text-gray-300">Global Cuisines</span>
                  </div>
                  <div className="flex flex-col items-center p-3 bg-white dark:bg-gray-800 rounded-lg shadow-sm">
                    <Clock className="text-culinary-primary mb-2" />
                    <span className="text-xs text-gray-600 dark:text-gray-300">Time-Saving</span>
                  </div>
                </div>
                
                <Button className="w-full bg-culinary-primary hover:bg-culinary-primary/90" onClick={handleNextStep}>
                  Get Started
                </Button>
              </div>
            )}
            
            {step === 1 && (
              <div>
                <h2 className="text-lg font-bold mb-2">What's your dietary preference?</h2>
                <p className="text-sm text-gray-600 dark:text-gray-300 mb-6">
                  We'll personalize your food discovery based on your preferences.
                </p>
                
                <div className="space-y-3 mb-8">
                  {dietaryOptions.map(option => (
                    <button
                      key={option.id}
                      onClick={() => handleDietarySelect(option.id)}
                      className={`w-full p-3 rounded-lg flex items-center justify-between transition-colors ${
                        dietary === option.id 
                          ? 'bg-culinary-primary text-white' 
                          : 'bg-white dark:bg-gray-800'
                      }`}
                    >
                      <div className="flex items-center">
                        <option.icon className={`mr-3 ${dietary === option.id ? 'text-white' : 'text-culinary-primary'}`} />
                        <span>{option.label}</span>
                      </div>
                      {dietary === option.id && <CheckCircle2 size={18} />}
                    </button>
                  ))}
                </div>
                
                <div className="flex space-x-3">
                  <Button variant="outline" className="flex-1" onClick={handlePrevStep}>
                    <ChevronLeft size={18} className="mr-1" />
                    Back
                  </Button>
                  <Button 
                    className="flex-1 bg-culinary-primary hover:bg-culinary-primary/90" 
                    onClick={handleNextStep}
                    disabled={!dietary}
                  >
                    Continue
                    <ChevronRight size={18} className="ml-1" />
                  </Button>
                </div>
              </div>
            )}
            
            {step === 2 && (
              <div>
                <h2 className="text-lg font-bold mb-2">What cuisines do you enjoy?</h2>
                <p className="text-sm text-gray-600 dark:text-gray-300 mb-6">
                  Select all that apply. You can always change these later.
                </p>
                
                <div className="grid grid-cols-2 gap-3 mb-8">
                  {cuisineOptions.map(cuisine => (
                    <button
                      key={cuisine.id}
                      onClick={() => handleCuisineToggle(cuisine.id)}
                      className={`p-3 rounded-lg flex items-center justify-between transition-colors ${
                        cuisines.includes(cuisine.id) 
                          ? 'bg-culinary-primary text-white' 
                          : 'bg-white dark:bg-gray-800'
                      }`}
                    >
                      <span>{cuisine.label}</span>
                      {cuisines.includes(cuisine.id) && <CheckCircle2 size={16} />}
                    </button>
                  ))}
                </div>
                
                <div className="flex space-x-3">
                  <Button variant="outline" className="flex-1" onClick={handlePrevStep}>
                    <ChevronLeft size={18} className="mr-1" />
                    Back
                  </Button>
                  <Button 
                    className="flex-1 bg-culinary-primary hover:bg-culinary-primary/90" 
                    onClick={handleNextStep}
                    disabled={cuisines.length === 0}
                  >
                    Continue
                    <ChevronRight size={18} className="ml-1" />
                  </Button>
                </div>
              </div>
            )}
            
            {step === 3 && (
              <div>
                <h2 className="text-lg font-bold mb-2">How much time do you spend cooking?</h2>
                <p className="text-sm text-gray-600 dark:text-gray-300 mb-6">
                  We'll show you recipes that fit your schedule.
                </p>
                
                <div className="space-y-3 mb-8">
                  <button
                    onClick={() => handleMealTimeSelect('quick')}
                    className={`w-full p-4 rounded-lg text-left transition-colors ${
                      mealTime === 'quick' 
                        ? 'bg-culinary-primary text-white' 
                        : 'bg-white dark:bg-gray-800'
                    }`}
                  >
                    <div className="flex justify-between items-center">
                      <div>
                        <h3 className="font-medium">Quick & Easy</h3>
                        <p className="text-xs opacity-80">30 minutes or less</p>
                      </div>
                      {mealTime === 'quick' && <CheckCircle2 size={20} />}
                    </div>
                  </button>
                  
                  <button
                    onClick={() => handleMealTimeSelect('medium')}
                    className={`w-full p-4 rounded-lg text-left transition-colors ${
                      mealTime === 'medium' 
                        ? 'bg-culinary-primary text-white' 
                        : 'bg-white dark:bg-gray-800'
                    }`}
                  >
                    <div className="flex justify-between items-center">
                      <div>
                        <h3 className="font-medium">Moderate</h3>
                        <p className="text-xs opacity-80">30-60 minutes</p>
                      </div>
                      {mealTime === 'medium' && <CheckCircle2 size={20} />}
                    </div>
                  </button>
                  
                  <button
                    onClick={() => handleMealTimeSelect('elaborate')}
                    className={`w-full p-4 rounded-lg text-left transition-colors ${
                      mealTime === 'elaborate' 
                        ? 'bg-culinary-primary text-white' 
                        : 'bg-white dark:bg-gray-800'
                    }`}
                  >
                    <div className="flex justify-between items-center">
                      <div>
                        <h3 className="font-medium">Elaborate</h3>
                        <p className="text-xs opacity-80">I enjoy spending time in the kitchen</p>
                      </div>
                      {mealTime === 'elaborate' && <CheckCircle2 size={20} />}
                    </div>
                  </button>
                </div>
                
                <div className="flex space-x-3">
                  <Button variant="outline" className="flex-1" onClick={handlePrevStep}>
                    <ChevronLeft size={18} className="mr-1" />
                    Back
                  </Button>
                  <Button 
                    className="flex-1 bg-culinary-primary hover:bg-culinary-primary/90" 
                    onClick={handleNextStep}
                    disabled={!mealTime}
                  >
                    Continue
                    <ChevronRight size={18} className="ml-1" />
                  </Button>
                </div>
              </div>
            )}
          </motion.div>
        </AnimatePresence>
      </div>
      
      {/* Skip button */}
      {step > 0 && step < totalSteps - 1 && (
        <div className="p-4 text-center">
          <button 
            className="text-xs text-gray-500 hover:text-gray-800 dark:text-gray-400 dark:hover:text-gray-200"
            onClick={() => navigate('/')}
          >
            Skip for now
          </button>
        </div>
      )}
    </div>
  );
};

export default Onboarding;
