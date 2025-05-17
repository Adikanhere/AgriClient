// import React, { useState } from 'react';
// import './Orders.css';

// function Orders() {
//   const [orders, setOrders] = useState([
//     { id: 1, crop: 'Wheat', quantity: 5, price: '₹125', status: 'Pending' },
//     { id: 2, crop: 'Rice', quantity: 3, price: '₹120', status: 'Shipped' },
//     { id: 3, crop: 'Tomato', quantity: 10, price: '₹150', status: 'Pending' },
//     { id: 4, crop: 'Onion', quantity: 7, price: '₹154', status: 'Completed' },
//     { id: 5, crop: 'Cotton', quantity: 2, price: '₹120', status: 'Shipped' },
//   ]);

//   const handleCompleteOrder = (id) => {
//     const updatedOrders = orders.map((order) =>
//       order.id === id ? { ...order, status: 'Completed' } : order
//     );
//     setOrders(updatedOrders);
//   };

//   return (
//     <div className="orders-container">
//       <h2>Your Orders</h2>
//       <table className="orders-table">
//         <thead>
//           <tr>
//             <th>Order ID</th>
//             <th>Crop</th>
//             <th>Quantity</th>
//             <th>Price</th>
//             <th>Status</th>
//             <th>Action</th>
//           </tr>
//         </thead>
//         <tbody>
//           {orders.map((order) => (
//             <tr key={order.id}>
//               <td>{order.id}</td>
//               <td>{order.crop}</td>
//               <td>{order.quantity}</td>
//               <td>{order.price}</td>
//               <td>{order.status}</td>
//               <td>
//                 {order.status === 'Pending' && (
//                   <button
//                     className="complete-btn"
//                     onClick={() => handleCompleteOrder(order.id)}
//                   >
//                     Mark as Completed
//                   </button>
//                 )}
//                 {order.status === 'Completed' && <span>Completed</span>}
//               </td>
//             </tr>
//           ))}
//         </tbody>
//       </table>
//     </div>
//   );
// }

// export default Orders;






// great code


// import React, { useState, useEffect } from 'react';
// import './Orders.css';

// function Orders() {
//   const [orders, setOrders] = useState([]);

//   // Fetch orders from the backend on component mount
//   useEffect(() => {
//     fetchOrders();
//   }, []);

//   // Fetch orders from the backend
//   const fetchOrders = async () => {
//     try {
//       const response = await fetch('http://localhost:8080/api/orders', {
//         method: 'GET',
//         headers: {
//           'Content-Type': 'application/json',
//           'Authorization': 'Bearer ' + localStorage.getItem('token') // assuming JWT token is stored in localStorage
//         },
//       });

//       if (!response.ok) {
//         throw new Error('Failed to fetch orders');
//       }

//       const ordersData = await response.json();
//       setOrders(ordersData);
//     } catch (error) {
//       console.error('Error fetching orders:', error);
//     }
//   };

//   // Handle marking order as completed
//   const handleCompleteOrder = async (id) => {
//     try {
//       const response = await fetch(`http://localhost:8080/api/orders/${id}/complete`, {
//         method: 'PUT',
//         headers: {
//           'Content-Type': 'application/json',
//           'Authorization': 'Bearer ' + localStorage.getItem('token'), // assuming JWT token is stored in localStorage
//         },
//       });

//       if (!response.ok) {
//         throw new Error('Failed to update order');
//       }

//       const updatedOrder = await response.json();

//       // Update orders state with the updated order
//       const updatedOrders = orders.map((order) =>
//         order.id === id ? { ...order, status: updatedOrder.status } : order
//       );
//       setOrders(updatedOrders);
//     } catch (error) {
//       console.error('Error updating order:', error);
//     }
//   };

//   return (
//     <div className="orders-container">
//       <h2>Your Orders</h2>
//       <table className="orders-table">
//         <thead>
//           <tr>
//             <th>Order ID</th>
//             <th>Crop</th>
//             <th>Quantity</th>
//             <th>Price</th>
//             <th>Status</th>
//             <th>Action</th>
//           </tr>
//         </thead>
//         <tbody>
//           {orders.map((order) => (
//             <tr key={order.id}>
//               <td>{order.id}</td>
//               <td>{order.crop}</td>
//               <td>{order.quantity}</td>
//               <td>{order.price}</td>
//               <td>{order.status}</td>
//               <td>
//                 {order.status === 'Pending' && (
//                   <button
//                     className="complete-btn"
//                     onClick={() => handleCompleteOrder(order.id)}
//                   >
//                     Mark as Completed
//                   </button>
//                 )}
//                 {order.status === 'Completed' && <span>Completed</span>}
//               </td>
//             </tr>
//           ))}
//         </tbody>
//       </table>
//     </div>
//   );
// }

// export default Orders;




// 09/05/25
// import React, { useState, useEffect } from 'react';
// import './Orders.css';

// function Orders() {
//   const [orders, setOrders] = useState([]);

//   useEffect(() => {
//     fetchOrders();
//   }, []);

