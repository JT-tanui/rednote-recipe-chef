
import { motion } from "framer-motion";

interface NearbySectionProps {
  items: Array<{
    id: string;
    type: 'recipe' | 'restaurant' | 'chef';
    content: React.ReactNode;
  }>;
}

const NearbySection = ({ items }: NearbySectionProps) => {
  return (
    <section className="py-8 bg-gradient-to-b from-gray-50/50 to-white dark:from-gray-900/50 dark:to-gray-900">
      <div className="max-w-7xl mx-auto px-4">
        <h2 className="text-2xl font-bold mb-6 text-gray-900 dark:text-gray-100">
          Near You 📍
        </h2>
        <div className="flex overflow-x-auto gap-6 pb-4 snap-x snap-mandatory">
          {items.map((item, index) => (
            <motion.div
              key={item.id}
              className="flex-none w-full sm:w-[calc(50%-12px)] lg:w-[calc(33.333%-16px)] snap-center"
              initial={{ opacity: 0, x: 50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: index * 0.1 }}
            >
              {item.content}
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default NearbySection;
