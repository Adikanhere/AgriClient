// import React from 'react';
// import './Markets.css';

// function Market() {
//   const marketItems = [
//     { name: 'Wheat', price: '₹25/kg', availability: 'In Stock' },
//     { name: 'Rice', price: '₹40/kg', availability: 'In Stock' },
//     { name: 'Corn', price: '₹20/kg', availability: 'Limited' },
//     { name: 'Tomato', price: '₹15/kg', availability: 'Out of Stock' },
//     { name: 'Potato', price: '₹18/kg', availability: 'In Stock' },
//     { name: 'Onion', price: '₹22/kg', availability: 'In Stock' },
//     { name: 'Soybean', price: '₹45/kg', availability: 'Limited' },
//     { name: 'Cotton', price: '₹60/kg', availability: 'In Stock' },
//     { name: 'Sugarcane', price: '₹12/stick', availability: 'In Stock' },
//   ];

//   return (
//     <div className="market-container">
//       <h2>Market Listings</h2>
//       <table className="market-table">
//         <thead>
//           <tr>
//             <th>Crop</th>
//             <th>Price</th>
//             <th>Availability</th>
//             <th>Action</th>
//           </tr>
//         </thead>
//         <tbody>
//           {marketItems.map((item, index) => (
//             <tr key={index}>
//               <td>{item.name}</td>
//               <td>{item.price}</td>
//               <td>{item.availability}</td>
//               <td>
//                 <button className="buy-btn" disabled={item.availability === 'Out of Stock'}>
//                   {item.availability === 'Out of Stock' ? 'Unavailable' : 'Buy'}
//                 </button>
//               </td>
//             </tr>
//           ))}
//         </tbody>
//       </table>
//     </div>
//   );
// }

// export default Market;






// import React, { useState } from 'react';
// import './Markets.css';

// function Market() {
//   const [message, setMessage] = useState('');
  
//   const marketItems = [
//     { id: 1, name: 'Wheat', price: '₹25/kg', availability: 'In Stock' },
//     { id: 2, name: 'Rice', price: '₹40/kg', availability: 'In Stock' },
//     { id: 3, name: 'Corn', price: '₹20/kg', availability: 'Limited' },
//     { id: 4, name: 'Tomato', price: '₹15/kg', availability: 'Out of Stock' },
//     { id: 5, name: 'Potato', price: '₹18/kg', availability: 'In Stock' },
//     { id: 6, name: 'Onion', price: '₹22/kg', availability: 'In Stock' },
//     { id: 7, name: 'Soybean', price: '₹45/kg', availability: 'Limited' },
//     { id: 8, name: 'Cotton', price: '₹60/kg', availability: 'In Stock' },
//     { id: 9, name: 'Sugarcane', price: '₹12/stick', availability: 'In Stock' },
//   ];

//   const handleBuyCrop = async (cropId) => {
//     try {
//       // Send a POST request to the backend without Authorization header
//       const response = await fetch(`http://localhost:8080/api/market/crops/buy/${cropId}`, {
//         method: 'POST',
//         headers: {
//           'Content-Type': 'application/json',
//         },
//       });

//       if (response.ok) {
//         setMessage('Crop bought successfully!');
//       } else {
//         setMessage('Failed to buy crop.');
//       }
//     } catch (error) {
//       setMessage('Error occurred while buying crop.');
//     }
//   };

//   return (
//     <div className="market-container">
//       <h2>Market Listings</h2>
//       <table className="market-table">
//         <thead>
//           <tr>
//             <th>Crop</th>
//             <th>Price</th>
//             <th>Availability</th>
//             <th>Action</th>
//           </tr>
//         </thead>
//         <tbody>
//           {marketItems.map((item, index) => (
//             <tr key={index}>
//               <td>{item.name}</td>
//               <td>{item.price}</td>
//               <td>{item.availability}</td>
//               <td>
//                 <button
//                   className="buy-btn"
//                   disabled={item.availability === 'Out of Stock'}
//                   onClick={() => handleBuyCrop(item.id)}
//                 >
//                   {item.availability === 'Out of Stock' ? 'Unavailable' : 'Buy'}
//                 </button>
//               </td>
//             </tr>
//           ))}
//         </tbody>
//       </table>
//       <p>{message}</p>
//     </div>
//   );
// }

// export default Market;










// import React, { useState } from 'react';
// import './Markets.css';

// function Market() {
//   const [message, setMessage] = useState(''); // State to hold success or error message

//   // Market items list
//   const marketItems = [
//     { id: 1, name: 'Wheat', price: '₹25/kg', availability: 'In Stock' },
//     { id: 2, name: 'Rice', price: '₹40/kg', availability: 'In Stock' },
//     { id: 3, name: 'Corn', price: '₹20/kg', availability: 'Limited' },
//     { id: 4, name: 'Tomato', price: '₹15/kg', availability: 'Out of Stock' },
//     { id: 5, name: 'Potato', price: '₹18/kg', availability: 'In Stock' },
//     { id: 6, name: 'Onion', price: '₹22/kg', availability: 'In Stock' },
//     { id: 7, name: 'Soybean', price: '₹45/kg', availability: 'Limited' },
//     { id: 8, name: 'Cotton', price: '₹60/kg', availability: 'In Stock' },
//     { id: 9, name: 'Sugarcane', price: '₹12/stick', availability: 'In Stock' },
//   ];

