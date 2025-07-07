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
      <div className="min-h-screen bg-gradient-to-br from-background via-background to-accent/5">
        <div className={`${!isMobile ? 'max-w-4xl mx-auto p-8' : 'container max-w-md mx-auto px-4 pt-5'} pb-20`}>
          {!isMobile && (
            <header className="mb-10 text-center">
              <h1 className="text-4xl font-bold bg-gradient-to-r from-primary via-primary to-primary/70 bg-clip-text text-transparent mb-3">
                Inbox
              </h1>
              <p className="text-muted-foreground text-xl">Stay updated with your culinary journey</p>
            </header>
          )}
          
          {isMobile && (
            <div className="flex items-center justify-between mb-6">
              <h1 className="text-2xl font-bold bg-gradient-to-r from-primary to-primary/70 bg-clip-text text-transparent">Inbox</h1>
            </div>
          )}
          
          <Tabs defaultValue="notifications" className="w-full">
            <TabsList className={`grid grid-cols-3 mb-8 ${!isMobile ? 'h-14 p-1 bg-muted/50 backdrop-blur-sm' : 'h-12 mb-6'}`}>
              <TabsTrigger 
                value="notifications" 
                className={`${!isMobile ? 'text-sm font-medium' : 'text-xs'} relative data-[state=active]:bg-background data-[state=active]:shadow-sm transition-all duration-200`}
              >
                <Bell size={!isMobile ? 18 : 16} className="mr-2" />
                Notifications
                <span className="absolute -top-1 -right-1 w-5 h-5 bg-primary text-primary-foreground text-xs rounded-full flex items-center justify-center font-semibold">
                  2
                </span>
              </TabsTrigger>
              <TabsTrigger 
                value="messages" 
                className={`${!isMobile ? 'text-sm font-medium' : 'text-xs'} relative data-[state=active]:bg-background data-[state=active]:shadow-sm transition-all duration-200`}
              >
                <MessageSquare size={!isMobile ? 18 : 16} className="mr-2" />
                Messages
                <span className="absolute -top-1 -right-1 w-5 h-5 bg-primary text-primary-foreground text-xs rounded-full flex items-center justify-center font-semibold">
                  2
                </span>
              </TabsTrigger>
              <TabsTrigger 
                value="activity" 
                className={`${!isMobile ? 'text-sm font-medium' : 'text-xs'} data-[state=active]:bg-background data-[state=active]:shadow-sm transition-all duration-200`}
              >
                <Clock size={!isMobile ? 18 : 16} className="mr-2" />
                Activity
              </TabsTrigger>
            </TabsList>
          
            <TabsContent value="notifications" className="animate-fade-in">
              <div className={`space-y-${!isMobile ? '6' : '4'}`}>
                {notifications.map((notification, index) => (
                  <div 
                    key={notification.id}
                    className={cn(
                      `p-${!isMobile ? '6' : '4'} rounded-xl border-2 transition-all duration-200 hover:shadow-lg hover:scale-[1.02] animate-fade-in`,
                      notification.read 
                        ? "bg-background/80 backdrop-blur-sm border-border hover:border-muted-foreground/20" 
                        : "bg-primary/5 border-primary/20 hover:border-primary/30 shadow-sm"
                    )}
                    style={{ animationDelay: `${index * 100}ms` }}
                  >
                    <div className="flex">
                      <div className={cn(
                        `mr-${!isMobile ? '4' : '3'} p-3 rounded-full transition-colors`,
                        notification.type === 'reservation' ? "bg-green-100 text-green-600 dark:bg-green-900/20 dark:text-green-400" :
                        notification.type === 'chef' ? "bg-purple-100 text-purple-600 dark:bg-purple-900/20 dark:text-purple-400" :
                        notification.type === 'recipe' ? "bg-amber-100 text-amber-600 dark:bg-amber-900/20 dark:text-amber-400" :
                        "bg-muted text-muted-foreground"
                      )}>
                        <notification.icon size={!isMobile ? 20 : 16} />
                      </div>
                      <div className="flex-1">
                        <div className="flex justify-between items-start">
                          <h3 className={`font-semibold ${!isMobile ? 'text-base' : 'text-sm'} text-foreground`}>{notification.title}</h3>
                          <span className={`${!isMobile ? 'text-sm' : 'text-xs'} text-muted-foreground font-medium`}>{notification.time}</span>
                        </div>
                        <p className={`${!isMobile ? 'text-sm' : 'text-xs'} text-muted-foreground mt-2 leading-relaxed`}>{notification.message}</p>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </TabsContent>
          
            <TabsContent value="messages" className="animate-fade-in">
              <div className={`space-y-${!isMobile ? '6' : '4'}`}>
                {messages.map((message, index) => (
                  <div 
                    key={message.id}
                    className={cn(
                      `p-${!isMobile ? '6' : '4'} rounded-xl border-2 flex items-start transition-all duration-200 hover:shadow-lg hover:scale-[1.02] animate-fade-in cursor-pointer`,
                      message.unread > 0 
                        ? "bg-primary/5 border-primary/20 hover:border-primary/30 shadow-sm" 
                        : "bg-background/80 backdrop-blur-sm border-border hover:border-muted-foreground/20"
                    )}
                    style={{ animationDelay: `${index * 100}ms` }}
                  >
                    <Avatar className={`${!isMobile ? 'h-12 w-12' : 'h-10 w-10'} mr-4 ring-2 ring-primary/10`}>
                      <img src={message.avatar} alt={message.sender} className="object-cover" />
                    </Avatar>
                    <div className="flex-1">
                      <div className="flex justify-between items-center">
                        <h3 className={`font-semibold ${!isMobile ? 'text-base' : 'text-sm'} text-foreground`}>{message.sender}</h3>
                        <span className={`${!isMobile ? 'text-sm' : 'text-xs'} text-muted-foreground font-medium`}>{message.time}</span>
                      </div>
                      <p className={`${!isMobile ? 'text-sm' : 'text-xs'} text-muted-foreground mt-2 line-clamp-2 leading-relaxed`}>{message.message}</p>
                    </div>
                    {message.unread > 0 && (
                      <span className="ml-3 w-6 h-6 bg-primary text-primary-foreground text-xs rounded-full flex items-center justify-center font-semibold">
                        {message.unread}
                      </span>
                    )}
                  </div>
                ))}
                <button className={`w-full py-${!isMobile ? '4' : '3'} ${!isMobile ? 'text-sm' : 'text-xs'} text-primary font-semibold hover:bg-primary/10 rounded-lg transition-colors duration-200`}>
                  View All Messages
                </button>
              </div>
            </TabsContent>
          
            <TabsContent value="activity" className="animate-fade-in">
              <div className={`space-y-${!isMobile ? '6' : '4'}`}>
                {activities.map((activity, index) => (
                  <div 
                    key={activity.id}
                    className={`p-${!isMobile ? '6' : '4'} rounded-xl border-2 bg-background/80 backdrop-blur-sm border-border hover:border-muted-foreground/20 transition-all duration-200 hover:shadow-lg hover:scale-[1.02] animate-fade-in`}
                    style={{ animationDelay: `${index * 100}ms` }}
                  >
                    <div className="flex">
                      <div className={cn(
                        `mr-${!isMobile ? '4' : '3'} p-3 rounded-full transition-colors`,
                        activity.status === 'completed' ? "bg-green-100 text-green-600 dark:bg-green-900/20 dark:text-green-400" : 
                        "bg-amber-100 text-amber-600 dark:bg-amber-900/20 dark:text-amber-400"
                      )}>
                        <activity.icon size={!isMobile ? 20 : 16} />
                      </div>
                      <div className="flex-1">
                        <div className="flex justify-between items-start">
                          <h3 className={`font-semibold ${!isMobile ? 'text-base' : 'text-sm'} text-foreground`}>{activity.title}</h3>
                          <span className={`${!isMobile ? 'text-sm' : 'text-xs'} text-muted-foreground font-medium`}>{activity.time}</span>
                        </div>
                        <p className={`${!isMobile ? 'text-sm' : 'text-xs'} text-muted-foreground mt-2 leading-relaxed`}>{activity.description}</p>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </TabsContent>
          </Tabs>
        </div>
      </div>
    </MainLayout>
  );
};

export default Inbox;
