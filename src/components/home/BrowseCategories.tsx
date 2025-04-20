
const BrowseCategories = () => {
  return (
    <section className="py-8 bg-white dark:bg-gray-900">
      <div className="max-w-7xl mx-auto px-4">
        <h2 className="text-2xl font-bold mb-6">Browse by Category</h2>
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
          {['Restaurants', 'Recipes', 'Personal Chefs', 'Catering'].map((category, index) => (
            <div key={index} className="bg-gray-100 dark:bg-gray-800 rounded-xl p-4 text-center hover:shadow-md transition-all cursor-pointer">
              <div className="h-24 flex items-center justify-center">
                <div className="w-16 h-16 rounded-full bg-primary/20 flex items-center justify-center">
                  <span className="text-2xl">{category.charAt(0)}</span>
                </div>
              </div>
              <p className="font-medium mt-2">{category}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default BrowseCategories;
