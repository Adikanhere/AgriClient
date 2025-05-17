

// import backgroundImg from '../assets/backgroundImg.jpg'; // adjust path if needed
// import farmingImg from '../assets/tractor_img.webp'; // replace with your actual image pathC:\Users\ADITYA\agriclient\src\assets\

// function Home() {
//   const topStyle = {
//     backgroundImage: `url(${backgroundImg})`,
//     backgroundSize: 'cover',
//     backgroundPosition: 'center',
//     height: '50vh',
//     color: 'white',
//     textShadow: '1px 1px 4px rgba(0,0,0,0.6)',
//     display: 'flex',
//     justifyContent: 'center',
//     alignItems: 'center',
//     textAlign: 'center',
//     padding: '2rem',
//   };

//   const bottomStyle = {
//     display: 'flex',
//     flexDirection: 'column',
//     alignItems: 'center',
//     textAlign: 'center',
//     padding: '3rem 1rem',
//     backgroundColor: '#f9f9f9',
//   };

//   const titleStyle = {
//     fontSize: '3rem',
//     fontWeight: 'bold',
//     marginBottom: '1.5rem',
//     color: '#333',
//   };

//   const fullWidthBanner = {
//     width: '100%',
//     backgroundColor: 'green',
//     color: 'white',
//     padding: '1rem',
//     fontSize: '1.2rem',
//     fontWeight: '500',
//     textAlign: 'center',
//   };

//   const aboutSection = {
//     display: 'flex',
//     flexWrap: 'wrap',
//     alignItems: 'stretch',
//     justifyContent: 'space-between',
//     padding: '4rem 2rem',
//     backgroundColor: '#fff',
//     gap: '2rem',
//   };

//   const aboutText = {
//     flex: '1 1 50%',
//   minWidth: '300px',
//   display: 'flex',
//   flexDirection: 'column',
//   justifyContent: 'center',
//   };

//   const aboutImage = {
//     flex: '1 1 40%',
//     maxWidth: '500px',
//   };

//   const paragraphStyle = {
//     fontSize: '1.1rem',
//     lineHeight: '1.7',
//     color: '#444',
//     marginBottom: '1rem',
//   };

//   return (
//     <div>
//       {/* Top Half - Background Image Section */}
//       <div style={topStyle}>
//         <div>
//           <h2>Welcome to AgriConnect 🌾</h2>
//           <p>Your trusted guide for agricultural insights, connecting farmers to the best markets!</p>
//         </div>
//       </div>

//       {/* Bottom Half - AgriConnect Title */}
//       <div style={bottomStyle}>
//         <h1 style={titleStyle}>Agri Connect</h1>
//       </div>

//       {/* Full-width green banner */}
//       <div style={fullWidthBanner}>
//         Monitor all data from one place in real-time
//       </div>

//       {/* About Section */}
//       <div style={aboutSection}>
//         <div style={aboutText}>
//           <h2 style={{ color: '#2e7d32' }}>About Our Farming Solution</h2>
//           <p style={paragraphStyle}>
//             At AgriConnect, we believe that modern farming should be smart, sustainable, and data-driven. Our platform empowers farmers
//             with tools that allow them to monitor crop performance, soil health, and weather conditions all in one place.
//           </p>
//           <p style={paragraphStyle}>
//             With real-time updates and predictive analytics, farmers can make informed decisions about when to plant, irrigate, and harvest,
//             reducing risks and increasing yield. Our system adapts to farms of any size and is accessible via mobile or desktop.
//           </p>
//           <p style={paragraphStyle}>
//             In addition to on-field support, AgriConnect connects farmers directly with nearby markets and buyers, ensuring transparency
//             in pricing and improved profit margins. The days of middlemen and inconsistent rates are over — we make trading fair and simple.
//           </p>
//           <p style={paragraphStyle}>
//             Whether you're a small landowner or managing a large farm, our solution scales with your needs and keeps you informed
//             every step of the way. AgriConnect is not just a tool — it's your partner in smarter agriculture.
//           </p>
//         </div>
//         <div style={aboutImage}>
//           <img src={farmingImg} alt="Farming Solution" style={{ width: '100%', borderRadius: '10px' }} />
//         </div>
//       </div>
//     </div>
//   );
// }

// export default Home;









// import backgroundImg from '../assets/backgroundImg.jpg'; // adjust path if needed
// import farmingImg from '../assets/tractor_img.webp'; // replace with your actual image path
// import weatherImg from '../assets/weather_img.jpg'; // path to weather image
// import forumImg from '../assets/Community_img.jpeg'; // path to community forum image
// import advisoryImg from '../assets/Farming Advisory2_img.jpeg'; // path to farming advisory image

// function Home() {
//   const topStyle = {
//     backgroundImage: `url(${backgroundImg})`,
//     backgroundSize: 'cover',
//     backgroundPosition: 'center',
//     height: '50vh', // Image takes up half of the viewport height
//     color: 'white',
//     textShadow: '1px 1px 4px rgba(0,0,0,0.6)',
//     display: 'flex',
//     justifyContent: 'center',
//     alignItems: 'center',
//     textAlign: 'center',
//     padding: '2rem',
//   };

