
import { Chef, UtensilsCrossed, Building2, ShoppingBag } from 'lucide-react';
import { Link } from 'react-router-dom';

const BrowseCategories = () => {
  const categories = [
    { 
      name: 'Restaurants',
      icon: <Building2 className="h-6 w-6" />,
      description: 'Find and book tables at top-rated local restaurants',
      link: '/restaurants',
      color: 'bg-blue-500'
    },
    { 
      name: 'Recipes',
      icon: <UtensilsCrossed className="h-6 w-6" />,
      description: 'Discover delicious recipes for any occasion',
      link: '/recipes',
      color: 'bg-green-500'
    },
    { 
      name: 'Personal Chefs',
      icon: <Chef className="h-6 w-6" />,
      description: 'Hire professional chefs for private dining experiences',
      link: '/chefs',
      color: 'bg-purple-500'
    },
    { 
      name: 'Catering',
      icon: <ShoppingBag className="h-6 w-6" />,
      description: 'Find catering services for events and parties',
      link: '/catering',
      color: 'bg-orange-500'
    }
  ];

  return (
    <section className="py-12 bg-white dark:bg-gray-900">
      <div className="max-w-7xl mx-auto px-4">
        <div className="text-center mb-10">
          <h2 className="text-3xl font-bold mb-3">Browse Categories</h2>
          <p className="text-gray-600 dark:text-gray-400 max-w-2xl mx-auto">
            Explore our curated selection of culinary experiences and find exactly what you're looking for
          </p>
        </div>
        
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {categories.map((category, index) => (
            <Link to={category.link} key={index}>
              <div className="bg-gray-50 dark:bg-gray-800 rounded-xl p-6 text-center hover:shadow-lg transition-all cursor-pointer h-full flex flex-col">
                <div className="mb-4 flex items-center justify-center">
                  <div className={`w-16 h-16 rounded-full ${category.color} text-white flex items-center justify-center`}>
                    {category.icon}
                  </div>
                </div>
                <h3 className="font-semibold text-lg mb-2">{category.name}</h3>
                <p className="text-gray-600 dark:text-gray-400 text-sm flex-grow">
                  {category.description}
                </p>
                <div className="mt-4 text-primary font-medium text-sm">
                  Explore {category.name} →
                </div>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
};

export default BrowseCategories;
