import { useState, FormEvent } from 'react';
import { motion } from 'motion/react';
import { MapPin, Phone, Mail, Clock, MessageSquare, Send } from 'lucide-react';
import { Button } from '../components/ui/Button';
import { Input, Textarea } from '../components/ui/Input';
import { Card, CardContent } from '../components/ui/Card';

export default function Contact() {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSuccess, setIsSuccess] = useState(false);

  const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    const form = e.currentTarget;
    const formData = new FormData(form);
    const data = Object.fromEntries(formData.entries());

    try {
      const response = await fetch('/api/contact', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(data),
      });

      if (response.ok) {
        setIsSuccess(true);
        setTimeout(() => setIsSuccess(false), 5000);
        form.reset();
      }
    } catch (error) {
      console.error('Error sending message:', error);
      alert('Network error. Please try again later.');
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <div className="pt-16 pb-24 bg-gray-50">
      <div className="bg-primary py-20 text-white text-center px-4 mb-16">
        <h1 className="text-4xl md:text-5xl font-bold mb-4">Contact Us</h1>
        <p className="text-lg text-emerald-100 max-w-2xl mx-auto">
          Have a question or need assistance? We're here to help.
        </p>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-12">
          
          {/* Contact Info */}
          <div>
            <h2 className="text-3xl font-bold text-gray-900 mb-8">Get in Touch</h2>
            <div className="space-y-6 mb-12">
              {[
                { icon: MapPin, title: 'Visit Us', info: '123 Health Avenue, Medical District, NY 10001' },
                { icon: Phone, title: 'Call Us', info: '+1 (555) 123-4567' },
                { icon: Mail, title: 'Email Us', info: 'care@mednova.com' },
                { icon: Clock, title: 'Working Hours', info: 'Mon-Sun: 8:00 AM - 10:00 PM' },
              ].map((item, idx) => (
                <div key={idx} className="flex items-start gap-4 p-6 bg-white rounded-2xl shadow-sm border border-gray-100">
                  <div className="bg-primary/10 p-3 rounded-full text-primary shrink-0">
                    <item.icon className="h-6 w-6" />
                  </div>
                  <div>
                    <h3 className="font-bold text-gray-900 mb-1">{item.title}</h3>
                    <p className="text-gray-600">{item.info}</p>
                  </div>
                </div>
              ))}
            </div>

            {/* Map Placeholder */}
            <div className="bg-gray-200 rounded-2xl h-64 flex items-center justify-center relative overflow-hidden">
              <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1524661135-423995f22d0b?auto=format&fit=crop&w=800&q=80')] opacity-50 object-cover mix-blend-overlay"></div>
              <div className="relative z-10 bg-white/90 backdrop-blur-sm px-6 py-3 rounded-full font-medium text-gray-700 shadow-md flex items-center gap-2">
                <MapPin className="h-5 w-5 text-primary" />
                Google Maps Embed Here
              </div>
            </div>
          </div>

          {/* Contact Form */}
          <div>
            <Card className="h-full">
              <CardContent className="p-8">
                <h3 className="text-2xl font-bold text-gray-900 mb-6 flex items-center gap-2">
                  <MessageSquare className="h-6 w-6 text-primary" />
                  Send us a Message
                </h3>
                
                {isSuccess ? (
                  <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} className="bg-emerald-50 text-emerald-800 p-6 rounded-xl border border-emerald-200 text-center">
                    <p className="font-medium">Message sent successfully!</p>
                    <p className="text-sm mt-2 opacity-80">We will get back to you within 24 hours.</p>
                  </motion.div>
                ) : (
                  <form onSubmit={handleSubmit} className="space-y-6">
                    <Input label="Full Name" name="name" required placeholder="John Doe" />
                    <Input label="Email Address" name="email" type="email" required placeholder="john@example.com" />
                    <Input label="Subject" name="subject" placeholder="How can we help?" />
                    <Textarea label="Message" name="message" required placeholder="Type your message here..." />
                    
                    <Button type="submit" className="w-full gap-2" disabled={isSubmitting}>
                      {isSubmitting ? 'Sending...' : 'Send Message'}
                      {!isSubmitting && <Send className="h-4 w-4" />}
                    </Button>
                  </form>
                )}
              </CardContent>
            </Card>
          </div>

        </div>
      </div>
    </div>
  );
}