//   const bottomStyle = {
//     display: 'flex',
//     flexDirection: 'column',
//     alignItems: 'center',
//     textAlign: 'center',
//     padding: '3rem 1rem',
//     backgroundColor: '#f9f9f9',
//   };

//   const titleStyle = {
//     fontSize: '3rem',
//     fontWeight: 'bold',
//     marginBottom: '1.5rem',
//     color: '#333',
//   };

//   const fullWidthBanner = {
//     width: '100%',
//     backgroundColor: 'green',
//     color: 'white',
//     padding: '1rem',
//     fontSize: '1.2rem',
//     fontWeight: '500',
//     textAlign: 'center',
//   };

//   const aboutSection = {
//     display: 'flex',
//     alignItems: 'stretch', // Ensures that text and image containers stretch to the same height
//     justifyContent: 'space-between',
//     padding: '4rem 2rem',
//     backgroundColor: '',
//     gap: '2rem',
//   };

//   const aboutText = {
//     flex: '1 1 50%',
//     minWidth: '300px',
//     display: 'flex',
//     flexDirection: 'column',
//     justifyContent: 'center',
//     height: '100%',
//   };

//   const aboutImage = {
//     flex: '1 1 40%',
//     maxWidth: '500px',
//     display: 'flex',
//     alignItems: 'center',
//     height: '94%', // Slightly increased image height to match text
//     justifyContent: 'center',
//   };

//   const paragraphStyle = {
//     fontSize: '0.8rem', // Reduced font size (around 10px)
//     lineHeight: '1.7',
//     color: '#444',
//     marginBottom: '1rem',
//   };

//   const newSectionStyle = {
//     padding: '2rem 1rem',
//     textAlign: 'center',
//   };

//   const serviceSection = {
//     display: 'flex',
//     justifyContent: 'space-between',
//     gap: '2rem',
//     padding: '3rem 2rem',
//     backgroundColor: '#fafafa',
//   };

//   const serviceBox = {
//     flex: '1 1 30%',
//     backgroundColor: '#fff',
//     borderRadius: '8px',
//     boxShadow: '0 2px 5px rgba(0, 0, 0, 0.1)',
//     padding: '1rem',
//     textAlign: 'center',
//   };

//   const serviceImg = {
//     width: '100%',
//     height: '200px',
//     objectFit: 'cover',
//     borderRadius: '8px',
//   };

//   const buttonStyle = {
//     padding: '0.5rem 1.5rem',
//     marginTop: '1rem',
//     backgroundColor: '#2e7d32',
//     color: 'white',
//     border: 'none',
//     borderRadius: '4px',
//     fontSize: '1rem',
//     cursor: 'pointer',
//     transition: 'background-color 0.3s ease',
//   };

//   const buttonHoverStyle = {
//     backgroundColor: '#1b5e20',
//   };

//   return (
//     <div>
//       {/* Top Half - Background Image Section */}
//       <div style={topStyle}>
//         <div>
//           <h2>Welcome to AgriConnect 🌾</h2>
//           <p>Your trusted guide for agricultural insights, connecting farmers to the best markets!</p>
//         </div>
//       </div>

//       {/* Bottom Half - AgriConnect Title */}
//       <div style={bottomStyle}>
//         <h1 style={titleStyle}>Agri Connect</h1>
//       </div>

//       {/* Full-width green banner */}
//       <div style={fullWidthBanner}>
//         Monitor all data from one place in real-time
//       </div>

//       {/* About Section */}
//       <div style={aboutSection}>
//         {/* Text Section */}
//         <div style={aboutText}>
//           <h2 style={{ color: '#2e7d32' }}>About Our Farming Solution</h2>
//           <p style={paragraphStyle}>
//             At AgriConnect, we believe that modern farming should be smart, sustainable, and data-driven. Our platform empowers farmers
//             with tools that allow them to monitor crop performance, soil health, and weather conditions all in one place.
//           </p>
//           <p style={paragraphStyle}>
//             With real-time updates and predictive analytics, farmers can make informed decisions about when to plant, irrigate, and harvest,
//             reducing risks and increasing yield. Our system adapts to farms of any size and is accessible via mobile or desktop.
//           </p>
//           <p style={paragraphStyle}>
//             In addition to on-field support, AgriConnect connects farmers directly with nearby markets and buyers, ensuring transparency
//             in pricing and improved profit margins. The days of middlemen and inconsistent rates are over — we make trading fair and simple.
//           </p>
//         </div>

//         {/* Image Section */}
//         <div style={aboutImage}>
//           <img src={farmingImg} alt="Farming Solution" style={{ width: '100%', height: '100%', objectFit: 'cover', borderRadius: '10px' }} />
//         </div>
//       </div>

