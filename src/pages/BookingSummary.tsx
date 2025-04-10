
import { useEffect, useState } from 'react';
import { useNavigate, useSearchParams } from 'react-router-dom';
import { ChevronLeft, Calendar, Clock, Users, FileText, Edit2 } from 'lucide-react';
import MainLayout from '@/components/layout/MainLayout';
import { Button } from '@/components/ui/button';
import { Card } from '@/components/ui/card';
import { Separator } from '@/components/ui/separator';
import { format } from 'date-fns';

const BookingSummary = () => {
  const navigate = useNavigate();
  const [searchParams] = useSearchParams();
  
  // Extract all booking details from URL params
  const bookingType = searchParams.get('type') || 'chef';
  const itemId = searchParams.get('id') || '';
  const dateParam = searchParams.get('date');
  const time = searchParams.get('time') || '';
  const guests = parseInt(searchParams.get('guests') || '2');
  const notes = searchParams.get('notes') || '';
  
  // Format the date
  const date = dateParam ? new Date(dateParam) : new Date();
  
  // Example data - in a real app, fetch this based on ID and type
  const bookingItem = {
    chef: {
      name: 'David Kim',
      image: 'https://images.unsplash.com/photo-1581299894007-aaa50297cf16?q=80&w=1974',
      specialty: 'Asian Fusion',
      hourlyRate: 65,
      duration: 3, // hours
      serviceFee: 15
    },
    restaurant: {
      name: 'The Rustic Table',
      image: 'https://images.unsplash.com/photo-1517248135467-4c7edcad34c4?q=80&w=2070',
      cuisine: 'Contemporary American',
      pricePerPerson: 45,
      serviceFee: 10
    },
    event: {
      name: 'Cooking Masterclass',
      image: 'https://images.unsplash.com/photo-1507048331197-7d4ac70811cf?q=80&w=2074',
      type: 'Workshop',
      pricePerPerson: 45,
      duration: 2, // hours
      materialsFee: 25
    }
  }[bookingType as keyof typeof bookingItem];

  // Calculate total price based on booking type
  const calculateTotal = () => {
    if (!bookingItem) return { subtotal: 0, fees: 0, total: 0 };
    
    let subtotal = 0;
    let fees = 0;
    
    if (bookingType === 'chef') {
      const item = bookingItem as typeof bookingItem.chef;
      subtotal = item.hourlyRate * item.duration;
      fees = item.serviceFee;
    } else if (bookingType === 'restaurant') {
      const item = bookingItem as typeof bookingItem.restaurant;
      subtotal = item.pricePerPerson * guests;
      fees = item.serviceFee;
    } else if (bookingType === 'event') {
      const item = bookingItem as typeof bookingItem.event;
      subtotal = item.pricePerPerson * guests;
      fees = item.materialsFee;
    }
    
    return {
      subtotal,
      fees,
      total: subtotal + fees
    };
  };
  
  const { subtotal, fees, total } = calculateTotal();
  
  // Handle proceeding to payment
  const handleProceedToPayment = () => {
    navigate(`/payment-checkout?type=${bookingType}&id=${itemId}&date=${dateParam}&time=${time}&guests=${guests}&notes=${encodeURIComponent(notes)}&total=${total}`);
  };

  return (
    <MainLayout>
      <div className="container max-w-md mx-auto px-4 pt-5 pb-24">
        <div className="flex items-center mb-6">
          <button onClick={() => navigate(-1)} className="mr-3">
            <ChevronLeft size={24} />
          </button>
          <h1 className="text-xl font-bold">Booking Summary</h1>
        </div>
        
        {/* Booking Item Card */}
        <Card className="p-4 mb-6">
          <div className="flex">
            <div className="w-20 h-20 rounded-lg overflow-hidden mr-4">
              <img 
                src={bookingItem?.image} 
                alt={bookingItem?.name} 
                className="w-full h-full object-cover" 
              />
            </div>
            <div>
              <h2 className="font-medium">{bookingItem?.name}</h2>
              <p className="text-sm text-gray-500">
                {bookingType === 'chef' && (bookingItem as typeof bookingItem.chef).specialty}
                {bookingType === 'restaurant' && (bookingItem as typeof bookingItem.restaurant).cuisine}
                {bookingType === 'event' && (bookingItem as typeof bookingItem.event).type}
              </p>
            </div>
          </div>
        </Card>
        
        {/* Booking Details */}
        <Card className="p-4 mb-6">
          <h2 className="text-lg font-medium mb-4">Booking Details</h2>
          
          <div className="space-y-4">
            <div className="flex justify-between items-center">
              <div className="flex items-center text-sm">
                <Calendar size={16} className="mr-2 text-gray-500" />
                <span>Date</span>
              </div>
              <div className="flex items-center">
                <span className="text-sm mr-2">{format(date, 'EEE, MMM d, yyyy')}</span>
                <Button variant="ghost" size="sm" className="p-0 h-auto" onClick={() => navigate(`/booking?type=${bookingType}&id=${itemId}`)}>
                  <Edit2 size={14} />
                </Button>
              </div>
            </div>
            
            <div className="flex justify-between items-center">
              <div className="flex items-center text-sm">
                <Clock size={16} className="mr-2 text-gray-500" />
                <span>Time</span>
              </div>
              <div className="flex items-center">
                <span className="text-sm mr-2">{time}</span>
                <Button variant="ghost" size="sm" className="p-0 h-auto" onClick={() => navigate(`/booking?type=${bookingType}&id=${itemId}`)}>
                  <Edit2 size={14} />
                </Button>
              </div>
            </div>
            
            <div className="flex justify-between items-center">
              <div className="flex items-center text-sm">
                <Users size={16} className="mr-2 text-gray-500" />
                <span>Guests</span>
              </div>
              <div className="flex items-center">
                <span className="text-sm mr-2">{guests}</span>
                <Button variant="ghost" size="sm" className="p-0 h-auto" onClick={() => navigate(`/booking?type=${bookingType}&id=${itemId}`)}>
                  <Edit2 size={14} />
                </Button>
              </div>
            </div>
            
            {notes && (
              <div>
                <div className="flex items-center text-sm mb-2">
                  <FileText size={16} className="mr-2 text-gray-500" />
                  <span>Special Requests</span>
                </div>
                <p className="text-sm bg-gray-50 dark:bg-gray-800 p-3 rounded-md">
                  {notes}
                </p>
              </div>
            )}
          </div>
        </Card>
        
        {/* Cost Breakdown */}
        <Card className="p-4 mb-6">
          <h2 className="text-lg font-medium mb-4">Cost Breakdown</h2>
          
          <div className="space-y-3">
            <div className="flex justify-between text-sm">
              <span>
                {bookingType === 'chef' && `Chef Services (${(bookingItem as typeof bookingItem.chef).duration} hours)`}
                {bookingType === 'restaurant' && `Dining (${guests} guests)`}
                {bookingType === 'event' && `Event Fee (${guests} guests)`}
              </span>
              <span>${subtotal}</span>
            </div>
            
            <div className="flex justify-between text-sm">
              <span>
                {bookingType === 'chef' && 'Service Fee'}
                {bookingType === 'restaurant' && 'Service Fee'}
                {bookingType === 'event' && 'Materials Fee'}
              </span>
              <span>${fees}</span>
            </div>
            
            <Separator className="my-4" />
            
            <div className="flex justify-between font-medium">
              <span>Total</span>
              <span>${total}</span>
            </div>
          </div>
        </Card>
        
        {/* Actions */}
        <div className="sticky bottom-20 bg-white dark:bg-gray-900 pt-4 pb-4">
          <Button 
            className="w-full" 
            onClick={handleProceedToPayment}
          >
            Proceed to Payment
          </Button>
        </div>
      </div>
    </MainLayout>
  );
};

export default BookingSummary;
