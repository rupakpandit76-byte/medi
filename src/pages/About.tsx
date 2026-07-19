import { motion } from 'motion/react';
import { Target, Eye, Heart } from 'lucide-react';
import { Card, CardContent } from '../components/ui/Card';

export default function About() {
  return (
    <div className="pt-16 pb-24 bg-white">
      {/* Header */}
      <div className="bg-gradient-to-r from-emerald-900 to-primary py-24 text-white text-center px-4 relative overflow-hidden">
        <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1551076805-e1869033e561?auto=format&fit=crop&w=1920&q=80')] opacity-20 mix-blend-overlay"></div>
        <div className="relative z-10">
          <h1 className="text-4xl md:text-5xl font-bold mb-4">About MedNova</h1>
          <p className="text-lg text-emerald-100 max-w-2xl mx-auto">
            More than just a pharmacy. We are your dedicated healthcare partners.
          </p>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mt-20">
        <div className="grid md:grid-cols-2 gap-16 items-center mb-24">
          <motion.div initial={{ opacity: 0, x: -20 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }}>
            <h2 className="text-3xl font-bold text-gray-900 mb-6">Our Story</h2>
            <div className="space-y-4 text-gray-600 leading-relaxed">
              <p>
                Founded in 2010, MedNova Pharmacy started with a simple vision: to make premium healthcare accessible and personal. We noticed a gap in how local pharmacies engaged with their communities, and we wanted to build a space where patients felt cared for, not just served.
              </p>
              <p>
                Over the past decade, we have grown from a small neighborhood store into a trusted healthcare hub, integrating modern technology with traditional care. Our team of certified pharmacists ensures that every prescription is filled with accuracy and every consultation adds value to your life.
              </p>
            </div>
          </motion.div>
          <motion.div initial={{ opacity: 0, scale: 0.9 }} whileInView={{ opacity: 1, scale: 1 }} viewport={{ once: true }}>
            <img 
              src="https://images.unsplash.com/photo-1631549916768-4119b2e5f926?auto=format&fit=crop&w=800&q=80" 
              alt="Inside MedNova" 
              className="rounded-3xl shadow-xl"
            />
          </motion.div>
        </div>

        <div className="grid md:grid-cols-3 gap-8 mb-24">
          {[
            { icon: Target, title: 'Our Mission', desc: 'To improve the quality of life in our community by providing exceptional pharmaceutical care and premium health products.' },
            { icon: Eye, title: 'Our Vision', desc: 'To be the most trusted and innovative healthcare destination, setting new standards in patient-centric care.' },
            { icon: Heart, title: 'Our Values', desc: 'Integrity, Compassion, Excellence, and Innovation drive every decision we make at MedNova.' }
          ].map((item, idx) => (
            <motion.div key={idx} initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: idx * 0.1 }}>
              <Card className="h-full bg-gray-50 border-none">
                <CardContent className="p-8 text-center">
                  <div className="w-16 h-16 bg-white rounded-full flex items-center justify-center mx-auto mb-6 shadow-sm text-primary">
                    <item.icon className="h-8 w-8" />
                  </div>
                  <h3 className="text-xl font-bold text-gray-900 mb-4">{item.title}</h3>
                  <p className="text-gray-600">{item.desc}</p>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </div>

        {/* Team Section */}
        <div className="text-center">
          <h2 className="text-3xl font-bold text-gray-900 mb-4">Meet Our Experts</h2>
          <p className="text-gray-600 mb-12 max-w-2xl mx-auto">Our certified pharmacists are here to support your journey to better health.</p>
          
          <div className="grid md:grid-cols-3 gap-8 max-w-5xl mx-auto">
            {[1, 2, 3].map((i) => (
              <motion.div key={i} initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }}>
                <div className="bg-white rounded-3xl overflow-hidden shadow-sm border border-gray-100 group">
                  <div className="h-64 overflow-hidden">
                    <img 
                      src={`https://images.unsplash.com/photo-1559839734-2b71ea197ec2?auto=format&fit=crop&w=500&q=80`} 
                      alt={`Pharmacist ${i}`} 
                      className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                    />
                  </div>
                  <div className="p-6">
                    <h3 className="font-bold text-lg text-gray-900">Dr. Sarah Jenkins</h3>
                    <p className="text-primary text-sm font-medium mb-2">Lead Pharmacist</p>
                    <p className="text-gray-500 text-sm">Pharm.D with 10+ years of clinical experience.</p>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