//       {/* New Section: Farming Solution */}
//       <div style={newSectionStyle}>
//         <h2 style={{ color: '#2e7d32' }}>Farming Solution</h2>
//         <p style={{ fontSize: '1.2rem', color: '#444' }}>
//           Your one stop platform for modern agriculture
//         </p>
//       </div>

//       {/* New Service Sections */}
//       <div style={serviceSection}>
//         {/* Weather Forecast */}
//         <div style={serviceBox}>
//           <img src={weatherImg} alt="Weather Forecast" style={serviceImg} />
//           <h3 style={{ color: '#2e7d32' }}>Weather Forecast</h3>
//           <p style={{ fontSize: '0.8rem' }}>
//             Stay ahead with accurate and real-time weather predictions for your farm's location.
//           </p>
//           <button style={buttonStyle}>
//             Check Forecast
//           </button>
//         </div>

//         {/* Community Forum */}
//         <div style={serviceBox}>
//           <img src={forumImg} alt="Community Forum" style={serviceImg} />
//           <h3 style={{ color: '#2e7d32' }}>Community Forum</h3>
//           <p style={{ fontSize: '0.8rem' }}>
//             Talk and share your experience with the world. Learn from others and collaborate.
//           </p>
//           <button style={buttonStyle}>
//             Community
//           </button>
//         </div>

//         {/* Farming Advisory */}
//         <div style={serviceBox}>
//           <img src={advisoryImg} alt="Farming Advisory" style={serviceImg} />
//           <h3 style={{ color: '#2e7d32' }}>Farming Advisory</h3>
//           <p style={{ fontSize: '0.8rem' }}>
//             Connect with our AI-powered agriculture experts for guidance on your farming practices.
//           </p>
//           <button style={buttonStyle}>
//             Start Chat
//           </button>
//         </div>
//       </div>
//     </div>
//   );
// }

// export default Home;








// 27-05-25


import { useState } from 'react';
import { FaLeaf, FaTractor, FaHandsHelping, FaPhone } from 'react-icons/fa'; // icons
import { FaPlus, FaMinus } from 'react-icons/fa'; // plus and minus icons
import backgroundImg from '../assets/background.jpg';
import farmingImg from '../assets/tractor_img.webp';
import weatherImg from '../assets/weather.jpg';
import forumImg from '../assets/Community Forum.jpg';
import advisoryImg from '../assets/Farming Advisory.jpg';
import farm from '../assets/market.jpg';
import { useNavigate } from 'react-router-dom';

