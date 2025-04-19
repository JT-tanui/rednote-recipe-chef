import MainLayout from '@/components/layout/MainLayout';
import { useIsMobile } from '@/hooks/use-mobile';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { 
  Bell, MessageSquare, Calendar, ChefHat, 
  Star, AlertCircle, Clock, Check 
} from 'lucide-react';
import { Avatar } from '@/components/ui/avatar';
import { cn } from '@/lib/utils';

// Mock notification data
const notifications = [
  {
    id: 'n1',
    type: 'reservation',
    title: 'Reservation Confirmed',
    message: 'Your table at The Rustic Table has been confirmed for Friday at 7:30 PM.',
    time: '2h ago',
    read: false,
    icon: Calendar
  },
  {
    id: 'n2',
    type: 'chef',
    title: 'Chef Booking Request',
    message: 'Maria Rodriguez has accepted your booking request for Saturday.',
    time: '5h ago',
    read: false,
    icon: ChefHat
  },
  {
    id: 'n3',
    type: 'recipe',
    title: 'New Recipe Available',
    message: 'A new recipe has been added to your meal plan for this week.',
    time: '1d ago',
    read: true,
    icon: Star
  },
  {
    id: 'n4',
    type: 'system',
    title: 'Account Verification',
    message: 'Please verify your email address to unlock all features.',
    time: '2d ago',
    read: true,
    icon: AlertCircle
  }
];

// Mock messages data
const messages = [
  {
    id: 'm1',
    sender: 'Maria Rodriguez',
    avatar: 'https://images.unsplash.com/photo-1583394293214-28ded15ee548?q=80&w=2080',
    message: 'I wanted to confirm the menu for Saturday. Do you have any dietary restrictions?',
    time: '1h ago',
    unread: 2
  },
  {
    id: 'm2',
    sender: 'The Rustic Table',
    avatar: 'https://images.unsplash.com/photo-1517248135467-4c7edcad34c4?q=80&w=2070',
    message: 'Thank you for your reservation. Would you like to pre-order any drinks?',
    time: '3h ago',
    unread: 0
  },
  {
    id: 'm3',
    sender: 'DineX Support',
    avatar: 'https://images.unsplash.com/photo-1579027989536-b7b1f875659b?q=80&w=2070',
    message: 'Your question about meal planning has been answered. Check it out!',
    time: '1d ago',
    unread: 0
  }
];

// Mock activity data
const activities = [
  {
    id: 'a1',
    title: 'Reservation Request Sent',
    description: 'The Rustic Table for Friday at 7:30 PM',
    time: '2h ago',
    icon: Clock,
    status: 'pending'
  },
  {
    id: 'a2',
    title: 'Chef Booking Confirmed',
    description: 'Maria Rodriguez for Saturday at 6:00 PM',
    time: '5h ago',
    icon: Check,
    status: 'completed'
  },
  {
    id: 'a3',
    title: 'Recipe Saved',
    description: 'Spicy Thai Basil Chicken',
    time: '1d ago',
    icon: Star,
    status: 'completed'
  }
];

