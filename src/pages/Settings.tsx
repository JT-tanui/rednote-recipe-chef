
import MainLayout from '@/components/layout/MainLayout';
import { Button } from '@/components/ui/button';
import { Switch } from '@/components/ui/switch';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import { Bell, Moon, Globe, Lock, Shield, CreditCard, User, Mail, Smartphone, Key } from 'lucide-react';
import { Separator } from '@/components/ui/separator';
import { useIsMobile } from '@/hooks/use-mobile';
import { useState } from 'react';

const Settings = () => {
  const isMobile = useIsMobile();
  const [notifications, setNotifications] = useState(true);
  const [darkMode, setDarkMode] = useState(false);
  const [profileVisible, setProfileVisible] = useState(true);
  const [activityStatus, setActivityStatus] = useState(false);

  return (
    <MainLayout>
      <div className="min-h-screen bg-gradient-to-br from-background via-background to-accent/5">
        <div className={`p-4 md:p-8 ${!isMobile ? "max-w-4xl mx-auto" : ""} pb-20`}>
          {!isMobile && (
            <header className="mb-10 text-center">
              <h1 className="text-4xl font-bold bg-gradient-to-r from-primary via-primary to-primary/70 bg-clip-text text-transparent mb-3">
                Settings
              </h1>
              <p className="text-muted-foreground text-xl">Customize your DineX experience</p>
            </header>
          )}
          
          {isMobile && (
            <header className="mb-6">
              <h1 className="text-2xl font-bold bg-gradient-to-r from-primary to-primary/70 bg-clip-text text-transparent">Settings</h1>
              <p className="text-sm text-muted-foreground mt-1">Manage your preferences and account</p>
            </header>
          )}
          
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 animate-fade-in">
            {/* Notifications Card */}
            <Card className="bg-card/80 backdrop-blur-sm border-2 hover:border-primary/20 transition-all duration-200">
              <CardHeader>
                <CardTitle className="flex items-center gap-3">
                  <div className="p-2 bg-primary/10 rounded-lg">
                    <Bell className="w-5 h-5 text-primary" />
                  </div>
                  Notifications
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="flex items-center justify-between">
                  <div>
                    <p className="font-medium">Push Notifications</p>
                    <p className="text-sm text-muted-foreground">Receive notifications about new recipes and updates</p>
                  </div>
                  <Switch checked={notifications} onCheckedChange={setNotifications} />
                </div>
                <div className="flex items-center justify-between">
                  <div>
                    <p className="font-medium">Email Updates</p>
                    <p className="text-sm text-muted-foreground">Weekly recipe recommendations</p>
                  </div>
                  <Switch />
                </div>
                <div className="flex items-center justify-between">
                  <div>
                    <p className="font-medium">Chef Updates</p>
                    <p className="text-sm text-muted-foreground">New content from followed chefs</p>
                  </div>
                  <Switch />
                </div>
              </CardContent>
            </Card>

            {/* Appearance Card */}
            <Card className="bg-card/80 backdrop-blur-sm border-2 hover:border-primary/20 transition-all duration-200">
              <CardHeader>
                <CardTitle className="flex items-center gap-3">
                  <div className="p-2 bg-primary/10 rounded-lg">
                    <Moon className="w-5 h-5 text-primary" />
                  </div>
                  Appearance
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="flex items-center justify-between">
                  <div>
                    <p className="font-medium">Dark Mode</p>
                    <p className="text-sm text-muted-foreground">Switch to dark theme</p>
                  </div>
                  <Switch checked={darkMode} onCheckedChange={setDarkMode} />
                </div>
                <div>
                  <p className="font-medium mb-2">Language</p>
                  <Select defaultValue="english">
                    <SelectTrigger>
                      <SelectValue />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="english">English</SelectItem>
                      <SelectItem value="spanish">Spanish</SelectItem>
                      <SelectItem value="french">French</SelectItem>
                      <SelectItem value="italian">Italian</SelectItem>
                    </SelectContent>
                  </Select>
                </div>
              </CardContent>
            </Card>

            {/* Privacy Card */}
            <Card className="bg-card/80 backdrop-blur-sm border-2 hover:border-primary/20 transition-all duration-200">
              <CardHeader>
                <CardTitle className="flex items-center gap-3">
                  <div className="p-2 bg-primary/10 rounded-lg">
                    <Lock className="w-5 h-5 text-primary" />
                  </div>
                  Privacy
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="flex items-center justify-between">
                  <div>
                    <p className="font-medium">Profile Visibility</p>
                    <p className="text-sm text-muted-foreground">Make your profile public</p>
                  </div>
                  <Switch checked={profileVisible} onCheckedChange={setProfileVisible} />
                </div>
                <div className="flex items-center justify-between">
                  <div>
                    <p className="font-medium">Activity Status</p>
                    <p className="text-sm text-muted-foreground">Show when you're online</p>
                  </div>
                  <Switch checked={activityStatus} onCheckedChange={setActivityStatus} />
                </div>
                <div className="flex items-center justify-between">
                  <div>
                    <p className="font-medium">Recipe History</p>
                    <p className="text-sm text-muted-foreground">Save browsing history</p>
                  </div>
                  <Switch />
                </div>
              </CardContent>
            </Card>

            {/* Security Card */}
            <Card className="bg-card/80 backdrop-blur-sm border-2 hover:border-primary/20 transition-all duration-200">
              <CardHeader>
                <CardTitle className="flex items-center gap-3">
                  <div className="p-2 bg-primary/10 rounded-lg">
                    <Shield className="w-5 h-5 text-primary" />
                  </div>
                  Security
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <Button variant="outline" className="w-full justify-start hover:bg-accent">
                  <Key className="w-4 h-4 mr-2" />
                  Change Password
                </Button>
                <Button variant="outline" className="w-full justify-start hover:bg-accent">
                  <Smartphone className="w-4 h-4 mr-2" />
                  Two-Factor Authentication
                </Button>
                <Button variant="outline" className="w-full justify-start hover:bg-accent">
                  <Mail className="w-4 h-4 mr-2" />
                  Update Email
                </Button>
              </CardContent>
            </Card>

            {/* Account Management Card */}
            <Card className="lg:col-span-2 bg-card/80 backdrop-blur-sm border-2 hover:border-primary/20 transition-all duration-200">
              <CardHeader>
                <CardTitle className="flex items-center gap-3">
                  <div className="p-2 bg-primary/10 rounded-lg">
                    <User className="w-5 h-5 text-primary" />
                  </div>
                  Account Management
                </CardTitle>
              </CardHeader>
              <CardContent>
                <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                  <Button variant="outline" className="justify-start hover:bg-accent">
                    <CreditCard className="w-4 h-4 mr-2" />
                    Payment Methods
                  </Button>
                  <Button variant="outline" className="justify-start hover:bg-accent">
                    <Globe className="w-4 h-4 mr-2" />
                    Region & Currency
                  </Button>
                  <Button variant="outline" className="justify-start hover:bg-accent text-destructive hover:text-destructive">
                    <User className="w-4 h-4 mr-2" />
                    Delete Account
                  </Button>
                </div>
              </CardContent>
            </Card>
          </div>

          <div className="flex justify-end space-x-4 mt-8">
            <Button variant="outline" size={!isMobile ? "default" : "sm"}>Cancel</Button>
            <Button size={!isMobile ? "default" : "sm"} className="bg-gradient-to-r from-primary to-primary/90 hover:from-primary/90 hover:to-primary">
              Save Changes
            </Button>
          </div>
        </div>
      </div>
    </MainLayout>
  );
};

export default Settings;
