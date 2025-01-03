import React from 'react';

const PrivacyPolicy = () => {
  const address = "Main Boulevard Afzal Block, Buch Executive Villas, Multan";

  return (
    <div style={{ padding: '20px', fontFamily: 'Arial, sans-serif' }}>
      <h1>Privacy Policy</h1>
      <p>
        At <strong>KAKA JUTT (PRIVATE) LIMITED</strong>, we prioritize your privacy. This document outlines how we collect, use, and protect your data when using our services.
      </p>
      
      <h3>Address:</h3>
      <p>{address}</p>

      <h2>Information We Collect</h2>
      <p>We collect personal information such as your name, email address, phone number, and other details necessary to provide our services effectively.</p>
      
      <h2>How We Use Your Information</h2>
      <p>Your information is used to improve our services, respond to inquiries, process transactions, and for marketing purposes.</p>
      
      <h2>Data Protection</h2>
      <p>We ensure that your personal information is stored securely and is only accessible by authorized personnel.</p>
      
      <h2>Third-Party Sharing</h2>
      <p>We do not share your personal information with third parties, except where required by law or to provide specific services you request.</p>
      
      <h2>Contact Us</h2>
      <p>If you have any questions about this privacy policy or how your data is handled, you can reach us at:</p>
      <p><strong>Address:</strong> {address}</p>
      <p><strong>Email:</strong> support@kakajutt.com</p>
      <p><strong>Phone:</strong> +92-300-1234567</p> {/* Replace with actual contact details */}

      <p>
        This privacy policy is effective as of <strong>{new Date().toLocaleDateString()}</strong>.
      </p>
    </div>
  );
};

export default PrivacyPolicy;
