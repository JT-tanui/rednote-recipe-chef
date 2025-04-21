
import { Link } from 'react-router-dom';
import { Facebook, Instagram, Twitter, Mail, Heart } from 'lucide-react';
import { Button } from '@/components/ui/button';

const Footer = () => {
  return (
    <footer className="bg-gray-50 dark:bg-gray-900 border-t border-gray-200 dark:border-gray-800 pt-10 pb-6">
      <div className="max-w-7xl mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8 mb-8">
          {/* About Section */}
          <div className="space-y-4">
            <h3 className="text-lg font-bold">DineX</h3>
            <p className="text-sm text-gray-600 dark:text-gray-400">
              Discover amazing restaurants, recipes, and culinary experiences around you.
            </p>
            <div className="flex space-x-4">
              <Button variant="ghost" size="icon" className="rounded-full bg-culinary-primary/10 text-culinary-primary hover:bg-culinary-primary/20">
                <Facebook size={18} />
              </Button>
              <Button variant="ghost" size="icon" className="rounded-full bg-culinary-primary/10 text-culinary-primary hover:bg-culinary-primary/20">
                <Instagram size={18} />
              </Button>
              <Button variant="ghost" size="icon" className="rounded-full bg-culinary-primary/10 text-culinary-primary hover:bg-culinary-primary/20">
                <Twitter size={18} />
              </Button>
              <Button variant="ghost" size="icon" className="rounded-full bg-culinary-primary/10 text-culinary-primary hover:bg-culinary-primary/20">
                <Mail size={18} />
              </Button>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-lg font-bold mb-4">Quick Links</h3>
            <ul className="space-y-2 text-sm">
              <li>
                <Link to="/recipes" className="text-gray-600 dark:text-gray-400 hover:text-culinary-primary">
                  Recipes
                </Link>
              </li>
              <li>
                <Link to="/restaurants" className="text-gray-600 dark:text-gray-400 hover:text-culinary-primary">
                  Restaurants
                </Link>
              </li>
              <li>
                <Link to="/meal-planner" className="text-gray-600 dark:text-gray-400 hover:text-culinary-primary">
                  Meal Planner
                </Link>
              </li>
              <li>
                <Link to="/chefs" className="text-gray-600 dark:text-gray-400 hover:text-culinary-primary">
                  Personal Chefs
                </Link>
              </li>
            </ul>
          </div>

          {/* Support */}
          <div>
            <h3 className="text-lg font-bold mb-4">Support</h3>
            <ul className="space-y-2 text-sm">
              <li>
                <Link to="/help" className="text-gray-600 dark:text-gray-400 hover:text-culinary-primary">
                  Help Center
                </Link>
              </li>
              <li>
                <Link to="/faq" className="text-gray-600 dark:text-gray-400 hover:text-culinary-primary">
                  FAQ
                </Link>
              </li>
              <li>
                <Link to="/contact" className="text-gray-600 dark:text-gray-400 hover:text-culinary-primary">
                  Contact Us
                </Link>
              </li>
              <li>
                <Link to="/terms" className="text-gray-600 dark:text-gray-400 hover:text-culinary-primary">
                  Terms of Service
                </Link>
              </li>
            </ul>
          </div>

          {/* Newsletter */}
          <div>
            <h3 className="text-lg font-bold mb-4">Stay Updated</h3>
            <p className="text-sm text-gray-600 dark:text-gray-400 mb-3">
              Subscribe to our newsletter for exclusive updates.
            </p>
            <div className="flex">
              <input 
                type="email" 
                placeholder="Your email" 
                className="px-3 py-2 border border-gray-300 dark:border-gray-700 rounded-l-md text-sm flex-1"
              />
              <Button className="bg-culinary-primary hover:bg-culinary-primary/90 rounded-l-none">
                Subscribe
              </Button>
            </div>
          </div>
        </div>

        <div className="border-t border-gray-200 dark:border-gray-800 pt-6 flex flex-col md:flex-row justify-between items-center">
          <p className="text-sm text-gray-600 dark:text-gray-400 mb-2 md:mb-0">
            © 2025 DineX. All rights reserved.
          </p>
          <div className="flex items-center text-sm text-gray-600 dark:text-gray-400">
            <span>Made with</span>
            <Heart size={14} className="mx-1 fill-culinary-primary text-culinary-primary" />
            <span>for food lovers</span>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
