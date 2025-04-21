
import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Index from "./pages/Index";
import MealPlanner from "./pages/MealPlanner";
import Recipes from "./pages/Recipes";
import RecipeDetailPage from "./pages/RecipeDetailPage";
import Restaurants from "./pages/Restaurants";
import Profile from "./pages/Profile";
import Chefs from "./pages/Chefs";
import ChefDetails from "./pages/ChefDetails";
import Inbox from "./pages/Inbox";
import Onboarding from "./pages/Onboarding";
import NotFound from "./pages/NotFound";
import BookingPage from "./pages/BookingPage";
import BookingSummary from "./pages/BookingSummary";
import PaymentCheckout from "./pages/PaymentCheckout";
import PaymentSuccess from "./pages/PaymentSuccess";
import Seasonal from "./pages/Seasonal";

const queryClient = new QueryClient();

const App = () => (
  <QueryClientProvider client={queryClient}>
    <TooltipProvider>
      <Toaster />
      <Sonner />
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Index />} />
          <Route path="/meal-planner" element={<MealPlanner />} />
          <Route path="/recipes" element={<Recipes />} />
          <Route path="/recipes/:id" element={<RecipeDetailPage />} />
          <Route path="/restaurants" element={<Restaurants />} />
          <Route path="/profile" element={<Profile />} />
          <Route path="/chefs" element={<Chefs />} />
          <Route path="/chefs/:id" element={<ChefDetails />} />
          <Route path="/inbox" element={<Inbox />} />
          <Route path="/onboarding" element={<Onboarding />} />
          <Route path="/seasonal" element={<Seasonal />} />
          
          {/* Booking Flow Routes */}
          <Route path="/booking" element={<BookingPage />} />
          <Route path="/booking-summary" element={<BookingSummary />} />
          <Route path="/payment-checkout" element={<PaymentCheckout />} />
          <Route path="/payment-success" element={<PaymentSuccess />} />
          
          {/* ADD ALL CUSTOM ROUTES ABOVE THE CATCH-ALL "*" ROUTE */}
          <Route path="*" element={<NotFound />} />
        </Routes>
      </BrowserRouter>
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;
