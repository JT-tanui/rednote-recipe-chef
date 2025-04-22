
import MainLayout from '@/components/layout/MainLayout';
import { Button } from '@/components/ui/button';
import { Switch } from '@/components/ui/switch';
import { Bell, Moon, Globe, Lock, Shield, CreditCard } from 'lucide-react';
import { Separator } from '@/components/ui/separator';

const Settings = () => {
  return (
    <MainLayout>
      <div className="container max-w-2xl mx-auto px-4 py-8">
        <h1 className="text-2xl font-bold mb-6">Settings</h1>
        
        <div className="space-y-6">
          {/* Notifications Section */}
          <div className="bg-white dark:bg-gray-800 p-4 rounded-lg shadow-sm">
            <div className="flex items-center justify-between mb-4">
              <div className="flex items-center gap-2">
                <Bell className="w-5 h-5 text-culinary-primary" />
                <h2 className="font-semibold">Notifications</h2>
              </div>
              <Switch />
            </div>
            <p className="text-sm text-gray-500 dark:text-gray-400">
              Receive notifications about new recipes, chef updates, and special offers
            </p>
          </div>

          {/* Theme Section */}
          <div className="bg-white dark:bg-gray-800 p-4 rounded-lg shadow-sm">
            <div className="flex items-center justify-between mb-4">
              <div className="flex items-center gap-2">
                <Moon className="w-5 h-5 text-culinary-primary" />
                <h2 className="font-semibold">Dark Mode</h2>
              </div>
              <Switch />
            </div>
          </div>

          <Separator />

          {/* Language Section */}
          <div className="bg-white dark:bg-gray-800 p-4 rounded-lg shadow-sm">
            <div className="flex items-center gap-2 mb-4">
              <Globe className="w-5 h-5 text-culinary-primary" />
              <h2 className="font-semibold">Language</h2>
            </div>
            <select className="w-full p-2 rounded border dark:bg-gray-700 dark:border-gray-600">
              <option>English</option>
              <option>Spanish</option>
              <option>French</option>
            </select>
          </div>

          {/* Privacy Section */}
          <div className="bg-white dark:bg-gray-800 p-4 rounded-lg shadow-sm">
            <div className="flex items-center gap-2 mb-4">
              <Lock className="w-5 h-5 text-culinary-primary" />
              <h2 className="font-semibold">Privacy</h2>
            </div>
            <div className="space-y-2">
              <div className="flex items-center justify-between">
                <span className="text-sm">Profile Visibility</span>
                <Switch />
              </div>
              <div className="flex items-center justify-between">
                <span className="text-sm">Show Activity Status</span>
                <Switch />
              </div>
            </div>
          </div>

          {/* Security Section */}
          <div className="bg-white dark:bg-gray-800 p-4 rounded-lg shadow-sm">
            <div className="flex items-center gap-2 mb-4">
              <Shield className="w-5 h-5 text-culinary-primary" />
              <h2 className="font-semibold">Security</h2>
            </div>
            <Button variant="outline" className="w-full justify-start">
              Change Password
            </Button>
          </div>

          {/* Payment Methods Section */}
          <div className="bg-white dark:bg-gray-800 p-4 rounded-lg shadow-sm">
            <div className="flex items-center gap-2 mb-4">
              <CreditCard className="w-5 h-5 text-culinary-primary" />
              <h2 className="font-semibold">Payment Methods</h2>
            </div>
            <Button variant="outline" className="w-full justify-start">
              Manage Payment Methods
            </Button>
          </div>

          <div className="flex justify-end space-x-4 mt-8">
            <Button variant="outline">Cancel</Button>
            <Button>Save Changes</Button>
          </div>
        </div>
      </div>
    </MainLayout>
  );
};

export default Settings;