//   // Handle buying the crop
//   const handleBuyCrop = async (cropId) => {
//     try {
//       // Retrieve token from localStorage (or another method)
//       const token = localStorage.getItem('authToken'); // Example: Replace with your method to get the token

//       // Send a POST request to the backend with the token (if authentication is needed)
//       const response = await fetch(`http://localhost:8080/api/market/crops/buy/${cropId}`, {
//         method: 'POST',
//         headers: {
//           'Content-Type': 'application/json',
//           'Authorization': `Bearer ${token}`, // Add token if authentication is needed
//         },
//       });

//       if (response.ok) {
//         setMessage('Crop bought successfully!'); // Display success message
//       } else {
//         setMessage('Failed to buy crop.'); // Display failure message
//       }
//     } catch (error) {
//       setMessage('Error occurred while buying crop.'); // Handle errors
//     }
//   };

//   return (
//     <div className="market-container">
//       <h2>Market Listings</h2>
//       <table className="market-table">
//         <thead>
//           <tr>
//             <th>Crop</th>
//             <th>Price</th>
//             <th>Availability</th>
//             <th>Action</th>
//           </tr>
//         </thead>
//         <tbody>
//           {marketItems.map((item, index) => (
//             <tr key={index}>
//               <td>{item.name}</td>
//               <td>{item.price}</td>
//               <td>{item.availability}</td>
//               <td>
//                 <button
//                   className="buy-btn"
//                   disabled={item.availability === 'Out of Stock'}
//                   onClick={() => handleBuyCrop(item.id)}
//                 >
//                   {item.availability === 'Out of Stock' ? 'Unavailable' : 'Buy'}
//                 </button>
//               </td>
//             </tr>
//           ))}
//         </tbody>
//       </table>

//       {/* Display the message below the table */}
//       <p>{message}</p>
//     </div>
//   );
// }

// export default Market;







// import React, { useState } from 'react';
// import './Markets.css';

// function Market() {
//   const [message, setMessage] = useState(''); // State to hold success or error message

//   // Market items list
//   const marketItems = [
//     { id: 1, name: 'Wheat', price: '₹25/kg', availability: 'In Stock' },
//     { id: 2, name: 'Rice', price: '₹40/kg', availability: 'In Stock' },
//     { id: 3, name: 'Corn', price: '₹20/kg', availability: 'Limited' },
//     { id: 4, name: 'Tomato', price: '₹15/kg', availability: 'Out of Stock' },
//     { id: 5, name: 'Potato', price: '₹18/kg', availability: 'In Stock' },
//     { id: 6, name: 'Onion', price: '₹22/kg', availability: 'In Stock' },
//     { id: 7, name: 'Soybean', price: '₹45/kg', availability: 'Limited' },
//     { id: 8, name: 'Cotton', price: '₹60/kg', availability: 'In Stock' },
//     { id: 9, name: 'Sugarcane', price: '₹12/stick', availability: 'In Stock' },
//   ];

//   // Handle buying the crop
//   const handleBuyCrop = async (cropId) => {
//     try {
//       // Retrieve token from localStorage (or another method)
//       const token = localStorage.getItem('authToken'); // Example: Replace with your method to get the token

//       // Send a POST request to the backend with the token (if authentication is needed)
//       const response = await fetch(`http://localhost:8080/api/market/crops/buy/${cropId}`, {
//         method: 'POST',
//         headers: {
//           'Content-Type': 'application/json',
//           'Authorization': `Bearer ${token}`, // Add token if authentication is needed
//         },
//       });

//       if (response.ok) {
//         setMessage('Crop bought successfully!'); // Display success message
//       } else {
//         setMessage('Failed to buy crop.'); // Display failure message
//       }
//     } catch (error) {
//       setMessage('Error occurred while buying crop.'); // Handle errors
//     }
//   };

//   return (
//     <div className="market-container">
//       <h2>Market Listings</h2>
      
//       {/* Show the success or error message above the table */}
//       {message && (
//         <div className={`message ${message.includes('successfully') ? 'success' : 'error'}`}>
//           {message}
//         </div>
//       )}

//       <table className="market-table">
//         <thead>
//           <tr>
//             <th>Crop</th>
//             <th>Price</th>
//             <th>Availability</th>
//             <th>Action</th>
//           </tr>
//         </thead>
//         <tbody>
//           {marketItems.map((item, index) => (
//             <tr key={index}>
//               <td>{item.name}</td>
//               <td>{item.price}</td>
//               <td>{item.availability}</td>
//               <td>
//                 <button
//                   className="buy-btn"
//                   disabled={item.availability === 'Out of Stock'}
//                   onClick={() => handleBuyCrop(item.id)}
//                 >
//                   {item.availability === 'Out of Stock' ? 'Unavailable' : 'Buy'}
//                 </button>
//               </td>
//             </tr>
//           ))}
//         </tbody>
//       </table>
//     </div>
//   );
// }

// export default Market;




// great code


// import React, { useState, useEffect } from 'react';
// import './Markets.css';

// function Market() {
//   const [marketItems, setMarketItems] = useState([]); // State for market items
//   const [message, setMessage] = useState(''); // State to hold success or error message
//   const [newCrop, setNewCrop] = useState({
//     name: '',
//     price: '',
//     availability: 'In Stock', // Default availability
//   });

