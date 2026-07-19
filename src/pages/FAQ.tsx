import { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { ChevronDown, HelpCircle } from 'lucide-react';
import { Card } from '../components/ui/Card';

const faqs = [
  {
    q: 'Do you offer home delivery for medicines?',
    a: 'Yes, we offer fast and secure home delivery within a 10-mile radius. Most prescriptions are delivered within 2-4 hours of placing the order.'
  },
  {
    q: 'How can I upload my prescription?',
    a: 'You can upload your prescription through our Contact page or WhatsApp us directly. Our pharmacists will review it and process your order.'
  },
  {
    q: 'Are your medicines genuine?',
    a: 'Absolutely. We source all our medicines directly from authorized manufacturers and verified distributors. Quality and authenticity are our top priorities.'
  },
  {
    q: 'Do you accept insurance?',
    a: 'We accept most major insurance plans. Please bring your insurance card during your visit or contact us to verify your coverage.'
  },
  {
    q: 'Can I return medicines?',
    a: 'Due to health and safety regulations, we cannot accept returns on prescription medicines once they have left the pharmacy. However, OTC products can be returned within 7 days if unopened.'
  }
];

export default function FAQ() {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  return (
    <div className="pt-16 pb-24 bg-gray-50 min-h-screen">
      <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <div className="inline-flex items-center justify-center w-16 h-16 bg-primary/10 rounded-full mb-6">
            <HelpCircle className="h-8 w-8 text-primary" />
          </div>
          <h1 className="text-4xl font-bold text-gray-900 mb-4">Frequently Asked Questions</h1>
          <p className="text-lg text-gray-600">Find answers to common questions about our services.</p>
        </div>

        <div className="space-y-4">
          {faqs.map((faq, idx) => (
            <Card key={idx} className="border border-gray-200 overflow-hidden bg-white hover:border-primary/30 transition-colors">
              <button
                onClick={() => setOpenIndex(openIndex === idx ? null : idx)}
                className="w-full px-6 py-5 text-left flex justify-between items-center focus:outline-none"
              >
                <span className="font-bold text-gray-900">{faq.q}</span>
                <ChevronDown 
                  className={`h-5 w-5 text-gray-500 transition-transform duration-300 ${openIndex === idx ? 'rotate-180 text-primary' : ''}`}
                />
              </button>
              <AnimatePresence>
                {openIndex === idx && (
                  <motion.div
                    initial={{ height: 0, opacity: 0 }}
                    animate={{ height: 'auto', opacity: 1 }}
                    exit={{ height: 0, opacity: 0 }}
                    className="overflow-hidden"
                  >
                    <div className="px-6 pb-5 text-gray-600 leading-relaxed border-t border-gray-100 pt-4">
                      {faq.a}
                    </div>
                  </motion.div>
                )}
              </AnimatePresence>
            </Card>
          ))}
        </div>
      </div>
    </div>
  );
}
