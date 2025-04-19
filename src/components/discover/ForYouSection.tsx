
import { motion } from "framer-motion";
import { Card } from "../ui/card";

interface ForYouSectionProps {
  items: Array<{
    id: string;
    type: 'recipe' | 'restaurant' | 'chef';
    content: React.ReactNode;
  }>;
}

const ForYouSection = ({ items }: ForYouSectionProps) => {
  return (
    <section className="py-8 bg-gradient-to-r from-culinary-primary/5 to-transparent">
      <div className="max-w-7xl mx-auto px-4">
        <h2 className="text-2xl font-bold mb-6 text-gray-900 dark:text-gray-100">
          Curated For You ✨
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {items.map((item, index) => (
            <motion.div
              key={item.id}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.1 }}
            >
              <Card className="overflow-hidden shadow-lg hover:shadow-xl transition-shadow duration-300">
                {item.content}
              </Card>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ForYouSection;