//   // Function to fetch market items
//   const fetchMarketItems = async () => {
//     try {
//       const response = await fetch('http://localhost:8080/api/market/crops/all'); // Corrected URL
//       const data = await response.json();
//       setMarketItems(data); // Update market items with data fetched from backend
//     } catch (error) {
//       setMessage('Error fetching market items');
//     }
//   };

//   // Fetch the market items on component mount
//   useEffect(() => {
//     fetchMarketItems();
//   }, []);

//   // Handle buying the crop
//   const handleBuyCrop = async (cropId) => {
//     try {
//       const token = localStorage.getItem('authToken');
//       const response = await fetch(`http://localhost:8080/api/market/crops/buy/${cropId}`, {
//         method: 'POST',
//         headers: {
//           'Content-Type': 'application/json',
//           'Authorization': `Bearer ${token}`,
//         },
//       });

//       if (response.ok) {
//         setMessage('Crop bought successfully!');
//         // Re-fetch the market items to reflect the stock update
//         fetchMarketItems();
//       } else {
//         setMessage('Failed to buy crop.');
//       }
//     } catch (error) {
//       setMessage('Error occurred while buying crop.');
//     }
//   };

//   // Handle adding a new crop to the market
//   const handleAddCrop = async (e) => {
//     e.preventDefault();
//     try {
//       const response = await fetch('http://localhost:8080/api/market/crops/add', {
//         method: 'POST',
//         headers: {
//           'Content-Type': 'application/json',
//         },
//         body: JSON.stringify(newCrop),
//       });

//       if (response.ok) {
//         const addedCrop = await response.json();
//         setMarketItems([...marketItems, addedCrop]); // Add the newly added crop to the list
//         setMessage('Crop added successfully!');
//         setNewCrop({ name: '', price: '', availability: 'In Stock' }); // Reset the form
//       } else {
//         setMessage('Failed to add crop.');
//       }
//     } catch (error) {
//       setMessage('Error occurred while adding crop.');
//     }
//   };

//   return (
//     <div className="market-container">
//       <h2>Market Listings</h2>
      
//       {message && (
//         <div className={`message ${message.includes('successfully') ? 'success' : 'error'}`}>
//           {message}
//         </div>
//       )}

//       <table className="market-table">
//         <thead>
//           <tr>
//             <th>Crop</th>
//             <th>Price</th>
//             <th>Availability</th>
//             <th>Action</th>
//           </tr>
//         </thead>
//         <tbody>
//           {marketItems.length > 0 ? (
//             marketItems.map((item, index) => (
//               <tr key={index}>
//                 <td>{item.name}</td>
//                 <td>{item.price}</td>
//                 <td>{item.availability}</td>
//                 <td>
//                   <button
//                     className="buy-btn"
//                     disabled={item.availability === 'Out of Stock'}
//                     onClick={() => handleBuyCrop(item.id)}
//                   >
//                     {item.availability === 'Out of Stock' ? 'Unavailable' : 'Buy'}
//                   </button>
//                 </td>
//               </tr>
//             ))
//           ) : (
//             <tr>
//               <td colSpan="4">No items available in the market</td>
//             </tr>
//           )}
//         </tbody>
//       </table>

//       <h3>Add a New Crop</h3>
//       <form onSubmit={handleAddCrop}>
//         <label>
//           Crop Name:
//           <input
//             type="text"
//             value={newCrop.name}
//             onChange={(e) => setNewCrop({ ...newCrop, name: e.target.value })}
//             required
//           />
//         </label>
//         <label>
//           Price:
//           <input
//             type="number"
//             value={newCrop.price}
//             onChange={(e) => setNewCrop({ ...newCrop, price: e.target.value })}
//             required
//           />
//         </label>
//         <label>
//           Availability:
//           <select
//             value={newCrop.availability}
//             onChange={(e) => setNewCrop({ ...newCrop, availability: e.target.value })}
//           >
//             <option value="In Stock">In Stock</option>
//             <option value="Out of Stock">Out of Stock</option>
//           </select>
//         </label>
//         <button type="submit" className="add-btn">Add Crop</button>
//       </form>
//     </div>
//   );
// }

// export default Market;




// 13/05

// import React, { useState, useEffect } from 'react';
// import { useNavigate } from 'react-router-dom';
// import './Markets.css';

// function Market() {
//   const [marketItems, setMarketItems] = useState([]);
//   const [message, setMessage] = useState('');
//   const [newCrop, setNewCrop] = useState({
//     name: '',
//     price: '',
//     availability: 'In Stock',
//   });

//   const navigate = useNavigate();

//   const fetchMarketItems = async () => {
//     try {
//       const response = await fetch('http://localhost:8080/api/market/crops/all');
//       const data = await response.json();
//       setMarketItems(data);
//     } catch (error) {
//       setMessage('Error fetching market items');
//     }
//   };

//   useEffect(() => {
//     fetchMarketItems();
//   }, []);

//   const handleBuyCrop = async (cropId) => {
//     try {
//       const token = localStorage.getItem('token'); // unified token key
//       const response = await fetch(`http://localhost:8080/api/market/crops/buy/${cropId}`, {
//         method: 'POST',
//         headers: {
//           'Content-Type': 'application/json',
//           'Authorization': `Bearer ${token}`,
//         },
//       });

