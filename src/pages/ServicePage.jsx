import React from 'react';
import serviceImage from '../assets/serviceimg.webp'; // Replace with your correct service image path

const ServicePage = () => {
  return (
    <section style={{ marginBottom: '3rem' }}>
      {/* Image with Services title */}
      <div
        style={{
          position: 'relative',
          textAlign: 'center',
          height: '300px',
          maxWidth: '100%',
          backgroundImage: `url(${serviceImage})`,
        //   backgroundSize: 'cover',
        //   backgroundPosition: 'center',
          backgroundSize: 'contain',
            backgroundRepeat: 'no-repeat',
            backgroundPosition: 'center',
            
        }}
      >
        <h2
          style={{
            position: 'absolute',
            top: '50%',
            left: '50%',
            transform: 'translate(-50%, -50%)',
            color: 'white',
            fontSize: '2.5rem',
            fontWeight: 'bold',
          }}
        >
          Our Services
        </h2>
      </div>

      {/* Services Content */}
      <div style={{ padding: '2rem 4rem' }}>
        <h3 style={{ color: '#333', marginBottom: '1.5rem' }}>What We Offer</h3>

        <p style={{ fontSize: '1rem', color: '#555', marginBottom: '1rem' }}>
          We provide a range of services designed to help you achieve your goals efficiently and effectively. 
          Our solutions are tailored to meet your specific needs and ensure maximum satisfaction.
        </p>

        <p style={{ fontSize: '1rem', color: '#555', marginBottom: '1rem' }}>
          From initial consultation to final delivery, we are committed to offering exceptional support and guidance. 
          Our experienced team uses innovative strategies to deliver outstanding results for every project.
        </p>

        <p style={{ fontSize: '1rem', color: '#555', marginBottom: '1rem' }}>
          Whether you need assistance with a small task or require a comprehensive, long-term partnership, 
          we have the expertise and passion to help you succeed.
        </p>

        {/* You can even list some services */}
        <h4 style={{ color: '#333', marginTop: '2rem', marginBottom: '1rem' }}>Our Core Services Include:</h4>
        <ul style={{ fontSize: '1rem', color: '#555', paddingLeft: '1.5rem' }}>
          <li style={{ marginBottom: '0.5rem' }}>Consultation and Planning</li>
          <li style={{ marginBottom: '0.5rem' }}>Customized Solutions</li>
          <li style={{ marginBottom: '0.5rem' }}>24/7 Customer Support</li>
          <li style={{ marginBottom: '0.5rem' }}>Project Management</li>
          <li style={{ marginBottom: '0.5rem' }}>Maintenance and Updates</li>
        </ul>
      </div>
    </section>
  );
};

export default ServicePage;
