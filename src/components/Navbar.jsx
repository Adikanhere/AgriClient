// import { Link } from 'react-router-dom';
// import './Navbar.css'; // Import the CSS for hover underline

// function Navbar() {
//   return (
//     <nav style={{ 
//       padding: '1rem 2rem', 
//       backgroundColor: 'white', 
//       display: 'flex', 
//       justifyContent: 'space-between', 
//       alignItems: 'center',
//       boxShadow: '0 2px 4px rgba(0,0,0,0.05)'
//     }}>
      
//       {/* Left Side: Project Name */}
//       <div style={{ fontSize: '1.5rem', fontWeight: 'bold', color: 'green' }}>
//         AgriConnect
//       </div>

//       {/* Right Side: Navigation Links */}
//       <div style={{ display: 'flex', gap: '1.5rem' }}>
//         <Link to="/" className="nav-link">Home</Link>
//         <Link to="/crops" className="nav-link">Crops</Link>
//         <Link to="/market" className="nav-link">Market</Link>
//         <Link to="/orders" className="nav-link">Orders</Link>
//         <Link to="/login" className="nav-link">Login</Link>
//         <Link to="/register" className="nav-link">Register</Link>
//       </div>
      
//     </nav>
//   );
// }

// export default Navbar;








// 1-05-24

// import { Link } from 'react-router-dom';
// import './Navbar.css'; // Import the CSS for hover underline

// function Navbar() {
//   return (
//     <nav style={{ 
//       padding: '1rem 2rem', 
//       backgroundColor: 'transparent', // Transparent background
//       display: 'flex', 
//       justifyContent: 'space-between', 
//       alignItems: 'center',
//       boxShadow: '0 2px 4px rgba(0,0,0,0.05)',
//       position: 'sticky', // Stick to top of the page
//       top: 0, // Ensure it sticks at the top
//       zIndex: 1000 // Ensure it's above other elements
//     }}>
      
//       {/* Left Side: Project Name */}
//       <div style={{ fontSize: '1.5rem', fontWeight: 'bold', color: 'green' }}>
//         AgriConnect
//       </div>

//       {/* Right Side: Navigation Links */}
//       <div style={{ display: 'flex', gap: '1.5rem' }}>
//         <Link to="/" className="nav-link">Home</Link>
//         <Link to="/crops" className="nav-link">Crops</Link>
//         <Link to="/market" className="nav-link">Market</Link>
//         <Link to="/orders" className="nav-link">Orders</Link>
//         <Link to="/login" className="nav-link">Login</Link>
//         <Link to="/register" className="nav-link">Register</Link>
//       </div>
      
//     </nav>
//   );
// }

// export default Navbar;







// import { Link, useNavigate } from 'react-router-dom';
// import { useState, useEffect, useRef } from 'react';
// import './Navbar.css';

// function Navbar() {
//   const navigate = useNavigate();
//   const token = localStorage.getItem('token');
//   const [showDropdown, setShowDropdown] = useState(false);
//   const dropdownRef = useRef();

//   const handleLogout = () => {
//     localStorage.removeItem('token');
//     setShowDropdown(false);
//     navigate('/login');
//   };

//   const toggleDropdown = () => {
//     setShowDropdown(prev => !prev);
//   };

//   // Close dropdown if clicked outside
//   useEffect(() => {
//     function handleClickOutside(e) {
//       if (dropdownRef.current && !dropdownRef.current.contains(e.target)) {
//         setShowDropdown(false);
//       }
//     }
//     document.addEventListener('mousedown', handleClickOutside);
//     return () => document.removeEventListener('mousedown', handleClickOutside);
//   }, []);

//   return (
//     <nav style={{ 
//       padding: '1rem 2rem', 
//       backgroundColor: 'transparent',
//       display: 'flex', 
//       justifyContent: 'space-between', 
//       alignItems: 'center',
//       boxShadow: '0 2px 4px rgba(0,0,0,0.05)',
//       position: 'sticky',
//       top: 0,
//       zIndex: 1000 
//     }}>
      
//       <div style={{ fontSize: '1.5rem', fontWeight: 'bold', color: 'green' }}>
//         AgriConnect
//       </div>

//       <div style={{ display: 'flex', gap: '1.5rem', alignItems: 'center' }}>
//         <Link to="/" className="nav-link">Home</Link>
//         <Link to="/crops" className="nav-link">Crops</Link>
//         <Link to="/market" className="nav-link">Market</Link>
//         <Link to="/orders" className="nav-link">Orders</Link>

//         {!token ? (
//           <>
//             <Link to="/login" className="nav-link">Login</Link>
//             <Link to="/register" className="nav-link">Register</Link>
//           </>
//         ) : (
//           <div ref={dropdownRef} style={{ position: 'relative' }}>
//             <button 
//               onClick={toggleDropdown}
//               className="profile-icon-btn"
//               title="Profile"
//             >
//               👤
//             </button>
//             {showDropdown && (
//               <div className="dropdown-menu">
//                 <Link to="/profile" onClick={() => setShowDropdown(false)} className="dropdown-item">View Profile</Link>
//                 <button onClick={handleLogout} className="dropdown-item">Logout</button>
//               </div>
//             )}
//           </div>
//         )}
//       </div>
//     </nav>
//   );
// }

