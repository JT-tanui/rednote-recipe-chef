
import { Card, CardContent } from "@/components/ui/card";
import { Calendar, Star } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Carousel, CarouselContent, CarouselItem, CarouselNext, CarouselPrevious } from "@/components/ui/carousel";

const SeasonalSpecials = () => {
  const seasonalItems = [
    {
      id: 1,
      title: "Spring Garden Menu",
      image: "https://images.unsplash.com/photo-1618160702438-9b02ab6515c9?q=80&w=2070",
      period: "March - May",
      description: "Fresh, locally-sourced spring vegetables and herbs",
      highlights: ["Asparagus Risotto", "Garden Pea Soup", "Edible Flowers"],
      rating: 4.9
    },
    {
      id: 2,
      title: "Cherry Blossom Festival",
      image: "https://images.unsplash.com/photo-1465146344425-f00d5f5c8f07?q=80&w=2070",
      period: "April",
      description: "Japanese-inspired dishes celebrating sakura season",
      highlights: ["Sakura Mochi", "Cherry Blossom Tea", "Spring Bento"],
      rating: 4.8
    },
    {
      id: 3,
      title: "Wild Mushroom Season",
      image: "https://images.unsplash.com/photo-1504674900247-0877df9cc836?q=80&w=2070",
      period: "September - November",
      description: "Exclusive dishes featuring seasonal wild mushrooms",
      highlights: ["Truffle Pasta", "Wild Mushroom Soup", "Forest Risotto"],
      rating: 4.7
    },
    {
      id: 4,
      title: "Summer Berry Collection",
      image: "https://images.unsplash.com/photo-1549007994-cb92caebd54b?q=80&w=2070",
      period: "June - August",
      description: "Delightful berry-based desserts and refreshing drinks",
      highlights: ["Mixed Berry Tart", "Strawberry Gazpacho", "Blueberry Sorbet"],
      rating: 4.9
    }
  ];

  return (
    <section className="py-12 bg-gradient-to-b from-gray-50 to-white dark:from-gray-800 dark:to-gray-900">
      <div className="max-w-7xl mx-auto px-4">
        <div className="flex justify-between items-center mb-8">
          <div>
            <h2 className="text-3xl font-bold mb-2">Seasonal Specials</h2>
            <p className="text-gray-600 dark:text-gray-400 max-w-2xl">
              Experience unique flavors that celebrate the best of each season
            </p>
          </div>
          <Button variant="outline" className="hidden md:flex">
            View All Seasonal Menus
          </Button>
        </div>

        <Carousel
          opts={{
            align: "start",
            loop: true,
          }}
          className="w-full"
        >
          <CarouselContent className="-ml-2 md:-ml-4">
            {seasonalItems.map((item) => (
              <CarouselItem key={item.id} className="pl-2 md:pl-4 md:basis-1/2 lg:basis-1/3">
                <Card key={item.id} className="overflow-hidden hover:shadow-lg transition-all h-full">
                  <div className="relative h-48">
                    <img
                      src={item.image}
                      alt={item.title}
                      className="w-full h-full object-cover"
                    />
                    <div className="absolute top-3 right-3 bg-white/90 dark:bg-gray-900/90 backdrop-blur-sm py-1 px-2 rounded-full flex items-center">
                      <Star size={14} className="text-yellow-400 mr-1 fill-yellow-400" />
                      <span className="text-xs font-medium">{item.rating.toFixed(1)}</span>
                    </div>
                  </div>
                  <CardContent className="p-6">
                    <h3 className="text-xl font-semibold mb-2">{item.title}</h3>
                    <div className="flex items-center text-sm text-gray-600 dark:text-gray-400 mb-3">
                      <Calendar className="h-4 w-4 mr-2" />
                      <span>{item.period}</span>
                    </div>
                    <p className="text-gray-600 dark:text-gray-400 mb-4">
                      {item.description}
                    </p>
                    <div className="space-y-2">
                      {item.highlights.map((highlight, index) => (
                        <div
                          key={index}
                          className="bg-primary/5 rounded-lg px-3 py-2 text-sm text-primary"
                        >
                          {highlight}
                        </div>
                      ))}
                    </div>
                  </CardContent>
                </Card>
              </CarouselItem>
            ))}
          </CarouselContent>
          <div className="hidden md:block">
            <CarouselPrevious className="left-0 opacity-70 hover:opacity-100" />
            <CarouselNext className="right-0 opacity-70 hover:opacity-100" />
          </div>
        </Carousel>
        
        <div className="mt-6 flex justify-center md:hidden">
          <Button variant="outline">
            View All Seasonal Menus
          </Button>
        </div>
      </div>
    </section>
  );
};

export default SeasonalSpecials;
