
import { useNavigate } from 'react-router-dom';
import { CheckCircle, Calendar, Home } from 'lucide-react';
import MainLayout from '@/components/layout/MainLayout';
import { Button } from '@/components/ui/button';
import { Card } from '@/components/ui/card';
import { motion } from 'framer-motion';

const PaymentSuccess = () => {
  const navigate = useNavigate();
  
  return (
    <MainLayout>
      <div className="container max-w-md mx-auto px-4 pt-5 pb-24 h-[70vh] flex flex-col items-center justify-center">
        <motion.div 
          initial={{ scale: 0.8, opacity: 0 }} 
          animate={{ scale: 1, opacity: 1 }} 
          transition={{ duration: 0.5 }}
          className="w-full"
        >
          <Card className="p-8 flex flex-col items-center text-center">
            <div className="w-16 h-16 rounded-full bg-green-100 dark:bg-green-900/30 flex items-center justify-center mb-6">
              <CheckCircle size={32} className="text-green-600 dark:text-green-400" />
            </div>
            
            <h1 className="text-xl font-bold mb-2">Payment Successful!</h1>
            <p className="text-gray-500 dark:text-gray-400 mb-6">
              Your booking has been confirmed. We've sent a confirmation email with all the details.
            </p>
            
            <div className="w-full space-y-4">
              <Button 
                className="w-full" 
                variant="outline"
                onClick={() => navigate('/meal-planner')}
              >
                <Calendar size={18} className="mr-2" /> View in My Calendar
              </Button>
              
              <Button 
                className="w-full" 
                onClick={() => navigate('/')}
              >
                <Home size={18} className="mr-2" /> Back to Home
              </Button>
            </div>
          </Card>
        </motion.div>
      </div>
    </MainLayout>
  );
};

export default PaymentSuccess;