//       if (response.ok) {
//         setMessage('Crop bought successfully!');
//         fetchMarketItems();
//         setTimeout(() => navigate('/orders'), 1000); // navigate after showing success
//       } else {
//         setMessage('Failed to buy crop.');
//       }
//     } catch (error) {
//       setMessage('Error occurred while buying crop.');
//     }
//   };

//   const handleAddCrop = async (e) => {
//     e.preventDefault();
//     try {
//       const response = await fetch('http://localhost:8080/api/market/crops/add', {
//         method: 'POST',
//         headers: {
//           'Content-Type': 'application/json',
//         },
//         body: JSON.stringify(newCrop),
//       });

//       if (response.ok) {
//         const addedCrop = await response.json();
//         setMarketItems([...marketItems, addedCrop]);
//         setMessage('Crop added successfully!');
//         setNewCrop({ name: '', price: '', availability: 'In Stock' });
//       } else {
//         setMessage('Failed to add crop.');
//       }
//     } catch (error) {
//       setMessage('Error occurred while adding crop.');
//     }
//   };

//   return (
//     <div className="market-container">
//       <h2>Market Listings</h2>

//       {message && (
//         <div className={`message ${message.includes('successfully') ? 'success' : 'error'}`}>
//           {message}
//         </div>
//       )}

//       <table className="market-table">
//         <thead>
//           <tr>
//             <th>Crop</th>
//             <th>Price</th>
//             <th>Availability</th>
//             <th>Action</th>
//           </tr>
//         </thead>
//         <tbody>
//           {marketItems.length > 0 ? (
//             marketItems.map((item, index) => (
//               <tr key={index}>
//                 <td>{item.name}</td>
//                 <td>{item.price}</td>
//                 <td>{item.availability}</td>
//                 <td>
//                   <button
//                     className="buy-btn"
//                     disabled={item.availability === 'Out of Stock'}
//                     onClick={() => handleBuyCrop(item.id)}
//                   >
//                     {item.availability === 'Out of Stock' ? 'Unavailable' : 'Buy'}
//                   </button>
//                 </td>
//               </tr>
//             ))
//           ) : (
//             <tr>
//               <td colSpan="4">No items available in the market</td>
//             </tr>
//           )}
//         </tbody>
//       </table>

//       <h3>Add a New Crop</h3>
//       <form onSubmit={handleAddCrop}>
//         <label>
//           Crop Name:
//           <input
//             type="text"
//             value={newCrop.name}
//             onChange={(e) => setNewCrop({ ...newCrop, name: e.target.value })}
//             required
//           />
//         </label>
//         <label>
//           Price:
//           <input
//             type="number"
//             value={newCrop.price}
//             onChange={(e) => setNewCrop({ ...newCrop, price: e.target.value })}
//             required
//           />
//         </label>
//         <label>
//           Availability:
//           <select
//             value={newCrop.availability}
//             onChange={(e) => setNewCrop({ ...newCrop, availability: e.target.value })}
//           >
//             <option value="In Stock">In Stock</option>
//             <option value="Out of Stock">Out of Stock</option>
//           </select>
//         </label>
//         <button type="submit" className="add-btn">Add Crop</button>
//       </form>
//     </div>
//   );
// }

// export default Market;




// import React, { useState, useEffect } from 'react';
// import { useNavigate } from 'react-router-dom';
// import './Markets.css';

// function Market() {
//   const [marketItems, setMarketItems] = useState([]);
//   const [message, setMessage] = useState('');
//   const [newCrop, setNewCrop] = useState({
//     name: '',
//     price: '',
//     availability: 'In Stock',
//   });

//   const navigate = useNavigate();

//   const fetchMarketItems = async () => {
//     try {
//       const response = await fetch('http://localhost:8080/api/market/crops/all');
//       const data = await response.json();
//       setMarketItems(data);
//     } catch (error) {
//       setMessage('Error fetching market items');
//     }
//   };

//   useEffect(() => {
//     fetchMarketItems();
//   }, []);

//   const handleBuyCrop = async (cropId) => {
//     try {
//       const token = localStorage.getItem('token');
//       const response = await fetch(`http://localhost:8080/api/market/crops/buy/${cropId}`, {
//         method: 'POST',
//         headers: {
//           'Content-Type': 'application/json',
//           'Authorization': `Bearer ${token}`,
//         },
//       });

//       if (response.ok) {
//         setMessage('Crop bought successfully!');
//         fetchMarketItems();
//         setTimeout(() => navigate('/orders'), 1000);
//       } else {
//         setMessage('Failed to buy crop.');
//       }
//     } catch (error) {
//       setMessage('Error occurred while buying crop.');
//     }
//   };

//   const handleAddCrop = async (e) => {
//     e.preventDefault();
//     try {
//       const response = await fetch('http://localhost:8080/api/market/crops/add', {
//         method: 'POST',
//         headers: { 'Content-Type': 'application/json' },
//         body: JSON.stringify(newCrop),
//       });

