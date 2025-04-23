
import MainLayout from '@/components/layout/MainLayout';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import { Calendar, MapPin, Users } from 'lucide-react';

const cateringServices = [
  {
    id: 1,
    name: "Corporate Events",
    description: "Professional catering for business meetings and corporate events",
    image: "https://images.unsplash.com/photo-1414235077428-338989a2e8c0?q=80&w=2070",
    priceRange: "$$$",
    minGuests: 20,
    maxGuests: 200
  },
  {
    id: 2,
    name: "Wedding Catering",
    description: "Elegant catering solutions for your special day",
    image: "https://images.unsplash.com/photo-1464366400600-7168b8af9bc3?q=80&w=2070",
    priceRange: "$$$$",
    minGuests: 50,
    maxGuests: 300
  },
  {
    id: 3,
    name: "Private Parties",
    description: "Customized menus for intimate gatherings and celebrations",
    image: "https://images.unsplash.com/photo-1530103862676-de8c9debad1d?q=80&w=2070",
    priceRange: "$$",
    minGuests: 10,
    maxGuests: 50
  }
];

const Catering = () => {
  return (
    <MainLayout>
      <div className="max-w-7xl mx-auto px-4 py-8">
        <header className="text-center mb-12">
          <h1 className="text-3xl font-bold mb-4">Catering Services</h1>
          <p className="text-gray-600 dark:text-gray-400">
            Professional catering for any occasion, from intimate gatherings to large events
          </p>
        </header>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {cateringServices.map((service) => (
            <Card key={service.id} className="overflow-hidden hover:shadow-lg transition-all">
              <div className="h-48 relative">
                <img
                  src={service.image}
                  alt={service.name}
                  className="w-full h-full object-cover"
                />
              </div>
              <CardContent className="p-6">
                <h3 className="text-xl font-semibold mb-2">{service.name}</h3>
                <p className="text-gray-600 dark:text-gray-400 mb-4">{service.description}</p>
                
                <div className="space-y-2 mb-4">
                  <div className="flex items-center text-sm">
                    <Users className="w-4 h-4 mr-2 text-gray-500" />
                    <span>{service.minGuests}-{service.maxGuests} guests</span>
                  </div>
                  <div className="flex items-center text-sm">
                    <MapPin className="w-4 h-4 mr-2 text-gray-500" />
                    <span>Service available citywide</span>
                  </div>
                </div>
                
                <Button 
                  className="w-full bg-culinary-primary hover:bg-culinary-primary/90"
                  onClick={() => window.location.href = `/booking?type=catering&id=${service.id}`}
                >
                  Get Quote
                </Button>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </MainLayout>
  );
};

export default Catering;
