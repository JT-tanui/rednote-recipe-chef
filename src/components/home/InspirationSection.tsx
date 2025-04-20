
import { Button } from "@/components/ui/button";

const InspirationSection = () => {
  const inspirations = [
    { 
      title: "Weekend Getaway Meals", 
      desc: "Quick recipes for your trip", 
      image: "https://images.unsplash.com/photo-1504674900247-0877df9cc836?q=80&w=2070",
      color: "from-blue-500/80"
    },
    { 
      title: "Fine Dining Experiences", 
      desc: "Top-rated restaurants", 
      image: "https://images.unsplash.com/photo-1414235077428-338989a2e8c0?q=80&w=2070",
      color: "from-purple-500/80"
    },
    { 
      title: "Private Chef Experience", 
      desc: "Luxury dining at home", 
      image: "https://images.unsplash.com/photo-1607631568010-a87245c0daf8?q=80&w=2070",
      color: "from-green-500/80"
    }
  ];

  return (
    <section className="py-12 bg-gray-50 dark:bg-gray-800/50">
      <div className="max-w-7xl mx-auto px-4">
        <div className="text-center mb-10">
          <h2 className="text-3xl font-bold mb-3">Get Inspired</h2>
          <p className="text-gray-600 dark:text-gray-400 max-w-2xl mx-auto">
            Discover unique culinary experiences and ideas for your next food adventure
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {inspirations.map((item, index) => (
            <div key={index} className="relative h-64 md:h-80 overflow-hidden rounded-lg group cursor-pointer">
              {/* Background Image */}
              <div 
                className="absolute inset-0 bg-cover bg-center transition-transform duration-500 group-hover:scale-110"
                style={{ backgroundImage: `url(${item.image})` }}
              ></div>
              
              {/* Gradient Overlay */}
              <div className={`absolute inset-0 bg-gradient-to-t ${item.color} to-transparent opacity-90`}></div>
              
              <div className="absolute inset-0 p-6 flex flex-col justify-end text-white z-10">
                <h3 className="text-xl md:text-2xl font-bold mb-2">{item.title}</h3>
                <p className="text-sm md:text-base opacity-90 mb-4">{item.desc}</p>
                <Button className="w-fit bg-white text-gray-900 hover:bg-gray-100 mt-2">
                  Discover
                </Button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default InspirationSection;