//       if (response.ok) {
//         const addedCrop = await response.json();
//         setMarketItems([...marketItems, addedCrop]);
//         setMessage('Crop added successfully!');
//         setNewCrop({ name: '', price: '', availability: 'In Stock' });
//       } else {
//         setMessage('Failed to add crop.');
//       }
//     } catch (error) {
//       setMessage('Error occurred while adding crop.');
//     }
//   };

//   const handleRemoveCrop = async (cropId) => {
//     try {
//       const response = await fetch(`http://localhost:8080/api/market/crops/delete/${cropId}`, {
//         method: 'DELETE',
//       });

//       if (response.ok) {
//         setMarketItems(marketItems.filter(item => item.id !== cropId));
//         setMessage('Crop removed successfully!');
//       } else {
//         setMessage('Failed to remove crop.');
//       }
//     } catch (error) {
//       setMessage('Error occurred while removing crop.');
//     }
//   };

//   return (
//     <div className="market-container">
//       <h2>Market Listings</h2>

//       {message && (
//         <div className={`message ${message.includes('successfully') ? 'success' : 'error'}`}>
//           {message}
//         </div>
//       )}

//       <table className="market-table">
//         <thead>
//           <tr>
//             <th>Crop</th>
//             <th>Price</th>
//             <th>Availability</th>
//             <th>Actions</th>
//           </tr>
//         </thead>
//         <tbody>
//           {marketItems.length > 0 ? (
//             marketItems.map((item, index) => (
//               <tr key={index}>
//                 <td>{item.name}</td>
//                 <td>{item.price}</td>
//                 <td>{item.availability}</td>
//                 <td>
//                   <button
//                     className="buy-btn"
//                     disabled={item.availability === 'Out of Stock'}
//                     onClick={() => handleBuyCrop(item.id)}
//                   >
//                     {item.availability === 'Out of Stock' ? 'Unavailable' : 'Buy'}
//                   </button>
//                   <button
//                     className="remove-btn"
//                     onClick={() => handleRemoveCrop(item.id)}
//                     style={{ marginLeft: '10px', backgroundColor: '#dc3545', color: 'white' }}
//                   >
//                     Remove
//                   </button>
//                 </td>
//               </tr>
//             ))
//           ) : (
//             <tr>
//               <td colSpan="4">No items available in the market</td>
//             </tr>
//           )}
//         </tbody>
//       </table>

//       <h3>Add a New Crop</h3>
//       <form onSubmit={handleAddCrop}>
//         <label>
//           Crop Name:
//           <input
//             type="text"
//             value={newCrop.name}
//             onChange={(e) => setNewCrop({ ...newCrop, name: e.target.value })}
//             required
//           />
//         </label>
//         <label>
//           Price:
//           <input
//             type="number"
//             value={newCrop.price}
//             onChange={(e) => setNewCrop({ ...newCrop, price: e.target.value })}
//             required
//           />
//         </label>
//         <label>
//           Availability:
//           <select
//             value={newCrop.availability}
//             onChange={(e) => setNewCrop({ ...newCrop, availability: e.target.value })}
//           >
//             <option value="In Stock">In Stock</option>
//             <option value="Out of Stock">Out of Stock</option>
//           </select>
//         </label>
//         <button type="submit" className="add-btn">Add Crop</button>
//       </form>
//     </div>
//   );
// }

// export default Market;












// import React, { useState, useEffect } from 'react';
// import { useNavigate } from 'react-router-dom';
// import './Markets.css';

// function Market() {
//   const [marketItems, setMarketItems] = useState([]);
//   const [message, setMessage] = useState('');
//   const [newCrop, setNewCrop] = useState({
//     name: '',
//     price: '',
//     availability: 'In Stock',
//   });

//   const navigate = useNavigate();

//   const fetchMarketItems = async () => {
//     try {
//       const response = await fetch('http://localhost:8080/api/market/crops/all');
//       const data = await response.json();
//       setMarketItems(data);
//     } catch (error) {
//       setMessage('Error fetching market items');
//     }
//   };

//   useEffect(() => {
//     fetchMarketItems();
//   }, []);

//   const handleBuyCrop = async (cropId) => {
//     try {
//       const token = localStorage.getItem('token');
//       const response = await fetch(`http://localhost:8080/api/market/crops/buy/${cropId}`, {
//         method: 'POST',
//         headers: {
//           'Content-Type': 'application/json',
//           'Authorization': `Bearer ${token}`,
//         },
//       });

//       if (response.ok) {
//         setMessage('Crop bought successfully!');
//         fetchMarketItems();
//         setTimeout(() => navigate('/orders'), 1000);
//       } else {
//         setMessage('Failed to buy crop.');
//       }
//     } catch (error) {
//       setMessage('Error occurred while buying crop.');
//     }
//   };

//   const handleAddCrop = async (e) => {
//     e.preventDefault();
//     try {
//       const response = await fetch('http://localhost:8080/api/market/crops/add', {
//         method: 'POST',
//         headers: { 'Content-Type': 'application/json' },
//         body: JSON.stringify(newCrop),
//       });

//       if (response.ok) {
//         const addedCrop = await response.json();
//         setMarketItems([...marketItems, addedCrop]);
//         setMessage('Crop added successfully!');
//         setNewCrop({ name: '', price: '', availability: 'In Stock' });
//       } else {
//         setMessage('Failed to add crop.');
//       }
//     } catch (error) {
//       setMessage('Error occurred while adding crop.');
//     }
//   };

