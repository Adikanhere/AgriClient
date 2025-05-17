// import React from 'react';
// import './Crops.css';

// import CornImg from '../assets/Corn_img.webp';
// import RiceImg from '../assets/Rice_img.webp';
// import TomatoImg from '../assets/tomato_img.webp';
// import WheatImg from '../assets/wheat_Img.webp';
// import PotatoImg from '../assets/potato_img.webp';
// import OnionImg from '../assets/onion_img.webp';
// import SoybeanImg from '../assets/soybean_img.webp';
// import CottonImg from '../assets/cotton_img.webp';
// import SugarcaneImg from '../assets/sugarcane_img.webp';

// function Crops() {
//   const cropData = [
//     {
//       name: 'Wheat',
//       description: 'A major cereal grain, widely cultivated for its seed.',
//       image: WheatImg,
//     },
//     {
//       name: 'Rice',
//       description: 'A staple food for more than half the world’s population.',
//       image: RiceImg,
//     },
//     {
//       name: 'Corn',
//       description: 'Used for food, fodder, and industrial products.',
//       image: CornImg,
//     },
//     {
//       name: 'Tomato',
//       description: 'Popular in salads, sauces, and cooking worldwide.',
//       image: TomatoImg,
//     },
//     {
//       name: 'Potato',
//       description: 'Rich in carbohydrates and essential for many diets.',
//       image: PotatoImg,
//     },
//     {
//       name: 'Onion',
//       description: 'A kitchen essential known for its strong flavor.',
//       image: OnionImg,
//     },
//     {
//       name: 'Soybean',
//       description: 'High in protein, used in oil, animal feed, and tofu.',
//       image: SoybeanImg,
//     },
//     {
//       name: 'Cotton',
//       description: 'Valuable crop used for textile and clothing industries.',
//       image: CottonImg,
//     },
//     {
//       name: 'Sugarcane',
//       description: 'Grown for producing sugar and ethanol fuel.',
//       image: SugarcaneImg,
//     },
//   ];

//   return (
//     <div className="crops-container">
//       <h2>Explore Crops</h2>
//       <div className="crop-grid">
//         {cropData.map((crop, index) => (
//           <div key={index} className="crop-card">
//             <img src={crop.image} alt={crop.name} />
//             <h3>{crop.name}</h3>
//             <p>{crop.description}</p>
//           </div>
//         ))}
//       </div>
//     </div>
//   );
// }

// export default Crops;


// 08/05/24

// import React from 'react';
// import './Crops.css';

// import CornImg from '../assets/Corn_img.webp';
// import RiceImg from '../assets/Rice_img.webp';
// import TomatoImg from '../assets/tomato_img.webp';
// import WheatImg from '../assets/wheat_Img.webp';
// import PotatoImg from '../assets/potato_img.webp';
// import OnionImg from '../assets/onion_img.webp';
// import SoybeanImg from '../assets/soybean_img.webp';
// import CottonImg from '../assets/cotton_img.webp';
// import SugarcaneImg from '../assets/sugarcane_img.webp';

// function Crops() {
//   const cropData = [
//     {
//       name: 'Wheat',
//       description: 'A major cereal grain, widely cultivated for its seed.',
//       image: WheatImg,
//     },
//     {
//       name: 'Rice',
//       description: 'A staple food for more than half the world’s population.',
//       image: RiceImg,
//     },
//     {
//       name: 'Corn',
//       description: 'Used for food, fodder, and industrial products.',
//       image: CornImg,
//     },
//     {
//       name: 'Tomato',
//       description: 'Popular in salads, sauces, and cooking worldwide.',
//       image: TomatoImg,
//     },
//     {
//       name: 'Potato',
//       description: 'Rich in carbohydrates and essential for many diets.',
//       image: PotatoImg,
//     },
//     {
//       name: 'Onion',
//       description: 'A kitchen essential known for its strong flavor.',
//       image: OnionImg,
//     },
//     {
//       name: 'Soybean',
//       description: 'High in protein, used in oil, animal feed, and tofu.',
//       image: SoybeanImg,
//     },
//     {
//       name: 'Cotton',
//       description: 'Valuable crop used for textile and clothing industries.',
//       image: CottonImg,
//     },
//     {
//       name: 'Sugarcane',
//       description: 'Grown for producing sugar and ethanol fuel.',
//       image: SugarcaneImg,
//     },
//   ];

