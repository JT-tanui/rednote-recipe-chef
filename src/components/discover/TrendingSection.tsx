
import React from "react";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { ChevronRight, Star } from "lucide-react";
import { Carousel, CarouselContent, CarouselItem, CarouselNext, CarouselPrevious } from "@/components/ui/carousel";

interface TrendingSectionProps {
  trendingItems: Array<{
    id: string;
    type: 'recipe' | 'restaurant' | 'chef';
    content: React.ReactNode;
  }>;
}

const TrendingSection = ({ trendingItems }: TrendingSectionProps) => {
  if (trendingItems.length === 0) {
    return (
      <div className="h-[calc(100vh-200px)] flex items-center justify-center bg-gray-50 dark:bg-gray-900">
        <div className="text-center p-4">
          <h3 className="text-lg font-semibold mb-2">No trending content</h3>
          <p className="text-sm text-gray-500">Check back soon for popular items</p>
        </div>
      </div>
    );
  }

  return (
    <section className="py-6 bg-blue-50 dark:bg-gray-800/50">
      <div className="max-w-7xl mx-auto px-4 space-y-6">
        <div className="flex items-center justify-between">
          <div className="flex items-center gap-2">
            <Star className="text-accent fill-accent" size={18} />
            <h2 className="text-2xl font-bold text-gray-900 dark:text-gray-100">
              Trending Now
            </h2>
          </div>
          <Button variant="ghost" className="flex items-center text-blue-600 hover:text-blue-800 dark:text-blue-400">
            See all <ChevronRight size={16} />
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
            {trendingItems.map((item) => (
              <CarouselItem key={item.id} className="pl-2 md:pl-4 md:basis-1/2 lg:basis-1/3 xl:basis-1/4">
                <Card className="overflow-hidden border border-gray-200 rounded-lg shadow-sm hover:shadow-md transition-all h-full">
                  <CardContent className="p-0">
                    {item.content}
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
      </div>
    </section>
  );
};

export default TrendingSection;