//   const handleRemoveCrop = async (cropId) => {
//     try {
//       const response = await fetch(`http://localhost:8080/api/market/crops/delete/${cropId}`, {
//         method: 'DELETE',
//       });

//       if (response.ok) {
//         setMarketItems(marketItems.filter(item => item.id !== cropId));
//         setMessage('Crop removed successfully!');
//       } else {
//         setMessage('Failed to remove crop.');
//       }
//     } catch (error) {
//       setMessage('Error occurred while removing crop.');
//     }
//   };

//   const handleLogout = async () => {
//     try {
//       await fetch('http://localhost:8080/api/market/crops/delete/all', {
//         method: 'DELETE',
//       });

//       localStorage.removeItem('token');
//       setMarketItems([]);
//       setMessage('Logged out and market cleared.');
//       navigate('/login');
//     } catch (error) {
//       setMessage('Error during logout and market clear.');
//     }
//   };

//   return (
//     <div className="market-container">
//       <h2>Market Listings</h2>

//       <button onClick={handleLogout} className="logout-btn">Logout</button>

//       {message && (
//         <div className={`message ${message.includes('successfully') ? 'success' : 'error'}`}>
//           {message}
//         </div>
//       )}

//       <table className="market-table">
//         <thead>
//           <tr>
//             <th>Crop</th>
//             <th>Price</th>
//             <th>Availability</th>
//             <th>Actions</th>
//           </tr>
//         </thead>
//         <tbody>
//           {marketItems.length > 0 ? (
//             marketItems.map((item, index) => (
//               <tr key={index}>
//                 <td>{item.name}</td>
//                 <td>{item.price}</td>
//                 <td>{item.availability}</td>
//                 <td>
//                   <button
//                     className="buy-btn compact-btn"
//                     disabled={item.availability === 'Out of Stock'}
//                     onClick={() => handleBuyCrop(item.id)}
//                   >
//                     {item.availability === 'Out of Stock' ? 'Unavailable' : 'Buy'}
//                   </button>
//                   <button
//                     className="remove-btn compact-btn"
//                     onClick={() => handleRemoveCrop(item.id)}
//                   >
//                     Remove
//                   </button>
//                 </td>
//               </tr>
//             ))
//           ) : (
//             <tr>
//               <td colSpan="4">No items available in the market</td>
//             </tr>
//           )}
//         </tbody>
//       </table>

//       <h3>Add a New Crop</h3>
//       <form onSubmit={handleAddCrop}>
//         <label>
//           Crop Name:
//           <input
//             type="text"
//             value={newCrop.name}
//             onChange={(e) => setNewCrop({ ...newCrop, name: e.target.value })}
//             required
//           />
//         </label>
//         <label>
//           Price:
//           <input
//             type="number"
//             value={newCrop.price}
//             onChange={(e) => setNewCrop({ ...newCrop, price: e.target.value })}
//             required
//           />
//         </label>
//         <label>
//           Availability:
//           <select
//             value={newCrop.availability}
//             onChange={(e) => setNewCrop({ ...newCrop, availability: e.target.value })}
//           >
//             <option value="In Stock">In Stock</option>
//             <option value="Out of Stock">Out of Stock</option>
//           </select>
//         </label>
//         <button type="submit" className="add-btn">Add Crop</button>
//       </form>
//     </div>
//   );
// }

// export default Market;




// import React, { useState, useEffect } from 'react';
// import { useNavigate } from 'react-router-dom';
// import './Markets.css';

// function Market() {
//   const [marketItems, setMarketItems] = useState([]);
//   const [message, setMessage] = useState('');
//   const [newCrop, setNewCrop] = useState({
//     name: '',
//     price: '',
//     availability: 'In Stock',
//   });

//   const navigate = useNavigate();

//   const fetchMarketItems = async () => {
//     try {
//       const response = await fetch('http://localhost:8080/api/market/crops/all');
//       const data = await response.json();
//       setMarketItems(data);
//     } catch (error) {
//       setMessage('Error fetching market items');
//     }
//   };

//   useEffect(() => {
//     fetchMarketItems();
//   }, []);

//   const handleBuyCrop = async (cropId) => {
//     try {
//       const token = localStorage.getItem('token');

//       // Step 1: Mark crop as bought
//       const buyResponse = await fetch(`http://localhost:8080/api/market/crops/buy/${cropId}`, {
//         method: 'POST',
//         headers: {
//           'Content-Type': 'application/json',
//         },
//       });

//       if (!buyResponse.ok) {
//         setMessage('Failed to mark crop as bought.');
//         return;
//       }

//       // Get the crop info (we already have it locally)
//       const crop = marketItems.find(item => item.id === cropId);
//       if (!crop) {
//         setMessage('Crop not found.');
//         return;
//       }

//       // Step 2: Create order
//       const orderResponse = await fetch('http://localhost:8080/api/orders', {
//         method: 'POST',
//         headers: {
//           'Content-Type': 'application/json',
//           'Authorization': `Bearer ${token}`,
//         },
//         body: JSON.stringify({
//           crop: crop.name,
//           quantity: 1,
//           price: crop.price,
//           status: 'Pending',
//         }),
//       });

