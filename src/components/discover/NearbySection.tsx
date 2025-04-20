
import React from 'react';

interface NearbySectionProps {
  items: Array<{
    id: string;
    type: 'recipe' | 'restaurant' | 'chef';
    content: React.ReactNode;
  }>;
}

const NearbySection = ({ items }: NearbySectionProps) => {
  if (items.length === 0) {
    return (
      <div className="h-[calc(100vh-200px)] flex items-center justify-center bg-gray-50 dark:bg-gray-900">
        <div className="text-center p-4">
          <h3 className="text-lg font-semibold mb-2">No nearby content found</h3>
          <p className="text-sm text-gray-500">Try enabling location services</p>
        </div>
      </div>
    );
  }

  return (
    <section className="py-8">
      <div className="max-w-7xl mx-auto px-4">
        <h2 className="text-2xl font-bold mb-6 text-gray-900 dark:text-gray-100">
          Near You
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {items.map((item) => (
            <div key={item.id} className="transform transition-all hover:scale-105">
              {item.content}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default NearbySection;