function Home() {

  const navigate = useNavigate();
  const [openIndex, setOpenIndex] = useState(null);

  const toggleOpen = (index) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  const faqItems = [
    {
      icon: <FaLeaf size={24} color="green" />,
      title: 'Crop Solution',
      description: 'We offer modern solutions to maximize your crop yield with AI-driven insights.',
    },
    {
      icon: <FaTractor size={24} color="green" />,
      title: 'Farm Service',
      description: 'Access reliable farm services including machinery rentals and expert consultations.',
    },
    {
      icon: <FaHandsHelping size={24} color="green" />,
      title: 'Farmer Support',
      description: 'Our support team is available 24/7 to assist you with any farming-related queries.',
    },
    {
      icon: <FaPhone size={24} color="green" />,
      title: 'Contact Us',
      description: 'Reach out to us through our helpline or email for any assistance you need.',
    },
  ];

  const topStyle = {
    backgroundImage: `url(${backgroundImg})`,
    backgroundSize: 'cover',
    backgroundPosition: 'center',
    height: '50vh',
    color: 'white',
    textShadow: '1px 1px 4px rgba(0,0,0,0.6)',
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    textAlign: 'center',
    padding: '2rem',
  };

  const bottomStyle = {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    textAlign: 'center',
    padding: '3rem 1rem',
    backgroundColor: '#f9f9f9',
  };

  const titleStyle = {
    fontSize: '3rem',
    fontWeight: 'bold',
    marginBottom: '1.5rem',
    color: '#333',
  };

  const fullWidthBanner = {
    width: '100%',
    backgroundColor: '#66BB6A', 
    color: 'white',
    padding: '0.5rem',
    fontSize: '1.2rem',
    fontWeight: '500',
    textAlign: 'center',
  };

  const aboutSection = {
    display: 'flex',
    alignItems: 'stretch',
    justifyContent: 'space-between',
    padding: '4rem 2rem',
    gap: '2rem',
  };

  const aboutText = {
    flex: '1 1 50%',
    minWidth: '300px',
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'center',
    height: '100%',
  };

  const aboutImage = {
    flex: '1 1 40%',
    maxWidth: '500px',
    display: 'flex',
    alignItems: 'center',
    height: '94%',
    justifyContent: 'center',
  };

  const paragraphStyle = {
    fontSize: '0.8rem',
    lineHeight: '1.7',
    color: '#444',
    marginBottom: '1rem',
  };

  const serviceSection = {
    display: 'flex',
    justifyContent: 'space-between',
    gap: '2rem',
    padding: '3rem 2rem',
    backgroundColor: '#fafafa',
  };

  const serviceBox = {
    flex: '1 1 30%',
    backgroundColor: '#fff',
    borderRadius: '8px',
    boxShadow: '0 2px 5px rgba(0, 0, 0, 0.1)',
    padding: '1rem',
    textAlign: 'center',
  };

  const serviceImg = {
    width: '100%',
    height: '200px',
    objectFit: 'cover',
    borderRadius: '8px',
  };

  const buttonStyle = {
    padding: '0.5rem 1.5rem',
    marginTop: '1rem',
    backgroundColor: '#2e7d32',
    color: 'white',
    border: 'none',
    borderRadius: '4px',
    fontSize: '1rem',
    cursor: 'pointer',
    transition: 'background-color 0.3s ease',
  };

  const faqSection = {
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'stretch',
    padding: '4rem 2rem',
    backgroundColor: '#f0f8f5',
    gap: '2rem',
    marginTop: '2rem',
  };

  const faqLeft = {
    flex: '1',
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'center',
    paddingRight: '2rem',
  };

  const faqRight = {
    flex: '1',
    display: 'flex',
    flexDirection: 'column',
    gap: '1rem',
    backgroundColor: '#fff',
    padding: '2rem',
    borderRadius: '10px',
    boxShadow: '0 2px 8px rgba(0,0,0,0.1)',
  };

  const faqHeading = {
    fontSize: '2rem',
    fontWeight: 'bold',
    color: '#2e7d32',
    marginBottom: '1rem',
  };

  const lightGreenText = {
    fontSize: '1rem',
    color: '#66bb6a',
    lineHeight: '1.6',
  };

  const faqItemBox = {
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'center',
    padding: '1rem',
    border: '1px solid #ddd',
    borderRadius: '8px',
    backgroundColor: '#fafafa',
    cursor: 'pointer',
  };

  const faqContent = {
    padding: '1rem',
    fontSize: '0.9rem',
    color: '#444',
    backgroundColor: '#f5f5f5',
    borderRadius: '8px',
    marginTop: '0.5rem',
  };

  
  

  return (
    <div>
      {/* Top Half */}
      <div style={topStyle}>
        <div>
          <h2>Welcome to AgriConnect 🌾</h2>
          <p>Your trusted guide for agricultural insights, connecting farmers to the best markets!</p>
        </div>
      </div>

      {/* Bottom Half */}
      <div style={bottomStyle}>
        <h1 style={titleStyle}>Agri Connect</h1>
      </div>

      {/* Full-width green banner */}
      <div style={fullWidthBanner}>
        Monitor all data from one place in real-time
      </div>

      {/* About Section */}
      {/* <div style={aboutSection}>
        <div style={aboutText}>
          <h2 style={{ color: '#2e7d32' }}>About Our Farming Solution</h2>
          <p style={paragraphStyle}>
            At AgriConnect, we believe that modern farming should be smart, sustainable, and data-driven.
          </p>
          <p style={paragraphStyle}>
            Our platform empowers farmers with real-time updates and predictive analytics to make better farming decisions.
          </p>
          <p style={paragraphStyle}>
            We connect farmers directly to nearby markets ensuring transparency, fair pricing, and improved profit margins.
          </p>
        </div>
        <div style={aboutImage}>
          <img src={farmingImg} alt="Farming Solution" style={{ width: '100%', height: '100%', objectFit: 'cover', borderRadius: '10px' }} />
        </div>
      </div> */}




<div style={aboutSection}>
  <div style={aboutText}>
    <h2 style={{ color: '#2e7d32', fontSize: '2rem' }}>About Our Farming Solution</h2>
    <p style={{ fontSize: '1.1rem', color: '#555', marginBottom: '0' }}>
      At AgriConnect, we believe that modern farming should be smart, sustainable, and data-driven.
    </p>
    <p style={{ fontSize: '1.1rem', color: '#555', marginBottom: '0' }}>
      Our platform empowers farmers with real-time updates and predictive analytics to make better farming decisions.
    </p>
    <p style={{ fontSize: '1.1rem', color: '#555' }}>
      We connect farmers directly to nearby markets ensuring transparency, fair pricing, and improved profit margins.
    </p>
  </div>
  <div style={aboutImage}>
    <img
      src={farmingImg}
      alt="Farming Solution"
      style={{ width: '100%', height: '100%', objectFit: 'cover', borderRadius: '10px' }}
    />
  </div>
</div>











      {/* Service Section */}

      {/* <div style={serviceSection}>
        <div style={serviceBox}>
          <img src={weatherImg} alt="Weather Forecast" style={serviceImg} />
          <h3 style={{ color: '#2e7d32' }}>Weather Forecast</h3>
          <p style={{ fontSize: '0.8rem' }}>
            Stay ahead with accurate and real-time weather predictions for your farm's location.
          </p>
          <button style={buttonStyle}>Check Forecast</button>
        </div>

        <div style={serviceBox}>
          <img src={forumImg} alt="Community Forum" style={serviceImg} />
          <h3 style={{ color: '#2e7d32' }}>Community Forum</h3>
          <p style={{ fontSize: '0.8rem' }}>
            Talk and share your experience with the world. Learn from others and collaborate.
          </p>
          <button style={buttonStyle}>Community</button>
        </div>

        <div style={serviceBox}>
          <img src={advisoryImg} alt="Farming Advisory" style={serviceImg} />
          <h3 style={{ color: '#2e7d32' }}>Farming Advisory</h3>
          <p style={{ fontSize: '0.8rem' }}>
            Connect with our AI-powered agriculture experts for guidance on your farming practices.
          </p>
          <button style={buttonStyle}>Start Chat</button>
        </div>
      </div> */}

      


{/* New Section: Farming Solution */}
<div style={{ textAlign: 'center', marginBottom: '3rem' }}>
  <h2 style={{ color: '#2e7d32' }}>Farming Solution</h2>
  <p style={{ fontSize: '1.2rem', color: '#444' }}>
    Your one-stop platform for modern agriculture
  </p>
</div>




{/* Service Section */}
<div style={serviceSection}>
  <div style={serviceBox}>
    <img src={weatherImg} alt="Weather Forecast" style={serviceImg} />
    <h3 style={{ color: '#2e7d32' }}>Weather Forecast</h3>
    <p style={{ fontSize: '0.8rem' }}>
      Stay ahead with accurate and real-time weather predictions for your farm's location.
    </p>
    <button style={buttonStyle} onClick={() => navigate('/weather')}>
      Check Forecast
    </button>
    {/* <button style={buttonStyle}>Check Forecast</button> */}
  </div>

  <div style={serviceBox}>
    <img src={forumImg} alt="Community Forum" style={serviceImg} />
    <h3 style={{ color: '#2e7d32' }}>Community Forum</h3>
    <p style={{ fontSize: '0.8rem' }}>
      Talk and share your experience with the world. Learn from others and collaborate.
    </p>
    {/* <button style={buttonStyle}>Community</button> */}
    <button style={buttonStyle} onClick={() => navigate('/community')}>Community</button>
  </div>

  <div style={serviceBox}>
    <img src={advisoryImg} alt="Farming Advisory" style={serviceImg} />
    <h3 style={{ color: '#2e7d32' }}>Farming Advisory</h3>
    <p style={{ fontSize: '0.8rem' }}>
      Connect with our AI-powered agriculture experts for guidance on your farming practices.
    </p>
    <button style={buttonStyle} onClick={() => navigate('/farming-advisory')}>Start Chat</button>
  </div>

    {/* ←—— Insert your new “Nearest Market” card right here ——→ */}
  <div style={serviceBox}>
    <img src={farm} alt="Find Nearest Market" style={serviceImg} />
    <h3 style={{ color: '#2e7d32' }}>Find Nearest Market</h3>
    <p style={{ fontSize: '0.8rem' }}>
      Enter your location to see the closest wholesale market near you.
    </p>
    <button
      style={buttonStyle}
      onClick={() => navigate('/find-market')}
    >
      Find Market
    </button>
  </div>

</div>











      {/* FAQ Section */}
      {/* <div style={faqSection}>
        <div style={faqLeft}>
          <h2 style={faqHeading}>Farming FAQs that matter</h2>
          <p style={lightGreenText}>
            Discover answers to common farming questions learn how to grow with our platform.
            We're here to support your agriculture journey.
          </p>
        </div>

        <div style={faqRight}>
          {faqItems.map((item, index) => (
            <div key={index}>
              <div style={faqItemBox} onClick={() => toggleOpen(index)}>
                <div style={{ display: 'flex', alignItems: 'center', gap: '1rem' }}>
                  {item.icon}
                  <span>{item.title}</span>
                </div>
                <div style={{ color: 'red' }}>
                  {openIndex === index ? <FaMinus size={16} /> : <FaPlus size={16} />}
                </div>
              </div>
              {openIndex === index && (
                <div style={faqContent}>
                  {item.description}
                </div>
              )}
            </div>
          ))}
        </div>
      </div> */}

{/* FAQ Section */}
<div style={faqSection}>
  <div style={faqLeft}>
    <h2 style={faqHeading}>Farming FAQs that matter</h2>
    <p style={lightGreenText}>
      Discover answers to common farming questions learn how to grow with our platform.
      We're here to support your agriculture journey.
    </p>
  </div>

  <div style={{ flex: '1', display: 'flex', flexDirection: 'column', gap: '1rem' }}>
    {faqItems.map((item, index) => (
      <div key={index}>
        <div style={faqItemBox} onClick={() => toggleOpen(index)}>
          <div style={{ display: 'flex', alignItems: 'center', gap: '1rem' }}>
            {item.icon}
            <span>{item.title}</span>
          </div>
          <div style={{ color: '#ff7f7f' }}> {/* Slightly red color */}
            {openIndex === index ? <FaMinus size={12} /> : <FaPlus size={12} />} {/* Size 12 for smaller icons */}
          </div>
        </div>
        {openIndex === index && (
          <div style={faqContent}>
            {item.description}
          </div>
        )}
      </div>
    ))}
  </div>
</div>






{/* User Feedback Section */}
<div style={{ textAlign: 'center', marginBottom: '4rem', color: 'green' }}>
  <h2>User Feedback</h2>
  <p style={{ fontSize: '1.1rem', color: '#555' }}>
    Here from our amazing users, and Agriconnect has transformed their creative journey.
  </p>
</div>

{/* Feedback Cards */}
<div style={{ display: 'flex', justifyContent: 'center', gap: '2rem', flexWrap: 'wrap' }}>
  {/* Feedback 1 */}
  <div style={{ textAlign: 'center', maxWidth: '300px', border: '1px solid #ddd', borderRadius: '8px', padding: '1rem', position: 'relative' }}>
    <h3 style={{ color: '#2e7d32' }}>John Doe</h3>
    <p style={{ fontSize: '0.9rem', color: '#555', margin: '1rem 0' }}>"AgriConnect helped me increase my crop yield by 30%! The weather forecasts and farming tips are top-notch!"</p>
    <div style={{ position: 'absolute', bottom: '10px', right: '10px' }}>
      <span style={{ color: '#FFD700' }}>⭐</span>
      <span style={{ color: '#FFD700' }}>⭐</span>
      <span style={{ color: '#FFD700' }}>⭐</span>
      <span style={{ color: '#FFD700' }}>⭐</span>
      <span style={{ color: '#D3D3D3' }}>⭐</span>
    </div>
  </div>

  {/* Feedback 2 */}
  <div style={{ textAlign: 'center', maxWidth: '300px', border: '1px solid #ddd', borderRadius: '8px', padding: '1rem', position: 'relative' }}>
    <h3 style={{ color: '#2e7d32' }}>Jane Smith</h3>
    <p style={{ fontSize: '0.9rem', color: '#555', margin: '1rem 0' }}>"The advisory services have been a game changer for me. I now feel more confident in my farming decisions!"</p>
    <div style={{ position: 'absolute', bottom: '10px', right: '10px' }}>
      <span style={{ color: '#FFD700' }}>⭐</span>
      <span style={{ color: '#FFD700' }}>⭐</span>
      <span style={{ color: '#FFD700' }}>⭐</span>
      <span style={{ color: '#FFD700' }}>⭐</span>
      <span style={{ color: '#FFD700' }}>⭐</span>
    </div>
  </div>

  {/* Feedback 3 */}
  <div style={{ textAlign: 'center', maxWidth: '300px', border: '1px solid #ddd', borderRadius: '8px', padding: '1rem', position: 'relative' }}>
    <h3 style={{ color: '#2e7d32' }}>Robert Brown</h3>
    <p style={{ fontSize: '0.9rem', color: '#555', margin: '1rem 0' }}>"The community forum is fantastic! I've learned so much from other farmers around the world."</p>
    <div style={{ position: 'absolute', bottom: '10px', right: '10px' }}>
      <span style={{ color: '#FFD700' }}>⭐</span>
      <span style={{ color: '#FFD700' }}>⭐</span>
      <span style={{ color: '#FFD700' }}>⭐</span>
      <span style={{ color: '#FFD700' }}>⭐</span>
      <span style={{ color: '#FFD700' }}>⭐</span>
    </div>
  </div>
</div>

{/* Bottom Space (Padding for additional space below feedback cards) */}
<div style={{ paddingBottom: '4rem' }}></div>






    </div>
  );
}

