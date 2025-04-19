
import { useState } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { 
  Heart, 
  Calendar, 
  Clock, 
  Star, 
  MessageSquare, 
  Share, 
  Plus, 
  CheckCircle, 
  PlayCircle 
} from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Tabs, TabsList, TabsTrigger, TabsContent } from '@/components/ui/tabs';
import { useToast } from '@/components/ui/use-toast';
import MainLayout from '@/components/layout/MainLayout';
import { useIsMobile } from '@/hooks/use-mobile';

// Mock recipe data - in a real app this would come from an API
const mockRecipeDetail = {
  id: 'r1',
  title: 'Spicy Thai Basil Chicken',
  image: 'https://images.unsplash.com/photo-1569058242567-93de6f36f8eb?q=80&w=2070',
  duration: '30 mins',
  difficulty: 'Medium',
  chef: 'Jamie Oliver',
  likes: 1240,
  saved: false,
  rating: 4.8,
  reviewCount: 356,
  description: 'A flavorful and spicy Thai dish that combines aromatic basil with tender chicken. Perfect for a quick weeknight dinner that packs a punch.',
  servings: 4,
  ingredients: [
    '1 lb boneless skinless chicken breast, cut into bite-sized pieces',
    '4 cloves garlic, minced',
    '2-3 Thai chili peppers, finely chopped',
    '1 cup Thai basil leaves',
    '2 tbsp vegetable oil',
    '1 tbsp oyster sauce',
    '1 tbsp fish sauce',
    '1 tsp soy sauce',
    '1 tsp sugar',
    '1/2 cup chicken broth',
    '1 red bell pepper, sliced',
    '1/2 onion, sliced'
  ],
  instructions: [
    'Heat oil in a wok or large skillet over high heat.',
    'Add garlic and chilies, stir-fry for 30 seconds until fragrant.',
    'Add chicken and stir-fry for 3-4 minutes until almost cooked through.',
    'Add bell pepper and onion, continue cooking for 2 minutes.',
    'Stir in oyster sauce, fish sauce, soy sauce, sugar and chicken broth.',
    'Bring to a simmer and cook for 2-3 minutes until sauce slightly thickens.',
    'Turn off heat and fold in Thai basil leaves until wilted.',
    'Serve immediately over steamed rice.'
  ],
  comments: [
    { id: 'c1', user: 'Sarah J.', comment: 'Made this last night and it was delicious! I added some extra veggies.', timestamp: '2 days ago' },
    { id: 'c2', user: 'Mike T.', comment: 'Great recipe! I reduced the chilies a bit as my family prefers less heat.', timestamp: '1 week ago' },
    { id: 'c3', user: 'Leila K.', comment: 'The flavors in this dish are amazing! Will definitely make again.', timestamp: '2 weeks ago' }
  ],
  nutrition: {
    calories: 320,
    protein: '28g',
    carbs: '12g',
    fat: '18g',
    fiber: '3g',
    sugar: '4g'
  },
  tags: ['Asian', 'Spicy', 'Quick', 'Poultry']
};

