
const InspirationSection = () => {
  return (
    <section className="py-8 bg-gray-50 dark:bg-gray-800/50">
      <div className="max-w-7xl mx-auto px-4">
        <h2 className="text-2xl font-bold mb-6">Get Inspired</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {[
            { title: "Weekend Getaway Meals", desc: "Quick recipes for your trip" },
            { title: "Fine Dining Experiences", desc: "Top-rated restaurants" },
            { title: "Private Chef Experience", desc: "Luxury dining at home" }
          ].map((item, index) => (
            <div key={index} className="relative h-48 overflow-hidden rounded-lg group cursor-pointer">
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 to-transparent z-10"></div>
              <div className={`absolute inset-0 bg-gradient-to-br from-blue-${(index + 3) * 100} to-purple-${(index + 4) * 100}`}></div>
              <div className="absolute bottom-0 left-0 p-4 text-white z-20">
                <h3 className="text-lg font-bold">{item.title}</h3>
                <p className="text-sm opacity-90">{item.desc}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default InspirationSection;