export default Home;








// import { useState } from 'react';
// import { FaLeaf, FaTractor, FaHandsHelping, FaPhone } from 'react-icons/fa'; // icons
// import { FaPlus, FaMinus } from 'react-icons/fa'; // plus and minus icons
// import backgroundImg from '../assets/backgroundImg.jpg';
// import farmingImg from '../assets/tractor_img.webp';
// import weatherImg from '../assets/weather_img.jpg';
// import forumImg from '../assets/Community_img.jpeg';
// import advisoryImg from '../assets/Farming Advisory2_img.jpeg';

// function Home() {
//   const [openIndex, setOpenIndex] = useState(null);

//   const toggleOpen = (index) => {
//     setOpenIndex(openIndex === index ? null : index);
//   };

//   const faqItems = [
//     {
//       icon: <FaLeaf size={24} color="green" />,
//       title: 'Crop Solution',
//       description: 'We offer modern solutions to maximize your crop yield with AI-driven insights.',
//     },
//     {
//       icon: <FaTractor size={24} color="green" />,
//       title: 'Farm Service',
//       description: 'Access reliable farm services including machinery rentals and expert consultations.',
//     },
//     {
//       icon: <FaHandsHelping size={24} color="green" />,
//       title: 'Farmer Support',
//       description: 'Our support team is available 24/7 to assist you with any farming-related queries.',
//     },
//     {
//       icon: <FaPhone size={24} color="green" />,
//       title: 'Contact Us',
//       description: 'Reach out to us through our helpline or email for any assistance you need.',
//     },
//   ];

