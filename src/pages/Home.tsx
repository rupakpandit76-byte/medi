import { motion } from 'motion/react';
import { ArrowRight, Shield, Clock, Heart, Truck, CheckCircle2, Star } from 'lucide-react';
import { Link } from 'react-router-dom';
import { Button } from '../components/ui/Button';
import { Card, CardContent } from '../components/ui/Card';

const fadeIn = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6 } }
};

const staggerContainer = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { staggerChildren: 0.2 }
  }
};

export default function Home() {
  return (
    <div className="flex flex-col">
      {/* Hero Section */}
      <section className="relative pt-20 pb-32 overflow-hidden bg-gradient-to-br from-emerald-50 via-white to-blue-50">
        <div className="absolute inset-0 z-0">
          <div className="absolute -top-24 -right-24 w-96 h-96 bg-primary/10 rounded-full blur-3xl"></div>
          <div className="absolute bottom-0 -left-24 w-96 h-96 bg-blue-500/10 rounded-full blur-3xl"></div>
        </div>
        
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <motion.div 
              initial="hidden"
              animate="visible"
              variants={staggerContainer}
              className="max-w-2xl"
            >
              <motion.div variants={fadeIn} className="inline-flex items-center gap-2 px-4 py-1.5 bg-emerald-100 text-emerald-700 text-sm font-bold uppercase tracking-wider rounded-full mb-6">
                <span className="relative flex h-2 w-2">
                  <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-primary opacity-75"></span>
                  <span className="relative inline-flex rounded-full h-2 w-2 bg-primary"></span>
                </span>
                24/7 Pharmacy Services
              </motion.div>
              <motion.h1 variants={fadeIn} className="text-5xl lg:text-6xl font-extrabold text-slate-900 leading-[1.1] tracking-tight mb-6">
                Your Trusted <span className="text-primary">Healthcare</span> Partner
              </motion.h1>
              <motion.p variants={fadeIn} className="text-lg text-slate-500 max-w-xl leading-relaxed mb-8">
                Experience premium healthcare with MedNova Pharmacy. We deliver your essential medicines, wellness products, and expert consultations right to your doorstep.
              </motion.p>
              <motion.div variants={fadeIn} className="flex flex-wrap gap-4">
                <Link to="/appointment">
                  <Button size="lg" className="gap-2">
                    Book Consultation <ArrowRight className="h-5 w-5" />
                  </Button>
                </Link>
                <Link to="/services">
                  <Button variant="outline" size="lg">Explore Services</Button>
                </Link>
              </motion.div>
              
              <motion.div variants={fadeIn} className="mt-10 flex items-center gap-6">
                <div className="flex -space-x-3">
                  {[1, 2, 3, 4].map((i) => (
                    <div key={i} className="w-10 h-10 rounded-full border-2 border-white bg-slate-300 overflow-hidden">
                      <img src={`https://i.pravatar.cc/100?img=${i + 10}`} alt="User" />
                    </div>
                  ))}
                </div>
                <div className="text-sm">
                  <div className="flex text-yellow-400">
                    {[...Array(5)].map((_, i) => <Star key={i} className="h-4 w-4 fill-current" />)}
                  </div>
                  <span className="font-medium text-slate-900">4.9/5</span> <span className="italic text-slate-600">from 10k+ customers</span>
                </div>
              </motion.div>
            </motion.div>
            
            <motion.div 
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.8 }}
              className="relative hidden lg:block"
            >
              <div className="absolute inset-0 bg-gradient-to-tr from-primary/20 to-transparent rounded-3xl transform rotate-3 scale-105 -z-10"></div>
              <img 
                src="https://images.unsplash.com/photo-1631549916768-4119b2e5f926?auto=format&fit=crop&w=800&q=80" 
                alt="Modern Pharmacy" 
                className="rounded-3xl shadow-2xl object-cover h-[600px] w-full"
              />
              <div className="absolute -bottom-6 -left-6 glass-panel p-6 rounded-2xl w-64">
                <div className="flex items-center gap-4 mb-2">
                  <div className="bg-primary/20 p-3 rounded-full text-primary">
                    <Truck className="h-6 w-6" />
                  </div>
                  <div>
                    <h4 className="font-bold text-gray-900">Fast Delivery</h4>
                    <p className="text-xs text-gray-500">Under 2 hours</p>
                  </div>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">Why Choose MedNova?</h2>
            <p className="text-gray-600 text-lg">We combine modern technology with compassionate care to provide you with the best healthcare experience.</p>
          </div>
          
          <div className="grid md:grid-cols-3 gap-8">
            {[
              { icon: Shield, title: 'Certified Products', desc: '100% genuine medicines sourced directly from manufacturers.' },
              { icon: Clock, title: '24/7 Availability', desc: 'Round-the-clock support and emergency medicine delivery.' },
              { icon: Heart, title: 'Expert Care', desc: 'Free consultations with our certified pharmacists.' }
            ].map((feature, idx) => (
              <motion.div
                key={idx}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
                variants={fadeIn}
                className="group p-8 rounded-3xl bg-gray-50 hover:bg-white hover:shadow-xl transition-all duration-300 border border-transparent hover:border-gray-100"
              >
                <div className="w-14 h-14 bg-white rounded-2xl shadow-sm flex items-center justify-center text-primary mb-6 group-hover:scale-110 transition-transform">
                  <feature.icon className="h-7 w-7" />
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-3">{feature.title}</h3>
                <p className="text-gray-600 leading-relaxed">{feature.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Services Preview */}
      <section className="py-24 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col md:flex-row justify-between items-end mb-12 gap-6">
            <div className="max-w-2xl">
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">Our Premium Services</h2>
              <p className="text-gray-600 text-lg">Comprehensive healthcare solutions tailored for your well-being.</p>
            </div>
            <Link to="/services">
              <Button variant="outline">View All Services</Button>
            </Link>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              { title: 'Prescription Refills', img: 'https://images.unsplash.com/photo-1584308666744-24d5c474f2ae?auto=format&fit=crop&w=500&q=80' },
              { title: 'Health Consultations', img: 'https://images.unsplash.com/photo-1576091160399-112ba8d25d1d?auto=format&fit=crop&w=500&q=80' },
              { title: 'Medical Equipment', img: 'https://images.unsplash.com/photo-1519494026892-80bbd2d6fd0d?auto=format&fit=crop&w=500&q=80' },
            ].map((srv, idx) => (
              <motion.div
                key={idx}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
                variants={fadeIn}
              >
                <Card className="group cursor-pointer">
                  <div className="h-48 overflow-hidden">
                    <img src={srv.img} alt={srv.title} className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500" />
                  </div>
                  <CardContent className="p-6 flex items-center justify-between">
                    <h3 className="font-bold text-lg text-gray-900 group-hover:text-primary transition-colors">{srv.title}</h3>
                    <ArrowRight className="h-5 w-5 text-gray-400 group-hover:text-primary transition-colors group-hover:translate-x-1 transform duration-300" />
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
      
      {/* CTA Section */}
      <section className="py-20 relative overflow-hidden">
        <div className="absolute inset-0 bg-primary z-0"></div>
        <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1584308666744-24d5c474f2ae?auto=format&fit=crop&w=1920&q=80')] opacity-10 mix-blend-multiply z-0"></div>
        
        <div className="max-w-4xl mx-auto px-4 relative z-10 text-center text-white">
          <h2 className="text-3xl md:text-5xl font-bold mb-6">Need a consultation?</h2>
          <p className="text-lg md:text-xl text-emerald-100 mb-10 max-w-2xl mx-auto">
            Book an appointment with our expert pharmacists and healthcare professionals today.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link to="/appointment">
              <Button size="lg" className="bg-white text-primary hover:bg-gray-100 w-full sm:w-auto">
                Book Now
              </Button>
            </Link>
            <a href="tel:+15551234567">
              <Button size="lg" variant="outline" className="border-white text-white hover:bg-white/10 w-full sm:w-auto">
                Call Us
              </Button>
            </a>
          </div>
        </div>
      </section>
    </div>
  );
}
