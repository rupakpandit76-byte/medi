import { motion } from 'motion/react';
import { Pill, Activity, Stethoscope, Truck, Baby, Scissors, Heart, Droplets } from 'lucide-react';
import { Card, CardContent } from '../components/ui/Card';
import { Button } from '../components/ui/Button';
import { Link } from 'react-router-dom';

const services = [
  { icon: Pill, title: 'Prescription Medicines', desc: 'Authentic medicines sourced directly from authorized manufacturers.' },
  { icon: Activity, title: 'OTC Medicines', desc: 'Over-the-counter remedies for common ailments.' },
  { icon: Truck, title: 'Home Delivery', desc: 'Fast and secure delivery to your doorstep within hours.' },
  { icon: Heart, title: 'Health Checkups', desc: 'Basic vital checks, blood pressure, and sugar monitoring in-store.' },
  { icon: Stethoscope, title: 'Medical Equipment', desc: 'Quality medical devices for home use and monitoring.' },
  { icon: Scissors, title: 'Surgical Products', desc: 'Sterile surgical supplies and wound care products.' },
  { icon: Baby, title: 'Baby Care', desc: 'Premium baby food, diapers, and skincare products.' },
  { icon: Droplets, title: 'Personal Care', desc: 'Dermatologist-approved skincare and wellness items.' },
];

export default function Services() {
  return (
    <div className="pt-16 pb-24 bg-gray-50">
      {/* Header */}
      <div className="bg-primary py-20 text-white text-center px-4">
        <h1 className="text-4xl md:text-5xl font-bold mb-4">Our Services</h1>
        <p className="text-lg text-emerald-100 max-w-2xl mx-auto">
          Comprehensive healthcare solutions designed for you and your family's well-being.
        </p>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mt-16">
        <div className="grid md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
          {services.map((srv, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: idx * 0.1 }}
            >
              <Card className="h-full hover:shadow-lg transition-all duration-300 border-transparent hover:border-primary/20 hover:-translate-y-1">
                <CardContent className="p-8 text-center flex flex-col items-center">
                  <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mb-6">
                    <srv.icon className="h-8 w-8 text-primary" />
                  </div>
                  <h3 className="text-lg font-bold text-gray-900 mb-3">{srv.title}</h3>
                  <p className="text-sm text-gray-600 leading-relaxed">{srv.desc}</p>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </div>
        
        <div className="mt-20 text-center bg-white p-12 rounded-3xl shadow-sm border border-gray-100">
          <h2 className="text-3xl font-bold text-gray-900 mb-4">Need specific medicine?</h2>
          <p className="text-gray-600 mb-8 max-w-xl mx-auto">
            Check the availability of your prescribed medicines. Upload your prescription and we will handle the rest.
          </p>
          <div className="flex gap-4 justify-center">
            <Link to="/contact">
              <Button size="lg" variant="outline">Upload Prescription</Button>
            </Link>
            <Link to="/contact">
              <Button size="lg">Contact Pharmacist</Button>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}