//   const topStyle = {
//     backgroundImage: url(${backgroundImg}),
//     backgroundPosition: 'center',
//     height: '50vh',
//     color: 'white',
//     textShadow: '1px 1px 4px rgba(0,0,0,0.6)',
//     display: 'flex',
//     justifyContent: 'center',
//     alignItems: 'center',
//     textAlign: 'center',
//     padding: '2rem',
//   };

//   const bottomStyle = {
//     display: 'flex',
//     flexDirection: 'column',
//     alignItems: 'center',
//     textAlign: 'center',
//     padding: '3rem 1rem',
//     backgroundColor: '#f9f9f9',
//   };

//   const titleStyle = {
//     fontSize: '3rem',
//     fontWeight: 'bold',
//     marginBottom: '1.5rem',
//     color: '#333',
//   };

//   const fullWidthBanner = {
//     width: '100%',
//     backgroundColor: 'green',
//     color: 'white',
//     padding: '1rem',
//     fontSize: '1.2rem',
//     fontWeight: '500',
//     textAlign: 'center',
//   };

//   const aboutSection = {
//     display: 'flex',
//     alignItems: 'stretch',
//     justifyContent: 'space-between',
//     padding: '4rem 2rem',
//     gap: '2rem',
//   };

//   const aboutText = {
//     flex: '1 1 50%',
//     minWidth: '300px',
//     display: 'flex',
//     flexDirection: 'column',
//     justifyContent: 'center',
//     height: '100%',
//   };

