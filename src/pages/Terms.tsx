export default function Terms() {
  return (
    <div className="pt-20 pb-24 bg-white min-h-screen">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <h1 className="text-4xl font-bold text-gray-900 mb-8">Terms & Conditions</h1>
        
        <div className="prose prose-emerald max-w-none text-gray-600 space-y-6">
          <p>Last updated: {new Date().toLocaleDateString()}</p>
          
          <section>
            <h2 className="text-2xl font-bold text-gray-900 mt-8 mb-4">1. Acceptance of Terms</h2>
            <p>By accessing and using MedNova Pharmacy's website and services, you accept and agree to be bound by the terms and provision of this agreement.</p>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-gray-900 mt-8 mb-4">2. Medical Disclaimer</h2>
            <p>The content on our website is for informational purposes only. It is not intended to be a substitute for professional medical advice, diagnosis, or treatment. Always seek the advice of your physician or other qualified health provider with any questions you may have regarding a medical condition.</p>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-gray-900 mt-8 mb-4">3. Prescription Orders</h2>
            <p>All prescription orders require a valid prescription from a licensed healthcare professional. We reserve the right to refuse any order if we cannot verify the prescription.</p>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-gray-900 mt-8 mb-4">4. Delivery Policy</h2>
            <p>Delivery times are estimates and not guaranteed. We are not responsible for delays caused by weather, traffic, or other unforeseen circumstances.</p>
          </section>
        </div>
      </div>
    </div>
  );
}