//       if (orderResponse.ok) {
//         setMessage('Crop bought and order placed successfully!');
//         fetchMarketItems();
//         setTimeout(() => navigate('/orders'), 1000);
//       } else {
//         setMessage('Failed to place order.');
//       }
//     } catch (error) {
//       setMessage('Error occurred while buying crop.');
//     }
//   };

//   const handleAddCrop = async (e) => {
//     e.preventDefault();
//     try {
//       const response = await fetch('http://localhost:8080/api/market/crops/add', {
//         method: 'POST',
//         headers: { 'Content-Type': 'application/json' },
//         body: JSON.stringify(newCrop),
//       });

//       if (response.ok) {
//         const addedCrop = await response.json();
//         setMarketItems([...marketItems, addedCrop]);
//         setMessage('Crop added successfully!');
//         setNewCrop({ name: '', price: '', availability: 'In Stock' });
//       } else {
//         setMessage('Failed to add crop.');
//       }
//     } catch (error) {
//       setMessage('Error occurred while adding crop.');
//     }
//   };

//   const handleRemoveCrop = async (cropId) => {
//     try {
//       const response = await fetch(`http://localhost:8080/api/market/crops/delete/${cropId}`, {
//         method: 'DELETE',
//       });

//       if (response.ok) {
//         setMarketItems(marketItems.filter(item => item.id !== cropId));
//         setMessage('Crop removed successfully!');
//       } else {
//         setMessage('Failed to remove crop.');
//       }
//     } catch (error) {
//       setMessage('Error occurred while removing crop.');
//     }
//   };

//   const handleLogout = async () => {
//     try {
//       await fetch('http://localhost:8080/api/market/crops/delete/all', {
//         method: 'DELETE',
//       });

//       localStorage.removeItem('token');
//       setMarketItems([]);
//       setMessage('Logged out and market cleared.');
//       navigate('/login');
//     } catch (error) {
//       setMessage('Error during logout and market clear.');
//     }
//   };

//   return (
//     <div className="market-container">
//       <h2>Market Listings</h2>

//       <button onClick={handleLogout} className="logout-btn">Logout</button>

//       {message && (
//         <div className={`message ${message.includes('successfully') ? 'success' : 'error'}`}>
//           {message}
//         </div>
//       )}

//       <table className="market-table">
//         <thead>
//           <tr>
//             <th>Crop</th>
//             <th>Price</th>
//             <th>Availability</th>
//             <th>Actions</th>
//           </tr>
//         </thead>
//         <tbody>
//           {marketItems.length > 0 ? (
//             marketItems.map((item, index) => (
//               <tr key={index}>
//                 <td>{item.name}</td>
//                 <td>{item.price}</td>
//                 <td>{item.availability}</td>
//                 <td>
//                   <button
//                     className="buy-btn compact-btn"
//                     disabled={item.availability === 'Out of Stock'}
//                     onClick={() => handleBuyCrop(item.id)}
//                   >
//                     {item.availability === 'Out of Stock' ? 'Unavailable' : 'Buy'}
//                   </button>
//                   <button
//                     className="remove-btn compact-btn"
//                     onClick={() => handleRemoveCrop(item.id)}
//                   >
//                     Remove
//                   </button>
//                 </td>
//               </tr>
//             ))
//           ) : (
//             <tr>
//               <td colSpan="4">No items available in the market</td>
//             </tr>
//           )}
//         </tbody>
//       </table>

//       <h3>Add a New Crop</h3>
//       <form onSubmit={handleAddCrop}>
//         <label>
//           Crop Name:
//           <input
//             type="text"
//             value={newCrop.name}
//             onChange={(e) => setNewCrop({ ...newCrop, name: e.target.value })}
//             required
//           />
//         </label>
//         <label>
//           Price:
//           <input
//             type="number"
//             value={newCrop.price}
//             onChange={(e) => setNewCrop({ ...newCrop, price: e.target.value })}
//             required
//           />
//         </label>
//         <label>
//           Availability:
//           <select
//             value={newCrop.availability}
//             onChange={(e) => setNewCrop({ ...newCrop, availability: e.target.value })}
//           >
//             <option value="In Stock">In Stock</option>
//             <option value="Out of Stock">Out of Stock</option>
//           </select>
//         </label>
//         <button type="submit" className="add-btn">Add Crop</button>
//       </form>
//     </div>
//   );
// }

// export default Market;




import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import './Markets.css';