//   const aboutImage = {
//     flex: '1 1 40%',
//     maxWidth: '500px',
//     display: 'flex',
//     alignItems: 'center',
//     height: '94%',
//     justifyContent: 'center',
//   };

//   const paragraphStyle = {
//     fontSize: '0.8rem',
//     lineHeight: '1.7',
//     color: '#444',
//     marginBottom: '1rem',
//   };

//   const serviceSection = {
//     display: 'flex',
//     justifyContent: 'space-between',
//     gap: '2rem',
//     padding: '3rem 2rem',
//     backgroundColor: '#fafafa',
//   };

//   const serviceBox = {
//     flex: '1 1 30%',
//     backgroundColor: '#fff',
//     borderRadius: '8px',
//     boxShadow: '0 2px 5px rgba(0, 0, 0, 0.1)',
//     padding: '1rem',
//     textAlign: 'center',
//   };

//   const serviceImg = {
//     width: '100%',
//     height: '200px',
//     objectFit: 'cover',
//     borderRadius: '8px',
//   };

//   const buttonStyle = {
//     padding: '0.5rem 1.5rem',
//     marginTop: '1rem',
//     backgroundColor: '#2e7d32',
//     color: 'white',
//     border: 'none',
//     borderRadius: '4px',
//     fontSize: '1rem',
//     cursor: 'pointer',
//     transition: 'background-color 0.3s ease',
//   };

//   const faqSection = {
//     display: 'flex',
//     justifyContent: 'space-between',
//     alignItems: 'stretch',
//     padding: '4rem 2rem',
//     backgroundColor: '#f0f8f5',
//     gap: '2rem',
//     marginTop: '2rem',
//   };

//   const faqLeft = {
//     flex: '1',
//     display: 'flex',
//     flexDirection: 'column',
//     justifyContent: 'center',
//     paddingRight: '2rem',
//   };

//   const faqRight = {
//     flex: '1',
//     display: 'flex',
//     flexDirection: 'column',
//     gap: '1rem',
//     backgroundColor: '#fff',
//     padding: '2rem',
//     borderRadius: '10px',
//     boxShadow: '0 2px 8px rgba(0,0,0,0.1)',
//   };

//   const faqHeading = {
//     fontSize: '2rem',
//     fontWeight: 'bold',
//     color: '#2e7d32',
//     marginBottom: '1rem',
//   };

//   const lightGreenText = {
//     fontSize: '1rem',
//     color: '#66bb6a',
//     lineHeight: '1.6',
//   };

//   const faqItemBox = {
//     display: 'flex',
//     justifyContent: 'space-between',
//     alignItems: 'center',
//     padding: '1rem',
//     border: '1px solid #ddd',
//     borderRadius: '8px',
//     backgroundColor: '#fafafa',
//     cursor: 'pointer',
//   };

//   const faqContent = {
//     padding: '1rem',
//     fontSize: '0.9rem',
//     color: '#444',
//     backgroundColor: '#f5f5f5',
//     borderRadius: '8px',
//     marginTop: '0.5rem',
//   };

