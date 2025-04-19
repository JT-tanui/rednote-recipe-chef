
import { Carousel, CarouselContent, CarouselItem, CarouselNext, CarouselPrevious } from "@/components/ui/carousel";
import RecipeCard from "../ui/recipe-card/RecipeCard";
import RestaurantCard from "../ui/restaurant-card/RestaurantCard";
import ChefCard from "../ui/chef-card/ChefCard";

interface TrendingSectionProps {
  trendingItems: Array<{
    id: string;
    type: 'recipe' | 'restaurant' | 'chef';
    content: React.ReactNode;
  }>;
}

const TrendingSection = ({ trendingItems }: TrendingSectionProps) => {
  return (
    <section className="py-8">
      <div className="max-w-7xl mx-auto px-4">
        <h2 className="text-2xl font-bold mb-6 text-gray-900 dark:text-gray-100">
          What's Hot Right Now 🔥
        </h2>
        <Carousel
          opts={{
            align: "start",
            loop: true,
          }}
          className="w-full"
        >
          <CarouselContent className="-ml-2 md:-ml-4">
            {trendingItems.map((item, index) => (
              <CarouselItem key={item.id} className="pl-2 md:pl-4 md:basis-1/2 lg:basis-1/3">
                <div className="p-1">{item.content}</div>
              </CarouselItem>
            ))}
          </CarouselContent>
          <CarouselPrevious />
          <CarouselNext />
        </Carousel>
      </div>
    </section>
  );
};

export default TrendingSection;