// export default Navbar;



// import { Link, useNavigate } from 'react-router-dom';
// import { useState, useEffect, useRef } from 'react';
// import { FaUserCircle } from 'react-icons/fa';       // <-- import profile icon
// import './Navbar.css';

// function Navbar() {
//   const navigate = useNavigate();
//   const token = localStorage.getItem('token');
//   const [showDropdown, setShowDropdown] = useState(false);
//   const dropdownRef = useRef();

//   const handleLogout = () => {
//     localStorage.removeItem('token');
//     setShowDropdown(false);
//     navigate('/login');
//   };

//   const toggleDropdown = () => {
//     setShowDropdown(prev => !prev);
//   };

//   // Close dropdown if clicked outside
//   useEffect(() => {
//     function handleClickOutside(e) {
//       if (dropdownRef.current && !dropdownRef.current.contains(e.target)) {
//         setShowDropdown(false);
//       }
//     }
//     document.addEventListener('mousedown', handleClickOutside);
//     return () => document.removeEventListener('mousedown', handleClickOutside);
//   }, []);

//   return (
//     <nav className="navbar">
//       <div className="navbar-brand">AgriConnect</div>

//       <div className="navbar-links">
//         <Link to="/" className="nav-link">Home</Link>
//         <Link to="/crops" className="nav-link">Crops</Link>
//         <Link to="/market" className="nav-link">Market</Link>
//         {/* <Link to="/orders" className="nav-link">Orders</Link> */}

//         {!token ? (
//           <>
//             <Link to="/login" className="nav-link">Login</Link>
//             <Link to="/register" className="nav-link">Register</Link>
//           </>
//         ) : (
//           <div ref={dropdownRef} className="profile-container">
//             <button 
//               onClick={toggleDropdown}
//               className="profile-icon-btn"
//               title="Profile"
//             >
//               <FaUserCircle />   {/* <-- use imported icon */}
//             </button>
//             {showDropdown && (
//               <div className="dropdown-menu">
//                 <Link to="/profile" onClick={() => setShowDropdown(false)} className="dropdown-item">
//                   View Profile
//                 </Link>
//                 <button onClick={handleLogout} className="dropdown-item">
//                   Logout
//                 </button>
//               </div>
//             )}
//           </div>
//         )}
//       </div>
//     </nav>
//   );
// }

// export default Navbar;











import { Link, useNavigate } from 'react-router-dom';
import { useState, useEffect, useRef } from 'react';
import { FaUserCircle } from 'react-icons/fa';
import './Navbar.css';

function Navbar() {
  const navigate = useNavigate();
  const token = localStorage.getItem('token');
  const [showDropdown, setShowDropdown] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);
  const dropdownRef = useRef();

  const handleLogout = () => {
    localStorage.removeItem('token');
    setShowDropdown(false);
    setMenuOpen(false);
    navigate('/login');
  };

  const toggleDropdown = () => {
    setShowDropdown(prev => !prev);
  };

  const closeMobileMenu = () => {
    setMenuOpen(false);
    setShowDropdown(false);
  };

  useEffect(() => {
    function handleClickOutside(e) {
      if (dropdownRef.current && !dropdownRef.current.contains(e.target)) {
        setShowDropdown(false);
      }
    }
    document.addEventListener('mousedown', handleClickOutside);
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, []);

  return (
    <nav className="navbar">
      <div className="navbar-brand">AgriConnect</div>

      <div className="hamburger" onClick={() => setMenuOpen(!menuOpen)}>
        {menuOpen ? <span>&times;</span> : <span>&#9776;</span>}
      </div>

      <div className={`navbar-links ${menuOpen ? 'active' : ''}`}>
        <Link to="/" className="nav-link" onClick={closeMobileMenu}>Home</Link>
        <Link to="/crops" className="nav-link" onClick={closeMobileMenu}>Crops</Link>
        <Link to="/market" className="nav-link" onClick={closeMobileMenu}>Market</Link>

        {!token ? (
          <>
            <Link to="/login" className="nav-link" onClick={closeMobileMenu}>Login</Link>
            <Link to="/register" className="nav-link" onClick={closeMobileMenu}>Register</Link>
          </>
        ) : (
          <div ref={dropdownRef} className="profile-container">
            <button
              onClick={toggleDropdown}
              className="profile-icon-btn"
              title="Profile"
            >
              <FaUserCircle />
            </button>
            {showDropdown && (
              <div className="dropdown-menu">
                <Link to="/profile" onClick={closeMobileMenu} className="dropdown-item">
                  View Profile
                </Link>
                <button onClick={handleLogout} className="dropdown-item">
                  Logout
                </button>
              </div>
            )}
          </div>
        )}
      </div>
    </nav>
  );
}

export default Navbar;