//   return (
//     <div>
//       {/* Top Half */}
//       <div style={topStyle}>
//         <div>
//           <h2>Welcome to AgriConnect 🌾</h2>
//           <p>Your trusted guide for agricultural insights, connecting farmers to the best markets!</p>
//         </div>
//       </div>

//       {/* Bottom Half */}
//       <div style={bottomStyle}>
//         <h1 style={titleStyle}>Agri Connect</h1>
//       </div>

//       {/* Full-width green banner */}
//       <div style={fullWidthBanner}>
//         Monitor all data from one place in real-time
//       </div>

//       {/* About Section */}
//       <div style={aboutSection}>
//         <div style={aboutText}>
//           <h2 style={{ color: '#2e7d32' }}>About Our Farming Solution</h2>
//           <p style={paragraphStyle}>
//             At AgriConnect, we believe that modern farming should be smart, sustainable, and data-driven.
//           </p>
//           <p style={paragraphStyle}>
//             Our platform empowers farmers with real-time updates and predictive analytics to make better farming decisions.
//           </p>
//           <p style={paragraphStyle}>
//             We connect farmers directly to nearby markets ensuring transparency, fair pricing, and improved profit margins.
//           </p>
//         </div>
//         <div style={aboutImage}>
//           <img src={farmingImg} alt="Farming Solution" style={{ width: '100%', height: '100%', objectFit: 'cover', borderRadius: '10px' }} />
//         </div>
//       </div>

//       {/* Service Section */}
//       <div style={serviceSection}>
//         <div style={serviceBox}>
//           <img src={weatherImg} alt="Weather Forecast" style={serviceImg} />
//           <h3 style={{ color: '#2e7d32' }}>Weather Forecast</h3>
//           <p style={{ fontSize: '0.8rem' }}>
//             Stay ahead with accurate and real-time weather predictions for your farm's location.
//           </p>
//           <button style={buttonStyle}>Check Forecast</button>
//         </div>

//         <div style={serviceBox}>
//           <img src={forumImg} alt="Community Forum" style={serviceImg} />
//           <h3 style={{ color: '#2e7d32' }}>Community Forum</h3>
//           <p style={{ fontSize: '0.8rem' }}>
//             Talk and share your experience with the world. Learn from others and collaborate.
//           </p>
//           <button style={buttonStyle}>Community</button>
//         </div>

//         <div style={serviceBox}>
//           <img src={advisoryImg} alt="Farming Advisory" style={serviceImg} />
//           <h3 style={{ color: '#2e7d32' }}>Farming Advisory</h3>
//           <p style={{ fontSize: '0.8rem' }}>
//             Connect with our AI-powered agriculture experts for guidance on your farming practices.
//           </p>
//           <button style={buttonStyle}>Start Chat</button>
//         </div>
//       </div>

      

//       {/* FAQ Section */}
//       {/* <div style={faqSection}>
//         <div style={faqLeft}>
//           <h2 style={faqHeading}>Farming FAQs that matter</h2>
//           <p style={lightGreenText}>
//             Discover answers to common farming questions learn how to grow with our platform.
//             We're here to support your agriculture journey.
//           </p>
//         </div>

//         <div style={faqRight}>
//           {faqItems.map((item, index) => (
//             <div key={index}>
//               <div style={faqItemBox} onClick={() => toggleOpen(index)}>
//                 <div style={{ display: 'flex', alignItems: 'center', gap: '1rem' }}>
//                   {item.icon}
//                   <span>{item.title}</span>
//                 </div>
//                 <div style={{ color: 'red' }}>
//                   {openIndex === index ? <FaMinus size={16} /> : <FaPlus size={16} />}
//                 </div>
//               </div>
//               {openIndex === index && (
//                 <div style={faqContent}>
//                   {item.description}
//                 </div>
//               )}
//             </div>
//           ))}
//         </div>
//       </div> */}

// {/* FAQ Section */}
// <div style={faqSection}>
//   <div style={faqLeft}>
//     <h2 style={faqHeading}>Farming FAQs that matter</h2>
//     <p style={lightGreenText}>
//       Discover answers to common farming questions learn how to grow with our platform.
//       We're here to support your agriculture journey.
//     </p>
//   </div>

//   <div style={{ flex: '1', display: 'flex', flexDirection: 'column', gap: '1rem' }}>
//     {faqItems.map((item, index) => (
//       <div key={index}>
//         <div style={faqItemBox} onClick={() => toggleOpen(index)}>
//           <div style={{ display: 'flex', alignItems: 'center', gap: '1rem' }}>
//             {item.icon}
//             <span>{item.title}</span>
//           </div>
//           <div style={{ color: '#ff7f7f' }}> {/* Slightly red color */}
//             {openIndex === index ? <FaMinus size={12} /> : <FaPlus size={12} />} {/* Size 12 for smaller icons */}
//           </div>
//         </div>
//         {openIndex === index && (
//           <div style={faqContent}>
//             {item.description}
//           </div>
//         )}
//       </div>
//     ))}
//   </div>
// </div>





//     </div>
//   );
// }

// export default Home;











