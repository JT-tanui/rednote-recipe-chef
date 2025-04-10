
import { useState } from 'react';
import { cn } from '@/lib/utils';

type CategoryType = 'all' | 'recipes' | 'restaurants' | 'chefs';

interface DiscoveryCategorySelectorProps {
  onSelectCategory: (category: CategoryType) => void;
  selectedCategory: CategoryType;
}

const DiscoveryCategorySelector = ({ 
  onSelectCategory, 
  selectedCategory 
}: DiscoveryCategorySelectorProps) => {
  const categories: { value: CategoryType; label: string }[] = [
    { value: 'all', label: 'All' },
    { value: 'recipes', label: 'Recipes' },
    { value: 'restaurants', label: 'Dining' },
    { value: 'chefs', label: 'Chefs' },
  ];

  return (
    <div className="flex justify-center mb-4">
      <div className="flex bg-gray-100 dark:bg-gray-800 p-1 rounded-full">
        {categories.map((category) => (
          <button
            key={category.value}
            className={cn(
              "py-1 px-4 text-xs rounded-full transition-all",
              selectedCategory === category.value
                ? "bg-white dark:bg-gray-700 shadow-sm text-culinary-primary"
                : "text-gray-500 dark:text-gray-400"
            )}
            onClick={() => onSelectCategory(category.value)}
          >
            {category.label}
          </button>
        ))}
      </div>
    </div>
  );
};

export default DiscoveryCategorySelector;