//   const handleAddCrop = async (crop) => {
//     try {
//       const response = await fetch('http://localhost:8080/api/market/crops/add', {
//         method: 'POST',             
//         headers: {
//           'Content-Type': 'application/json',
//         },
//         body: JSON.stringify({
//           name: crop.name,
//           price: 100, // You can modify this or ask via a form
//           availability: 'Available',
//           action: 'Sell',
//         }),
//       });

//       if (response.ok) {
//         console.log(`${crop.name} added to the market.`);
//         alert(`${crop.name} added successfully!`);
//       } else {
//         console.error('Failed to add crop.');
//         alert('Failed to add crop. Try again.');
//       }
//     } catch (error) {
//       console.error('Error:', error);
//       alert('Error adding crop. Check console.');
//     }
//   };

//   return (
//     <div className="crops-container">
//       <h2>Explore Crops</h2>
//       <div className="crop-grid">
//         {cropData.map((crop, index) => (
//           <div key={index} className="crop-card">
//             <img src={crop.image} alt={crop.name} />
//             <h3>{crop.name}</h3>
//             <p>{crop.description}</p>
//             <button onClick={() => handleAddCrop(crop)}>Add to Market</button>
//           </div>
//         ))}
//       </div>
//     </div>
//   );
// }

// export default Crops;



import React, { useState } from 'react';
import './Crops.css';

import CornImg from '../assets/Corn_img.webp';
import RiceImg from '../assets/Rice_img.webp';
import TomatoImg from '../assets/tomato_img.webp';
import WheatImg from '../assets/wheat_Img.webp';
import PotatoImg from '../assets/potato_img.webp';
import OnionImg from '../assets/onion_img.webp';
import SoybeanImg from '../assets/soybean_img.webp';
import CottonImg from '../assets/cotton_img.webp';
import SugarcaneImg from '../assets/sugarcane_img.webp';

function Crops() {
  const [marketItems, setMarketItems] = useState([]);
  const [error, setError] = useState(null); // Added state for error handling

  const cropData = [
    {
      name: 'Wheat',
      description: 'A major cereal grain, widely cultivated for its seed.',
      image: WheatImg,
    },
    {
      name: 'Rice',
      description: 'A staple food for more than half the world’s population.',
      image: RiceImg,
    },
    {
      name: 'Corn',
      description: 'Used for food, fodder, and industrial products.',
      image: CornImg,
    },
    {
      name: 'Tomato',
      description: 'Popular in salads, sauces, and cooking worldwide.',
      image: TomatoImg,
    },
    {
      name: 'Potato',
      description: 'Rich in carbohydrates and essential for many diets.',
      image: PotatoImg,
    },
    {
      name: 'Onion',
      description: 'A kitchen essential known for its strong flavor.',
      image: OnionImg,
    },
    {
      name: 'Soybean',
      description: 'High in protein, used in oil, animal feed, and tofu.',
      image: SoybeanImg,
    },
    {
      name: 'Cotton',
      description: 'Valuable crop used for textile and clothing industries.',
      image: CottonImg,
    },
    {
      name: 'Sugarcane',
      description: 'Grown for producing sugar and ethanol fuel.',
      image: SugarcaneImg,
    },
  ];

  const handleAddCrop = (crop) => {
    try {
      // Add crop to the marketItems state
      setMarketItems((prevItems) => [
        ...prevItems,
        { ...crop, price: 100, availability: 'Available', action: 'Sell' },
      ]);
      alert(`${crop.name} added to the market!`);
    } catch (error) {
      // Set error if something goes wrong while adding the crop
      setError('Error adding crop. Try again.');
    }
  };

  return (
    <div className="crops-container">
      <h2>Explore Crops</h2>
      <div className="crop-grid">
        {cropData.map((crop, index) => (
          <div key={index} className="crop-card">
            <img src={crop.image} alt={crop.name} />
            <h3>{crop.name}</h3>
            <p>{crop.description}</p>
            <button onClick={() => handleAddCrop(crop)}>Add to Market</button>
          </div>
        ))}
      </div>

      {/* Market Page */}
      <div className="market-container">
        <h3>Market Items</h3>
        {error && <p style={{ color: 'red' }}>{error}</p>} {/* Display error message */}
        {marketItems.length === 0 ? (
          <p>No items in the market yet.</p>
        ) : (
          <ul>
            {marketItems.map((item, index) => (
              <li key={index}>
                {item.name} - ${item.price} - {item.availability}
              </li>
            ))}
          </ul>
        )}
      </div>
    </div>
  );
}

export default Crops;
