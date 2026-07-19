import { MessageCircle, PhoneCall, ChevronUp } from 'lucide-react';
import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'motion/react';

export default function FloatingActions() {
  const [showScroll, setShowScroll] = useState(false);

  useEffect(() => {
    const checkScroll = () => {
      if (!showScroll && window.scrollY > 400) {
        setShowScroll(true);
      } else if (showScroll && window.scrollY <= 400) {
        setShowScroll(false);
      }
    };
    window.addEventListener('scroll', checkScroll);
    return () => window.removeEventListener('scroll', checkScroll);
  }, [showScroll]);

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <div className="fixed bottom-6 right-6 z-50 flex flex-col gap-3">
      <AnimatePresence>
        {showScroll && (
          <motion.button
            initial={{ opacity: 0, scale: 0.5, y: 20 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.5, y: 20 }}
            onClick={scrollToTop}
            className="h-12 w-12 bg-white text-gray-700 rounded-full shadow-lg flex items-center justify-center hover:bg-gray-50 border border-gray-100 transition-colors"
            aria-label="Scroll to top"
          >
            <ChevronUp className="h-6 w-6" />
          </motion.button>
        )}
      </AnimatePresence>

      <a
        href="tel:+15551234567"
        className="h-14 w-14 bg-blue-600 text-white rounded-full shadow-lg shadow-blue-500/30 flex items-center justify-center hover:bg-blue-700 transition-colors"
        aria-label="Call us"
      >
        <PhoneCall className="h-6 w-6" />
      </a>
      
      <a
        href="https://wa.me/15551234567"
        target="_blank"
        rel="noreferrer"
        className="h-14 w-14 bg-[#25D366] text-white rounded-full shadow-lg shadow-[#25D366]/30 flex items-center justify-center hover:bg-[#20bd5a] transition-colors"
        aria-label="WhatsApp us"
      >
        <MessageCircle className="h-7 w-7" />
      </a>
    </div>
  );
}