//   const fetchOrders = async () => {
//     try {
//       const response = await fetch('http://localhost:8080/api/orders', {
//         method: 'GET',
//         headers: {
//           'Content-Type': 'application/json',
//           'Authorization': 'Bearer ' + localStorage.getItem('token'),
//         },
//       });

//       if (!response.ok) {
//         throw new Error('Failed to fetch orders');
//       }

//       const ordersData = await response.json();
//       setOrders(ordersData);
//     } catch (error) {
//       console.error('Error fetching orders:', error);
//     }
//   };

//   const handleCompleteOrder = async (id) => {
//     try {
//       const response = await fetch(`http://localhost:8080/api/orders/${id}/complete`, {
//         method: 'PUT',
//         headers: {
//           'Content-Type': 'application/json',
//           'Authorization': 'Bearer ' + localStorage.getItem('token'),
//         },
//       });

//       if (!response.ok) {
//         throw new Error('Failed to update order');
//       }

//       const updatedOrder = await response.json();

//       const updatedOrders = orders.map((order) =>
//         order.id === id ? { ...order, status: updatedOrder.status } : order
//       );
//       setOrders(updatedOrders);
//     } catch (error) {
//       console.error('Error updating order:', error);
//     }
//   };

//   return (
//     <div className="orders-container">
//       <h2>Your Orders</h2>
//       <table className="orders-table">
//         <thead>
//           <tr>
//             <th>Order ID</th>
//             <th>Crop</th>
//             <th>Quantity</th>
//             <th>Price</th>
//             <th>Status</th>
//             <th>Action</th>
//           </tr>
//         </thead>
//         <tbody>
//           {orders.length > 0 ? (
//             orders.map((order) => (
//               <tr key={order.id}>
//                 <td>{order.id}</td>
//                 <td>{order.crop?.name || 'Unknown Crop'}</td>
//                 <td>{order.quantity}</td>
//                 <td>{order.price}</td>
//                 <td>{order.status}</td>
//                 <td>
//                   {order.status === 'Pending' ? (
//                     <button
//                       className="complete-btn"
//                       onClick={() => handleCompleteOrder(order.id)}
//                     >
//                       Mark as Completed
//                     </button>
//                   ) : (
//                     <span>Completed</span>
//                   )}
//                 </td>
//               </tr>
//             ))
//           ) : (
//             <tr>
//               <td colSpan="6">No orders found</td>
//             </tr>
//           )}
//         </tbody>
//       </table>
//     </div>
//   );
// }

// export default Orders;




import React, { useState, useEffect } from 'react';
import './Orders.css';

function Orders() {
  const [orders, setOrders] = useState([]);

  useEffect(() => {
    fetchOrders();
  }, []);

  const fetchOrders = async () => {
    const token = localStorage.getItem('token');
    console.log('Token:', token);  // Log token for debugging
    if (!token) {
      console.error('No token found in localStorage');
      return; // Exit if no token
    }

    try {
      const response = await fetch('http://localhost:8080/api/orders', {
        method: 'GET',
        headers: {
          'Content-Type': 'application/json',
          'Authorization': 'Bearer ' + token,
        },
      });

      if (!response.ok) {
        throw new Error('Failed to fetch orders');
      }

      const ordersData = await response.json();
      setOrders(ordersData);
    } catch (error) {
      console.error('Error fetching orders:', error);
    }
  };

  const handleCompleteOrder = async (id) => {
    const token = localStorage.getItem('token');
    if (!token) {
      console.error('No token found in localStorage');
      return; // Exit if no token
    }

    try {
      const response = await fetch(`http://localhost:8080/api/orders/${id}/complete`, {
        method: 'PUT',
        headers: {
          'Content-Type': 'application/json',
          'Authorization': 'Bearer ' + token,
        },
      });

      if (!response.ok) {
        throw new Error('Failed to update order');
      }

      const updatedOrder = await response.json();

      const updatedOrders = orders.map((order) =>
        order.id === id ? { ...order, status: updatedOrder.status } : order
      );
      setOrders(updatedOrders);
    } catch (error) {
      console.error('Error updating order:', error);
    }
  };

  return (
    <div className="orders-container">
      <h2>Your Orders</h2>
      <table className="orders-table">
        <thead>
          <tr>
            <th>Order ID</th>
            <th>Crop</th>
            <th>Quantity</th>
            <th>Price</th>
            <th>Status</th>
            <th>Action</th>
          </tr>
        </thead>
        <tbody>
          {orders.length > 0 ? (
            orders.map((order) => (
              <tr key={order.id}>
                <td>{order.id}</td>
                <td>{order.crop?.name || 'Unknown Crop'}</td>
                <td>{order.quantity}</td>
                <td>{order.price}</td>
                <td>{order.status}</td>
                <td>
                  {order.status === 'Pending' ? (
                    <button
                      className="complete-btn"
                      onClick={() => handleCompleteOrder(order.id)}
                    >
                      Mark as Completed
                    </button>
                  ) : (
                    <span>Completed</span>
                  )}
                </td>
              </tr>
            ))
          ) : (
            <tr>
              <td colSpan="6">No orders found</td>
            </tr>
          )}
        </tbody>
      </table>
    </div>
  );
}

export default Orders;
