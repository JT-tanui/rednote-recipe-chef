
import { useState } from 'react';
import { useNavigate, useSearchParams } from 'react-router-dom';
import { ChevronLeft, Calendar, Clock, Users, FileText } from 'lucide-react';
import { format } from 'date-fns';
import MainLayout from '@/components/layout/MainLayout';
import { Button } from '@/components/ui/button';
import { Calendar as CalendarComponent } from '@/components/ui/calendar';
import { Popover, PopoverContent, PopoverTrigger } from '@/components/ui/popover';
import { Card } from '@/components/ui/card';
import { Textarea } from '@/components/ui/textarea';
import { Input } from '@/components/ui/input';
import { cn } from '@/lib/utils';

const timeSlots = [
  '9:00 AM', '10:00 AM', '11:00 AM', '12:00 PM', 
  '1:00 PM', '2:00 PM', '3:00 PM', '4:00 PM', 
  '5:00 PM', '6:00 PM', '7:00 PM', '8:00 PM'
];

const BookingPage = () => {
  const navigate = useNavigate();
  const [searchParams] = useSearchParams();
  
  // Get booking type and ID from URL params
  const bookingType = searchParams.get('type') || 'chef'; // chef, restaurant, event
  const itemId = searchParams.get('id') || '';
  
  // States for booking details
  const [date, setDate] = useState<Date | undefined>(new Date());
  const [selectedTime, setSelectedTime] = useState<string | null>(null);
  const [guestCount, setGuestCount] = useState<number>(2);
  const [notes, setNotes] = useState<string>('');
  
  // Example service/item data - in a real app, fetch this based on ID and type
  const bookingItem = {
    chef: {
      name: 'David Kim',
      image: 'https://images.unsplash.com/photo-1581299894007-aaa50297cf16?q=80&w=1974',
      specialty: 'Asian Fusion',
      hourlyRate: '$65/hr'
    },
    restaurant: {
      name: 'The Rustic Table',
      image: 'https://images.unsplash.com/photo-1517248135467-4c7edcad34c4?q=80&w=2070',
      cuisine: 'Contemporary American',
      priceRange: '$$'
    },
    event: {
      name: 'Cooking Masterclass',
      image: 'https://images.unsplash.com/photo-1507048331197-7d4ac70811cf?q=80&w=2074',
      type: 'Workshop',
      price: '$45/person'
    }
  }[bookingType as keyof typeof bookingItem] || { name: 'Unknown', image: '', specialty: '', hourlyRate: '' };
  
  // Handle proceeding to booking summary
  const handleContinue = () => {
    if (!date || !selectedTime) {
      alert('Please select a date and time');
      return;
    }
    
    // Navigate to booking summary with all details as URL params
    navigate(`/booking-summary?type=${bookingType}&id=${itemId}&date=${date.toISOString()}&time=${selectedTime}&guests=${guestCount}&notes=${encodeURIComponent(notes)}`);
  };

  return (
    <MainLayout>
      <div className="container max-w-md mx-auto px-4 pt-5 pb-24">
        <div className="flex items-center mb-6">
          <button onClick={() => navigate(-1)} className="mr-3">
            <ChevronLeft size={24} />
          </button>
          <h1 className="text-xl font-bold">Book {bookingType === 'chef' ? 'Chef' : bookingType === 'restaurant' ? 'Table' : 'Event'}</h1>
        </div>
        
        <Card className="p-4 mb-6">
          <div className="flex items-center">
            <div className="w-16 h-16 rounded-lg overflow-hidden mr-4">
              <img src={bookingItem.image} alt={bookingItem.name} className="w-full h-full object-cover" />
            </div>
            <div>
              <h2 className="font-medium">{bookingItem.name}</h2>
              <p className="text-sm text-gray-500">
                {bookingType === 'chef' && (bookingItem as any).specialty}
                {bookingType === 'restaurant' && (bookingItem as any).cuisine}
                {bookingType === 'event' && (bookingItem as any).type}
              </p>
              <p className="text-sm font-medium text-culinary-primary mt-1">
                {bookingType === 'chef' && (bookingItem as any).hourlyRate}
                {bookingType === 'restaurant' && (bookingItem as any).priceRange}
                {bookingType === 'event' && (bookingItem as any).price}
              </p>
            </div>
          </div>
        </Card>
        
        <div className="space-y-6">
          {/* Date Selection */}
          <div>
            <h2 className="text-sm font-medium mb-2 flex items-center">
              <Calendar size={16} className="mr-2" /> Select Date
            </h2>
            <Popover>
              <PopoverTrigger asChild>
                <Button 
                  variant="outline" 
                  className="w-full justify-between text-left font-normal"
                >
                  {date ? format(date, 'EEEE, MMMM do, yyyy') : <span>Pick a date</span>}
                  <Calendar className="h-4 w-4 opacity-50" />
                </Button>
              </PopoverTrigger>
              <PopoverContent className="w-auto p-0" align="start">
                <CalendarComponent
                  mode="single"
                  selected={date}
                  onSelect={setDate}
                  initialFocus
                  disabled={(date) => {
                    // Disable dates in the past
                    const today = new Date();
                    today.setHours(0, 0, 0, 0);
                    return date < today;
                  }}
                  className={cn("p-3 pointer-events-auto")}
                />
              </PopoverContent>
            </Popover>
          </div>
          
          {/* Time Selection */}
          <div>
            <h2 className="text-sm font-medium mb-2 flex items-center">
              <Clock size={16} className="mr-2" /> Select Time
            </h2>
            <div className="grid grid-cols-3 gap-2">
              {timeSlots.map((time) => (
                <Button
                  key={time}
                  variant={selectedTime === time ? "default" : "outline"}
                  className="text-sm"
                  onClick={() => setSelectedTime(time)}
                >
                  {time}
                </Button>
              ))}
            </div>
          </div>
          
          {/* Guest Count */}
          <div>
            <h2 className="text-sm font-medium mb-2 flex items-center">
              <Users size={16} className="mr-2" /> Number of Guests
            </h2>
            <div className="flex items-center">
              <Button 
                variant="outline" 
                size="sm"
                onClick={() => setGuestCount(Math.max(1, guestCount - 1))}
                disabled={guestCount <= 1}
              >
                -
              </Button>
              <Input 
                type="number" 
                value={guestCount} 
                onChange={(e) => setGuestCount(parseInt(e.target.value) || 1)} 
                className="mx-2 text-center w-20" 
                min="1" 
                max="20"
              />
              <Button 
                variant="outline" 
                size="sm"
                onClick={() => setGuestCount(Math.min(20, guestCount + 1))}
                disabled={guestCount >= 20}
              >
                +
              </Button>
            </div>
          </div>
          
          {/* Notes */}
          <div>
            <h2 className="text-sm font-medium mb-2 flex items-center">
              <FileText size={16} className="mr-2" /> Special Requests
            </h2>
            <Textarea 
              placeholder={`Any special requests for your ${bookingType === 'chef' ? 'chef' : bookingType === 'restaurant' ? 'reservation' : 'event booking'}?`}
              className="resize-none"
              value={notes}
              onChange={(e) => setNotes(e.target.value)}
            />
          </div>
        </div>
        
        <div className="mt-8 sticky bottom-20 bg-white dark:bg-gray-900 pt-4 pb-4">
          <Button 
            className="w-full" 
            onClick={handleContinue}
          >
            Continue to Review
          </Button>
        </div>
      </div>
    </MainLayout>
  );
};

export default BookingPage;
