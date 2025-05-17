import React from 'react';
import WeatherCard from '../components/WeatherCard'; // ✅ import the component
import axios from 'axios'; // Make sure axios is installed

const SupportPage = () => {

  

  return (
    <section style={{ padding: '2rem 4rem', minHeight: '100vh', backgroundColor: '#f9f9f9' }}>
      
      {/* Heading */}
      <h2 style={{ textAlign: 'center', color: '#2e7d32', marginBottom: '2rem', fontSize: '2.5rem' }}>
        We're Here to Help!
      </h2>

      {/* Short Introduction */}
      <p style={{ textAlign: 'center', maxWidth: '700px', margin: '0 auto 3rem', fontSize: '1.2rem', color: '#555' }}>
        Have questions? Find quick answers below or reach out to our amazing support team.
      </p>

      {/* Accordion FAQs */}
      <div style={{ maxWidth: '800px', margin: '0 auto', display: 'flex', flexDirection: 'column', gap: '1.5rem' }}>
        
        <details style={{ background: '#fff', padding: '1rem 1.5rem', borderRadius: '10px', boxShadow: '0 2px 8px rgba(0,0,0,0.1)' }}>
          <summary style={{ fontSize: '1.2rem', fontWeight: 'bold', cursor: 'pointer' }}>
            How do I place an order?
          </summary>
          <p style={{ marginTop: '1rem', color: '#555' }}>
            Simply browse the Market section, select the crops you need, add them to the cart, and proceed to checkout!
          </p>
        </details>

        <details style={{ background: '#fff', padding: '1rem 1.5rem', borderRadius: '10px', boxShadow: '0 2px 8px rgba(0,0,0,0.1)' }}>
          <summary style={{ fontSize: '1.2rem', fontWeight: 'bold', cursor: 'pointer' }}>
            Can I track my orders?
          </summary>
          <p style={{ marginTop: '1rem', color: '#555' }}>
            Yes, visit the "Orders" page after logging into your account to see your order status and tracking details.
          </p>
        </details>

        <details style={{ background: '#fff', padding: '1rem 1.5rem', borderRadius: '10px', boxShadow: '0 2px 8px rgba(0,0,0,0.1)' }}>
          <summary style={{ fontSize: '1.2rem', fontWeight: 'bold', cursor: 'pointer' }}>
            I forgot my password. What should I do?
          </summary>
          <p style={{ marginTop: '1rem', color: '#555' }}>
            Click on "Forgot Password" on the Login page and follow the instructions to reset it securely.
          </p>
        </details>

        <details style={{ background: '#fff', padding: '1rem 1.5rem', borderRadius: '10px', boxShadow: '0 2px 8px rgba(0,0,0,0.1)' }}>
          <summary style={{ fontSize: '1.2rem', fontWeight: 'bold', cursor: 'pointer' }}>
            How do I contact customer support?
          </summary>
          <p style={{ marginTop: '1rem', color: '#555' }}>
            You can reach us via the "Contact Us" page or simply click the "Need more help?" button below!
          </p>
        </details>
      </div>

      {/* Interesting Extra */}
      <div style={{ textAlign: 'center', marginTop: '4rem' }}>
        <h3 style={{ color: '#2e7d32', marginBottom: '1rem' }}>
          🌾 Your success is our harvest! 🌾
        </h3>
        <p style={{ color: '#555', marginBottom: '2rem' }}>
          Whether you're sowing the first seed or harvesting your dreams, AgriConnect stands with you at every step.
        </p>

        {/* Need more help button */}
        <a
          href="/contactus"
          style={{
            padding: '0.8rem 2rem',
            backgroundColor: '#2e7d32',
            color: '#fff',
            borderRadius: '30px',
            textDecoration: 'none',
            fontSize: '1.1rem',
            boxShadow: '0 4px 10px rgba(0,0,0,0.2)',
          }}
        >
          Need more help?
        </a>
      </div>

    </section>
  );
};

export default SupportPage;