const RecipeDetailPage = () => {
  const { id } = useParams<{ id: string }>();
  const navigate = useNavigate();
  const { toast } = useToast();
  const isMobile = useIsMobile();
  
  // In a real app, fetch recipe data based on the id
  const [recipe] = useState(mockRecipeDetail);
  const [isSaved, setIsSaved] = useState(false);
  const [isLiked, setIsLiked] = useState(false);
  const [comment, setComment] = useState('');
  const [isCookingMode, setIsCookingMode] = useState(false);
  const [currentStep, setCurrentStep] = useState(0);

  const handleSaveRecipe = () => {
    setIsSaved(!isSaved);
    toast({
      title: isSaved ? "Recipe removed from saved" : "Recipe saved",
      description: isSaved ? "This recipe has been removed from your saved collection" : "This recipe has been added to your saved collection",
    });
  };

  const handleLikeRecipe = () => {
    setIsLiked(!isLiked);
  };

  const handleAddToMealPlan = () => {
    toast({
      title: "Added to Meal Plan",
      description: "This recipe has been added to your meal planner",
    });
    navigate('/meal-planner');
  };

  const handleCommentSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!comment.trim()) return;
    
    toast({
      title: "Comment posted",
      description: "Your comment has been added to this recipe",
    });
    setComment('');
  };

  const toggleCookingMode = () => {
    setIsCookingMode(!isCookingMode);
    setCurrentStep(0);
  };

  const nextStep = () => {
    if (currentStep < recipe.instructions.length - 1) {
      setCurrentStep(currentStep + 1);
    } else {
      setIsCookingMode(false);
      toast({
        title: "Cooking complete!",
        description: "Well done! You've completed all the cooking steps.",
      });
    }
  };

  const prevStep = () => {
    if (currentStep > 0) {
      setCurrentStep(currentStep - 1);
    }
  };

  // Render cooking mode UI if active
  if (isCookingMode) {
    return (
      <div className="fixed inset-0 bg-background z-50 flex flex-col">
        <div className="bg-primary p-4 text-primary-foreground">
          <div className="flex justify-between items-center">
            <Button variant="ghost" onClick={toggleCookingMode} className="text-primary-foreground">
              Exit
            </Button>
            <h2 className="text-lg font-bold">{recipe.title} - Step {currentStep + 1}/{recipe.instructions.length}</h2>
            <span></span> {/* Empty span for flex layout balance */}
          </div>
        </div>
        
        <div className="flex-1 overflow-auto p-6 flex flex-col justify-center">
          <div className="max-w-2xl mx-auto bg-card p-8 rounded-xl shadow-lg">
            <p className="text-2xl font-medium mb-8 text-center">{recipe.instructions[currentStep]}</p>
            
            <div className="flex justify-between mt-12">
              <Button 
                variant="outline" 
                onClick={prevStep}
                disabled={currentStep === 0}
              >
                Previous
              </Button>
              <Button onClick={nextStep}>
                {currentStep === recipe.instructions.length - 1 ? "Finish" : "Next"}
              </Button>
            </div>
          </div>
        </div>
        
        <div className="p-4 bg-muted">
          <div className="flex justify-between items-center">
            <div>
              <p className="text-sm font-medium">Ingredients needed for this step:</p>
              <p className="text-xs text-muted-foreground mt-1">
                {recipe.ingredients[Math.min(currentStep, recipe.ingredients.length - 1)]}
              </p>
            </div>
            <Clock className="text-muted-foreground" size={20} />
          </div>
        </div>
      </div>
    );
  }

  return (
    <MainLayout>
      <div className={`pb-24 md:pb-6 ${!isMobile ? "max-w-5xl mx-auto" : ""}`}>
        {/* Hero section */}
        <div className="relative h-64 md:h-96">
          <img 
            src={recipe.image} 
            alt={recipe.title} 
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-b from-transparent to-black/70" />
          
          <div className="absolute bottom-0 left-0 right-0 p-4 text-white">
            <div className="flex justify-between items-center">
              <h1 className="text-xl md:text-3xl font-bold">{recipe.title}</h1>
              <div className="flex space-x-2">
                <button 
                  onClick={handleLikeRecipe}
                  className="bg-white/20 p-2 rounded-full backdrop-blur-sm transition-colors hover:bg-white/30"
                >
                  <Heart className={isLiked ? "fill-culinary-primary text-culinary-primary" : "text-white"} size={20} />
                </button>
                <button 
                  onClick={handleSaveRecipe}
                  className="bg-white/20 p-2 rounded-full backdrop-blur-sm transition-colors hover:bg-white/30"
                >
                  <Plus className={isSaved ? "fill-culinary-primary text-culinary-primary" : "text-white"} size={20} />
                </button>
              </div>
            </div>
            
            <div className="flex flex-wrap gap-2 mt-2">
              <div className="flex items-center text-xs bg-white/20 px-2 py-1 rounded-full backdrop-blur-sm">
                <Clock size={12} className="mr-1" />
                <span>{recipe.duration}</span>
              </div>
              <div className="flex items-center text-xs bg-white/20 px-2 py-1 rounded-full backdrop-blur-sm">
                <Star size={12} className="mr-1 fill-culinary-accent text-culinary-accent" />
                <span>{recipe.rating} ({recipe.reviewCount})</span>
              </div>
              <div className="flex items-center text-xs bg-white/20 px-2 py-1 rounded-full backdrop-blur-sm">
                <span>Difficulty: {recipe.difficulty}</span>
              </div>
            </div>
          </div>
        </div>
        
        {/* Recipe content */}
        <div className="px-4 py-6 md:px-0">
          {/* Action buttons */}
          <div className="flex flex-wrap gap-3 mb-6">
            <Button onClick={handleAddToMealPlan} className="flex items-center">
              <Calendar size={16} className="mr-2" />
              Add to Meal Plan
            </Button>
            <Button onClick={toggleCookingMode} className="flex items-center" variant="secondary">
              <PlayCircle size={16} className="mr-2" />
              Start Cooking Mode
            </Button>
          </div>
          
          {/* Description */}
          <div className="mb-6">
            <h2 className="text-lg font-semibold mb-2">About</h2>
            <p className="text-sm text-muted-foreground">{recipe.description}</p>
          </div>
          
          <Tabs defaultValue="ingredients" className="w-full">
            <TabsList className="w-full grid grid-cols-3">
              <TabsTrigger value="ingredients">Ingredients</TabsTrigger>
              <TabsTrigger value="instructions">Instructions</TabsTrigger>
              <TabsTrigger value="comments">Comments</TabsTrigger>
            </TabsList>
            
            {/* Ingredients tab */}
            <TabsContent value="ingredients" className="mt-4">
              <div className="bg-card rounded-lg p-4">
                <div className="flex justify-between items-center mb-4">
                  <h3 className="font-medium">Ingredients</h3>
                  <span className="text-sm text-muted-foreground">{recipe.servings} servings</span>
                </div>
                <ul className="space-y-2">
                  {recipe.ingredients.map((ingredient, index) => (
                    <li key={index} className="flex items-start">
                      <div className="h-5 w-5 rounded-full border border-primary flex items-center justify-center mr-3 mt-0.5">
                        <CheckCircle size={12} className="text-primary opacity-0 hover:opacity-100 cursor-pointer" />
                      </div>
                      <span className="text-sm">{ingredient}</span>
                    </li>
                  ))}
                </ul>
              </div>
              
              {/* Nutrition info */}
              <div className="mt-4 bg-card rounded-lg p-4">
                <h3 className="font-medium mb-3">Nutrition Information</h3>
                <div className="grid grid-cols-3 gap-2 text-center">
                  <div className="bg-background p-2 rounded">
                    <p className="text-xs text-muted-foreground">Calories</p>
                    <p className="font-medium text-sm">{recipe.nutrition.calories}</p>
                  </div>
                  <div className="bg-background p-2 rounded">
                    <p className="text-xs text-muted-foreground">Protein</p>
                    <p className="font-medium text-sm">{recipe.nutrition.protein}</p>
                  </div>
                  <div className="bg-background p-2 rounded">
                    <p className="text-xs text-muted-foreground">Carbs</p>
                    <p className="font-medium text-sm">{recipe.nutrition.carbs}</p>
                  </div>
                </div>
              </div>
            </TabsContent>
            
            {/* Instructions tab */}
            <TabsContent value="instructions" className="mt-4">
              <div className="bg-card rounded-lg p-4">
                <h3 className="font-medium mb-3">Instructions</h3>
                <ol className="space-y-4">
                  {recipe.instructions.map((step, index) => (
                    <li key={index} className="flex">
                      <span className="bg-primary text-primary-foreground w-6 h-6 rounded-full flex items-center justify-center text-xs mr-3 mt-0.5">
                        {index + 1}
                      </span>
                      <span className="text-sm">{step}</span>
                    </li>
                  ))}
                </ol>
              </div>
            </TabsContent>
            
            {/* Comments tab */}
            <TabsContent value="comments" className="mt-4">
              <div className="bg-card rounded-lg p-4">
                <h3 className="font-medium mb-3">Comments ({recipe.comments.length})</h3>
                
                <form onSubmit={handleCommentSubmit} className="mb-4">
                  <div className="flex gap-2">
                    <input
                      type="text"
                      placeholder="Add a comment..."
                      value={comment}
                      onChange={(e) => setComment(e.target.value)}
                      className="flex-1 border rounded px-3 py-2 text-sm"
                    />
                    <Button type="submit" disabled={!comment.trim()}>Post</Button>
                  </div>
                </form>
                
                <div className="space-y-4">
                  {recipe.comments.map((comment) => (
                    <div key={comment.id} className="border-b pb-3 last:border-0">
                      <div className="flex justify-between">
                        <p className="font-medium text-sm">{comment.user}</p>
                        <p className="text-xs text-muted-foreground">{comment.timestamp}</p>
                      </div>
                      <p className="text-sm mt-1">{comment.comment}</p>
                    </div>
                  ))}
                </div>
              </div>
            </TabsContent>
          </Tabs>
          
          {/* Tags */}
          <div className="mt-6">
            <h3 className="text-sm font-medium mb-2">Tags</h3>
            <div className="flex flex-wrap gap-2">
              {recipe.tags.map((tag, index) => (
                <span key={index} className="text-xs bg-muted px-2 py-1 rounded-full">
                  #{tag}
                </span>
              ))}
            </div>
          </div>
          
          {/* Chef info */}
          <div className="mt-6 bg-card rounded-lg p-4 flex items-center justify-between">
            <div className="flex items-center">
              <div className="w-10 h-10 bg-muted rounded-full mr-3"></div>
              <div>
                <p className="font-medium text-sm">Recipe by {recipe.chef}</p>
                <p className="text-xs text-muted-foreground">Professional Chef</p>
              </div>
            </div>
            <Button variant="outline" size="sm" onClick={() => navigate('/chefs')}>
              View Profile
            </Button>
          </div>
          
          {/* Related recipes */}
          <div className="mt-8">
            <h3 className="text-lg font-semibold mb-3">You might also like</h3>
            <div className="grid grid-cols-2 gap-3">
              {[1, 2].map((item) => (
                <div key={item} className="recipe-card card-hover">
                  <div className="h-32 bg-muted"></div>
                  <div className="p-2">
                    <h4 className="font-medium text-sm truncate">Related Recipe {item}</h4>
                    <p className="text-xs text-muted-foreground mt-1">30 mins • Easy</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </MainLayout>
  );
};

export default RecipeDetailPage;
