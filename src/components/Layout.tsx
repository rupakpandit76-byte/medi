import { ReactNode } from 'react';
import Navbar from './Navbar';
import Footer from './Footer';
import FloatingActions from './FloatingActions';
import { Helmet } from 'react-helmet-async';

interface LayoutProps {
  children: ReactNode;
  title?: string;
  description?: string;
}

export default function Layout({ 
  children, 
  title = 'MedNova Pharmacy | Premium Healthcare Products',
  description = 'Your trusted neighborhood pharmacy providing high-quality medicines, healthcare products, and expert consultations.'
}: LayoutProps) {
  return (
    <div className="min-h-screen flex flex-col">
      <Helmet>
        <title>{title}</title>
        <meta name="description" content={description} />
        <meta property="og:title" content={title} />
        <meta property="og:description" content={description} />
        <meta property="og:type" content="website" />
      </Helmet>
      
      <Navbar />
      <main className="flex-grow">
        {children}
      </main>
      <Footer />
      <FloatingActions />
    </div>
  );
}
