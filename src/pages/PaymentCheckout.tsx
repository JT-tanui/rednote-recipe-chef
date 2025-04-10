
import { useState } from 'react';
import { useNavigate, useSearchParams } from 'react-router-dom';
import { ChevronLeft, CreditCard, Check, Lock } from 'lucide-react';
import MainLayout from '@/components/layout/MainLayout';
import { Button } from '@/components/ui/button';
import { Card } from '@/components/ui/card';
import { Label } from '@/components/ui/label';
import { Input } from '@/components/ui/input';
import { RadioGroup, RadioGroupItem } from '@/components/ui/radio-group';
import { useToast } from '@/components/ui/use-toast';

const PaymentCheckout = () => {
  const navigate = useNavigate();
  const { toast } = useToast();
  const [searchParams] = useSearchParams();
  
  // Get payment details from URL
  const bookingType = searchParams.get('type') || 'chef';
  const total = searchParams.get('total') || '0';
  
  // Payment form state
  const [paymentMethod, setPaymentMethod] = useState<string>('card');
  const [cardNumber, setCardNumber] = useState<string>('');
  const [cardName, setCardName] = useState<string>('');
  const [expiryDate, setExpiryDate] = useState<string>('');
  const [cvv, setCvv] = useState<string>('');
  const [isProcessing, setIsProcessing] = useState<boolean>(false);

  // Format card number with spaces
  const formatCardNumber = (value: string) => {
    const v = value.replace(/\s+/g, '').replace(/[^0-9]/gi, '');
    const matches = v.match(/\d{4,16}/g);
    const match = (matches && matches[0]) || '';
    const parts = [];

    for (let i = 0; i < match.length; i += 4) {
      parts.push(match.substring(i, i + 4));
    }

    if (parts.length) {
      return parts.join(' ');
    } else {
      return value;
    }
  };

  // Format expiry date
  const formatExpiryDate = (value: string) => {
    const v = value.replace(/\s+/g, '').replace(/[^0-9]/gi, '');
    if (v.length >= 2) {
      return `${v.substring(0, 2)}/${v.substring(2, 4)}`;
    }
    return v;
  };

  // Handle payment submission
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    
    // Basic validation
    if (paymentMethod === 'card') {
      if (!cardNumber || !cardName || !expiryDate || !cvv) {
        toast({
          title: "Error",
          description: "Please fill in all card details",
          variant: "destructive"
        });
        return;
      }
    }
    
    // Simulate payment processing
    setIsProcessing(true);
    
    setTimeout(() => {
      setIsProcessing(false);
      toast({
        title: "Payment Successful",
        description: "Your booking has been confirmed!",
        variant: "default"
      });
      
      // Navigate to success page
      navigate('/payment-success');
    }, 2000);
  };

  return (
    <MainLayout>
      <div className="container max-w-md mx-auto px-4 pt-5 pb-24">
        <div className="flex items-center mb-6">
          <button onClick={() => navigate(-1)} className="mr-3">
            <ChevronLeft size={24} />
          </button>
          <h1 className="text-xl font-bold">Payment</h1>
        </div>
        
        {/* Amount Summary */}
        <Card className="p-4 mb-6">
          <div className="flex justify-between items-center">
            <div>
              <p className="text-sm text-gray-500">Total Amount</p>
              <p className="text-xl font-bold">${total}</p>
            </div>
            <div className="bg-green-100 dark:bg-green-900/30 text-green-800 dark:text-green-400 px-3 py-1 rounded-full text-xs flex items-center">
              <Lock size={12} className="mr-1" />
              Secure Payment
            </div>
          </div>
        </Card>
        
        <form onSubmit={handleSubmit}>
          {/* Payment Method Selection */}
          <div className="mb-6">
            <h2 className="text-lg font-medium mb-4">Payment Method</h2>
            <RadioGroup value={paymentMethod} onValueChange={setPaymentMethod}>
              <div className="flex flex-col space-y-3">
                <Label className="flex items-center space-x-3 p-4 border rounded-md cursor-pointer hover:bg-gray-50 dark:hover:bg-gray-800">
                  <RadioGroupItem value="card" id="card" />
                  <div className="flex items-center space-x-2">
                    <CreditCard size={20} />
                    <span>Credit/Debit Card</span>
                  </div>
                </Label>
                
                <Label className="flex items-center space-x-3 p-4 border rounded-md cursor-pointer hover:bg-gray-50 dark:hover:bg-gray-800">
                  <RadioGroupItem value="paypal" id="paypal" />
                  <div className="flex items-center space-x-2">
                    <svg width="20" height="20" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                      <path d="M7.844 20.5H5.844C5.291 20.5 4.844 20.053 4.844 19.5L4.5 15L4 10.5C4 9.948 4.448 9.5 5 9.5H10C13.5 9.5 15 11 15.5 14C16 17 14 18.5 11 18.5H9L8.654 20.108C8.567 20.361 8.339 20.5 8.078 20.5H7.844Z" stroke="#1E3A8A" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                      <path d="M19.844 15.5H17.844C17.291 15.5 16.844 15.053 16.844 14.5L16.5 10L16 5.5C16 4.948 16.448 4.5 17 4.5H22C25.5 4.5 27 6 27.5 9C28 12 26 13.5 23 13.5H21L20.654 15.108C20.567 15.361 20.339 15.5 20.078 15.5H19.844Z" stroke="#1E3A8A" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                    </svg>
                    <span>PayPal</span>
                  </div>
                </Label>
                
                <Label className="flex items-center space-x-3 p-4 border rounded-md cursor-pointer hover:bg-gray-50 dark:hover:bg-gray-800">
                  <RadioGroupItem value="applepay" id="applepay" />
                  <div className="flex items-center space-x-2">
                    <svg width="20" height="20" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                      <path d="M17.6 13.8C17.4 14.3 17.1 14.7 16.7 15.1C16.2 15.7 15.6 16 15 16C14.4 16 13.8 15.7 13.4 15.5C12.9 15.3 12.5 15.1 12 15.1C11.5 15.1 11.1 15.3 10.6 15.5C10.2 15.7 9.60001 16 9.00001 16C8.40001 16 7.8 15.7 7.3 15.1C6.8 14.6 6.4 13.9 6.1 13.2C5.8 12.5 5.7 11.8 5.7 11.1C5.7 10.3 5.9 9.6 6.3 9C6.6 8.5 7.00001 8.1 7.50001 7.9C8.00001 7.7 8.5 7.6 9.10001 7.6C9.60001 7.6 10.1 7.8 10.5 8C10.9 8.2 11.2 8.4 11.5 8.4C11.7 8.4 12.1 8.2 12.5 8C13 7.8 13.4 7.6 14 7.6C14.5 7.6 15 7.7 15.4 7.8C15.9 8 16.2 8.2 16.5 8.6C16.1 8.9 15.8 9.3 15.6 9.7C15.4 10.1 15.3 10.6 15.3 11.1C15.3 11.7 15.4 12.2 15.7 12.7C15.9 13.1 16.2 13.5 16.7 13.8H17.6Z" stroke="currentColor" strokeWidth="2" strokeMiterlimit="10" strokeLinecap="round" strokeLinejoin="round"/>
                      <path d="M13.5 7.5V4.5C13.5 3.9 13.3 3.3 12.9 2.9C12.5 2.5 12 2.3 11.4 2.3H11.2" stroke="currentColor" strokeWidth="2" strokeMiterlimit="10" strokeLinecap="round" strokeLinejoin="round"/>
                    </svg>
                    <span>Apple Pay</span>
                  </div>
                </Label>
              </div>
            </RadioGroup>
          </div>
          
          {/* Credit Card Details */}
          {paymentMethod === 'card' && (
            <Card className="p-4 mb-6">
              <div className="space-y-4">
                <div className="space-y-2">
                  <Label htmlFor="cardNumber">Card Number</Label>
                  <Input
                    id="cardNumber"
                    placeholder="1234 5678 9012 3456"
                    value={cardNumber}
                    onChange={(e) => setCardNumber(formatCardNumber(e.target.value))}
                    maxLength={19}
                  />
                </div>
                
                <div className="space-y-2">
                  <Label htmlFor="cardName">Cardholder Name</Label>
                  <Input
                    id="cardName"
                    placeholder="John Doe"
                    value={cardName}
                    onChange={(e) => setCardName(e.target.value)}
                  />
                </div>
                
                <div className="grid grid-cols-2 gap-4">
                  <div className="space-y-2">
                    <Label htmlFor="expiryDate">Expiry Date</Label>
                    <Input
                      id="expiryDate"
                      placeholder="MM/YY"
                      value={expiryDate}
                      onChange={(e) => setExpiryDate(formatExpiryDate(e.target.value))}
                      maxLength={5}
                    />
                  </div>
                  
                  <div className="space-y-2">
                    <Label htmlFor="cvv">CVV</Label>
                    <Input
                      id="cvv"
                      type="password"
                      placeholder="123"
                      value={cvv}
                      onChange={(e) => setCvv(e.target.value)}
                      maxLength={3}
                    />
                  </div>
                </div>
              </div>
            </Card>
          )}
          
          {/* Payment Button */}
          <div className="sticky bottom-20 bg-white dark:bg-gray-900 pt-4 pb-4">
            <Button 
              className="w-full" 
              type="submit" 
              disabled={isProcessing}
            >
              {isProcessing ? (
                <>Processing...</>
              ) : (
                <>Pay ${total}</>
              )}
            </Button>
          </div>
        </form>
      </div>
    </MainLayout>
  );
};

export default PaymentCheckout;
