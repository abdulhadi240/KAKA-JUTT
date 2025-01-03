import React from 'react';
import { Shield, Mail, Phone, MapPin, Calendar } from 'lucide-react';

export const metadata = {
  title: 'Privacy Policy | KAKA JUTT (PRIVATE) LIMITED',
  description: 'Our commitment to protecting your privacy and personal information.',
};

const PrivacyPolicy = () => {
  const address = "Main Boulevard Afzal Block, Buch Executive Villas, Multan";
  const currentDate = new Date().toLocaleDateString('en-US', { year: 'numeric', month: 'long', day: 'numeric' });

  return (
    <div className="min-h-screen bg-gray-50 py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-3xl mx-auto bg-white shadow-xl rounded-lg overflow-hidden">
        <div className="bg-blue-600 py-6 px-6 sm:px-10">
          <h1 className="text-3xl font-bold text-white flex items-center">
            <Shield className="mr-2" /> Privacy Policy
          </h1>
        </div>
        <div className="px-6 py-8 sm:p-10 space-y-6">
          <p className="text-gray-700">
            At <strong className="text-blue-600">KAKA JUTT (PRIVATE) LIMITED</strong>, we prioritize your privacy. This document outlines how we collect, use, and protect your data when using our services.
          </p>
          
          <section className="space-y-4">
            <h2 className="text-2xl font-semibold text-gray-800">Information We Collect</h2>
            <p className="text-gray-700">We collect personal information such as your name, email address, phone number, and other details necessary to provide our services effectively.</p>
          </section>
          
          <section className="space-y-4">
            <h2 className="text-2xl font-semibold text-gray-800">How We Use Your Information</h2>
            <p className="text-gray-700">Your information is used to improve our services, respond to inquiries, process transactions, and for marketing purposes.</p>
          </section>
          
          <section className="space-y-4">
            <h2 className="text-2xl font-semibold text-gray-800">Data Protection</h2>
            <p className="text-gray-700">We ensure that your personal information is stored securely and is only accessible by authorized personnel.</p>
          </section>
          
          <section className="space-y-4">
            <h2 className="text-2xl font-semibold text-gray-800">Third-Party Sharing</h2>
            <p className="text-gray-700">We do not share your personal information with third parties, except where required by law or to provide specific services you request.</p>
          </section>
          
          <section className="space-y-4">
            <h2 className="text-2xl font-semibold text-gray-800">Contact Us</h2>
            <p className="text-gray-700">If you have any questions about this privacy policy or how your data is handled, you can reach us at:</p>
            <div className="bg-gray-100 p-4 rounded-lg space-y-2">
              <p className="flex items-center text-gray-700"><MapPin className="mr-2 text-blue-600" /> <strong>Address:</strong> {address}</p>
              <p className="flex items-center text-gray-700"><Mail className="mr-2 text-blue-600" /> <strong>Email:</strong> support@kakajutt.com</p>
              <p className="flex items-center text-gray-700"><Phone className="mr-2 text-blue-600" /> <strong>Phone:</strong> +92-300-1234567</p>
            </div>
          </section>

          <p className="text-gray-600 flex items-center">
            <Calendar className="mr-2" /> This privacy policy is effective as of <strong className="ml-1">{currentDate}</strong>.
          </p>
        </div>
      </div>
    </div>
  );
};

export default PrivacyPolicy;

