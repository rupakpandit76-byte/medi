import { useState, FormEvent } from 'react';
import { motion } from 'motion/react';
import { Calendar, Clock, User, Phone, Mail, MessageSquare, CheckCircle2 } from 'lucide-react';
import { Button } from '../components/ui/Button';
import { Input, Textarea } from '../components/ui/Input';
import { Card, CardContent } from '../components/ui/Card';

export default function Appointment() {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSuccess, setIsSuccess] = useState(false);

  const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    const form = e.currentTarget;
    const formData = new FormData(form);
    const data = Object.fromEntries(formData.entries());

    try {
      const response = await fetch('/api/appointments', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(data),
      });

      if (response.ok) {
        setIsSuccess(true);
        // Reset after 3 seconds
        setTimeout(() => setIsSuccess(false), 5000);
        form.reset();
      } else {
        alert('Failed to book appointment. Please try again.');
      }
    } catch (error) {
      console.error('Error booking appointment:', error);
      alert('Network error. Please try again later.');
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <div className="py-20 bg-gray-50 min-h-screen">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="text-center mb-12"
        >
          <h1 className="text-4xl font-bold text-gray-900 mb-4">Book a Consultation</h1>
          <p className="text-lg text-gray-600">Schedule an appointment with our healthcare experts.</p>
        </motion.div>

        <Card className="max-w-2xl mx-auto rounded-[32px] shadow-2xl shadow-slate-200 border border-slate-100">
          <CardContent>
            {isSuccess ? (
              <motion.div 
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                className="text-center py-12"
              >
                <div className="mx-auto w-20 h-20 bg-green-100 rounded-full flex items-center justify-center mb-6">
                  <CheckCircle2 className="h-10 w-10 text-primary" />
                </div>
                <h3 className="text-2xl font-bold text-gray-900 mb-2">Appointment Booked Successfully</h3>
                <p className="text-gray-600 mb-8">Thank you for booking. We will contact you shortly to confirm the details.</p>
                <Button onClick={() => setIsSuccess(false)}>Book Another</Button>
              </motion.div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <Input 
                    label="Full Name" 
                    name="name" 
                    required 
                    placeholder="John Doe" 
                    icon={<User className="h-4 w-4 text-gray-400 absolute right-4 top-1/2 -translate-y-1/2" />}
                  />
                  <Input 
                    label="Mobile Number" 
                    name="phone" 
                    type="tel" 
                    required 
                    placeholder="+1 (555) 000-0000" 
                  />
                </div>

                <Input 
                  label="Email Address" 
                  name="email" 
                  type="email" 
                  placeholder="john@example.com" 
                />

                <div className="space-y-1.5">
                  <label className="block text-xs font-bold text-slate-400 uppercase mb-1 px-1">Service Required <span className="text-red-500">*</span></label>
                  <select 
                    name="service" 
                    required
                    className="flex w-full px-4 py-3 bg-slate-50 border border-slate-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-emerald-600/20 focus:border-emerald-600 transition-all text-sm"
                  >
                    <option value="">Select a service</option>
                    <option value="General Consultation">General Consultation</option>
                    <option value="Prescription Review">Prescription Review</option>
                    <option value="Health Checkup">Health Checkup</option>
                    <option value="Vaccination">Vaccination</option>
                  </select>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <Input 
                    label="Preferred Date" 
                    name="date" 
                    type="date" 
                    required 
                  />
                  <Input 
                    label="Preferred Time" 
                    name="time" 
                    type="time" 
                    required 
                  />
                </div>

                <Textarea 
                  label="Additional Notes (Optional)" 
                  name="message" 
                  placeholder="Any specific symptoms or questions?" 
                />

                <Button 
                  type="submit" 
                  className="w-full" 
                  disabled={isSubmitting}
                >
                  {isSubmitting ? 'Booking...' : 'Confirm Appointment'}
                </Button>
                
                <p className="text-xs text-center text-gray-500 mt-4">
                  By booking, you agree to our Terms & Conditions and Privacy Policy.
                </p>
              </form>
            )}
          </CardContent>
        </Card>
      </div>
    </div>
  );
}