function Market() {
  const [marketItems, setMarketItems] = useState([]);
  const [message, setMessage] = useState('');
  const [newCrop, setNewCrop] = useState({
    name: '',
    price: '',
    availability: 'In Stock',
  });

  const navigate = useNavigate();

  const fetchMarketItems = async () => {
    try {
      const response = await fetch('http://localhost:8080/api/market/crops/all');
      const data = await response.json();
      setMarketItems(data);
    } catch (error) {
      setMessage('Error fetching market items');
    }
  };

  useEffect(() => {
    fetchMarketItems();
  }, []);

  const handleBuyCrop = async (cropId) => {
    try {
      const token = localStorage.getItem('token');

      if (!token) {
        setMessage('No token found. Please log in again.');
        navigate('/login');
        return;
      }

      // Step 1: Mark crop as bought
      const buyResponse = await fetch(`http://localhost:8080/api/market/crops/buy/${cropId}`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          'Authorization': `Bearer ${token}`,
        },
      });

      if (!buyResponse.ok) {
        setMessage('Failed to mark crop as bought.');
        return;
      }

      // Get the crop info (we already have it locally)
      const crop = marketItems.find(item => item.id === cropId);
      if (!crop) {
        setMessage('Crop not found.');
        return;
      }

      // Step 2: Create order
      const orderResponse = await fetch('http://localhost:8080/api/orders', {
        method: 'POST',   
        headers: {
          'Content-Type': 'application/json',
          'Authorization': `Bearer ${token}`,
        },
        body: JSON.stringify({
          crop: crop.name,
          quantity: 1,
          price: crop.price,
          status: 'Pending',
        }),
      });

      if (orderResponse.ok) {
        setMessage('Crop bought and order placed successfully!');
        fetchMarketItems();
        setTimeout(() => navigate('/orders'), 1000);
      } else {
        // setMessage('Failed to place order.');
      }
    } catch (error) {
      setMessage('Error occurred while buying crop.');
    }
  };

  const handleAddCrop = async (e) => {
    e.preventDefault();
    try {
      const token = localStorage.getItem('token');
      if (!token) {
        setMessage('No token found. Please log in again.');
        navigate('/login');
        return;
      }

      const response = await fetch('http://localhost:8080/api/market/crops/add', {
        method: 'POST',
        headers: { 
          'Content-Type': 'application/json',
          'Authorization': `Bearer ${token}`,
        },
        body: JSON.stringify(newCrop),
      });

      if (response.ok) {
        const addedCrop = await response.json();
        setMarketItems([...marketItems, addedCrop]);
        setMessage('Crop added successfully!');
        setNewCrop({ name: '', price: '', availability: 'In Stock' });
      } else {
        setMessage('Failed to add crop.');
      }
    } catch (error) {
      setMessage('Error occurred while adding crop.');
    }
  };

  const handleRemoveCrop = async (cropId) => {
    try {
      const token = localStorage.getItem('token');
      if (!token) {
        setMessage('No token found. Please log in again.');
        navigate('/login');
        return;
      }

      const response = await fetch(`http://localhost:8080/api/market/crops/delete/${cropId}`, {
        method: 'DELETE',
        headers: { 'Authorization': `Bearer ${token}` },
      });

      if (response.ok) {
        setMarketItems(marketItems.filter(item => item.id !== cropId));
        setMessage('Crop removed successfully!');
      } else {
        setMessage('Failed to remove crop.');
      }
    } catch (error) {
      setMessage('Error occurred while removing crop.');
    }
  };

  const handleLogout = async () => {
    try {
      const token = localStorage.getItem('token');
      if (!token) {
        setMessage('No token found. Please log in again.');
        navigate('/login');
        return;
      }

      await fetch('http://localhost:8080/api/market/crops/delete/all', {
        method: 'DELETE',
        headers: { 'Authorization': `Bearer ${token}` },
      });

      localStorage.removeItem('token');
      setMarketItems([]);
      setMessage('Logged out and market cleared.');
      navigate('/login');
    } catch (error) {
      setMessage('Error during logout and market clear.');
    }
  };

  return (
    <div className="market-container">
      <h2>Market Listings</h2>

      <button onClick={handleLogout} className="logout-btn">Logout</button>

      {message && (
        <div className={`message ${message.includes('successfully') ? 'success' : 'error'}`}>
          {message}
        </div>
      )}

      <table className="market-table">
        <thead>
          <tr>
            <th>Crop</th>
            <th>Price</th>
            <th>Availability</th>
            <th>Actions</th>
          </tr>
        </thead>
        <tbody>
          {marketItems.length > 0 ? (
            marketItems.map((item, index) => (
              <tr key={index}>
                <td>{item.name}</td>
                <td>{item.price}</td>
                <td>{item.availability}</td>
                <td>
                  <button
                    className="buy-btn compact-btn"
                    disabled={item.availability === 'Out of Stock'}
                    onClick={() => handleBuyCrop(item.id)}
                  >
                    {item.availability === 'Out of Stock' ? 'Unavailable' : 'Available'}
                  </button>
                  <button
                    className="remove-btn compact-btn"
                    onClick={() => handleRemoveCrop(item.id)}
                  >
                    Remove
                  </button>
                </td>
              </tr>
            ))
          ) : (
            <tr>
              <td colSpan="4">No items available in the market</td>
            </tr>
          )}
        </tbody>
      </table>

      <h3>Add a New Crop</h3>
      <form onSubmit={handleAddCrop}>
        <label>
          Crop Name:
          <input
            type="text"
            value={newCrop.name}
            onChange={(e) => setNewCrop({ ...newCrop, name: e.target.value })}
            required
          />
        </label>
        <label>
          Price:
          <input
            type="number"
            value={newCrop.price}
            onChange={(e) => setNewCrop({ ...newCrop, price: e.target.value })}
            required
          />
        </label>
        <label>
          Availability:
          <select
            value={newCrop.availability}
            onChange={(e) => setNewCrop({ ...newCrop, availability: e.target.value })}
          >
            <option value="In Stock">In Stock</option>
            <option value="Out of Stock">Out of Stock</option>
          </select>
        </label>
        <button type="submit" className="add-btn">Add Crop</button>
      </form>
    </div>
  );
}

export default Market;
