// import React from 'react';
// import './Footer.css';

// const Footer = () => {
//   return (
//     <div style={{ backgroundColor: '#333', color: '#fff', padding: '2rem 0' }}>
//       {/* Footer Content */}
//       <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start', maxWidth: '1200px', margin: '0 auto' }}>
        
//         {/* Left - AgriConnect Name (not exactly at the far left) */}
//         <div style={{ fontSize: '1.5rem', fontWeight: 'bold', marginLeft: '2rem' }}>
//           <span style={{ color: '#2e7d32' }}>AgriConnect</span>
//         </div>
        
//         {/* Center - Navigation Links (stacked vertically) */}
//         <div style={{ display: 'flex', flexDirection: 'column', gap: '1rem' }}>
//           <a href="#about" style={{ color: '#fff', textDecoration: 'none' }}>About Us</a>
//           <a href="#contact" style={{ color: '#fff', textDecoration: 'none' }}>Contact Us</a>
//           <a href="#services" style={{ color: '#fff', textDecoration: 'none' }}>Services</a>
//           <a href="#support" style={{ color: '#fff', textDecoration: 'none' }}>Support</a>
//         </div>
  
//         {/* Right - Social Media Icons */}
//         <div style={{ display: 'flex', gap: '1rem' }}>
//           <a href="https://www.instagram.com" target="_blank" rel="noopener noreferrer" style={{ color: '#fff' }}>
//             <i className="fab fa-instagram" style={{ fontSize: '1.5rem' }}></i>
//           </a>
//           <a href="https://www.facebook.com" target="_blank" rel="noopener noreferrer" style={{ color: '#fff' }}>
//             <i className="fab fa-facebook" style={{ fontSize: '1.5rem' }}></i>
//           </a>
//           <a href="https://wa.me" target="_blank" rel="noopener noreferrer" style={{ color: '#fff' }}>
//             <i className="fab fa-whatsapp" style={{ fontSize: '1.5rem' }}></i>
//           </a>
//         </div>
//       </div>

//       {/* Footer Bottom - Copyright */}

//       <br/>
//       <br/>
//       <div style={{ textAlign: 'center', marginTop: '1rem', fontSize: '0.9rem', alignItems: 'center' }}>
//         <p>&copy; {new Date().getFullYear()} {`Aditya Kanhere. All Rights Reserved.`}</p>
//       </div>
//     </div>
//   );
// }

// export default Footer;











// import React from 'react';
// import './Footer.css';
// import { Link } from 'react-router-dom';

// const Footer = () => {
//   return (
//     <div style={{ backgroundColor: '#333', color: '#fff', padding: '2rem 0' }}>
//       {/* Footer Content */}
//       <div style={{ maxWidth: '1200px', margin: '0 auto', display: 'flex', flexDirection: 'column', alignItems: 'center', textAlign: 'center' }}>
        
//         {/* AgriConnect Name */}
//         <div style={{ fontSize: '1.5rem', fontWeight: 'bold', marginBottom: '1rem' }}>
//           <span style={{ color: '#2e7d32' }}>AgriConnect</span>
//         </div>

//         {/* Navigation Links */}
//         <br/>
//         <br/>
//         <div style={{ display: 'flex', flexDirection: 'column', gap: '1rem' }}>
//         <Link to="/about" style={{ color: '#fff', textDecoration: 'none' }}>About Us</Link>

//           <a href="#contact" style={{ color: '#fff', textDecoration: 'none' }}>Contact Us</a>
//           <a href="#services" style={{ color: '#fff', textDecoration: 'none' }}>Services</a>
//           <a href="#support" style={{ color: '#fff', textDecoration: 'none' }}>Support</a>
//         </div>

//         {/* Social Media Icons */}
//         <br/>
//         <div style={{ display: 'flex', justifyContent: 'center', gap: '1rem', marginTop: '1rem' }}>
//           <a href="https://www.instagram.com" target="_blank" rel="noopener noreferrer" style={{ color: '#fff' }}>
//             <i className="fab fa-instagram" style={{ fontSize: '1.5rem' }}></i>
//           </a>
//           <a href="https://www.facebook.com" target="_blank" rel="noopener noreferrer" style={{ color: '#fff' }}>
//             <i className="fab fa-facebook" style={{ fontSize: '1.5rem' }}></i>
//           </a>
//           <a href="https://wa.me" target="_blank" rel="noopener noreferrer" style={{ color: '#fff' }}>
//             <i className="fab fa-whatsapp" style={{ fontSize: '1.5rem' }}></i>
//           </a>
//         </div>
//       </div>

//       {/* Footer Bottom - Copyright */}
//       <br/>
//       <br/>
//       <div style={{ textAlign: 'center', marginTop: '1rem', fontSize: '0.9rem' }}>
//         <p>&copy; {new Date().getFullYear()} {`Aditya Kanhere. All Rights Reserved.`}</p>
//       </div>
//     </div>
//   );
// }

// export default Footer;


import React from 'react';
import './Footer.css';
import { Link } from 'react-router-dom';

const Footer = () => {
  return (
    <div style={{ backgroundColor: '#333', color: '#fff', padding: '2rem 0' }}>
      {/* Footer Content */}
      <div style={{ maxWidth: '1200px', margin: '0 auto', display: 'flex', flexDirection: 'column', alignItems: 'center', textAlign: 'center' }}>
        
        {/* AgriConnect Name */}
        <div style={{ fontSize: '1.5rem', fontWeight: 'bold', marginBottom: '1rem' }}>
          <span style={{ color: '#2e7d32' }}>AgriConnect</span>
        </div>

        {/* Navigation Links */}
        <br />
        <div style={{ display: 'flex', flexDirection: 'column', gap: '1rem' }}>
          <Link to="/about" style={{ color: '#fff', textDecoration: 'none' }}>
            About Us
          </Link>
          
          <Link to="/contactus" style={{ color: '#fff', textDecoration: 'none' }}>
            Contact Us
          </Link>

          <Link to="/service" style={{ color: '#fff', textDecoration: 'none' }}>
            Services
          </Link>

          {/* Other Links */}     

          <Link to="/support" style={{ color: '#fff', textDecoration: 'none' }}>
              Support
          </Link>
        </div>

        {/* Social Media Icons */}
        <br />
        <div style={{ display: 'flex', justifyContent: 'center', gap: '1rem', marginTop: '1rem' }}>
          <a href="https://www.instagram.com/adii_kanhere_t9/" target="_blank" rel="noopener noreferrer" style={{ color: '#fff' }}>
            <i className="fab fa-instagram" style={{ fontSize: '1.5rem' }}></i>
          </a>
          <a href="https://www.facebook.com/aditya.kanhere.562?rdid=y3KJODe0MIgBxuYB&share_url=https%3A%2F%2Fwww.facebook.com%2Fshare%2F18UaUp8wVT%2F" target="_blank" rel="noopener noreferrer" style={{ color: '#fff' }}>
            <i className="fab fa-facebook" style={{ fontSize: '1.5rem' }}></i>
          </a>
          <a href="https://wa.me" target="_blank" rel="noopener noreferrer" style={{ color: '#fff' }}>
            <i className="fab fa-whatsapp" style={{ fontSize: '1.5rem' }}></i>
          </a>
        </div>
      </div>

      {/* Footer Bottom - Copyright */}
      <br />
      <br />
      <div style={{ textAlign: 'center', marginTop: '1rem', fontSize: '0.9rem' }}>
        <p>&copy; {new Date().getFullYear()} {`Aditya Kanhere. All Rights Reserved.`}</p>
      </div>
    </div>
  );
}

export default Footer;
