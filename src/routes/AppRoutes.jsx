// import { Routes, Route } from 'react-router-dom';
// import Home from '../pages/Home';
// import Login from '../pages/Login';
// import Register from '../pages/Register';
// import Crops from '../pages/Crops';
// import Market from '../pages/Market';
// import Orders from '../pages/Orders';
// import Profile from '../pages/Profile';

// function AppRoutes() {
//   return (
//     <Routes>
//       <Route path="/" element={<Home />} />
//       <Route path="/login" element={<Login />} />
//       <Route path="/register" element={<Register />} />
//       <Route path="/crops" element={<Crops />} />
//       <Route path="/market" element={<Market />} />
//       <Route path="/orders" element={<Orders />} />
//       <Route path="/profile" element={<Profile />} />
//     </Routes>
//   );
// }

// export default AppRoutes;







// import { Routes, Route } from 'react-router-dom';
// import Home from '../pages/Home';
// import Login from '../pages/Login';
// import Register from '../pages/Register';
// import Crops from '../pages/Crops';
// import Market from '../pages/Market';
// import Orders from '../pages/Orders';
// import Profile from '../pages/Profile';
// import Footer from '../components/Footer';  // Import Footer
// import AboutUs from '../pages/AboutUs';
// import ContactUs from '../pages/ContactUs';
// import ServicePage from '../pages/ServicePage'; 
// import SupportPage from '../pages/SupportPage'; 


// function AppRoutes() {
  
//   return (
//     <div style={{ display: 'flex', flexDirection: 'column', minHeight: '100vh' }}>
//       <div style={{ flex: 1 }}>
//         <Routes>
//           <Route path="/" element={<Home />} />
//           <Route path="/login" element={<Login />} />
//           <Route path="/register" element={<Register />} />
//           <Route path="/crops" element={<Crops />} />
//           <Route path="/market" element={<Market />} />
//           <Route path="/orders" element={<Orders />} />
//           <Route path="/profile" element={<Profile />} />
//           <Route path="/about" element={<AboutUs />} />
//           <Route path="/contactus" element={<ContactUs />} />
//           <Route path="/service" element={<ServicePage />} />
//           <Route path="/support" element={<SupportPage />} />
//         </Routes>
//       </div>
//       <Footer /> {/* Footer will always be at the bottom */}
//     </div>
//   );
// }

// export default AppRoutes;




import { Routes, Route } from 'react-router-dom';
import Home from '../pages/Home';
import Login from '../pages/Login';
import Register from '../pages/Register';
import Crops from '../pages/Crops';
import Market from '../pages/Market';
import Orders from '../pages/Orders';
import Profile from '../pages/Profile';
import Footer from '../components/Footer';
import AboutUs from '../pages/AboutUs';
import ContactUs from '../pages/ContactUs';
import ServicePage from '../pages/ServicePage';
import SupportPage from '../pages/SupportPage';
import WeatherCard from '../components/WeatherCard';
import CommunityForum from '../pages/CommunityForum'; // Add this import
import FarmingAdvisoryPage from '../pages/FarmingAdvisoryPage'; // Import the new page
import MarketFinder from '../pages/MarketFinder'

function AppRoutes() {
  return (
    <div style={{ display: 'flex', flexDirection: 'column', minHeight: '100vh' }}>
      <div style={{ flex: 1 }}>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/login" element={<Login />} />
          <Route path="/register" element={<Register />} />
          <Route path="/crops" element={<Crops />} />
          <Route path="/market" element={<Market />} />
          <Route path="/orders" element={<Orders />} />
          <Route path="/profile" element={<Profile />} />
          <Route path="/about" element={<AboutUs />} />
          <Route path="/contactus" element={<ContactUs />} />
          <Route path="/service" element={<ServicePage />} />
          <Route path="/support" element={<SupportPage />} />
          <Route path="/weather" element={<WeatherCard />} />
          <Route path="/community" element={<CommunityForum />} />
          <Route path="/farming-advisory" element={<FarmingAdvisoryPage />} />
          <Route path="/find-market" element={<MarketFinder />} />
        </Routes>
      </div>
      <Footer />
    </div>
  );
}

export default AppRoutes;
