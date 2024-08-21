import React from 'react';
import './styles.css';

const FAQ = () => {
  return (
    <div className="container">
      <h1>Frequently Asked Questions</h1>
      <div className="faq-grid">
        <section className="faq-section">
          <h2>What is your return policy?</h2>
          <p>We offer a 30-day return policy on all items. If you are not satisfied with your purchase, you can return it within 30 days for a full refund.</p>
        </section>
        <section className="faq-section">
          <h2>How can I track my order?</h2>
          <p>Once your order has been shipped, you will receive an email with a tracking number. You can use this number to track your order on our website.</p>
        </section>
        <section className="faq-section">
          <h2>Do you offer international shipping?</h2>
          <p>Yes, we offer international shipping to most countries. Shipping rates and delivery times vary depending on the destination.</p>
        </section>
        <section className="faq-section">
          <h2>How can I contact customer support?</h2>
          <p>You can contact our customer support team via email at support@example.com or by phone at (123) 456-7890. Our team is available 24/7 to assist you.</p>
        </section>
        <section className="faq-section">
          <h2>What payment methods do you accept?</h2>
          <p>We accept all major credit cards, PayPal, and bank transfers. You can choose your preferred payment method at checkout.</p>
        </section>
        <section className="faq-section">
          <h2>How do I reset my password?</h2>
          <p>If you have forgotten your password, you can reset it by clicking the "Forgot Password" link on the login page. Follow the instructions to reset your password.</p>
        </section>
        <section className="faq-section">
          <h2>Can I change my order after it has been placed?</h2>
          <p>If you need to make changes to your order, please contact our customer support team as soon as possible. We will do our best to accommodate your request.</p>
        </section>
        <section className="faq-section">
          <h2>What is your privacy policy?</h2>
          <p>We are committed to protecting your privacy. You can read our full privacy policy on our website to learn more about how we handle your personal information.</p>
        </section>
        <section className="faq-section">
          <h2>Do you offer gift cards?</h2>
          <p>Yes, we offer gift cards in various denominations. You can purchase them on our website and they will be delivered via email.</p>
        </section>
        <section className="faq-section">
          <h2>How can I subscribe to your newsletter?</h2>
          <p>You can subscribe to our newsletter by entering your email address in the subscription box on our website. You will receive regular updates and exclusive offers.</p>
        </section>
      </div>
    </div>
  );
};

export default FAQ;