const Inbox = () => {
  const isMobile = useIsMobile();
  
  return (
    <MainLayout>
      <div className="container max-w-md mx-auto px-4 pt-5 pb-20">
        {isMobile && (
          <div className="flex items-center justify-between mb-6">
            <h1 className="text-lg font-bold">Inbox</h1>
          </div>
        )}
        
        <Tabs defaultValue="notifications" className="w-full">
          <TabsList className="grid grid-cols-3 mb-6">
            <TabsTrigger value="notifications" className="text-xs relative">
              <Bell size={16} className="mr-1" />
              Notifications
              <span className="absolute -top-1 -right-1 w-4 h-4 bg-culinary-primary text-white text-xxs rounded-full flex items-center justify-center">
                2
              </span>
            </TabsTrigger>
            <TabsTrigger value="messages" className="text-xs relative">
              <MessageSquare size={16} className="mr-1" />
              Messages
              <span className="absolute -top-1 -right-1 w-4 h-4 bg-culinary-primary text-white text-xxs rounded-full flex items-center justify-center">
                2
              </span>
            </TabsTrigger>
            <TabsTrigger value="activity" className="text-xs">
              <Clock size={16} className="mr-1" />
              Activity
            </TabsTrigger>
          </TabsList>
          
          <TabsContent value="notifications">
            <div className="space-y-4">
              {notifications.map(notification => (
                <div 
                  key={notification.id}
                  className={cn(
                    "p-4 rounded-lg border",
                    notification.read ? "bg-white dark:bg-gray-800" : "bg-blue-50 dark:bg-blue-900/10 border-blue-100 dark:border-blue-800"
                  )}
                >
                  <div className="flex">
                    <div className={cn(
                      "mr-3 p-2 rounded-full",
                      notification.type === 'reservation' ? "bg-green-100 text-green-600 dark:bg-green-900/20 dark:text-green-400" :
                      notification.type === 'chef' ? "bg-purple-100 text-purple-600 dark:bg-purple-900/20 dark:text-purple-400" :
                      notification.type === 'recipe' ? "bg-amber-100 text-amber-600 dark:bg-amber-900/20 dark:text-amber-400" :
                      "bg-gray-100 text-gray-600 dark:bg-gray-800 dark:text-gray-400"
                    )}>
                      <notification.icon size={16} />
                    </div>
                    <div className="flex-1">
                      <div className="flex justify-between">
                        <h3 className="font-medium text-sm">{notification.title}</h3>
                        <span className="text-xxs text-gray-500">{notification.time}</span>
                      </div>
                      <p className="text-xs text-gray-600 dark:text-gray-300 mt-1">{notification.message}</p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </TabsContent>
          
          <TabsContent value="messages">
            <div className="space-y-4">
              {messages.map(message => (
                <div 
                  key={message.id}
                  className={cn(
                    "p-4 rounded-lg border flex items-start",
                    message.unread > 0 ? "bg-blue-50 dark:bg-blue-900/10 border-blue-100 dark:border-blue-800" : "bg-white dark:bg-gray-800"
                  )}
                >
                  <Avatar className="h-10 w-10 mr-3">
                    <img src={message.avatar} alt={message.sender} className="object-cover" />
                  </Avatar>
                  <div className="flex-1">
                    <div className="flex justify-between items-center">
                      <h3 className="font-medium text-sm">{message.sender}</h3>
                      <span className="text-xxs text-gray-500">{message.time}</span>
                    </div>
                    <p className="text-xs text-gray-600 dark:text-gray-300 mt-1 line-clamp-2">{message.message}</p>
                  </div>
                  {message.unread > 0 && (
                    <span className="ml-2 w-5 h-5 bg-culinary-primary text-white text-xxs rounded-full flex items-center justify-center">
                      {message.unread}
                    </span>
                  )}
                </div>
              ))}
              <button className="w-full py-2 text-xs text-culinary-primary font-medium">
                View All Messages
              </button>
            </div>
          </TabsContent>
          
          <TabsContent value="activity">
            <div className="space-y-4">
              {activities.map(activity => (
                <div 
                  key={activity.id}
                  className="p-4 rounded-lg border bg-white dark:bg-gray-800"
                >
                  <div className="flex">
                    <div className={cn(
                      "mr-3 p-2 rounded-full",
                      activity.status === 'completed' ? "bg-green-100 text-green-600 dark:bg-green-900/20 dark:text-green-400" : 
                      "bg-amber-100 text-amber-600 dark:bg-amber-900/20 dark:text-amber-400"
                    )}>
                      <activity.icon size={16} />
                    </div>
                    <div className="flex-1">
                      <div className="flex justify-between">
                        <h3 className="font-medium text-sm">{activity.title}</h3>
                        <span className="text-xxs text-gray-500">{activity.time}</span>
                      </div>
                      <p className="text-xs text-gray-600 dark:text-gray-300 mt-1">{activity.description}</p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </TabsContent>
        </Tabs>
      </div>
    </MainLayout>
  );
};

export default Inbox;
