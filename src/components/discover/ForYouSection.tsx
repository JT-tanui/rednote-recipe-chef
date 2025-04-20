
import React from 'react';
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { ChevronRight } from "lucide-react";

interface ForYouSectionProps {
  items: Array<{
    id: string;
    type: 'recipe' | 'restaurant' | 'chef';
    content: React.ReactNode;
  }>;
}

const ForYouSection = ({ items }: ForYouSectionProps) => {
  if (items.length === 0) {
    return (
      <div className="h-[calc(100vh-200px)] flex items-center justify-center bg-gray-50 dark:bg-gray-900">
        <div className="text-center p-4">
          <h3 className="text-lg font-semibold mb-2">No content found</h3>
          <p className="text-sm text-gray-500">Try a different category or check back later</p>
        </div>
      </div>
    );
  }

  return (
    <section className="py-6">
      <div className="max-w-7xl mx-auto px-4 space-y-6">
        <div className="flex items-center justify-between">
          <h2 className="text-2xl font-bold text-gray-900 dark:text-gray-100">
            Recommended for You
          </h2>
          <Button variant="ghost" className="flex items-center text-blue-600 hover:text-blue-800">
            See all <ChevronRight size={16} />
          </Button>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4">
          {items.map((item) => (
            <Card key={item.id} className="overflow-hidden border border-gray-200 rounded-lg shadow-sm hover:shadow-md transition-all h-full">
              <CardContent className="p-0">
                {item.content}
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ForYouSection;
