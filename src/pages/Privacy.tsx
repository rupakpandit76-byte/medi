export default function Privacy() {
  return (
    <div className="pt-20 pb-24 bg-white min-h-screen">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <h1 className="text-4xl font-bold text-gray-900 mb-8">Privacy Policy</h1>
        
        <div className="prose prose-emerald max-w-none text-gray-600 space-y-6">
          <p>Last updated: {new Date().toLocaleDateString()}</p>
          
          <section>
            <h2 className="text-2xl font-bold text-gray-900 mt-8 mb-4">1. Information We Collect</h2>
            <p>At MedNova Pharmacy, we collect information that you provide directly to us, including your name, email address, phone number, and medical information necessary for prescriptions.</p>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-gray-900 mt-8 mb-4">2. How We Use Your Information</h2>
            <p>We use the information we collect to:</p>
            <ul className="list-disc pl-6 mt-2 space-y-2">
              <li>Process and fulfill your prescription orders</li>
              <li>Schedule appointments and consultations</li>
              <li>Communicate with you about your health and our services</li>
              <li>Improve our website and customer service</li>
            </ul>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-gray-900 mt-8 mb-4">3. Data Security</h2>
            <p>We implement appropriate technical and organizational security measures to protect your personal information. However, please note that no method of transmission over the Internet is 100% secure.</p>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-gray-900 mt-8 mb-4">4. Contact Us</h2>
            <p>If you have any questions about this Privacy Policy, please contact us at privacy@mednova.com.</p>
          </section>
        </div>
      </div>
    </div>
  );
}
