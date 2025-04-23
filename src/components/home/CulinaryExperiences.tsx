
import { Star } from 'lucide-react';
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { useNavigate } from 'react-router-dom';

const CulinaryExperiences = () => {
  const navigate = useNavigate();
  
  const experiences = [
    {
      id: "exp1",
      title: "Italian Pasta Making Class",
      image: "https://images.unsplash.com/photo-1556761175-b413da4baf72?q=80&w=2074",
      rating: 4.9,
      reviews: 124,
      price: "$89",
      location: "Multiple locations"
    },
    {
      title: "Wine & Cheese Pairing",
      image: "https://images.unsplash.com/photo-1506377247377-2a5b3b417ebb?q=80&w=2070",
      rating: 4.8,
      reviews: 98,
      price: "$75",
      location: "Downtown"
    },
    {
      title: "Farm-to-Table Experience",
      image: "https://images.unsplash.com/photo-1550989460-0adf9ea622e2?q=80&w=2080",
      rating: 4.7,
      reviews: 87,
      price: "$120",
      location: "Countryside"
    }
  ];

  const handleBookNow = (experienceId: string) => {
    navigate(`/booking?experience=${experienceId}`);
  };

  return (
    <section className="py-12 bg-gray-50 dark:bg-gray-800/50">
      <div className="max-w-7xl mx-auto px-4">
        <div className="text-center mb-10">
          <h2 className="text-3xl font-bold mb-3">Unique Culinary Experiences</h2>
          <p className="text-gray-600 dark:text-gray-400 max-w-2xl mx-auto">
            Discover cooking classes, food tours, and tastings in your area
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {experiences.map((exp, index) => (
            <Card key={index} className="overflow-hidden hover:shadow-lg transition-all">
              <div className="relative h-48">
                <img 
                  src={exp.image} 
                  alt={exp.title}
                  className="w-full h-full object-cover"
                />
              </div>
              <CardContent className="p-5">
                <h3 className="font-bold text-lg mb-2">{exp.title}</h3>
                <div className="flex items-center gap-1 mb-2">
                  <Star className="h-4 w-4 fill-yellow-400 text-yellow-400" />
                  <span className="font-semibold">{exp.rating}</span>
                  <span className="text-gray-500 text-sm">({exp.reviews} reviews)</span>
                </div>
                <p className="text-gray-600 dark:text-gray-400 text-sm mb-3">
                  {exp.location}
                </p>
                <div className="flex items-center justify-between">
                  <span className="font-bold">{exp.price} <span className="text-gray-500 text-sm font-normal">per person</span></span>
                  <Button 
                    size="sm" 
                    className="bg-primary hover:bg-primary/90"
                    onClick={() => handleBookNow(exp.id)}
                  >
                    Book Now
                  </Button>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
        
        <div className="text-center mt-8">
          <Button 
            variant="outline" 
            className="border-primary text-primary hover:bg-primary/10"
            onClick={() => navigate('/booking')}
          >
            View All Experiences
          </Button>
        </div>
      </div>
    </section>
  );
};

export default CulinaryExperiences;
