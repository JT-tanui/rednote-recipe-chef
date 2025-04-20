
import { Card, CardContent } from "@/components/ui/card";
import { Calendar } from "lucide-react";

const SeasonalSpecials = () => {
  const seasonalItems = [
    {
      id: 1,
      title: "Spring Garden Menu",
      image: "https://images.unsplash.com/photo-1618160702438-9b02ab6515c9?q=80&w=2070",
      period: "March - May",
      description: "Fresh, locally-sourced spring vegetables and herbs",
      highlights: ["Asparagus Risotto", "Garden Pea Soup", "Edible Flowers"]
    },
    {
      id: 2,
      title: "Cherry Blossom Festival",
      image: "https://images.unsplash.com/photo-1465146344425-f00d5f5c8f07?q=80&w=2070",
      period: "April",
      description: "Japanese-inspired dishes celebrating sakura season",
      highlights: ["Sakura Mochi", "Cherry Blossom Tea", "Spring Bento"]
    },
    {
      id: 3,
      title: "Wild Mushroom Season",
      image: "https://images.unsplash.com/photo-1504674900247-0877df9cc836?q=80&w=2070",
      period: "September - November",
      description: "Exclusive dishes featuring seasonal wild mushrooms",
      highlights: ["Truffle Pasta", "Wild Mushroom Soup", "Forest Risotto"]
    }
  ];

  return (
    <section className="py-12 bg-gray-50 dark:bg-gray-800">
      <div className="max-w-7xl mx-auto px-4">
        <div className="text-center mb-10">
          <h2 className="text-3xl font-bold mb-3">Seasonal Specials</h2>
          <p className="text-gray-600 dark:text-gray-400 max-w-2xl mx-auto">
            Experience unique flavors that celebrate the best of each season
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {seasonalItems.map((item) => (
            <Card key={item.id} className="overflow-hidden hover:shadow-lg transition-all">
              <div className="relative h-48">
                <img
                  src={item.image}
                  alt={item.title}
                  className="w-full h-full object-cover"
                />
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
          ))}
        </div>
      </div>
    </section>
  );
};

export default SeasonalSpecials;
